// server.js - avec base de données SQLite
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));

// Fichiers statiques
app.use(express.static(ROOT));

// ===== BASE DE DONNÉES SQLITE =====
const DB_PATH = process.env.DB_PATH || path.join(ROOT, 'andy_data.db');
const db = new sqlite3.Database(DB_PATH);

// Initialisation des tables
db.serialize(() => {
    // Table des commandes clients
    db.run(`
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            order_number TEXT,
            customer_name TEXT,
            customer_phone TEXT,
            customer_email TEXT,
            customer_address TEXT,
            items TEXT,
            total REAL,
            status TEXT DEFAULT 'pending',
            payment_method TEXT,
            delivery_method TEXT,
            notes TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Table des demandes restaurants
    db.run(`
        CREATE TABLE IF NOT EXISTS restaurant_orders (
            id TEXT PRIMARY KEY,
            order_number TEXT,
            restaurant_name TEXT,
            contact_name TEXT,
            phone TEXT,
            email TEXT,
            address TEXT,
            restaurant_type TEXT,
            delivery_frequency TEXT,
            special_notes TEXT,
            items TEXT,
            status TEXT DEFAULT 'pending',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Table des messages de contact
    db.run(`
        CREATE TABLE IF NOT EXISTS messages (
            id TEXT PRIMARY KEY,
            name TEXT,
            email TEXT,
            subject TEXT,
            subject_text TEXT,
            message TEXT,
            read INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Table des utilisateurs admin
    db.run(`
        CREATE TABLE IF NOT EXISTS admin_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password_hash TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Insérer l'utilisateur admin par défaut si absent
    db.get('SELECT * FROM admin_users WHERE username = ?', ['admin'], (err, row) => {
        if (!row) {
            // Mot de passe: Andy2025!
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            bcrypt.hash('Andy2025!', saltRounds, (err, hash) => {
                if (!err) {
                    db.run('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)', ['admin', hash]);
                    console.log('✅ Utilisateur admin créé par défaut');
                }
            });
        }
    });
});

// ===== FONCTIONS D'ACCÈS À LA BASE =====

// Orders
function getOrders(callback) {
    db.all('SELECT * FROM orders ORDER BY created_at DESC', callback);
}

function getOrderById(id, callback) {
    db.get('SELECT * FROM orders WHERE id = ?', [id], callback);
}

function createOrder(orderData, callback) {
    const id = uuidv4();
    const { order_number, customer_name, customer_phone, customer_email, customer_address, items, total, payment_method, delivery_method, notes } = orderData;
    db.run(`
        INSERT INTO orders (id, order_number, customer_name, customer_phone, customer_email, customer_address, items, total, payment_method, delivery_method, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [id, order_number, customer_name, customer_phone, customer_email, customer_address, JSON.stringify(items), total, payment_method, delivery_method, notes], function(err) {
        callback(err, { id, ...orderData });
    });
}

function updateOrderStatus(id, status, callback) {
    db.run('UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [status, id], function(err) {
        callback(err, { id, status });
    });
}

// Restaurant Orders
function getRestaurantOrders(callback) {
    db.all('SELECT * FROM restaurant_orders ORDER BY created_at DESC', callback);
}

function createRestaurantOrder(orderData, callback) {
    const id = uuidv4();
    const { order_number, restaurant_name, contact_name, phone, email, address, restaurant_type, delivery_frequency, special_notes, items } = orderData;
    db.run(`
        INSERT INTO restaurant_orders (id, order_number, restaurant_name, contact_name, phone, email, address, restaurant_type, delivery_frequency, special_notes, items)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [id, order_number, restaurant_name, contact_name, phone, email, address, restaurant_type, delivery_frequency, special_notes, JSON.stringify(items)], function(err) {
        callback(err, { id, ...orderData });
    });
}

// Messages
function getMessages(callback) {
    db.all('SELECT * FROM messages ORDER BY created_at DESC', callback);
}

function createMessage(messageData, callback) {
    const id = uuidv4();
    const { name, email, subject, subject_text, message } = messageData;
    db.run(`
        INSERT INTO messages (id, name, email, subject, subject_text, message)
        VALUES (?, ?, ?, ?, ?, ?)
    `, [id, name, email, subject, subject_text, message], function(err) {
        callback(err, { id, ...messageData });
    });
}

function markMessageRead(id, callback) {
    db.run('UPDATE messages SET read = 1 WHERE id = ?', [id], function(err) {
        callback(err, { id });
    });
}

// ===== AUTHENTIFICATION =====
const bcrypt = require('bcrypt');

function authenticateUser(username, password, callback) {
    db.get('SELECT * FROM admin_users WHERE username = ?', [username], (err, user) => {
        if (err || !user) {
            callback(null, false);
            return;
        }
        bcrypt.compare(password, user.password_hash, (err, result) => {
            callback(err, result ? user : false);
        });
    });
}

// ===== ROUTES API =====

// --- Authentification ---
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, error: 'Identifiant et mot de passe requis' });
    }
    authenticateUser(username, password, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ success: false, error: 'Identifiant ou mot de passe incorrect' });
        }
        res.json({ success: true, user: { id: user.id, username: user.username } });
    });
});

