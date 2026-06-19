// server.js
require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'alaboutiqueboucherie@gmail.com';
const ROOT = __dirname;

// CORS
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

// Fichiers statiques
app.use(express.static(ROOT));

// ===================== CONFIGURATION NODEMAILER =====================

function createTransporter() {
    // Vérifier les credentials
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('❌ SMTP_USER ou SMTP_PASS non définis dans .env');
        return null;
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: false, // true pour 465, false pour 587
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
}

// ===================== FONCTION D'ENVOI D'EMAIL =====================

async function sendBusinessEmail({ subject, text, html, replyTo }) {
    const transporter = createTransporter();

    if (!transporter) {
        console.log('📧 Email (SMTP non configuré):', subject);
        console.log(text);
        return { sent: false, error: 'SMTP non configuré' };
    }

    try {
        const info = await transporter.sendMail({
            from: `"Andy la Boucherie" <${process.env.SMTP_USER}>`,
            to: BUSINESS_EMAIL,
            replyTo: replyTo || BUSINESS_EMAIL,
            subject: subject,
            text: text,
            html: html || text.replace(/\n/g, '<br>')
        });

        console.log('✅ Email envoyé avec succès:', info.messageId);
        return { sent: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Erreur envoi email:', error);
        return { sent: false, error: error.message };
    }
}

// ===================== FONCTIONS DE FORMATAGE =====================

function formatOrderItems(items) {
    if (!items || !items.length) return 'Aucun article';
    return items.map(item => 
        `• ${item.name} x${item.quantity} — ${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA`
    ).join('\n');
}

function formatOrderHTML(items) {
    if (!items || !items.length) return '<p>Aucun article</p>';
    return items.map(item => 
        `<tr>
            <td>${item.name}</td>
            <td style="text-align:center">${item.quantity}</td>
            <td style="text-align:right">${item.price.toLocaleString('fr-FR')} FCFA</td>
            <td style="text-align:right">${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</td>
        </tr>`
    ).join('');
}

// ===================== API =====================

// --- 1. API pour les commandes clients ---
app.post('/api/order', async (req, res) => {
    try {
        const { 
            orderNumber, 
            items, 
            total, 
            date, 
            customerName, 
            customerEmail, 
            customerPhone, 
            customerAddress, 
            notes 
        } = req.body;

        // Vérification
        if (!items || !items.length) {
            return res.status(400).json({ success: false, error: 'Panier vide' });
        }

        if (!customerName || !customerEmail || !customerPhone) {
            return res.status(400).json({ success: false, error: 'Informations client incomplètes' });
        }

        // Formatage du message
        const orderDate = date ? new Date(date).toLocaleString('fr-FR') : new Date().toLocaleString('fr-FR');
        const formattedTotal = total.toLocaleString('fr-FR');

        const textMessage = `
🛒 NOUVELLE COMMANDE - Andy la Boucherie
═══════════════════════════════════

📋 N° commande : ${orderNumber || 'N/A'}
📅 Date : ${orderDate}

👤 INFORMATIONS CLIENT
───────────────────────
Nom : ${customerName}
Téléphone : ${customerPhone}
Email : ${customerEmail}
Adresse : ${customerAddress || 'Non renseignée'}
${notes ? `\n📝 Notes : ${notes}` : ''}

📦 DÉTAILS DE LA COMMANDE
───────────────────────
${formatOrderItems(items)}

💰 TOTAL : ${formattedTotal} FCFA
═══════════════════════════════════
`;

        const htmlMessage = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1>🛒 Nouvelle Commande</h1>
        <p style="font-size: 14px;">${orderNumber || 'N/A'} | ${orderDate}</p>
    </div>
    
    <div style="padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
        <h2 style="color: #8B0000;">👤 Client</h2>
        <table style="width:100%; border-collapse: collapse;">
            <tr><td><strong>Nom :</strong></td><td>${customerName}</td></tr>
            <tr><td><strong>Téléphone :</strong></td><td>${customerPhone}</td></tr>
            <tr><td><strong>Email :</strong></td><td>${customerEmail}</td></tr>
            <tr><td><strong>Adresse :</strong></td><td>${customerAddress || 'Non renseignée'}</td></tr>
        </table>
        ${notes ? `<p><strong>📝 Notes :</strong> ${notes}</p>` : ''}
        
        <h2 style="color: #8B0000; margin-top: 20px;">📦 Détails</h2>
        <table style="width:100%; border-collapse: collapse; background: white;">
            <thead style="background: #8B0000; color: white;">
                <tr>
                    <th style="padding: 10px; text-align:left;">Produit</th>
                    <th style="padding: 10px; text-align:center;">Qté</th>
                    <th style="padding: 10px; text-align:right;">Prix unit.</th>
                    <th style="padding: 10px; text-align:right;">Total</th>
                </tr>
            </thead>
            <tbody>
                ${formatOrderHTML(items)}
            </tbody>
            <tfoot>
                <tr style="background: #8B0000; color: white; font-weight: bold;">
                    <td colspan="3" style="padding: 10px; text-align:right;">TOTAL :</td>
                    <td style="padding: 10px; text-align:right;">${formattedTotal} FCFA</td>
                </tr>
            </tfoot>
        </table>
    </div>
</body>
</html>`;

        // Envoyer l'email
        const result = await sendBusinessEmail({
            subject: `🛒 Nouvelle commande ${orderNumber || 'N/A'} - ${customerName}`,
            text: textMessage,
            html: htmlMessage,
            replyTo: customerEmail
        });

        if (!result.sent) {
            console.warn('⚠️ Email non envoyé mais commande enregistrée:', result.error);
            return res.json({ 
                success: true, 
                warning: 'Commande enregistrée mais email non envoyé',
                error: result.error 
            });
        }

        console.log('✅ Commande enregistrée et email envoyé');
        res.json({ success: true, message: 'Commande enregistrée', messageId: result.messageId });

    } catch (error) {
        console.error('❌ Erreur API order:', error);
        res.status(500).json({ success: false, error: 'Erreur lors du traitement' });
    }
});

// --- 2. API pour les demandes restaurant ---
app.post('/api/restaurant-order', async (req, res) => {
    try {
        const {
            orderNumber,
            restaurantName,
            contactName,
            email,
            phone,
            address,
            restaurantType,
            deliveryFrequency,
            specialNotes,
            items,
            orderDate
        } = req.body;

        if (!restaurantName || !contactName || !email || !phone) {
            return res.status(400).json({ success: false, error: 'Informations restaurant incomplètes' });
        }

        const formattedDate = orderDate || new Date().toLocaleString('fr-FR');

        const textMessage = `
🍽️ DEMANDE DE DEVIS - Andy la Boucherie
═══════════════════════════════════

📋 N° demande : ${orderNumber || 'N/A'}
📅 Date : ${formattedDate}

🏢 ÉTABLISSEMENT
───────────────────────
Nom : ${restaurantName}
Contact : ${contactName}
Téléphone : ${phone}
Email : ${email}
Adresse : ${address || 'Non renseignée'}
Type : ${restaurantType || 'Non spécifié'}
Fréquence livraison : ${deliveryFrequency || 'Non spécifiée'}

📦 PRODUITS DEMANDÉS
───────────────────────
${formatRestaurantItems(items)}

${specialNotes ? `\n📝 Notes : ${specialNotes}` : ''}
═══════════════════════════════════
`;

        const htmlMessage = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: #2E7D32; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1>🍽️ Demande de Devis</h1>
        <p style="font-size: 14px;">${orderNumber || 'N/A'} | ${formattedDate}</p>
    </div>
    
    <div style="padding: 20px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
        <h2 style="color: #2E7D32;">🏢 Établissement</h2>
        <table style="width:100%; border-collapse: collapse;">
            <tr><td><strong>Nom :</strong></td><td>${restaurantName}</td></tr>
            <tr><td><strong>Contact :</strong></td><td>${contactName}</td></tr>
            <tr><td><strong>Téléphone :</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Email :</strong></td><td>${email}</td></tr>
            <tr><td><strong>Adresse :</strong></td><td>${address || 'Non renseignée'}</td></tr>
            <tr><td><strong>Type :</strong></td><td>${restaurantType || 'Non spécifié'}</td></tr>
            <tr><td><strong>Fréquence :</strong></td><td>${deliveryFrequency || 'Non spécifiée'}</td></tr>
        </table>
        ${specialNotes ? `<p><strong>📝 Notes :</strong> ${specialNotes}</p>` : ''}
        
        <h2 style="color: #2E7D32; margin-top: 20px;">📦 Produits</h2>
        <ul style="background: white; padding: 15px; border-radius: 5px;">
            ${items.map(item => `<li>${item.name} x${item.quantity} (${item.unit || 'unité'})</li>`).join('')}
        </ul>
    </div>
</body>
</html>`;

        const result = await sendBusinessEmail({
            subject: `🍽️ Demande devis ${orderNumber || 'N/A'} - ${restaurantName}`,
            text: textMessage,
            html: htmlMessage,
            replyTo: email
        });

        if (!result.sent) {
            console.warn('⚠️ Email non envoyé mais demande enregistrée:', result.error);
            return res.json({ 
                success: true, 
                warning: 'Demande enregistrée mais email non envoyé' 
            });
        }

        res.json({ success: true, message: 'Demande de devis enregistrée' });

    } catch (error) {
        console.error('❌ Erreur API restaurant-order:', error);
        res.status(500).json({ success: false, error: 'Erreur lors du traitement' });
    }
});

function formatRestaurantItems(items) {
    if (!items || !items.length) return 'Aucun produit';
    return items.map(item => 
        `• ${item.name} x${item.quantity} (${item.unit || 'unité'})`
    ).join('\n');
}

// --- 3. API pour le formulaire de contact ---
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, subjectText, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Tous les champs sont requis' });
        }

        const subjectLabel = subjectText || subject || 'Contact';

        const textMessage = `
📩 MESSAGE CONTACT - Andy la Boucherie
═══════════════════════════════════

👤 De : ${name}
📧 Email : ${email}
📌 Sujet : ${subjectLabel}

💬 Message :
${message}
═══════════════════════════════════
`;

        const result = await sendBusinessEmail({
            subject: `📩 Contact - ${subjectLabel} - ${name}`,
            text: textMessage,
            replyTo: email
        });

        res.json({ success: true, message: 'Message envoyé avec succès' });

    } catch (error) {
        console.error('❌ Erreur API contact:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi' });
    }
});

