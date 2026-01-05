// ============================================
// CONFIGURATION ET INITIALISATION
// ============================================
// Palette de couleurs
const COLORS = {
    primaryLight: '#4CAF50', // Vert clair
    primaryDark: '#2E7D32',  // Vert foncé
    text: '#000000',         // Noir
    background: '#FFFFFF',   // Blanc
    border: '#E0E0E0'        // Gris clair
};


console.log('🥩 Andy la Boucherie - Script initialisé');

// Configuration
const CONFIG = {
    currency: 'FCFA',
    currencySymbol: 'FCFA',
    deliveryFee: 0,
    taxRate: 0,
    minOrderValue: 0,
    maxProductsPerOrder: 50,
    imagePlaceholder: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="16">Image non disponible</text></svg>'
};

// ============================================
// DONNÉES DES PRODUITS AMÉLIORÉES
// ============================================

const products = [
    {
        id: 1,
        name: "Tomahawk de bœuf",
        description: "Côte de bœuf avec l'os long, parfaite pour les grillades. Viande persillée et tendre, idéale pour les occasions spéciales.",
        price: 7500,
        image: "https://laboucherie.be/cdn/shop/products/tomahawk-rubia-gallega-mature-la-boucherie-viande-en-ligne.jpg?v=1643725171",
        unit: "250g",
        category: "beef",
        featured: true,
        tags: ["Premium", "Grillade", "Tendre"],
        stock: 15,
        weight: 250
    },
    {
        id: 2,
        name: "Entrecôte de bœuf",
        description: "Morceau persillé, idéal pour les grillades. Origine locale, élevage en plein air. Saveur intense et texture parfaite.",
        price: 5000,
        image: "https://boutique.pacantal.fr/wp-content/uploads/2024/08/Entrecote-scaled.jpg",
        unit: "250g",
        category: "beef",
        featured: true,
        tags: ["Local", "Persillé", "Grillade"],
        stock: 20,
        weight: 250
    },
    {
        id: 3,
        name: "Filet de bœuf",
        description: "Le morceau le plus tendre, parfait pour les tournedos et béarnaise. Saveur délicate et texture fondante.",
        price: 5000,
        image: "https://media.istockphoto.com/id/475924176/fr/photo/fruits-de-mer-de-prime-fra%C3%AEcheur-et-de-la-viande-steaks-de-faux-filet-row-pr%C3%AAt-%C3%A0-cuisiner.jpg?s=612x612&w=0&k=20&c=66UjKOXPq_OIJwh6KheK16uMDeBGxhvLJVi4JOlC7xU=",
        unit: "250g",
        category: "beef",
        featured: true,
        tags: ["Tendre", "Fondant", "Premium"],
        stock: 18,
        weight: 250
    },
    {
        id: 4,
        name: "T-Bone",
        description: "Steak contenant à la fois le filet et le contre-filet. Parfait pour les amateurs de viande généreuse.",
        price: 5000,
        image: "https://static.ticimax.cloud/43437/uploads/urunresimleri/buyuk/premium-t-bone-steak-f4212a.jpg",
        unit: "250g",
        category: "beef",
        tags: ["Double saveur", "Généreux", "Amateur"],
        stock: 12,
        weight: 250
    },
    {
        id: 5,
        name: "Ribs de bœuf",
        description: "Côtes levées de bœuf, idéales pour la cuisson lente et barbecue. Viande fondante et savoureuse.",
        price: 5000,
        image: "https://meatbros.lu/site/71-home_default/st-louis-spare-ribs.jpg",
        unit: "250g",
        category: "beef",
        tags: ["Barbecue", "Fondant", "Cuisse lente"],
        stock: 25,
        weight: 250
    },
    {
        id: 6,
        name: "Joue de bœuf",
        description: "Viande gélatineuse parfaite pour les mijotés et plats en sauce. Saveur riche et texture unique.",
        price: 5000,
        image: "https://maisonduroti.com/cdn/shop/products/Joue-de-boeuf_c1560eb8-e139-46df-b489-95f8bad2a8b8_530x@2x.jpg?v=1642098059",
        unit: "250g",
        category: "beef",
        tags: ["Mijoté", "Gélatineux", "Sauce"],
        stock: 30,
        weight: 250
    },
    {
        id: 7,
        name: "Patte de bœuf",
        description: "Idéale pour préparer du bouillon riche et nourrissant. Base parfaite pour soupes et sauces.",
        price: 5000,
        image: "https://epicerierina.ca/wp-content/uploads/2021/07/pied-de-boeuf.png",
        unit: "250g",
        category: "beef",
        tags: ["Bouillon", "Fond", "Soupe"],
        stock: 22,
        weight: 250
    },
    {
        id: 8,
        name: "Queue de bœuf",
        description: "Parfaite pour les ragoûts et soupes, riche en collagène. Texture fondante après cuisson lente.",
        price: 5000,
        image: "https://dynfiles.comme-a-la-boucherie.com/original-catalogue-produit-11-21-2023---10-05-15---706.jpg",
        unit: "250g",
        category: "beef",
        tags: ["Ragoût", "Collagène", "Fondant"],
        stock: 15,
        weight: 250
    },
    {
        id: 9,
        name: "Cuisses de bœuf",
        description: "Morceaux savoureux pour les plats mijotés et braisés. Viande goûteuse et parfumée.",
        price: 5000,
        image: "https://img.freepik.com/photos-premium/cuisse-boeuf-crue-planche-bois-marron_93675-109904.jpg",
        unit: "250g",
        category: "beef",
        tags: ["Mijoté", "Braisé", "Goûteux"],
        stock: 20,
        weight: 250
    },
    {
        id: 10,
        name: "Épaules de bœuf",
        description: "Viande goûteuse, parfaite pour les pot-au-feu et daubes. Saveur intense et texture fondante.",
        price: 5000,
        image: "https://monbeaubonboeuf.ca/cdn/shop/files/Marteau_de_thor_a0fcb2d0-63e3-4491-8a53-a837900ecba2.jpg?crop=center&height=3024&v=1723597252&width=3024",
        unit: "250g",
        category: "beef",
        tags: ["Pot-au-feu", "Daube", "Goûteux"],
        stock: 18,
        weight: 250
    },
    {
        id: 11,
        name: "Saucisses de bœuf",
        description: "Saucisses artisanales 100% bœuf, parfumées aux herbes. Parfaites pour grillades et ragoûts.",
        price: 5000,
        image: "https://www.boeuf-a-la-ferme.fr/wp-content/uploads/2020/07/saucisse-boeuf-herbes-blond-aquitaine-ferme-producteur-gaec-villeneuve-480x480.webp",
        unit: "250g",
        category: "beef",
        tags: ["Artisanal", "Herbes", "Grillade"],
        stock: 35,
        weight: 250
    },
    {
        id: 12,
        name: "Viande pour burger",
        description: "Haché spécial burger, 80% de maigre, 20% de gras pour un burger juteux et savoureux.",
        price: 5000,
        image: "https://www.leseleveursdelacharentonne.fr/documents/1383_1.jpg",
        unit: "250g",
        category: "beef",
        tags: ["Burger", "Juteux", "Haché"],
        stock: 40,
        weight: 250
    },
    {
        id: 13,
        name: "Viande hachée",
        description: "Haché de bœuf 15% de matière grasse, parfait pour les sauces, lasagnes et boulettes.",
        price: 5000,
        image: "https://img-3.journaldesfemmes.fr/SFp-8xzyuMZZLC59bRuGHZvoohQ=/1500x/smart/a9e53b751f6a47748c6dd5b64c93a8af/ccmcms-jdf/35554472.jpg",
        unit: "250g",
        category: "beef",
        tags: ["Haché", "Sauce", "Polyvalent"],
        stock: 50,
        weight: 250
    },
    {
        id: 14,
        name: "Souris d'agneau",
        description: "Morceau d'épaule d'agneau, tendre et savoureux après cuisson lente. Parfum délicat.",
        price: 5000,
        image: "https://drive.fechter.fr/1-large_default/souris-d-agneau-450-gr.jpg",
        unit: "250g",
        category: "lamb",
        featured: true,
        tags: ["Agneau", "Tendre", "Cuisson lente"],
        stock: 15,
        weight: 250
    },
    {
        id: 15,
        name: "Agneau entier",
        description: "Agneau entier prêt à rôtir, parfait pour les grandes occasions et réceptions.",
        price: 5000,
        image: "https://www.happymeat.ch/wp-content/uploads/2013/10/Demi-agneau.jpg",
        unit: "250g",
        category: "lamb",
        tags: ["Entier", "Rôti", "Occasion"],
        stock: 5,
        weight: 250
    },
    {
        id: 16,
        name: "Viande d'autruche",
        description: "Viande rouge maigre, riche en protéines et faible en cholestérol. Alternative santé savoureuse.",
        price: 5000,
        image: "https://bretagne-autruches.com/wp-content/uploads/2024/03/bretagne-autruches-photo-cuisne-viande-autruche-non-cuite.jpg",
        unit: "250g",
        category: "ostrich",
        featured: true,
        tags: ["Maigre", "Protéines", "Santé"],
        stock: 10,
        weight: 250
    }
];