// --- Commandes clients ---
app.post('/api/order', (req, res) => {
    const orderData = req.body;
    if (!orderData.items || !orderData.items.length) {
        return res.status(400).json({ success: false, error: 'Panier vide' });
    }
    const order = {
        order_number: orderData.orderNumber || 'CMD-' + Date.now().toString().slice(-6),
        customer_name: orderData.customerName,
        customer_phone: orderData.customerPhone,
        customer_email: orderData.customerEmail,
        customer_address: orderData.customerAddress || '',
        items: orderData.items,
        total: orderData.total || 0,
        payment_method: orderData.paymentMethod || 'Wave',
        delivery_method: orderData.deliveryMethod || 'Retrait en boutique',
        notes: orderData.notes || ''
    };
    createOrder(order, (err, result) => {
        if (err) {
            console.error('Erreur création commande:', err);
            return res.status(500).json({ success: false, error: 'Erreur lors de l\'enregistrement' });
        }
        res.json({ success: true, data: result });
    });
});

app.get('/api/orders', (req, res) => {
    getOrders((err, rows) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, data: rows });
    });
});

app.get('/api/orders/:id', (req, res) => {
    getOrderById(req.params.id, (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        if (!row) {
            return res.status(404).json({ success: false, error: 'Commande non trouvée' });
        }
        // Parse items
        if (row.items) {
            try { row.items = JSON.parse(row.items); } catch(e) {}
        }
        res.json({ success: true, data: row });
    });
});

app.put('/api/orders/:id/status', (req, res) => {
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ success: false, error: 'Statut requis' });
    }
    updateOrderStatus(req.params.id, status, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, data: result });
    });
});

// --- Demandes restaurants ---
app.post('/api/restaurant-order', (req, res) => {
    const orderData = req.body;
    if (!orderData.restaurantName || !orderData.contactName || !orderData.phone) {
        return res.status(400).json({ success: false, error: 'Informations restaurant incomplètes' });
    }
    const order = {
        order_number: orderData.orderNumber || 'PRO-' + Date.now().toString().slice(-6),
        restaurant_name: orderData.restaurantName,
        contact_name: orderData.contactName,
        phone: orderData.phone,
        email: orderData.email || '',
        address: orderData.address || '',
        restaurant_type: orderData.restaurantType || '',
        delivery_frequency: orderData.deliveryFrequency || '',
        special_notes: orderData.specialNotes || '',
        items: orderData.items || []
    };
    createRestaurantOrder(order, (err, result) => {
        if (err) {
            console.error('Erreur création demande restaurant:', err);
            return res.status(500).json({ success: false, error: 'Erreur lors de l\'enregistrement' });
        }
        res.json({ success: true, data: result });
    });
});

app.get('/api/restaurant-orders', (req, res) => {
    getRestaurantOrders((err, rows) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        // Parse items
        rows.forEach(row => {
            if (row.items) {
                try { row.items = JSON.parse(row.items); } catch(e) {}
            }
        });
        res.json({ success: true, data: rows });
    });
});

// --- Messages ---
app.post('/api/contact', (req, res) => {
    const { name, email, subject, subjectText, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Tous les champs sont requis' });
    }
    createMessage({ name, email, subject, subject_text: subjectText || subject, message }, (err, result) => {
        if (err) {
            console.error('Erreur création message:', err);
            return res.status(500).json({ success: false, error: 'Erreur lors de l\'enregistrement' });
        }
        res.json({ success: true, data: result });
    });
});

app.get('/api/messages', (req, res) => {
    getMessages((err, rows) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, data: rows });
    });
});

app.put('/api/messages/:id/read', (req, res) => {
    markMessageRead(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, data: result });
    });
});

// --- Statistiques ---
app.get('/api/stats', (req, res) => {
    db.get('SELECT COUNT(*) as total_orders FROM orders', (err, orderCount) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        db.get('SELECT COUNT(*) as pending_orders FROM orders WHERE status = "pending"', (err, pendingCount) => {
            if (err) return res.status(500).json({ success: false, error: err.message });
            db.get('SELECT COUNT(*) as completed_orders FROM orders WHERE status = "completed"', (err, completedCount) => {
                if (err) return res.status(500).json({ success: false, error: err.message });
                db.get('SELECT COUNT(*) as total_restaurant FROM restaurant_orders', (err, restaurantCount) => {
                    if (err) return res.status(500).json({ success: false, error: err.message });
                    db.get('SELECT COUNT(*) as unread_messages FROM messages WHERE read = 0', (err, unreadCount) => {
                        if (err) return res.status(500).json({ success: false, error: err.message });
                        res.json({
                            success: true,
                            data: {
                                totalOrders: orderCount.total_orders || 0,
                                pendingOrders: pendingCount.pending_orders || 0,
                                completedOrders: completedCount.completed_orders || 0,
                                totalRestaurant: restaurantCount.total_restaurant || 0,
                                unreadMessages: unreadCount.unread_messages || 0
                            }
                        });
                    });
                });
            });
        });
    });
});

// --- Santé ---
app.get('/api/health', (req, res) => {
    db.get('SELECT 1 as health', (err) => {
        res.json({
            status: err ? 'error' : 'ok',
            database: err ? 'disconnected' : 'connected',
            timestamp: new Date().toISOString()
        });
    });
});

// ===== ROUTES PAGES =====
app.get('/', (req, res) => {
    res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('/restaurants', (req, res) => {
    res.sendFile(path.join(ROOT, 'restaurants.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(ROOT, 'admin.html'));
});

// ===== DÉMARRAGE =====
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
    console.log(`📊 Dashboard admin: http://localhost:${PORT}/admin`);
    console.log(`📁 Base de données: ${path.join(ROOT, 'andy_data.db')}`);
});