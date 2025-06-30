const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Configuration de l'email (à remplacer avec vos informations)
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou autre service
    auth: {
        user: 'sylvia.b@bloowmoney.com',
        pass: 'hEcsyv-honqa2-kankur'
    }
});

// Route pour traiter les commandes
app.post('/api/orders', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, address, comments, cart, total } = req.body;

        // Ici vous devriez enregistrer la commande dans une base de données
        console.log('Nouvelle commande reçue:', {
            client: `${firstName} ${lastName}`,
            email,
            phone,
            total,
            date: new Date()
        });
        
        // Créer le récapitulatif de la commande
        const orderSummary = cart.map(item => 
            `${item.name} (${item.quantity} ${item.unit}) - ${item.price * item.quantity} FCFA`
        ).join('\n');
        
        // Email pour le client
        const clientMailOptions = {
            from: 'jeanloickone@gmail.com',
            to: email,
            subject: 'Confirmation de votre commande - Andy la Boucherie',
            text: `Bonjour ${firstName},\n\nMerci pour votre commande !\n\nDétails :\n${orderSummary}\n\nTotal : ${total} FCFA\n\nNous vous contacterons pour la livraison.\n\nCordialement,\nAndy la Boucherie`
        };
        
        // Email pour le boucher
        const adminMailOptions = {
            from: 'jeanloickone@gmail.com',
            to: 'jloookone@gmail.com',
            subject: `Nouvelle commande de ${firstName} ${lastName}`,
            text: `Nouvelle commande !\n\nClient: ${firstName} ${lastName}\nEmail: ${email}\nTéléphone: ${phone}\nAdresse: ${address}\n\nCommande:\n${orderSummary}\n\nTotal: ${total} FCFA\n\nCommentaires: ${comments || 'Aucun'}`
        };
        
        // Envoyer les emails
        await transporter.sendMail(clientMailOptions);
        await transporter.sendMail(adminMailOptions);
        
       res.status(200).json({ 
            success: true, 
            message: 'Commande enregistrée',
            orderId: Date.now() // Générer un ID de commande simple pour l'exemple
        });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erreur lors du traitement'
        });
    }
});
