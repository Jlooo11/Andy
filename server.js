require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
const SITE_URL = process.env.SITE_URL || '';
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'alaboutiqueboucherie@gmail.com';
const ROOT = __dirname;

// Hébergement cloud (Render, Railway, etc.)
if (isProduction) {
    app.set('trust proxy', 1);
}

// CORS : en production, autoriser le domaine du site
const corsOptions = isProduction && SITE_URL
    ? { origin: [SITE_URL, SITE_URL.replace(/\/$/, '')], credentials: true }
    : {};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

// Fichiers statiques (HTML, CSS, JS, images)
app.use(express.static(ROOT, {
    maxAge: isProduction ? '1d' : 0,
    etag: true
}));

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function createTransporter() {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return null;
    }
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
}

async function sendBusinessEmail({ subject, text, html, replyTo }) {
    const transporter = createTransporter();

    if (!transporter) {
        console.log('📧 Email (SMTP non configuré):', subject);
        console.log(text);
        return { sent: false, logged: true };
    }

    await transporter.sendMail({
        from: `"Andy la Boucherie" <${process.env.SMTP_USER}>`,
        to: BUSINESS_EMAIL,
        replyTo: replyTo || BUSINESS_EMAIL,
        subject,
        text,
        html: html || text.replace(/\n/g, '<br>')
    });

    return { sent: true };
}

function formatOrderItems(items) {
    if (!items || !items.length) return 'Aucun article';
    return items.map(item =>
        `• ${item.name} x${item.quantity} — ${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA`
    ).join('\n');
}

function formatRestaurantItems(items) {
    if (!items || !items.length) return 'Aucun produit';
    return items.map(item =>
        `• ${item.name} x${item.quantity} (${item.unit || 'unité'})`
    ).join('\n');
}

function validateContactForm(data) {
    const errors = [];

    if (!data.name || data.name.trim().length < 2) {
        errors.push('Le nom doit contenir au moins 2 caractères');
    }
    if (!data.email || !validateEmail(data.email)) {
        errors.push('Une adresse email valide est requise');
    }
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Le message doit contenir au moins 10 caractères');
    }

    return { isValid: errors.length === 0, errors };
}

function sendHtml(res, file) {
    res.sendFile(path.join(ROOT, file));
}

// Pages principales (URLs propres en production)
app.get('/', (req, res) => sendHtml(res, 'index.html'));
app.get('/restaurants', (req, res) => sendHtml(res, 'restaurants.html'));

// API
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, subjectText, message } = req.body;
        const validation = validateContactForm({ name, email, message });

        if (!validation.isValid) {
            return res.status(400).json({ success: false, errors: validation.errors });
        }

        const subjectLabel = subjectText || subject || 'Contact';
        const text =
            `Message de contact - Site Andy la Boucherie\n\n` +
            `Nom : ${name.trim()}\n` +
            `Email : ${email.trim()}\n` +
            `Sujet : ${subjectLabel}\n\n` +
            `Message :\n${message.trim()}`;

        await sendBusinessEmail({
            subject: `[Contact] ${subjectLabel} — ${name.trim()}`,
            text,
            replyTo: email.trim()
        });

        res.json({ success: true, message: 'Message envoyé avec succès' });
    } catch (error) {
        console.error('Erreur contact:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi du message' });
    }
});

app.post('/api/order', async (req, res) => {
    try {
        const { orderNumber, items, total, date, customerName, customerEmail, customerPhone, customerAddress, notes } = req.body;

        if (!items || !items.length) {
            return res.status(400).json({ success: false, error: 'Panier vide' });
        }

        const text =
            `Nouvelle commande client - Andy la Boucherie\n\n` +
            `N° commande : ${orderNumber || 'N/A'}\n` +
            `Date : ${date ? new Date(date).toLocaleString('fr-FR') : new Date().toLocaleString('fr-FR')}\n\n` +
            `Client : ${customerName || 'Non renseigné'}\n` +
            `Téléphone : ${customerPhone || 'Non renseigné'}\n` +
            `Email : ${customerEmail || 'Non renseigné'}\n` +
            `Adresse : ${customerAddress || 'Non renseignée'}\n\n` +
            `Articles :\n${formatOrderItems(items)}\n\n` +
            `Total : ${(total || 0).toLocaleString('fr-FR')} FCFA\n` +
            (notes ? `\nNotes : ${notes}` : '');

        await sendBusinessEmail({
            subject: `[Commande client] ${orderNumber || 'Nouvelle commande'}`,
            text,
            replyTo: customerEmail || BUSINESS_EMAIL
        });

        console.log('✅ Commande client reçue:', orderNumber);
        res.json({ success: true, message: 'Commande enregistrée' });
    } catch (error) {
        console.error('Erreur commande client:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'enregistrement de la commande' });
    }
});

app.post('/api/restaurant-order', async (req, res) => {
    try {
        const {
            orderNumber, restaurantName, contactName, email, phone, address,
            restaurantType, deliveryFrequency, specialNotes, items, orderDate
        } = req.body;

        if (!restaurantName || !contactName || !email || !phone) {
            return res.status(400).json({ success: false, error: 'Informations restaurant incomplètes' });
        }

        const text =
            `Demande de devis restaurant - Andy la Boucherie\n\n` +
            `N° demande : ${orderNumber || 'N/A'}\n` +
            `Date : ${orderDate || new Date().toLocaleString('fr-FR')}\n\n` +
            `Établissement : ${restaurantName}\n` +
            `Contact : ${contactName}\n` +
            `Téléphone : ${phone}\n` +
            `Email : ${email}\n` +
            `Adresse : ${address || 'Non renseignée'}\n` +
            `Type : ${restaurantType || 'Non spécifié'}\n` +
            `Fréquence livraison : ${deliveryFrequency || 'Non spécifiée'}\n\n` +
            `Produits demandés :\n${formatRestaurantItems(items)}\n\n` +
            (specialNotes ? `Notes : ${specialNotes}` : '');

        await sendBusinessEmail({
            subject: `[Devis restaurant] ${restaurantName} — ${orderNumber || 'Nouvelle demande'}`,
            text,
            replyTo: email
        });

        console.log('✅ Demande restaurant reçue:', orderNumber);
        res.json({ success: true, message: 'Demande de devis enregistrée' });
    } catch (error) {
        console.error('Erreur commande restaurant:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'enregistrement de la demande' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        environment: process.env.NODE_ENV || 'development',
        emailConfigured: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
        timestamp: new Date().toISOString()
    });
});

// 404
app.use((req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ success: false, error: 'Route non trouvée' });
    }
    res.status(404).sendFile(path.join(ROOT, 'index.html'));
});

app.use((err, req, res, next) => {
    console.error('Erreur serveur:', err);
    res.status(500).json({ success: false, error: 'Une erreur interne est survenue' });
});

app.listen(PORT, '0.0.0.0', () => {
    const publicUrl = SITE_URL || `http://0.0.0.0:${PORT}`;
    console.log(`✅ Andy la Boucherie — ${isProduction ? 'PRODUCTION' : 'développement'}`);
    console.log(`📍 Site : ${publicUrl}`);
    console.log(`📧 Emails : ${BUSINESS_EMAIL}`);
    console.log(`📱 WhatsApp : ${process.env.WHATSAPP_NUMBER || '2250798567514'}`);
});
