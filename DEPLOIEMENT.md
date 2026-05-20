# Mettre Andy la Boucherie en production

Le site est prêt pour un hébergement en ligne (plus besoin de `localhost`).

## Option recommandée : Render (gratuit)

1. **Créez un compte** sur [https://render.com](https://render.com)

2. **Poussez le projet sur GitHub**
   ```bash
   cd /Users/macos/Desktop/Andy-main
   git init
   git add .
   git commit -m "Site Andy la Boucherie — production"
   ```
   Créez un dépôt sur GitHub, puis :
   ```bash
   git remote add origin https://github.com/VOTRE_COMPTE/andy-la-boucherie.git
   git branch -M main
   git push -u origin main
   ```

3. **Sur Render** : *New* → *Web Service* → connectez le dépôt GitHub

4. **Paramètres**
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
   - **Plan** : Free

5. **Variables d'environnement** (onglet *Environment*)
   | Variable | Valeur |
   |----------|--------|
   | `NODE_ENV` | `production` |
   | `SITE_URL` | `https://votre-nom.onrender.com` (URL Render une fois créée) |
   | `BUSINESS_EMAIL` | `alaboutiqueboucherie@gmail.com` |
   | `WHATSAPP_NUMBER` | `2250798567514` |
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `alaboutiqueboucherie@gmail.com` |
   | `SMTP_PASS` | *mot de passe d'application Gmail* |

6. **Déployer** — Render fournit une URL du type :
   `https://andy-la-boucherie.onrender.com`

7. **Nom de domaine personnalisé** (optionnel) : dans Render → *Settings* → *Custom Domain*

---

## Emails en production

Sans `SMTP_USER` / `SMTP_PASS`, les commandes passent toujours par **WhatsApp**. Les e-mails nécessitent un [mot de passe d'application Gmail](https://myaccount.google.com/apppasswords).

---

## Tester en local comme en production

```bash
npm install
NODE_ENV=production SITE_URL=http://localhost:3000 npm start
```

Puis ouvrez `http://localhost:3000` (pour le vrai site public, utilisez l’URL Render).

---

## Autres hébergeurs

- **Railway** : importez le dépôt GitHub, commande `npm start`
- **VPS** (OVH, DigitalOcean) : `npm install && npm start` avec PM2 ou systemd

Le fichier `render.yaml` permet un déploiement automatique via *Blueprint* sur Render.
