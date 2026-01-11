// ===== CONFIGURATION =====
const CONFIG = {
    currency: 'FCFA',
    currencySymbol: 'FCFA',
    deliveryFee: 0,
    taxRate: 0,
    minOrderValue: 0,
    imagePlaceholder: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="16">Image non disponible</text></svg>'
};

// ===== DONNÉES DES PRODUITS =====
const products = [
    {
        id: 1,
        name: "Tomahawk de bœuf",
        description: "Côte de bœuf avec l'os long, parfaite pour les grillades. Viande persillée et tendre, idéale pour les occasions spéciales.",
        price: 20000, // Prix au kg
        priceUnit: "kg", // Indique que le prix est au kg
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g", // Indique que le prix est pour 250g
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
        price: 20000, // Prix au kg
        priceUnit: "kg",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
        image: "https://maisonduroti.com/cdn/shop/products/Joue-de-boeuf_c1560eb8-e139-46df-b489-95f8bad2a8b8_530x@2x.jpg?v=1642098059",
        unit: "250g",
        category: "beef",
        tags: ["Mijoté", "Gélatineux", "Sauce"],
        stock: 30,
        weight: 250
    },
    {
        id: 8,
        name: "Queue de bœuf",
        description: "Parfaite pour les ragoûts et soupes, riche en collagène. Texture fondante après cuisson lente.",
        price: 20000, // Prix au kg
        priceUnit: "kg",
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
        price: 20000, // Prix au kg
        priceUnit: "kg",
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
        price: 20000, // Prix au kg
        priceUnit: "kg",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
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
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
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
        price: 25000, // Prix fixe pour l'agneau entier
        priceUnit: "pièce", // Prix à la pièce
        image: "https://www.happymeat.ch/wp-content/uploads/2013/10/Demi-agneau.jpg",
        unit: "pièce",
        category: "lamb",
        tags: ["Entier", "Rôti", "Occasion"],
        stock: 5,
        weight: 6250 // 6.25kg = 6250g
    },
    {
        id: 16,
        name: "Viande d'autruche",
        description: "Viande rouge maigre, riche en protéines et faible en cholestérol. Alternative santé savoureuse.",
        price: 5000, // Prix pour 250g
        priceUnit: "250g",
        image: "https://bretagne-autruches.com/wp-content/uploads/2024/03/bretagne-autruches-photo-cuisne-viande-autruche-non-cuite.jpg",
        unit: "250g",
        category: "ostrich",
        featured: true,
        tags: ["Maigre", "Protéines", "Santé"],
        stock: 10,
        weight: 250
    }
];

// ===== CLASSES ET UTILITAIRES =====
class CartManager {
    constructor() {
        this.cart = this.loadCart();
    }

