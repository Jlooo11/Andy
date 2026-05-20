// ===== CONFIGURATION =====
const CONFIG = {
    currency: 'FCFA',
    currencySymbol: 'FCFA',
    deliveryFee: 0,
    taxRate: 0,
    minOrderValue: 0,
    imagePlaceholder: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="16">Image non disponible</text></svg>',
    paymentLink: 'https://pay.jeko.africa/pl/3775132a-b0c2-4dfd-85ec-4f7d5d49d1ce',
    whatsappNumber: '2250798567514',
    businessEmail: 'alaboutiqueboucherie@gmail.com'
};

// ===== DONNÉES DES PRODUITS =====
const products = [
    {
        id: 1,
        name: "Tomahawk de bœuf",
        description: "Côte de bœuf avec l'os long, parfaite pour les grillades. Viande persillée et tendre, idéale pour les occasions spéciales.",
        price: 20000,
        priceUnit: "kg",
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
        priceUnit: "250g",
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
        price: 20000,
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
        price: 5000,
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
        price: 5000,
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
        price: 5000,
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
        price: 20000,
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
        price: 20000,
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
        price: 20000,
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
        price: 5000,
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
        price: 5000,
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
        price: 5000,
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
        price: 5000,
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
        price: 25000,
        priceUnit: "pièce",
        image: "https://www.happymeat.ch/wp-content/uploads/2013/10/Demi-agneau.jpg",
        unit: "pièce",
        category: "lamb",
        tags: ["Entier", "Rôti", "Occasion"],
        stock: 5,
        weight: 6250
    },
    {
        id: 16,
        name: "Viande d'autruche",
        description: "Viande rouge maigre, riche en protéines et faible en cholestérol. Alternative santé savoureuse.",
        price: 5000,
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
                price: this.getPriceForCart(product),
                image: product.image,
                priceUnit: product.priceUnit,
                quantity: quantity
            });
        }

        this.saveCart();
        return true;
    }

    getPriceForCart(product) {
        if (product.priceUnit === "kg") {
            return product.price / 4;
        }
        if (product.priceUnit === "pièce") {
            return product.price;
        }
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
        this.initPromotionBanner();
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
        this.elements.mobileMenuBtn?.addEventListener('click', () => this.toggleMobileMenu());
        
        this.elements.filterBtns?.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilterClick(e));
        });
        
        this.elements.cartBtn?.addEventListener('click', () => this.openCartModal());
        this.elements.viewCartBtn?.addEventListener('click', () => this.openCartModal());
        
        this.elements.closeModalBtn?.addEventListener('click', () => this.closeCartModal());
        this.elements.continueShoppingBtn?.addEventListener('click', () => this.closeCartModal());
        this.elements.checkoutBtn?.addEventListener('click', (e) => this.handleCheckout(e));
        
        this.elements.closeSuccessBtn?.addEventListener('click', () => this.closeSuccessModal());
        
        this.elements.contactForm?.addEventListener('submit', (e) => this.handleContactForm(e));
        
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('scroll', () => this.handleScroll());
    }

    initPromotionBanner() {
        // Rotation automatique des promotions
        const promotions = [
            "🥩 Nouveau ! Découvrez notre viande d'autruche premium",
            "📦 Commandez avant 14h, livraison le jour même !",
            "👨‍🍳 Recette de la semaine : Tomahawk grillé aux herbes"
        ];
    }

    setupAnimations() {
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

        document.querySelectorAll('.product-card').forEach(card => {
            observer.observe(card);
        });
    }

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
        this.attachProductEventListeners();
    }

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

    updateCartDisplay() {
        const itemCount = this.cartManager.getItemCount();
        const total = this.cartManager.getCartTotal();
        
        if (this.elements.cartCount) {
            this.elements.cartCount.textContent = itemCount;
            this.elements.cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
        }
        
        if (this.elements.cartPreviewText) {
            if (itemCount > 0) {
                this.elements.cartPreviewText.textContent = `${this.formatPrice(total)} ${CONFIG.currency}`;
                this.elements.cartPreviewText.parentElement.parentElement.classList.add('has-items');
            } else {
                this.elements.cartPreviewText.textContent = 'Votre panier est vide';
                this.elements.cartPreviewText.parentElement.parentElement.classList.remove('has-items');
            }
        }
        
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
        
        const total = subtotal + CONFIG.deliveryFee;
        
        if (this.elements.cartSubtotal) {
            this.elements.cartSubtotal.textContent = `${this.formatPrice(subtotal)} ${CONFIG.currency}`;
        }
        if (this.elements.cartTotal) {
            this.elements.cartTotal.textContent = `${this.formatPrice(total)} ${CONFIG.currency}`;
        }
        
        this.attachCartEventListeners();
    }

    attachCartEventListeners() {
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleQuantityChange(e));
        });
        
        document.querySelectorAll('.quantity').forEach(input => {
            input.addEventListener('change', (e) => this.handleQuantityInput(e));
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleRemoveItem(e));
        });
    }

    handleFilterClick(e) {
        const button = e.currentTarget;
        const filter = button.dataset.filter;
        
        this.elements.filterBtns?.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        this.renderProducts(filter);
    }

    handleAddToCart(e) {
        const button = e.currentTarget;
        const productId = parseInt(button.dataset.id);
        
        button.classList.add('adding');
        setTimeout(() => button.classList.remove('adding'), 300);
        
        const success = this.cartManager.addToCart(productId, 1);
        
        if (success) {
            this.updateCartDisplay();
            
            const product = products.find(p => p.id === productId);
            this.showToast(`${product.name} ajouté au panier`, 'Succès');
            
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
        const isDecrement = button.classList.contains('decrement');
        
        const item = this.cartManager.cart.find(item => item.id === productId);
        if (!item) return;
        
        if (isIncrement) {
            this.cartManager.updateQuantity(productId, item.quantity + 1);
        } else if (isDecrement) {
            if (item.quantity > 1) {
                this.cartManager.updateQuantity(productId, item.quantity - 1);
            } else {
                this.cartManager.removeFromCart(productId);
            }
        }
        
        this.updateCartDisplay();
        this.renderCartItems();
    }

    handleQuantityInput(e) {
        const input = e.target;
        const productId = parseInt(input.dataset.id);
        const quantity = parseInt(input.value) || 1;
        
        if (quantity < 1) {
            this.cartManager.removeFromCart(productId);
        } else {
            this.cartManager.updateQuantity(productId, quantity);
        }
        
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

    async handleCheckout(e) {
        e.preventDefault();
        
        if (this.cartManager.cart.length === 0) {
            this.showToast('Votre panier est vide', 'Erreur', 'error');
            return;
        }
        
        const order = {
            items: [...this.cartManager.cart],
            total: this.cartManager.getCartTotal(),
            date: new Date().toISOString(),
            status: 'pending_payment',
            orderNumber: 'CMD-' + Date.now().toString().slice(-6)
        };
        
        this.showLoading();
        
        try {
            await notifyClientOrder(order);
            localStorage.setItem('last_order', JSON.stringify(order));
            this.cartManager.clearCart();
            this.updateCartDisplay();
            this.closeCartModal();
            this.showToast('Commande envoyée. Finalisez le paiement.', 'Succès');
            window.location.href = CONFIG.paymentLink;
        } catch (error) {
            console.error('Erreur commande:', error);
            this.showToast('Erreur lors de l\'envoi. Réessayez ou contactez-nous sur WhatsApp.', 'Erreur', 'error');
        } finally {
            this.hideLoading();
        }
    }

    async handleContactForm(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value.trim();
        
        if (!name || !email || !subject || !message) {
            this.showToast('Veuillez remplir tous les champs', 'Formulaire incomplet', 'error');
            return;
        }
        
        this.showLoading();
        
        try {
            await notifyContact({
                name,
                email,
                subject,
                subjectText: this.getSubjectText(subject),
                message
            });
            
            this.showToast('Message envoyé avec succès !', 'Succès');
            e.target.reset();
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            this.showToast('Erreur lors de l\'envoi du message', 'Erreur', 'error');
        } finally {
            this.hideLoading();
        }
    }

    getSubjectText(subjectValue) {
        const subjects = {
            'commande': 'Question sur une commande',
            'produit': 'Information produit',
            'livraison': 'Livraison',
            'partenariat': 'Partenariat',
            'autre': 'Autre'
        };
        return subjects[subjectValue] || 'Autre';
    }

    handleOutsideClick(e) {
        if (this.elements.nav?.classList.contains('active') && 
            !e.target.closest('.nav') && 
            !e.target.closest('.mobile-menu-btn')) {
            this.toggleMobileMenu(false);
        }
        
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
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

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
        if (!toast) return;
        const icon = toast.querySelector('.toast-icon i');
        const toastTitle = toast.querySelector('.toast-title');
        const toastMessage = toast.querySelector('.toast-message');
        
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
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
        
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.onclick = () => {
            toast.classList.remove('show');
        };
    }

    showLoading() {
        if (this.elements.loadingOverlay) {
            this.elements.loadingOverlay.classList.add('show');
        }
    }

    hideLoading() {
        if (this.elements.loadingOverlay) {
            this.elements.loadingOverlay.classList.remove('show');
        }
    }
}

// ===== NOTIFICATIONS WHATSAPP + EMAIL =====
function formatPriceGlobal(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

function openWhatsApp(message) {
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

async function sendToApi(endpoint, data) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.warn('Serveur API indisponible:', error);
        return { success: false, offline: true };
    }
}

function buildClientOrderMessage(order) {
    const itemsList = order.items.map(item =>
        `• ${item.name} x${item.quantity} — ${formatPriceGlobal(item.price * item.quantity)} FCFA`
    ).join('\n');
    
    return `🥩 *NOUVELLE COMMANDE CLIENT*\n` +
        `N° ${order.orderNumber}\n` +
        `Date : ${new Date(order.date).toLocaleString('fr-FR')}\n\n` +
        `*Articles :*\n${itemsList}\n\n` +
        `*Total : ${formatPriceGlobal(order.total)} FCFA*\n` +
        (order.customerName ? `Client : ${order.customerName}\n` : '') +
        (order.customerPhone ? `Tél : ${order.customerPhone}\n` : '') +
        (order.customerEmail ? `Email : ${order.customerEmail}\n` : '') +
        (order.customerAddress ? `Adresse : ${order.customerAddress}\n` : '') +
        (order.notes ? `Notes : ${order.notes}` : '');
}

function buildRestaurantOrderMessage(order) {
    const itemsList = order.items.map(item =>
        `• ${item.name} x${item.quantity} (${item.unit || 'unité'})`
    ).join('\n');
    
    return `🍽️ *DEMANDE DE DEVIS RESTAURANT*\n` +
        `N° ${order.orderNumber}\n` +
        `Date : ${order.orderDate || new Date().toLocaleString('fr-FR')}\n\n` +
        `*Établissement :* ${order.restaurantName}\n` +
        `*Contact :* ${order.contactName}\n` +
        `*Tél :* ${order.phone}\n` +
        `*Email :* ${order.email}\n` +
        `*Adresse :* ${order.address}\n` +
        `*Type :* ${getRestaurantTypeText(order.restaurantType)}\n` +
        `*Livraison :* ${getDeliveryFrequencyText(order.deliveryFrequency)}\n\n` +
        `*Produits demandés :*\n${itemsList}\n\n` +
        (order.specialNotes ? `*Notes :* ${order.specialNotes}` : '');
}

function buildContactMessage(data) {
    return `📩 *MESSAGE CONTACT SITE*\n` +
        `De : ${data.name}\n` +
        `Email : ${data.email}\n` +
        `Sujet : ${data.subjectText}\n\n` +
        `${data.message}`;
}

async function notifyClientOrder(order) {
    const message = buildClientOrderMessage(order);
    openWhatsApp(message);
    const result = await sendToApi('/api/order', { ...order, type: 'client' });
    if (!result.success && !result.offline) {
        throw new Error(result.error || 'Échec envoi email');
    }
    return result;
}

async function notifyRestaurantOrder(order) {
    const message = buildRestaurantOrderMessage(order);
    openWhatsApp(message);
    const result = await sendToApi('/api/restaurant-order', { ...order, type: 'restaurant' });
    if (!result.success && !result.offline) {
        throw new Error(result.error || 'Échec envoi email');
    }
    return result;
}

async function notifyContact(data) {
    const message = buildContactMessage(data);
    openWhatsApp(message);
    const result = await sendToApi('/api/contact', data);
    if (!result.success && !result.offline) {
        throw new Error(result.error || 'Échec envoi email');
    }
    return result;
}

// Fonctions utilitaires pour les textes
function getRestaurantTypeText(type) {
    const types = {
        'restaurant': 'Restaurant',
        'hotel': 'Hôtel/Résidence',
        'catering': 'Traiteur',
        'canteen': 'Cantine d\'entreprise',
        'events': 'Événementiel',
        'other': 'Autre'
    };
    return types[type] || 'Autre';
}

function getDeliveryFrequencyText(frequency) {
    const frequencies = {
        'daily': 'Quotidienne',
        'weekly': 'Hebdomadaire',
        'biweekly': 'Bi-hebdomadaire',
        'monthly': 'Mensuelle',
        'occasional': 'Occasionnelle'
    };
    return frequencies[frequency] || 'Non spécifié';
}

// ===== FONCTIONS ADMIN =====
async function submitOrderToAdmin(orderData) {
    console.log('📤 Envoi de la commande à l\'admin...');
    
    try {
        let orders = JSON.parse(localStorage.getItem('andy_orders') || '[]');
        
        const newOrder = {
            id: 'CMD-' + Date.now().toString().slice(-6),
            client: {
                name: orderData.name || 'Client',
                email: orderData.email || '',
                phone: orderData.phone || '',
                address: orderData.address || ''
            },
            items: orderData.items || [],
            total: orderData.total || 0,
            status: 'pending',
            date: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        orders.push(newOrder);
        localStorage.setItem('andy_orders', JSON.stringify(orders));
        
        addAdminActivity(`Nouvelle commande #${newOrder.id} de ${newOrder.client.name}`);
        
        await notifyClientOrder({
            orderNumber: newOrder.id,
            date: newOrder.date,
            customerName: newOrder.client.name,
            customerEmail: newOrder.client.email,
            customerPhone: newOrder.client.phone,
            customerAddress: newOrder.client.address,
            items: newOrder.items,
            total: newOrder.total
        });
        
        console.log('✅ Commande sauvegardée pour l\'admin:', newOrder);
        return newOrder;
        
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde:', error);
        throw error;
    }
}

function addAdminActivity(message) {
    try {
        let activities = JSON.parse(localStorage.getItem('andy_admin_activities') || '[]');
        activities.unshift({
            title: message,
            type: 'order',
            timestamp: new Date().toISOString(),
            read: false
        });
        
        if (activities.length > 100) {
            activities = activities.slice(0, 100);
        }
        
        localStorage.setItem('andy_admin_activities', JSON.stringify(activities));
        console.log('📝 Activité ajoutée pour l\'admin:', message);
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'activité:', error);
    }
}

async function submitRestaurantOrderToAdmin(orderData) {
    console.log('📤 Envoi de la commande restaurant à l\'admin...');
    
    try {
        let restaurantOrders = JSON.parse(localStorage.getItem('andy_restaurant_orders') || '[]');
        
        const newOrder = {
            id: 'CMD-PRO-' + Date.now().toString().slice(-6),
            restaurantName: orderData.restaurantName,
            contactName: orderData.contactName,
            email: orderData.email,
            phone: orderData.phone,
            address: orderData.address,
            restaurantType: orderData.restaurantType,
            deliveryFrequency: orderData.deliveryFrequency,
            specialNotes: orderData.specialNotes,
            items: orderData.items || [],
            total: orderData.total || 0,
            status: 'quote_request',
            date: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        restaurantOrders.push(newOrder);
        localStorage.setItem('andy_restaurant_orders', JSON.stringify(restaurantOrders));
        
        addAdminActivity(`Nouvelle demande de devis #${newOrder.id} de ${newOrder.restaurantName}`);
        
        await notifyRestaurantOrder({
            orderNumber: newOrder.id,
            orderDate: new Date(newOrder.date).toLocaleString('fr-FR'),
            restaurantName: newOrder.restaurantName,
            contactName: newOrder.contactName,
            email: newOrder.email,
            phone: newOrder.phone,
            address: newOrder.address,
            restaurantType: newOrder.restaurantType,
            deliveryFrequency: newOrder.deliveryFrequency,
            specialNotes: newOrder.specialNotes,
            items: newOrder.items
        });
        
        console.log('✅ Commande restaurant sauvegardée:', newOrder);
        return newOrder;
        
    } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde:', error);
        throw error;
    }
}

// ===== INITIALISATION =====
window.CONFIG = CONFIG;

function initWhatsAppWidget(defaultMessage) {
    const message = defaultMessage || 'Bonjour, je souhaite des informations.';
    const waBase = `https://wa.me/${CONFIG.whatsappNumber}`;

    document.querySelectorAll('.whatsapp-chat-link').forEach(link => {
        const customText = link.dataset.whatsappText || message;
        link.href = `${waBase}?text=${encodeURIComponent(customText)}`;
        if (link.textContent.trim().match(/^\d/) || link.textContent.includes('07')) {
            link.textContent = '07 98 567 514';
        }
    });

    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
        if (!link.classList.contains('whatsapp-chat-link')) {
            const text = link.dataset.whatsappText || (link.href.includes('text=') ? '' : message);
            link.href = text ? `${waBase}?text=${encodeURIComponent(text)}` : waBase;
        }
    });

    const bubble = document.getElementById('whatsappBubble');
    const btn = document.getElementById('whatsappBtn');
    const closeBtn = document.getElementById('closeWhatsappBubble');

    if (!bubble || !btn) return;

    btn.addEventListener('click', () => bubble.classList.toggle('show'));
    closeBtn?.addEventListener('click', () => bubble.classList.remove('show'));

    document.addEventListener('click', (e) => {
        if (bubble.classList.contains('show') &&
            !e.target.closest('#whatsappBubble') &&
            !e.target.closest('#whatsappBtn')) {
            bubble.classList.remove('show');
        }
    });

    setTimeout(() => bubble.classList.add('show'), 10000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🥩 Andy la Boucherie - Site initialisé');

    initWhatsAppWidget(
        document.getElementById('restaurantOrderForm')
            ? 'Bonjour, je souhaite obtenir un devis pour mon restaurant'
            : 'Bonjour, je souhaite des informations sur vos produits'
    );

    // Exposer les fonctions globalement (utilisées aussi par restaurants.html)
    window.submitOrderToAdmin = submitOrderToAdmin;
    window.submitRestaurantOrderToAdmin = submitRestaurantOrderToAdmin;
    window.addAdminActivity = addAdminActivity;
    window.notifyClientOrder = notifyClientOrder;
    window.notifyRestaurantOrder = notifyRestaurantOrder;
    window.notifyContact = notifyContact;
    window.openWhatsApp = openWhatsApp;
    window.getRestaurantTypeText = getRestaurantTypeText;
    window.getDeliveryFrequencyText = getDeliveryFrequencyText;

    // Initialiser l'UI principale uniquement sur la page d'accueil
    if (!document.getElementById('contactForm')) return;

    const uiManager = new UIManager();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                if (uiManager.elements.nav?.classList.contains('active')) {
                    uiManager.toggleMobileMenu(false);
                }

                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Filtres catégorie depuis le footer
    document.querySelectorAll('a[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            const filter = this.dataset.filter;
            const productsSection = document.getElementById('products');
            if (!filter || !productsSection) return;

            e.preventDefault();
            uiManager.elements.filterBtns?.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === filter);
            });
            uiManager.renderProducts(filter);

            window.scrollTo({
                top: productsSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    window.uiManager = uiManager;
});
