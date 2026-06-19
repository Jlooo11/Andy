# Configuration EmailJS pour Andy la Boucherie

## Vue d'ensemble
Le site utilise désormais **EmailJS** pour envoyer automatiquement les emails de commandes et les formulaires de contact directement au mail de la boucherie (`alaboutiqueboucherie@gmail.com`).

## Étapes de configuration

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Cliquez sur "Sign Up" 
- Créez un compte gratuit avec votre email

### 2. Ajouter un service email (Gmail)
- Dans le tableau de bord EmailJS, allez à **"Email Services"**
- Cliquez sur **"Add Service"**
- Sélectionnez **"Gmail"** comme fournisseur
- Connectez-vous avec votre compte Gmail (alaboutiqueboucherie@gmail.com)
- Confirmez l'accès et notez le **Service ID** (ex: `service_xxxxxxxx`)

### 3. Créer les templates d'email
Vous devez créer **3 templates** dans EmailJS :

#### Template 1 : Commandes Clients
- Allez à **"Email Templates"**
- Cliquez sur **"Create New Template"**
- Configurez comme suit :

**Template Name:** `template_order`
**Subject:** `Nouvelle Commande - #{{order_number}}`
**Email content:**
```
Bonjour,

Vous avez reçu une nouvelle commande :

Numéro de commande : {{order_number}}
Date : {{order_date}}

CLIENT
Nom : {{customer_name}}
Email : {{customer_email}}
Téléphone : {{customer_phone}}

ARTICLES
{{items_list}}

TOTAL : {{total}} FCFA

Livraison prévue : {{delivery_date}}

Notes : {{notes}}

---
Cet email a été généré automatiquement depuis le site d'Andy la Boucherie.
```

#### Template 2 : Commandes Restaurants
- Cliquez sur **"Create New Template"**
- Configurez comme suit :

**Template Name:** `template_restaurant_order`
**Subject:** `Nouvelle Commande Pro - {{restaurant_name}}`
**Email content:**
```
Bonjour,

Vous avez reçu une nouvelle commande professionnelle :

RESTAURANT
Nom : {{restaurant_name}}
Type : {{restaurant_type}}

CONTACT
Nom : {{contact_name}}
Email : {{contact_email}}
Téléphone : {{contact_phone}}

ARTICLES
{{items_list}}

TOTAL : {{total}} FCFA

Fréquence de livraison : {{frequency}}

Notes : {{notes}}

---
Cet email a été généré automatiquement depuis l'espace Pro d'Andy la Boucherie.
```

#### Template 3 : Formulaire de Contact
- Cliquez sur **"Create New Template"**
- Configurez comme suit :

**Template Name:** `template_contact`
**Subject:** `Nouveau message contact - {{subject}}`
**Email content:**
```
Vous avez reçu un nouveau message :

Objet : {{subject}}

DE
Nom : {{from_name}}
Email : {{from_email}}

MESSAGE
{{message}}

---
Cet email a été généré automatiquement depuis le formulaire de contact du site.
```

### 4. Récupérer votre Public Key
- Dans le dashboard EmailJS, allez à **"Integration"** ou **"Account"**
- Trouvez votre **Public Key** (commence par `abc123...`)

### 5. Mettre à jour la configuration
Ouvrez le fichier `script.js` et mettez à jour le bloc CONFIG :

```javascript
emailjs: {
    publicKey: 'YOUR_PUBLIC_KEY',              // ← Remplacez par votre clé publique
    serviceId: 'YOUR_SERVICE_ID',              // ← Remplacez par votre Service ID Gmail
    orderTemplateId: 'template_order',          // ← Doit correspondre au nom du template
    restaurantOrderTemplateId: 'template_restaurant_order', // ← Template restaurants
    contactTemplateId: 'template_contact'       // ← Template contact
}
```

**Exemple complet :**
```javascript
emailjs: {
    publicKey: 'abc123def456ghi789jkl',
    serviceId: 'service_xyz123abc',
    orderTemplateId: 'template_order',
    restaurantOrderTemplateId: 'template_restaurant_order',
    contactTemplateId: 'template_contact'
}
```

## Vérification du fonctionnement

### Avant de configurer EmailJS
- Les emails ne sont pas envoyés (mode hors-ligne)
- Un message d'avertissement s'affiche en console

### Après la configuration
1. Ouvrez la console (F12)
2. Vous devriez voir : `✅ EmailJS initialisé`
3. Passez une commande de test
4. Vérifiez que l'email arrive dans `alaboutiqueboucherie@gmail.com`

## Flux d'envoi d'emails

```
Client/Restaurant passe commande
        ↓
Les données sont formatées
        ↓
EmailJS envoie directement à la boucherie
        ↓
Email reçu dans alaboutiqueboucherie@gmail.com
        ↓
Client est redirigé vers Wave pour paiement
```

## Important
- ⚠️ **Ne pas partager votre Public Key publiquement** (bien qu'elle soit limitée)
- ✅ Testez d'abord avec une commande fictive
- 💰 EmailJS offre 200 emails gratuits/mois avec le plan gratuit
- 📞 WhatsApp reste actif : les clients reçoivent aussi un message WhatsApp

## Dépannage

### Les emails ne sont pas reçus
1. Vérifiez que la Public Key et Service ID sont corrects
2. Vérifiez les noms des templates (sensibles à la casse)
3. Vérifiez les paramètres `to_email` dans les templates
4. Ouvrez la console (F12) pour voir les erreurs

### Les emails vont au spam
1. Vérifiez que Gmail est configuré comme service
2. Ajoutez une signature à vos emails dans le template
3. Marquez les emails comme "non spam" dans Gmail

## Support
Pour plus d'aide sur EmailJS : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