    loadCart() {
        try {
            const savedCart = localStorage.getItem('andy_cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error('Erreur lors du chargement du panier:', error);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem('andy_cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du panier:', error);
        }
    }

    addToCart(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return false;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: productId,
                name: product.name,
                price: this.getPriceForCart(product), // Utiliser le prix calculé pour le panier
                image: product.image,
                priceUnit: product.priceUnit,
                quantity: quantity
            });
        }

        this.saveCart();
        return true;
    }

    // Nouvelle méthode pour calculer le prix pour le panier
    getPriceForCart(product) {
        // Si le prix est au kg, calculer le prix pour 250g
        if (product.priceUnit === "kg") {
            return product.price / 4; // 1kg = 1000g, 250g = 1/4 du prix
        }
        // Si le prix est à la pièce (agneau entier), utiliser le prix tel quel
        if (product.priceUnit === "pièce") {
            return product.price;
        }
        // Sinon (prix pour 250g), utiliser le prix tel quel
        return product.price;
    }

    updateQuantity(productId, quantity) {
        if (quantity < 1) {
            this.removeFromCart(productId);
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
}

class UIManager {
    constructor() {
        this.cartManager = new CartManager();
        this.currentFilter = 'all';
        this.initialize();
    }

    initialize() {
        this.cacheElements();
        this.setupEventListeners();
        this.renderProducts();
        this.updateCartDisplay();
        this.setCurrentYear();
        this.setupAnimations();
    }

    cacheElements() {
        this.elements = {
            mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
            nav: document.querySelector('.nav'),
            cartBtn: document.querySelector('.cart-btn'),
            cartCount: document.querySelector('.cart-count'),
            viewCartBtn: document.getElementById('view-cart'),
            filterBtns: document.querySelectorAll('.filter-btn'),
            productsGrid: document.querySelector('.products-grid'),
            cartPreviewText: document.querySelector('.cart-preview-text'),
            cartModal: document.getElementById('cartModal'),
            closeModalBtn: document.querySelector('.close-modal'),
            continueShoppingBtn: document.getElementById('continueShopping'),
            checkoutBtn: document.getElementById('checkoutBtn'),
            cartItems: document.getElementById('cartItems'),
            cartSubtotal: document.getElementById('cartSubtotal'),
            cartTotal: document.getElementById('cartTotal'),
            successModal: document.getElementById('successModal'),
            closeSuccessBtn: document.getElementById('closeSuccess'),
            contactForm: document.getElementById('contactForm'),
            toast: document.getElementById('toast'),
            loadingOverlay: document.getElementById('loadingOverlay')
        };
    }

    setupEventListeners() {
        // Menu mobile
        this.elements.mobileMenuBtn?.addEventListener('click', () => this.toggleMobileMenu());
        
        // Filtres produits
        this.elements.filterBtns?.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });
        
        // Panier
        this.elements.cartBtn?.addEventListener('click', () => this.openCartModal());
        this.elements.viewCartBtn?.addEventListener('click', () => this.openCartModal());
        
        // Modal panier
        this.elements.closeModalBtn?.addEventListener('click', () => this.closeCartModal());
        this.elements.continueShoppingBtn?.addEventListener('click', () => this.closeCartModal());
        this.elements.checkoutBtn?.addEventListener('click', (e) => this.handleCheckout(e));
        
        // Modal succès
        this.elements.closeSuccessBtn?.addEventListener('click', () => this.closeSuccessModal());
        
        // Formulaire contact
        this.elements.contactForm?.addEventListener('submit', (e) => this.handleContactForm(e));
        
        // Fermer les modales en cliquant à l'extérieur
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        
        // Gestion des touches clavier
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // Scroll header
        window.addEventListener('scroll', () => this.handleScroll());
    }

    setupAnimations() {
        // Animation des cartes produits
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Observer les cartes produits
        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    }

    // ===== RENDU DES PRODUITS =====
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
                
                html += `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" 
                                 alt="${product.name}" 
                                 loading="lazy"
                                 onerror="this.src='${CONFIG.imagePlaceholder}'">
                        </div>
                        <div class="product-content">
                            <span class="product-category">${this.getCategoryName(product.category)}</span>
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            <div class="product-footer">
                                <div class="product-price">${this.formatDisplayPrice(product)}</div>
                                <div class="product-actions">
                                    <button class="add-to-cart ${inCart ? 'added' : ''}" 
                                            data-id="${product.id}"
                                            aria-label="Ajouter au panier">
                                        <i class="fas ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        this.elements.productsGrid.innerHTML = html;
        
        // Attacher les événements aux nouveaux boutons
        this.attachProductEventListeners();
    }

    // Nouvelle méthode pour formater le prix d'affichage
    formatDisplayPrice(product) {
        const formattedPrice = this.formatPrice(product.price);
        
        if (product.priceUnit === "kg") {
            return `${formattedPrice} ${CONFIG.currency} / kg`;
        } else if (product.priceUnit === "pièce") {
            return `${formattedPrice} ${CONFIG.currency} / pièce`;
        } else {
            return `${formattedPrice} ${CONFIG.currency} / 250g`;
        }
    }

    attachProductEventListeners() {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAddToCart(e));
        });
    }

    // ===== GESTION DU PANIER =====
    updateCartDisplay() {
        const itemCount = this.cartManager.getItemCount();
        const total = this.cartManager.getCartTotal();
        
        // Mettre à jour le compteur
        if (this.elements.cartCount) {
            this.elements.cartCount.textContent = itemCount;
            this.elements.cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }
        
        // Mettre à jour l'aperçu du panier
        if (this.elements.cartPreviewText) {
            if (itemCount > 0) {
                this.elements.cartPreviewText.textContent = `${this.formatPrice(total)} ${CONFIG.currency}`;
                this.elements.cartPreviewText.parentElement.parentElement.classList.add('has-items');
            } else {
                this.elements.cartPreviewText.textContent = 'Votre panier est vide';
                this.elements.cartPreviewText.parentElement.parentElement.classList.remove('has-items');
            }
        }
        
        // Mettre à jour les boutons des produits
        this.updateProductButtons();
    }

    updateProductButtons() {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            const productId = parseInt(btn.dataset.id);
            const inCart = this.cartManager.cart.find(item => item.id === productId);
            
            if (inCart) {
                btn.classList.add('added');
                btn.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                btn.classList.remove('added');
                btn.innerHTML = '<i class="fas fa-cart-plus"></i>';
            }
        });
    }

    renderCartItems() {
        if (!this.elements.cartItems) return;
        
        const cart = this.cartManager.cart;
        
        if (cart.length === 0) {
            this.elements.cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>Votre panier est vide</h4>
                    <p>Découvrez nos délicieux produits et ajoutez-les à votre panier</p>
                </div>
            `;
            
            if (this.elements.cartSubtotal) {
                this.elements.cartSubtotal.textContent = `0 ${CONFIG.currency}`;
            }
            if (this.elements.cartTotal) {
                this.elements.cartTotal.textContent = `0 ${CONFIG.currency}`;
            }
            return;
        }
        
        let html = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            // Récupérer le produit original pour l'unité d'affichage
            const originalProduct = products.find(p => p.id === item.id);
            const displayPriceUnit = originalProduct?.priceUnit || "250g";
            
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${this.formatPrice(item.price)} ${CONFIG.currency} / ${displayPriceUnit === "kg" ? "250g" : displayPriceUnit}</div>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn decrement" data-id="${item.id}">-</button>
                            <input type="number" class="quantity" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increment" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}" aria-label="Retirer">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        this.elements.cartItems.innerHTML = html;
        
        // Mettre à jour les totaux
        const total = subtotal + CONFIG.deliveryFee;
        
        if (this.elements.cartSubtotal) {
            this.elements.cartSubtotal.textContent = `${this.formatPrice(subtotal)} ${CONFIG.currency}`;
        }
        if (this.elements.cartTotal) {
            this.elements.cartTotal.textContent = `${this.formatPrice(total)} ${CONFIG.currency}`;
        }
        
        // Attacher les événements
        this.attachCartEventListeners();
    }

    attachCartEventListeners() {
        // Incrémenter/décrémenter
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleQuantityChange(e));
        });
        
        // Changer la quantité via l'input
        document.querySelectorAll('.quantity').forEach(input => {
            input.addEventListener('change', (e) => this.handleQuantityInput(e));
        });
        
        // Retirer du panier
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleRemoveItem(e));
        });
    }

    // ===== GESTION DES ÉVÉNEMENTS =====
    handleFilterClick(e) {
        const button = e.currentTarget;
        const filter = button.dataset.filter;
        
        // Mettre à jour les boutons actifs
        this.elements.filterBtns?.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Appliquer le filtre
        this.renderProducts(filter);
    }

    handleAddToCart(e) {
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        
        // Animation
        button.classList.add('adding');
        setTimeout(() => button.classList.remove('adding'), 300);
        
        // Ajouter au panier
        const success = this.cartManager.addToCart(productId, 1);
        
        if (success) {
            // Mettre à jour l'affichage
            this.updateCartDisplay();
            
            // Afficher la notification
            const product = products.find(p => p.id === productId);
            this.showToast(`${product.name} ajouté au panier`, 'Succès');
            
            // Animation de confirmation
            button.classList.add('added');
            setTimeout(() => {
                button.classList.remove('added');
                this.updateProductButtons();
            }, 1500);
        }
    }

    handleQuantityChange(e) {
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        const isIncrement = button.classList.contains('increment');
        
        const item = this.cartManager.cart.find(item => item.id === productId);
        if (!item) return;
        
        const newQuantity = isIncrement ? item.quantity + 1 : item.quantity - 1;
        
        if (newQuantity < 1) {
            this.cartManager.removeFromCart(productId);
        } else {
            this.cartManager.updateQuantity(productId, newQuantity);
        }
        
        this.updateCartDisplay();
        this.renderCartItems();
    }

    handleQuantityInput(e) {
        const input = e.target;
        const productId = parseInt(input.dataset.id);
        const quantity = parseInt(input.value) || 1;
        
        this.cartManager.updateQuantity(productId, quantity);
        this.updateCartDisplay();
        this.renderCartItems();
    }

    handleRemoveItem(e) {
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        
        this.cartManager.removeFromCart(productId);
        this.updateCartDisplay();
        this.renderCartItems();
        this.showToast('Produit retiré du panier', 'Panier mis à jour');
    }

    handleCheckout(e) {
        e.preventDefault();
        
        if (this.cartManager.cart.length === 0) {
            this.showToast('Votre panier est vide', 'Erreur', 'error');
            return;
        }
        
        this.showLoading();
        
        // Simulation de traitement
        setTimeout(() => {
            this.hideLoading();
            this.closeCartModal();
            this.showSuccessModal();
            this.cartManager.clearCart();
            this.updateCartDisplay();
            this.renderCartItems();
        }, 1500);
    }

    handleContactForm(e) {
        e.preventDefault();
        
        this.showLoading();
        
        // Simulation d'envoi
        setTimeout(() => {
            this.hideLoading();
            this.showToast('Message envoyé avec succès !', 'Succès');
            e.target.reset();
        }, 1500);
    }

    handleOutsideClick(e) {
        // Fermer le menu mobile en cliquant à l'extérieur
        if (this.elements.nav?.classList.contains('active') && 
            !e.target.closest('.nav') && 
            !e.target.closest('.mobile-menu-btn')) {
            this.toggleMobileMenu(false);
        }
        
        // Fermer les modales en cliquant à l'extérieur
        if (this.elements.cartModal?.classList.contains('show') && 
            e.target === this.elements.cartModal) {
            this.closeCartModal();
        }
        
        if (this.elements.successModal?.classList.contains('show') && 
            e.target === this.elements.successModal) {
            this.closeSuccessModal();
        }
    }

    handleKeyDown(e) {
        // Fermer avec Escape
        if (e.key === 'Escape') {
            if (this.elements.cartModal?.classList.contains('show')) {
                this.closeCartModal();
            }
            if (this.elements.successModal?.classList.contains('show')) {
                this.closeSuccessModal();
            }
            if (this.elements.nav?.classList.contains('active')) {
                this.toggleMobileMenu(false);
            }
        }
    }

    handleScroll() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // ===== MODALES =====
    openCartModal() {
        this.renderCartItems();
        this.elements.cartModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeCartModal() {
        this.elements.cartModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    showSuccessModal() {
        this.elements.successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeSuccessModal() {
        this.elements.successModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // ===== UTILITAIRES =====
    toggleMobileMenu(force) {
        if (force !== undefined) {
            this.elements.nav.classList.toggle('active', force);
            this.elements.mobileMenuBtn.classList.toggle('active', force);
        } else {
            this.elements.nav.classList.toggle('active');
            this.elements.mobileMenuBtn.classList.toggle('active');
        }
        
        document.body.style.overflow = this.elements.nav.classList.contains('active') ? 'hidden' : 'auto';
    }

    formatPrice(price) {
        return new Intl.NumberFormat('fr-FR').format(price);
    }

    getCategoryName(category) {
        const categories = {
            beef: 'Bœuf',
            lamb: 'Agneau',
            ostrich: 'Autruche'
        };
        return categories[category] || 'Viande';
    }

    setCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    showToast(message, title = 'Notification', type = 'success') {
        const toast = this.elements.toast;
        const icon = toast.querySelector('.toast-icon i');
        const toastTitle = toast.querySelector('.toast-title');
        const toastMessage = toast.querySelector('.toast-message');
        
        // Définir l'icône selon le type
        switch(type) {
            case 'error':
                icon.className = 'fas fa-exclamation-circle';
                toast.style.borderLeft = '4px solid #ff4757';
                break;
            case 'warning':
                icon.className = 'fas fa-exclamation-triangle';
                toast.style.borderLeft = '4px solid #ffa502';
                break;
            default:
                icon.className = 'fas fa-check-circle';
                toast.style.borderLeft = '4px solid var(--primary)';
        }
        
        toastTitle.textContent = title;
        toastMessage.textContent = message;
        
        // Afficher le toast
        toast.classList.add('show');
        
        // Masquer automatiquement après 5 secondes
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
        
        // Fermeture manuelle
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.onclick = () => {
            toast.classList.remove('show');
        };
    }

    showLoading() {
        this.elements.loadingOverlay.classList.add('show');
    }

    hideLoading() {
        this.elements.loadingOverlay.classList.remove('show');
    }
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🥩 Andy la Boucherie - Site initialisé');
    
    // Initialiser le gestionnaire d'UI
    const uiManager = new UIManager();
    
    // Smooth scroll pour les liens d'ancrage (seulement ceux qui pointent vers des ancres sur la même page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            // Vérifier que l'ancre existe sur la page
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Fermer le menu mobile si ouvert
                if (uiManager.elements.nav?.classList.contains('active')) {
                    uiManager.toggleMobileMenu(false);
                }
                
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
            // Si l'ancre n'existe pas, laisser le comportement par défaut (navigation normale)
        });
    });
    
    // Exposer pour le débogage
    window.uiManager = uiManager;
});