// --- Santé du serveur ---
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        emailConfigured: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
        businessEmail: BUSINESS_EMAIL,
        timestamp: new Date().toISOString()
    });
});

// --- Test de l'email ---
app.get('/api/test-email', async (req, res) => {
    const result = await sendBusinessEmail({
        subject: '🧪 Test de configuration Email',
        text: 'Ceci est un test de votre configuration Nodemailer.\n\nSi vous recevez cet email, tout fonctionne parfaitement !'
    });
    res.json(result);
});

// ===================== ROUTES PAGES =====================

app.get('/', (req, res) => {
    res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('/restaurants', (req, res) => {
    res.sendFile(path.join(ROOT, 'restaurants.html'));
});

// ===================== LANCEMENT DU SERVEUR =====================

process.on('unhandledRejection', (reason) => {
    console.error('❌ Promesse rejetée non gérée:', reason);
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
    console.log(`📧 Email de réception : ${BUSINESS_EMAIL}`);
    console.log(`📧 SMTP configuré : ${!!(process.env.SMTP_USER && process.env.SMTP_PASS)}`);

    // Vérification SMTP en arrière-plan (ne bloque pas le démarrage Render)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = createTransporter();
        if (transporter) {
            transporter.verify()
                .then(() => console.log('✅ Connexion SMTP Gmail vérifiée'))
                .catch((error) => console.error('❌ Échec vérification SMTP :', error.message));
        }
    } else {
        console.warn('⚠️ SMTP_USER ou SMTP_PASS manquant — les emails ne seront pas envoyés');
    }
});

server.on('error', (error) => {
    console.error('❌ Impossible de démarrer le serveur:', error.message);
    process.exit(1);
});