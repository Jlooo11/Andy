require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// Validation des données
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Le nom doit contenir au moins 2 caractères');
    }
    
    if (!data.email || !validateEmail(data.email)) {
        errors.push('Une adresse email valide est requise');
    }
    
    if (!data.subject || data.subject.trim().length === 0) {
        errors.push('Le sujet est requis');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Le message doit contenir au moins 10 caractères');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Validation
        const validation = validateContactForm({ name, email, subject, message });
        
        if (!validation.isValid) {
            return res.status(400).json({ 
                success: false, 
                errors: validation.errors 
            });
        }
        
        // Protection contre les injections (sanitization basique)
        const sanitizedData = {
            name: name.trim().substring(0, 100),
            email: email.trim().toLowerCase().substring(0, 100),
            subject: subject.trim().substring(0, 200),
            message: message.trim().substring(0, 2000)
        };
        
        // Log pour développement (à remplacer par envoi d'email en production)
        console.log('Nouveau message de contact:', {
            name: sanitizedData.name,
            email: sanitizedData.email,
            subject: sanitizedData.subject,
            message: sanitizedData.message,
            timestamp: new Date().toISOString()
        });
        
        // TODO: Ajouter l'envoi d'email ici avec nodemailer
        // Exemple:
        // const transporter = nodemailer.createTransport({...});
        // await transporter.sendMail({...});
        
        res.json({ 
            success: true,
            message: 'Votre message a été envoyé avec succès'
        });
    } catch (error) {
        console.error('Erreur lors du traitement du formulaire:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Une erreur est survenue. Veuillez réessayer plus tard.' 
        });
    }
});

// Route de santé pour vérifier que le serveur fonctionne
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString() 
    });
});

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        error: 'Route non trouvée' 
    });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
    console.error('Erreur serveur:', err);
    res.status(500).json({ 
        success: false, 
        error: 'Une erreur interne est survenue' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
    console.log(`📍 URL: http://localhost:${PORT}`);
});