// ============================================
// GESTION DU PANIER AMÉLIORÉE
// ============================================

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.restaurantCart = this.loadRestaurantCart();
        this.observers = [];
    }

    // Chargement sécurisé du panier
    loadCart() {
        try {
            const savedCart = localStorage.getItem('andy_cart');
            if (savedCart) {
                const cart = JSON.parse(savedCart);
                // Validation des données
                return cart.filter(item => 
                    item && 
                    typeof item.id === 'number' && 
                    typeof item.quantity === 'number' && 
                    item.quantity > 0
                );
            }
        } catch (error) {
            console.error('Erreur lors du chargement du panier:', error);
            this.showError('Impossible de charger votre panier');
        }
        return [];
    }

    loadRestaurantCart() {
        try {
            const savedCart = localStorage.getItem('andy_restaurant_cart');
            if (savedCart) {
                return JSON.parse(savedCart);
            }
        } catch (error) {
            console.error('Erreur lors du chargement du panier restaurant:', error);
        }
        return [];
    }

    // Sauvegarde sécurisée
    saveCart() {
        try {
            localStorage.setItem('andy_cart', JSON.stringify(this.cart));
            this.notifyObservers();
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du panier:', error);
            this.showError('Impossible de sauvegarder votre panier');
        }
    }

    saveRestaurantCart() {
        try {
            localStorage.setItem('andy_restaurant_cart', JSON.stringify(this.restaurantCart));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du panier restaurant:', error);
        }
    }

    // Gestion des observateurs
    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer(this.cart));
    }

    // Méthodes principales
    addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            this.showError('Produit non trouvé');
            return false;
        }

        if (quantity > product.stock) {
            this.showError(`Stock insuffisant. Il reste ${product.stock} unités.`);
            return false;
        }

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity > product.stock) {
                this.showError(`Quantité maximale atteinte. Stock disponible: ${product.stock}`);
                return false;
            }
            existingItem.quantity = newQuantity;
        } else {
            this.cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                category: product.category,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart();
        this.showSuccess(`${quantity} ${product.name} ajouté${quantity > 1 ? 's' : ''} au panier`);
        return true;
    }

    updateQuantity(productId, quantity) {
        if (quantity < 1) {
            this.removeFromCart(productId);
            return;
        }

        const product = products.find(p => p.id === productId);
        if (!product) return;

        if (quantity > product.stock) {
            this.showError(`Stock insuffisant. Maximum: ${product.stock}`);
            return;
        }

        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.saveCart();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.showSuccess('Produit retiré du panier');
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getItemCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getCartSummary() {
        return {
            items: this.cart.length,
            totalItems: this.getItemCount(),
            totalPrice: this.getCartTotal(),
            deliveryFee: CONFIG.deliveryFee,
            tax: this.getCartTotal() * CONFIG.taxRate,
            grandTotal: this.getCartTotal() + CONFIG.deliveryFee
        };
    }

    // Méthodes restaurant
    addToRestaurantCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return false;

        const existingItem = this.restaurantCart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.restaurantCart.push({
                id: productId,
                name: product.name,
                image: product.image,
                unit: product.unit,
                category: product.category,
                quantity: quantity
            });
        }

        this.saveRestaurantCart();
        return true;
    }

    updateRestaurantQuantity(productId, quantity) {
        const item = this.restaurantCart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.saveRestaurantCart();
        }
    }

    removeFromRestaurantCart(productId) {
        this.restaurantCart = this.restaurantCart.filter(item => item.id !== productId);
        this.saveRestaurantCart();
    }

    clearRestaurantCart() {
        this.restaurantCart = [];
        this.saveRestaurantCart();
    }

    // Messages utilisateur
    showSuccess(message) {
        if (typeof window.showToast === 'function') {
            window.showToast(message, 'Succès', 'success');
        } else {
            console.log('✅ ' + message);
        }
    }

    showError(message) {
        if (typeof window.showToast === 'function') {
            window.showToast(message, 'Erreur', 'error');
        } else {
            console.error('❌ ' + message);
        }
    }
}

// ============================================
// UTILITAIRES AMÉLIORÉS
// ============================================

class Utils {
    static formatPrice(price) {
        return new Intl.NumberFormat('fr-FR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    }

    static formatPriceWithCurrency(price) {
        return `${this.formatPrice(price)} ${CONFIG.currency}`;
    }

    static getCategoryName(category) {
        const categories = {
            beef: 'Bœuf',
            lamb: 'Agneau',
            ostrich: 'Autruche',
        };
        return categories[category] || 'Viande';
    }

    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validatePhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('btn-ripple');

        const ripple = button.getElementsByClassName('btn-ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    }
}

// ============================================
// GESTION DE L'UI AMÉLIORÉE
// ============================================

class UIManager {
    constructor(cartManager) {
        this.cartManager = cartManager;
        this.currentFilter = 'all';
        this.elements = this.cacheElements();
        this.initializeEventListeners();
        this.initializeLazyLoading();
        this.initializeIntersectionObserver();
    }

    cacheElements() {
        return {
            cartIcon: document.getElementById('cart-icon'),
            cartCount: document.querySelector('.cart-count'),
            viewCartBtn: document.getElementById('view-cart'),
            cartModal: document.getElementById('cart-modal'),
            closeModal: document.getElementById('close-modal'),
            continueShoppingBtn: document.getElementById('continue-shopping'),
            checkoutBtn: document.getElementById('checkout-btn'),
            cartItemsContainer: document.getElementById('cart-items-container'),
            cartTotal: document.getElementById('cart-total'),
            cartSubtotal: document.getElementById('cart-subtotal'),
            productsGrid: document.getElementById('products-grid'),
            filterButtons: document.querySelectorAll('.filter-btn'),
            mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
            navModern: document.querySelector('.nav-modern'),
            backToTopBtn: document.getElementById('back-to-top'),
            loadingOverlay: document.getElementById('loading-overlay'),
            successModal: document.getElementById('success-modal'),
            closeSuccessBtn: document.getElementById('close-success'),
            cartPreview: document.getElementById('cart-preview'),
            // Restaurant elements
            restaurantsGrid: document.getElementById('restaurants-grid'),
            filterButtonsRestaurant: document.querySelectorAll('.filter-btn-restaurant'),
            requestQuoteBtn: document.getElementById('request-quote-btn'),
            restaurantQuoteModal: document.getElementById('restaurant-quote-modal'),
            closeQuoteModal: document.getElementById('close-quote-modal'),
            restaurantQuoteForm: document.getElementById('restaurant-quote-form'),
            restaurantQuoteItems: document.getElementById('restaurant-quote-items'),
            cancelQuoteBtn: document.getElementById('cancel-quote'),
            restaurantCartPreview: document.getElementById('restaurant-cart-preview')
        };
    }

    initializeEventListeners() {
        // Cart events
        if (this.elements.cartIcon) {
            this.elements.cartIcon.addEventListener('click', () => this.openCartModal());
        }
        
        if (this.elements.viewCartBtn) {
            this.elements.viewCartBtn.addEventListener('click', () => this.openCartModal());
        }
        
        if (this.elements.closeModal) {
            this.elements.closeModal.addEventListener('click', () => this.closeCartModal());
        }
        
        if (this.elements.continueShoppingBtn) {
            this.elements.continueShoppingBtn.addEventListener('click', () => this.closeCartModal());
        }
        
        if (this.elements.checkoutBtn) {
            this.elements.checkoutBtn.addEventListener('click', (e) => this.handleCheckout(e));
        }
        
        // Filter events
        this.elements.filterButtons?.forEach(button => {
            button.addEventListener('click', (e) => this.handleFilterClick(e));
        });
        
        // Mobile menu
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Back to top
        if (this.elements.backToTopBtn) {
            this.elements.backToTopBtn.addEventListener('click', () => this.scrollToTop());
        }
        
        // Success modal
        if (this.elements.closeSuccessBtn) {
            this.elements.closeSuccessBtn.addEventListener('click', () => this.closeSuccessModal());
        }
        
        // Global events
        document.addEventListener('click', (e) => this.handleDocumentClick(e));
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Scroll events
        window.addEventListener('scroll', Utils.throttle(() => this.handleScroll(), 100));
    }

    initializeLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.loading = 'lazy';
            });
        } else {
            // Fallback pour les anciens navigateurs
            this.lazyLoadImages();
        }
    }

    lazyLoadImages() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    initializeIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        document.querySelectorAll('.modern-product-card').forEach(card => {
            observer.observe(card);
        });
    }

    // ============================================
    // MÉTHODES DE RENDU
    // ============================================

    renderProducts(filter = 'all') {
        if (!this.elements.productsGrid) return;
        
        this.currentFilter = filter;
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        let html = '';
        
        if (filteredProducts.length === 0) {
            html = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <h3>Aucun produit trouvé</h3>
                    <p>Essayez une autre catégorie ou revenez plus tard.</p>
                </div>
            `;
        } else {
            filteredProducts.forEach(product => {
                const inCart = this.cartManager.cart.find(item => item.id === product.id);
                const quantityInCart = inCart ? inCart.quantity : 0;
                
                html += `
                    <div class="modern-product-card" data-id="${product.id}" data-category="${product.category}">
                        ${product.featured ? `
                            <div class="product-badge">
                                <i class="fas fa-crown"></i>
                                <span>Premium</span>
                            </div>
                        ` : ''}
                        
                        <div class="product-image">
                            <img src="${product.image}" 
                                 alt="${product.name}" 
                                 loading="lazy"
                                 onerror="this.src='${CONFIG.imagePlaceholder}'">
                            <div class="product-overlay">
                                <button class="quick-add-btn" data-id="${product.id}">
                                    <i class="fas fa-plus"></i>
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <span class="product-category">${Utils.getCategoryName(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            
                            ${product.tags ? `
                                <div class="product-tags">
                                    ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                                </div>
                            ` : ''}
                            
                            <div class="product-meta">
                                <div class="stock-info">
                                    <i class="fas fa-box${product.stock < 10 ? ' low-stock' : ''}"></i>
                                    <span>${product.stock > 10 ? 'En stock' : `Dernières ${product.stock} unités`}</span>
                                </div>
                                <div class="weight-info">
                                    <i class="fas fa-weight-hanging"></i>
                                    <span>${product.weight}g</span>
                                </div>
                            </div>
                            
                            <div class="product-price">
                                <span class="price-amount">${Utils.formatPrice(product.price)}</span>
                                <span class="price-unit">${CONFIG.currency}/${product.unit}</span>
                            </div>
                            
                            <div class="product-actions">
                                <div class="quantity-selector">
                                    <button class="quantity-btn decrement" data-id="${product.id}">-</button>
                                    <input type="number" 
                                           value="${quantityInCart || 1}" 
                                           min="1" 
                                           max="${product.stock}"
                                           class="quantity"
                                           data-id="${product.id}">
                                    <button class="quantity-btn increment" data-id="${product.id}">+</button>
                                </div>
                                <button class="btn add-to-cart ${inCart ? 'added' : ''}" 
                                        data-id="${product.id}"
                                        ${product.stock === 0 ? 'disabled' : ''}>
                                    <i class="fas fa-cart-plus"></i>
                                    ${inCart ? 'Déjà ajouté' : (product.stock === 0 ? 'Rupture' : 'Ajouter')}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        this.elements.productsGrid.innerHTML = html;
        this.attachProductEventListeners();
    }

    renderRestaurantProducts(filter = 'all') {
        if (!this.elements.restaurantsGrid) return;
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        let html = '';
        
        if (filteredProducts.length === 0) {
            html = `
                <div class="no-products">
                    <i class="fas fa-utensils"></i>
                    <h3>Aucun produit disponible</h3>
                    <p>Contactez-nous pour des produits sur mesure.</p>
                </div>
            `;
        } else {
            filteredProducts.forEach(product => {
                const inCart = this.cartManager.restaurantCart.find(item => item.id === product.id);
                const quantityInCart = inCart ? inCart.quantity : 0;
                
                html += `
                    <div class="modern-product-card restaurant-product-card" data-id="${product.id}" data-category="${product.category}">
                        ${product.featured ? `
                            <div class="product-badge">
                                <i class="fas fa-star"></i>
                                <span>Pro</span>
                            </div>
                        ` : ''}
                        
                        <div class="product-image">
                            <img src="${product.image}" 
                                 alt="${product.name}" 
                                 loading="lazy"
                                 onerror="this.src='${CONFIG.imagePlaceholder}'">
                            <div class="product-overlay">
                                <button class="quick-add-btn restaurant-quick-add" data-id="${product.id}">
                                    <i class="fas fa-plus"></i>
                                    ${inCart ? 'Modifier' : 'Sélectionner'}
                                </button>
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <span class="product-category">${Utils.getCategoryName(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            
                            <div class="product-meta">
                                <div class="stock-info">
                                    <i class="fas fa-box"></i>
                                    <span>Disponible en gros</span>
                                </div>
                                <div class="weight-info">
                                    <i class="fas fa-weight-hanging"></i>
                                    <span>${product.weight}g/unité</span>
                                </div>
                            </div>
                            
                            <div class="product-actions">
                                <div class="quantity-selector">
                                    <button class="quantity-btn decrement-restaurant" data-id="${product.id}">-</button>
                                    <input type="number" 
                                           value="${quantityInCart || 1}" 
                                           min="1" 
                                           class="quantity restaurant-quantity"
                                           data-id="${product.id}">
                                    <button class="quantity-btn increment-restaurant" data-id="${product.id}">+</button>
                                </div>
                                <button class="btn add-to-restaurant-cart ${inCart ? 'added' : ''}" 
                                        data-id="${product.id}">
                                    <i class="fas fa-clipboard-list"></i>
                                    ${inCart ? 'Modifier' : 'Sélectionner'}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        this.elements.restaurantsGrid.innerHTML = html;
        this.attachRestaurantProductEventListeners();
    }

    renderCartItems() {
        if (!this.elements.cartItemsContainer) return;
        
        const cart = this.cartManager.cart;
        const summary = this.cartManager.getCartSummary();
        
        if (cart.length === 0) {
            this.elements.cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>Votre panier est vide</h4>
                    <p>Découvrez nos délicieux produits et ajoutez-les à votre panier</p>
                    <button class="btn btn-primary" onclick="uiManager.closeCartModal()">
                        <i class="fas fa-search"></i>
                        Découvrir nos produits
                    </button>
                </div>
            `;
            
            if (this.elements.cartSubtotal) {
                this.elements.cartSubtotal.textContent = `0 ${CONFIG.currency}`;
            }
            if (this.elements.cartTotal) {
                this.elements.cartTotal.textContent = `0 ${CONFIG.currency}`;
            }
            if (this.elements.checkoutBtn) {
                this.elements.checkoutBtn.disabled = true;
            }
            return;
        }
        
        let html = '';
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const itemTotal = item.price * item.quantity;
            
            html += `
                <div class="modern-cart-item" data-id="${item.id}">
                    <div class="cart-item-info">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-category">${Utils.getCategoryName(item.category)}</div>
                            <div class="cart-item-price">${Utils.formatPrice(item.price)} ${CONFIG.currency}/${item.unit}</div>
                        </div>
                    </div>
                    
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn decrement-cart" data-id="${item.id}">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input type="number" 
                                   value="${item.quantity}" 
                                   min="1" 
                                   max="${product?.stock || 99}"
                                   class="cart-item-quantity"
                                   data-id="${item.id}">
                            <button class="quantity-btn increment-cart" data-id="${item.id}">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                        <div class="cart-item-total">${Utils.formatPrice(itemTotal)} ${CONFIG.currency}</div>
                        
                        <button class="remove-item" data-id="${item.id}" aria-label="Retirer du panier">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        this.elements.cartItemsContainer.innerHTML = html;
        
        // Mettre à jour les totaux
        if (this.elements.cartSubtotal) {
            this.elements.cartSubtotal.textContent = `${Utils.formatPrice(summary.totalPrice)} ${CONFIG.currency}`;
        }
        if (this.elements.cartTotal) {
            this.elements.cartTotal.textContent = `${Utils.formatPrice(summary.grandTotal)} ${CONFIG.currency}`;
        }
        if (this.elements.checkoutBtn) {
            this.elements.checkoutBtn.disabled = false;
        }
        
        // Attacher les événements
        this.attachCartItemEventListeners();
    }

    updateCartDisplay() {
        const itemCount = this.cartManager.getItemCount();
        
        // Mettre à jour le compteur
        if (this.elements.cartCount) {
            this.elements.cartCount.textContent = itemCount;
            this.elements.cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }
        
        // Mettre à jour l'aperçu du panier
        if (this.elements.cartPreview) {
            const previewText = this.elements.cartPreview.querySelector('.cart-preview-text');
            if (previewText) {
                if (itemCount > 0) {
                    const total = this.cartManager.getCartTotal();
                    this.elements.cartPreview.classList.add('has-items');
                    previewText.textContent = `${Utils.formatPrice(total)} ${CONFIG.currency}`;
                } else {
                    this.elements.cartPreview.classList.remove('has-items');
                    previewText.textContent = 'Votre panier est vide';
                }
            }
        }
        
        // Mettre à jour l'affichage des produits
        this.updateProductCards();
    }

    updateRestaurantCartDisplay() {
        if (!this.elements.restaurantCartPreview) return;
        
        const totalItems = this.cartManager.restaurantCart.reduce((total, item) => total + item.quantity, 0);
        const previewText = this.elements.restaurantCartPreview.querySelector('.restaurant-cart-preview-text');
        
        if (previewText) {
            if (totalItems > 0) {
                this.elements.restaurantCartPreview.classList.add('has-items');
                previewText.textContent = `${totalItems} produit${totalItems > 1 ? 's' : ''} sélectionné${totalItems > 1 ? 's' : ''}`;
            } else {
                this.elements.restaurantCartPreview.classList.remove('has-items');
                previewText.textContent = 'Aucun produit sélectionné';
            }
        }
    }

    updateProductCards() {
        document.querySelectorAll('.modern-product-card').forEach(card => {
            const productId = parseInt(card.dataset.id);
            const inCart = this.cartManager.cart.find(item => item.id === productId);
            const addButton = card.querySelector('.add-to-cart');
            const quantityInput = card.querySelector('.quantity');
            
            if (addButton && quantityInput) {
                if (inCart) {
                    addButton.classList.add('added');
                    addButton.innerHTML = '<i class="fas fa-check"></i> Déjà ajouté';
                    quantityInput.value = inCart.quantity;
                } else {
                    addButton.classList.remove('added');
                    addButton.innerHTML = '<i class="fas fa-cart-plus"></i> Ajouter';
                    quantityInput.value = 1;
                }
            }
        });
    }

    // ============================================
    // GESTION DES ÉVÉNEMENTS
    // ============================================

    attachProductEventListeners() {
        // Boutons "Ajouter au panier"
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAddToCart(e));
            btn.addEventListener('click', Utils.createRipple);
        });
        
        // Boutons de quantité
        document.querySelectorAll('.increment').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleIncrement(e));
        });
        
        document.querySelectorAll('.decrement').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleDecrement(e));
        });
        
        // Inputs de quantité
        document.querySelectorAll('.quantity').forEach(input => {
            input.addEventListener('change', (e) => this.handleQuantityChange(e));
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const addBtn = e.target.closest('.product-actions').querySelector('.add-to-cart');
                    addBtn.click();
                }
            });
        });
        
        // Quick add buttons
        document.querySelectorAll('.quick-add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleQuickAdd(e));
        });
    }

    attachRestaurantProductEventListeners() {
        // Boutons "Sélectionner"
        document.querySelectorAll('.add-to-restaurant-cart').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAddToRestaurantCart(e));
        });
        
        // Boutons de quantité restaurant
        document.querySelectorAll('.increment-restaurant').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleIncrementRestaurant(e));
        });
        
        document.querySelectorAll('.decrement-restaurant').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleDecrementRestaurant(e));
        });
        
        // Quick add restaurant
        document.querySelectorAll('.restaurant-quick-add').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleRestaurantQuickAdd(e));
        });
    }

    attachCartItemEventListeners() {
        // Incrémenter/décrémenter dans le panier
        document.querySelectorAll('.increment-cart').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCartIncrement(e));
        });
        
        document.querySelectorAll('.decrement-cart').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCartDecrement(e));
        });
        
        // Modifier la quantité dans le panier
        document.querySelectorAll('.cart-item-quantity').forEach(input => {
            input.addEventListener('change', (e) => this.handleCartQuantityChange(e));
        });
        
        // Retirer du panier
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleRemoveItem(e));
        });
    }

    // ============================================
    // HANDLERS D'ÉVÉNEMENTS
    // ============================================

    handleAddToCart(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        const productCard = button.closest('.modern-product-card');
        const quantityInput = productCard.querySelector('.quantity');
        const quantity = parseInt(quantityInput.value) || 1;
        
        // Animation
        button.classList.add('adding');
        setTimeout(() => button.classList.remove('adding'), 300);
        
        // Ajouter au panier
        const success = this.cartManager.addToCart(productId, quantity);
        
        if (success) {
            // Animation de confirmation
            button.classList.add('added');
            setTimeout(() => {
                button.classList.remove('added');
                this.updateProductCards();
            }, 1500);
        }
    }

    handleQuickAdd(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        
        this.cartManager.addToCart(productId, 1);
    }

    handleIncrement(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        const productCard = button.closest('.modern-product-card');
        const quantityInput = productCard.querySelector('.quantity');
        const currentValue = parseInt(quantityInput.value) || 1;
        const product = products.find(p => p.id === productId);
        
        if (product && currentValue < product.stock) {
            quantityInput.value = currentValue + 1;
        } else if (product) {
            this.showToast(`Stock maximum: ${product.stock}`, 'Stock limité', 'warning');
        }
    }

    handleDecrement(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productCard = button.closest('.modern-product-card');
        const quantityInput = productCard.querySelector('.quantity');
        const currentValue = parseInt(quantityInput.value) || 1;
        
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }

    handleQuantityChange(e) {
        const input = e.target;
        const productId = parseInt(input.dataset.id);
        const product = products.find(p => p.id === productId);
        let value = parseInt(input.value) || 1;
        
        if (product && value > product.stock) {
            value = product.stock;
            input.value = value;
            this.showToast(`Quantité réduite au stock disponible: ${product.stock}`, 'Stock limité', 'warning');
        } else if (value < 1) {
            value = 1;
            input.value = value;
        }
    }

    // Restaurant handlers
    handleAddToRestaurantCart(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        const productCard = button.closest('.restaurant-product-card');
        const quantityInput = productCard.querySelector('.restaurant-quantity');
        const quantity = parseInt(quantityInput.value) || 1;
        
        this.cartManager.addToRestaurantCart(productId, quantity);
        this.updateRestaurantCartDisplay();
        
        // Animation
        button.classList.add('added');
        setTimeout(() => {
            button.classList.remove('added');
            button.innerHTML = '<i class="fas fa-clipboard-list"></i> Modifier';
        }, 1000);
        
        this.showToast('Produit ajouté à la sélection', 'Sélection', 'success');
    }

    handleRestaurantQuickAdd(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        
        this.cartManager.addToRestaurantCart(productId, 1);
        this.updateRestaurantCartDisplay();
        this.showToast('Produit sélectionné', 'Sélection', 'success');
    }

    handleIncrementRestaurant(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productCard = button.closest('.restaurant-product-card');
        const quantityInput = productCard.querySelector('.restaurant-quantity');
        const currentValue = parseInt(quantityInput.value) || 1;
        quantityInput.value = currentValue + 1;
    }

    handleDecrementRestaurant(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productCard = button.closest('.restaurant-product-card');
        const quantityInput = productCard.querySelector('.restaurant-quantity');
        const currentValue = parseInt(quantityInput.value) || 1;
        
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }

    // Cart handlers
    handleCartIncrement(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        const cartItem = button.closest('.modern-cart-item');
        const quantityInput = cartItem.querySelector('.cart-item-quantity');
        const currentValue = parseInt(quantityInput.value) || 1;
        const product = products.find(p => p.id === productId);
        
        if (product && currentValue < product.stock) {
            this.cartManager.updateQuantity(productId, currentValue + 1);
            this.renderCartItems();
        } else if (product) {
            this.showToast(`Stock maximum: ${product.stock}`, 'Stock limité', 'warning');
        }
    }

    handleCartDecrement(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        const cartItem = button.closest('.modern-cart-item');
        const quantityInput = cartItem.querySelector('.cart-item-quantity');
        const currentValue = parseInt(quantityInput.value) || 1;
        
        if (currentValue > 1) {
            this.cartManager.updateQuantity(productId, currentValue - 1);
            this.renderCartItems();
        }
    }

    handleCartQuantityChange(e) {
        const input = e.target;
        const productId = parseInt(input.dataset.id);
        const product = products.find(p => p.id === productId);
        let value = parseInt(input.value) || 1;
        
        if (product && value > product.stock) {
            value = product.stock;
            input.value = value;
            this.showToast(`Quantité réduite au stock disponible: ${product.stock}`, 'Stock limité', 'warning');
        } else if (value < 1) {
            value = 1;
            input.value = value;
        }
        
        this.cartManager.updateQuantity(productId, value);
        this.renderCartItems();
    }

    handleRemoveItem(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        
        this.cartManager.removeFromCart(productId);
        this.renderCartItems();
    }

    handleFilterClick(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const filter = button.dataset.filter;
        
        // Mettre à jour les boutons actifs
        if (button.classList.contains('filter-btn')) {
            this.elements.filterButtons?.forEach(btn => btn.classList.remove('active'));
        } else if (button.classList.contains('filter-btn-restaurant')) {
            this.elements.filterButtonsRestaurant?.forEach(btn => btn.classList.remove('active'));
        }
        
        button.classList.add('active');
        
        // Appliquer le filtre
        if (this.elements.productsGrid) {
            this.renderProducts(filter);
        }
        if (this.elements.restaurantsGrid) {
            this.renderRestaurantProducts(filter);
        }
    }

    handleCheckout(e) {
        e.preventDefault();
        
        if (this.cartManager.getItemCount() === 0) {
            this.showToast('Votre panier est vide', 'Panier vide', 'warning');
            return;
        }
        
        this.showLoading();
        
        // Simulation de traitement
        setTimeout(() => {
            this.hideLoading();
            this.showSuccessModal();
            this.cartManager.clearCart();
            this.updateCartDisplay();
            this.closeCartModal();
        }, 1500);
    }

    handleDocumentClick(e) {
        // Fermer le menu mobile en cliquant à l'extérieur
        if (this.elements.mobileMenuToggle && this.elements.navModern) {
            if (!this.elements.navModern.contains(e.target) && 
                !this.elements.mobileMenuToggle.contains(e.target) &&
                this.elements.navModern.classList.contains('active')) {
                this.toggleMobileMenu(false);
            }
        }
        
        // Fermer les modales en cliquant à l'extérieur
        if (this.elements.cartModal && e.target === this.elements.cartModal) {
            this.closeCartModal();
        }
        
        if (this.elements.successModal && e.target === this.elements.successModal) {
            this.closeSuccessModal();
        }
        
        if (this.elements.restaurantQuoteModal && e.target === this.elements.restaurantQuoteModal) {
            this.closeRestaurantQuoteModal();
        }
    }

    handleKeyDown(e) {
        // Fermer avec Escape
        if (e.key === 'Escape') {
            if (this.elements.cartModal && this.elements.cartModal.style.display === 'flex') {
                this.closeCartModal();
            }
            if (this.elements.successModal && this.elements.successModal.style.display === 'flex') {
                this.closeSuccessModal();
            }
            if (this.elements.restaurantQuoteModal && this.elements.restaurantQuoteModal.style.display === 'flex') {
                this.closeRestaurantQuoteModal();
            }
            if (this.elements.navModern && this.elements.navModern.classList.contains('active')) {
                this.toggleMobileMenu(false);
            }
        }
    }

    handleScroll() {
        // Header scroll effect
        const header = document.querySelector('.header-modern');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Back to top button
        if (this.elements.backToTopBtn) {
            if (window.scrollY > 300) {
                this.elements.backToTopBtn.classList.add('visible');
            } else {
                this.elements.backToTopBtn.classList.remove('visible');
            }
        }
    }

    // ============================================
    // MÉTHODES DE MODALES
    // ============================================

    openCartModal() {
        if (!this.elements.cartModal) return;
        
        this.renderCartItems();
        this.elements.cartModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            this.elements.cartModal.classList.add('show');
        }, 10);
        
        // Focus sur le premier élément interactif
        setTimeout(() => {
            const firstFocusable = this.elements.cartModal.querySelector('button, input, [tabindex]');
            if (firstFocusable) firstFocusable.focus();
        }, 100);
    }

    closeCartModal() {
        if (!this.elements.cartModal) return;
        
        this.elements.cartModal.classList.remove('show');
        
        setTimeout(() => {
            this.elements.cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    openRestaurantQuoteModal() {
        if (!this.elements.restaurantQuoteModal) return;
        
        if (this.cartManager.restaurantCart.length === 0) {
            this.showToast('Veuillez sélectionner au moins un produit', 'Sélection vide', 'warning');
            return;
        }
        
        this.renderRestaurantQuoteItems();
        this.elements.restaurantQuoteModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            this.elements.restaurantQuoteModal.classList.add('show');
        }, 10);
    }

    closeRestaurantQuoteModal() {
        if (!this.elements.restaurantQuoteModal) return;
        
        this.elements.restaurantQuoteModal.classList.remove('show');
        
        setTimeout(() => {
            this.elements.restaurantQuoteModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    renderRestaurantQuoteItems() {
        if (!this.elements.restaurantQuoteItems) return;
        
        const items = this.cartManager.restaurantCart;
        let html = '<div class="quote-items-list">';
        html += '<h4>Produits sélectionnés</h4>';
        
        if (items.length === 0) {
            html += '<p class="no-items">Aucun produit sélectionné</p>';
        } else {
            items.forEach(item => {
                const product = products.find(p => p.id === item.id);
                html += `
                    <div class="quote-item">
                        <div class="quote-item-info">
                            <span class="quote-item-name">${item.name}</span>
                            <span class="quote-item-details">
                                ${Utils.getCategoryName(item.category)} • ${item.quantity} ${item.unit}
                            </span>
                        </div>
                        ${product ? `
                            <button class="btn btn-small remove-quote-item" data-id="${item.id}">
                                <i class="fas fa-times"></i>
                            </button>
                        ` : ''}
                    </div>
                `;
            });
        }
        
        html += '</div>';
        this.elements.restaurantQuoteItems.innerHTML = html;
        
        // Attacher les événements de suppression
        document.querySelectorAll('.remove-quote-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                this.cartManager.removeFromRestaurantCart(productId);
                this.renderRestaurantQuoteItems();
                this.updateRestaurantCartDisplay();
                this.renderRestaurantProducts(this.currentFilter);
            });
        });
    }

    showSuccessModal() {
        if (!this.elements.successModal) return;
        
        this.elements.successModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            this.elements.successModal.classList.add('show');
        }, 10);
    }

    closeSuccessModal() {
        if (!this.elements.successModal) return;
        
        this.elements.successModal.classList.remove('show');
        
        setTimeout(() => {
            this.elements.successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    showLoading() {
        if (!this.elements.loadingOverlay) return;
        
        this.elements.loadingOverlay.style.display = 'flex';
        setTimeout(() => {
            this.elements.loadingOverlay.classList.add('show');
        }, 10);
    }

    hideLoading() {
        if (!this.elements.loadingOverlay) return;
        
        this.elements.loadingOverlay.classList.remove('show');
        setTimeout(() => {
            this.elements.loadingOverlay.style.display = 'none';
        }, 300);
    }

    // ============================================
    // MÉTHODES D'UTILITAIRE
    // ============================================

    toggleMobileMenu(force) {
        if (!this.elements.mobileMenuToggle || !this.elements.navModern) return;
        
        const isActive = force !== undefined ? force : !this.elements.mobileMenuToggle.classList.contains('active');
        
        this.elements.mobileMenuToggle.classList.toggle('active', isActive);
        this.elements.navModern.classList.toggle('active', isActive);
        this.elements.mobileMenuToggle.setAttribute('aria-expanded', isActive);
        
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    showToast(message, title = 'Notification', type = 'success') {
        if (typeof window.showToast === 'function') {
            window.showToast(message, title, type);
        } else {
            console.log(`${type}: ${title} - ${message}`);
        }
    }
}

// ============================================
// INITIALISATION GLOBALE
// ============================================

let cartManager, uiManager;

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation de Andy la Boucherie...');
    
    // Initialiser le gestionnaire de panier
    cartManager = new CartManager();
    
    // Initialiser le gestionnaire d'UI
    uiManager = new UIManager(cartManager);
    
    // S'abonner aux mises à jour du panier
    cartManager.subscribe(() => {
        uiManager.updateCartDisplay();
    });
    
    // Détecter la page actuelle
    const isRestaurantPage = window.location.pathname.includes('restaurants.html');
    
    // Initialiser le rendu des produits
    if (isRestaurantPage) {
        uiManager.renderRestaurantProducts('all');
        uiManager.updateRestaurantCartDisplay();
        
        // Gestion du formulaire de devis restaurant
        const requestQuoteBtn = document.getElementById('request-quote-btn');
        if (requestQuoteBtn) {
            requestQuoteBtn.addEventListener('click', () => uiManager.openRestaurantQuoteModal());
        }
        
        const closeQuoteModal = document.getElementById('close-quote-modal');
        if (closeQuoteModal) {
            closeQuoteModal.addEventListener('click', () => uiManager.closeRestaurantQuoteModal());
        }
        
        const cancelQuoteBtn = document.getElementById('cancel-quote');
        if (cancelQuoteBtn) {
            cancelQuoteBtn.addEventListener('click', () => uiManager.closeRestaurantQuoteModal());
        }
        
        const restaurantQuoteForm = document.getElementById('restaurant-quote-form');
        if (restaurantQuoteForm) {
            restaurantQuoteForm.addEventListener('submit', (e) => {
                e.preventDefault();
                uiManager.showLoading();
                
                // Simulation d'envoi
                setTimeout(() => {
                    uiManager.hideLoading();
                    uiManager.showSuccessModal();
                    cartManager.clearRestaurantCart();
                    uiManager.updateRestaurantCartDisplay();
                    uiManager.renderRestaurantProducts('all');
                    uiManager.closeRestaurantQuoteModal();
                    restaurantQuoteForm.reset();
                }, 2000);
            });
        }
    } else {
        uiManager.renderProducts('all');
    }
    
    // Mettre à jour l'affichage initial
    uiManager.updateCartDisplay();
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
                history.pushState(null, null, href);
            }
        });
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            // Validation
            const name = document.getElementById('contact-name')?.value.trim();
            const email = document.getElementById('contact-email')?.value.trim();
            const subject = document.getElementById('contact-subject')?.value;
            const message = document.getElementById('contact-message')?.value.trim();
            
            const errors = [];
            if (!name || name.length < 2) errors.push('Nom invalide');
            if (!email || !Utils.validateEmail(email)) errors.push('Email invalide');
            if (!subject) errors.push('Veuillez sélectionner un sujet');
            if (!message || message.length < 10) errors.push('Message trop court');
            
            if (errors.length > 0) {
                uiManager.showToast(errors.join('<br>'), 'Erreur de validation', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                return;
            }
            
            try {
                // Simulation d'envoi
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                uiManager.showToast('Message envoyé avec succès !', 'Succès', 'success');
                this.reset();
            } catch (error) {
                uiManager.showToast('Erreur lors de l\'envoi', 'Erreur', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    console.log('✅ Andy la Boucherie initialisé avec succès');
});

// Exposer les instances globales pour le débogage
window.cartManager = cartManager;
window.uiManager = uiManager;
window.products = products;
window.Utils = Utils;