// Données des produits
const products = [
    {
        id: 1,
        name: "Tomahawk de bœuf",
        description: "Côte de bœuf avec l'os long, parfaite pour les grillades. Viande persillée et tendre.",
        price: 25,
        image: "https://laboucherie.be/cdn/shop/products/tomahawk-rubia-gallega-mature-la-boucherie-viande-en-ligne.jpg?v=1643725171",
        unit: "pièce",
        category: "beef"
    },
    {
        id: 2,
        name: "Entrecôte de bœuf",
        description: "Morceau persillé, idéal pour les grillades. Origine locale, élevage en plein air.",
        price: 18,
        image: "https://boutique.pacantal.fr/wp-content/uploads/2024/08/Entrecote-scaled.jpg",
        unit: "kg",
        category: "beef"
    },
    {
        id: 3,
        name: "Filet de bœuf",
        description: "Le morceau le plus tendre, parfait pour les tournedos et béarnaise.",
        price: 32,
        image: "https://media.istockphoto.com/id/475924176/fr/photo/fruits-de-mer-de-prime-fra%C3%AEcheur-et-de-la-viande-steaks-de-faux-filet-row-pr%C3%AAt-%C3%A0-cuisiner.jpg?s=612x612&w=0&k=20&c=66UjKOXPq_OIJwh6KheK16uMDeBGxhvLJVi4JOlC7xU=",
        unit: "kg",
        category: "beef"
    },
    {
        id: 4,
        name: "T-Bone",
        description: "Steak contenant à la fois le filet et le contre-filet. Parfait pour les amateurs.",
        price: 28,
        image: "https://static.ticimax.cloud/43437/uploads/urunresimleri/buyuk/premium-t-bone-steak-f4212a.jpg",
        unit: "pièce",
        category: "beef"
    },
    {
        id: 5,
        name: "Ribs de bœuf",
        description: "Côtes levées de bœuf, idéales pour la cuisson lente et barbecue.",
        price: 16,
        image: "https://meatbros.lu/site/71-home_default/st-louis-spare-ribs.jpg",
        unit: "kg",
        category: "beef"
    },
    {
        id: 6,
        name: "Joue de bœuf",
        description: "Viande gélatineuse parfaite pour les mijotés et plats en sauce.",
        price: 12,
        image: "https://maisonduroti.com/cdn/shop/products/Joue-de-boeuf_c1560eb8-e139-46df-b489-95f8bad2a8b8_530x@2x.jpg?v=1642098059",
        unit: "kg",
        category: "beef"
    },
    {
        id: 7,
        name: "Patte de bœuf",
        description: "Idéale pour préparer du bouillon riche et nourrissant.",
        price: 8,
        image: "https://epicerierina.ca/wp-content/uploads/2021/07/pied-de-boeuf.png",
        unit: "kg",
        category: "beef"
    },
    {
        id: 8,
        name: "Queue de bœuf",
        description: "Parfaite pour les ragoûts et soupes, riche en collagène.",
        price: 10,
        image: "https://dynfiles.comme-a-la-boucherie.com/original-catalogue-produit-11-21-2023---10-05-15---706.jpg",
        unit: "kg",
        category: "beef"
    },
    {
        id: 9,
        name: "Cuisses de bœuf",
        description: "Morceaux savoureux pour les plats mijotés et braisés.",
        price: 14,
        image: "https://img.freepik.com/photos-premium/cuisse-boeuf-crue-planche-bois-marron_93675-109904.jpg",
        unit: "kg",
        category: "beef"
    },
    {
        id: 10,
        name: "Épaules de bœuf",
        description: "Viande goûteuse, parfaite pour les pot-au-feu et daubes.",
        price: 15,
        image: "https://monbeaubonboeuf.ca/cdn/shop/files/Marteau_de_thor_a0fcb2d0-63e3-4491-8a53-a837900ecba2.jpg?crop=center&height=3024&v=1723597252&width=3024",
        unit: "kg",
        category: "beef"
    },
    {
        id: 11,
        name: "Saucisses de bœuf",
        description: "Saucisses artisanales 100% bœuf, parfumées aux herbes.",
        price: 22,
        image: "https://www.boeuf-a-la-ferme.fr/wp-content/uploads/2020/07/saucisse-boeuf-herbes-blond-aquitaine-ferme-producteur-gaec-villeneuve-480x480.webp",
        unit: "kg",
        category: "beef"
    },
    {
        id: 12,
        name: "Viande pour burger",
        description: "Haché spécial burger, 80% de maigre, 20% de gras pour un burger juteux.",
        price: 18,
        image: "https://www.leseleveursdelacharentonne.fr/documents/1383_1.jpg",
        unit: "kg",
        category: "beef"
    },
    {
        id: 13,
        name: "Viande hachée",
        description: "Haché de bœuf 15% de matière grasse, parfait pour les sauces et lasagnes.",
        price: 16,
        image: "https://img-3.journaldesfemmes.fr/SFp-8xzyuMZZLC59bRuGHZvoohQ=/1500x/smart/a9e53b751f6a47748c6dd5b64c93a8af/ccmcms-jdf/35554472.jpg",
        unit: "kg",
        category: "beef"
    },
    {
        id: 14,
        name: "Souris d'agneau",
        description: "Morceau d'épaule d'agneau, tendre et savoureux après cuisson lente.",
        price: 24,
        image: "https://drive.fechter.fr/1-large_default/souris-d-agneau-450-gr.jpg",
        unit: "kg",
        category: "lamb"
    },
    {
        id: 15,
        name: "Agneau entier",
        description: "Agneau entier prêt à rôtir, parfait pour les grandes occasions.",
        price: 45,
        image: "https://www.happymeat.ch/wp-content/uploads/2013/10/Demi-agneau.jpg",
        unit: "pièce",
        category: "lamb"
    },
    {
        id: 16,
        name: "Viande d'autruche",
        description: "Viande rouge maigre, riche en protéines et faible en cholestérol.",
        price: 35,
        image: "https://bretagne-autruches.com/wp-content/uploads/2024/03/bretagne-autruches-photo-cuisne-viande-autruche-non-cuite.jpg",
        unit: "kg",
        category: "ostrich"
    },
];


// Panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Éléments du DOM
const DOM = {
    cartIcon: document.getElementById('cart-icon'),
    cartCount: document.querySelector('.cart-count'),
    viewCartBtn: document.getElementById('view-cart'),
    cartModal: document.getElementById('cart-modal'),
    closeModal: document.querySelector('.close-modal'),
    continueShoppingBtn: document.getElementById('continue-shopping'),
    checkoutBtn: document.getElementById('checkout-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartTotal: document.getElementById('cart-total'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    payWithWaveBtn: document.getElementById('pay-with-wave'),
    btnAmount: document.getElementById('btn-amount'),
    productsGrid: document.getElementById('products-grid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    navModern: document.querySelector('.nav-modern'),
    backToTopBtn: document.getElementById('back-to-top'),
    loadingOverlay: document.getElementById('loading-overlay'),
    successModal: document.getElementById('success-modal'),
    closeSuccessBtn: document.getElementById('close-success'),
    contactForm: document.getElementById('contact-form')
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    function init() {
        renderProducts();
        updateCart();
        setupEventListeners();
        setupMobileMenu();
        setupBackToTop();
        setupProductFilters();
    }

    // Afficher les produits
    function renderProducts(filter = 'all') {
        let html = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        if (filteredProducts.length === 0) {
            html = '<p class="no-products">Aucun produit trouvé dans cette catégorie</p>';
        } else {
            filteredProducts.forEach(product => {
                html += `
                    <div class="modern-product-card" data-id="${product.id}" data-category="${product.category}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" loading="lazy">
                            <div class="product-overlay">
                                <button class="quick-add-btn">
                                    <i class="fas fa-plus"></i>
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <span class="product-category">${getCategoryName(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            
                            <div class="product-price">
                                <span class="price-amount">${formatPrice(product.price)}</span>
                                <span class="price-unit">FCFA/${product.unit}</span>
                            </div>
                            
                            <div class="product-actions">
                                <div class="quantity-selector">
                                    <button class="quantity-btn decrement">-</button>
                                    <input type="number" value="1" min="1" class="quantity">
                                    <button class="quantity-btn increment">+</button>
                                </div>
                                <button class="btn add-to-cart">
                                    <i class="fas fa-cart-plus"></i>
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        DOM.productsGrid.innerHTML = html;
        
        // Réattacher les événements
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', addToCart);
        });
        
        document.querySelectorAll('.increment').forEach(btn => {
            btn.addEventListener('click', incrementQuantity);
        });
        
        document.querySelectorAll('.decrement').forEach(btn => {
            btn.addEventListener('click', decrementQuantity);
        });
        
        document.querySelectorAll('.quick-add-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const productCard = e.target.closest('.modern-product-card');
                const quantityInput = productCard.querySelector('.quantity');
                quantityInput.value = 1;
                addToCartFromQuickButton(e, productCard);
            });
        });
    }

    function addToCartFromQuickButton(e, productCard) {
        const productId = parseInt(productCard.dataset.id);
        const quantity = 1;
        
        const product = products.find(p => p.id === productId);
        
        // Vérifier si le produit est déjà dans le panier
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity: quantity
            });
        }
        
        updateCart();
        showToast(`${quantity} ${product.name} ajouté${quantity > 1 ? 's' : ''} au panier`);
        saveCartToLocalStorage();
    }

    function getCategoryName(category) {
    const categories = {
        beef: 'Bœuf',
        lamb: 'Agneau',
        ostrich: 'Autruche',
    };
    return categories[category] || 'Viande';
}

    function formatPrice(price) {
        return new Intl.NumberFormat('fr-FR').format(price);
    }

    // Gestion du panier
    function addToCart(e) {
        const productCard = e.target.closest('.modern-product-card');
        const productId = parseInt(productCard.dataset.id);
        const quantity = parseInt(productCard.querySelector('.quantity').value);
        
        const product = products.find(p => p.id === productId);
        
        // Animation du bouton
        const addButton = productCard.querySelector('.add-to-cart');
        addButton.classList.add('added');
        setTimeout(() => addButton.classList.remove('added'), 1000);
        
        // Vérifier si le produit est déjà dans le panier
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity: quantity
            });
        }
        
        updateCart();
        showToast(`${quantity} ${product.name} ajouté${quantity > 1 ? 's' : ''} au panier`);
        saveCartToLocalStorage();
    }

    function updateCart() {
        // Mettre à jour le compteur
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        DOM.cartCount.textContent = totalItems;
        DOM.cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        
        // Mettre à jour l'aperçu du panier
        updateCartPreview();
        
        // Mettre à jour le modal du panier
        renderCartItems();
    }

    function updateCartPreview() {
        const cartPreview = document.querySelector('.cart-preview');
        const cartPreviewText = document.querySelector('.cart-preview-text');
        
        if (cart.length > 0) {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartPreview.classList.add('has-items');
            cartPreviewText.textContent = `${formatPrice(total)} FCFA`;
        } else {
            cartPreview.classList.remove('has-items');
            cartPreviewText.textContent = 'Votre panier est vide';
        }
    }

    function renderCartItems() {
        if (cart.length === 0) {
            DOM.cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>Votre panier est vide</h4>
                    <p>Découvrez nos délicieux produits et ajoutez-les à votre panier</p>
                </div>
            `;
            
            DOM.cartSubtotal.textContent = '0 FCFA';
            DOM.cartTotal.textContent = '0 FCFA';
            DOM.btnAmount.textContent = '0 FCFA';
            DOM.checkoutBtn.style.display = 'none';
            return;
        }
        
        DOM.checkoutBtn.style.display = 'block';
        
        let html = '';
        let subtotal = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            
            html += `
                <div class="modern-cart-item" data-id="${item.id}">
                    <div class="cart-item-info">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${formatPrice(item.price)} FCFA/${item.unit}</div>
                        </div>
                    </div>
                    
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn decrement">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input type="number" value="${item.quantity}" min="1" class="cart-item-quantity">
                            <button class="quantity-btn increment">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                        <div class="cart-item-total">${formatPrice(itemTotal)} FCFA</div>
                        
                        <button class="remove-item">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        DOM.cartItemsContainer.innerHTML = html;
        DOM.cartSubtotal.textContent = `${formatPrice(subtotal)} FCFA`;
        DOM.cartTotal.textContent = `${formatPrice(subtotal)} FCFA`;
        DOM.btnAmount.textContent = `${formatPrice(subtotal)} FCFA`;
        
        // Ajouter les événements pour les éléments du panier
        document.querySelectorAll('.cart-item-actions .increment').forEach(button => {
            button.addEventListener('click', incrementCartItem);
        });
        
        document.querySelectorAll('.cart-item-actions .decrement').forEach(button => {
            button.addEventListener('click', decrementCartItem);
        });
        
        document.querySelectorAll('.cart-item-quantity').forEach(input => {
            input.addEventListener('change', updateCartItemQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeCartItem);
        });
    }

    // Gestion des quantités
    function incrementQuantity(e) {
        const input = e.target.parentElement.querySelector('.quantity');
        input.value = parseInt(input.value) + 1;
    }

    function decrementQuantity(e) {
        const input = e.target.parentElement.querySelector('.quantity');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    }

    function incrementCartItem(e) {
        const cartItem = e.target.closest('.modern-cart-item');
        const productId = parseInt(cartItem.dataset.id);
        const input = cartItem.querySelector('.cart-item-quantity');
        input.value = parseInt(input.value) + 1;
        updateCartItem(productId, parseInt(input.value));
    }

    function decrementCartItem(e) {
        const cartItem = e.target.closest('.modern-cart-item');
        const productId = parseInt(cartItem.dataset.id);
        const input = cartItem.querySelector('.cart-item-quantity');
        
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
            updateCartItem(productId, parseInt(input.value));
        }
    }

    function updateCartItemQuantity(e) {
        const cartItem = e.target.closest('.modern-cart-item');
        const productId = parseInt(cartItem.dataset.id);
        const quantity = parseInt(e.target.value);
        
        if (quantity >= 1) {
            updateCartItem(productId, quantity);
        } else {
            e.target.value = 1;
        }
    }

    function updateCartItem(productId, quantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            updateCart();
            saveCartToLocalStorage();
        }
    }

    function removeCartItem(e) {
        const cartItem = e.target.closest('.modern-cart-item');
        const productId = parseInt(cartItem.dataset.id);
        
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        saveCartToLocalStorage();
        showToast('Produit retiré du panier');
    }

    // Gestion des modales
    function openCartModal() {
        DOM.cartModal.style.display = 'flex';
        DOM.checkoutForm.style.display = 'none';
        document.body.style.overflow = 'hidden';
        
        // Animation
        setTimeout(() => {
            DOM.cartModal.classList.add('show');
        }, 10);
    }

    function closeCartModal() {
        DOM.cartModal.classList.remove('show');
        
        setTimeout(() => {
            DOM.cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    function showCheckoutForm() {
        DOM.checkoutForm.style.display = 'block';
        DOM.checkoutForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Paiement avec Wave
    function processPayment(e) {
    e.preventDefault();
    
    // Validation du formulaire
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const deliveryAddress = document.getElementById('delivery-address').value.trim();
    
    if (!firstName || !lastName || !email || !phone || !deliveryAddress) {
        showError('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('Veuillez entrer une adresse email valide');
        return;
    }
    
    // Calcul du total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Enregistrer la commande localement
    const order = {
        customer: { firstName, lastName, email, phone, address: deliveryAddress },
        items: cart,
        total,
        date: new Date().toISOString()
    };
    
    // Stocker la commande temporairement
    localStorage.setItem('currentOrder', JSON.stringify(order));
    
    // Redirection vers Wave pour le paiement
    window.open('https://pay.jeko.africa/pl/aafb9b53-2952-4c05-bc10-ce89cc21d216', '_blank');
    
    // Afficher le message de succès
    showSuccessModal();
    
    // Réinitialiser le panier
    cart = [];
    updateCart();
    saveCartToLocalStorage();
}

    // Notifications
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast-notification show';
        toast.innerHTML = `
            <div class="toast-content">
                <div class="toast-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="toast-text">
                    <div class="toast-title">Panier mis à jour</div>
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Fermeture automatique
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
        
        // Fermeture manuelle
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }

    function showError(message) {
        const error = document.createElement('div');
        error.className = 'error-message show';
        error.innerHTML = `
            <div class="error-content">
                <i class="fas fa-exclamation-circle"></i>
                <div>
                    <h4>Erreur</h4>
                    <p>${message}</p>
                </div>
                <button class="error-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(error);
        
        setTimeout(() => {
            error.classList.remove('show');
            setTimeout(() => error.remove(), 300);
        }, 5000);
        
        error.querySelector('.error-close').addEventListener('click', () => {
            error.classList.remove('show');
            setTimeout(() => error.remove(), 300);
        });
    }

    function showLoading() {
        DOM.loadingOverlay.style.display = 'flex';
        setTimeout(() => {
            DOM.loadingOverlay.classList.add('show');
        }, 10);
    }

    function hideLoading() {
        DOM.loadingOverlay.classList.remove('show');
        setTimeout(() => {
            DOM.loadingOverlay.style.display = 'none';
        }, 300);
    }

    function showSuccessModal() {
        DOM.successModal.style.display = 'flex';
        setTimeout(() => {
            DOM.successModal.classList.add('show');
        }, 10);
    }

    function hideSuccessModal() {
        DOM.successModal.classList.remove('show');
        setTimeout(() => {
            DOM.successModal.style.display = 'none';
        }, 300);
    }

    // LocalStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Menu mobile
    function setupMobileMenu() {
        DOM.mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            DOM.navModern.classList.toggle('active');
        });
    }

    // Back to top
    function setupBackToTop() {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                DOM.backToTopBtn.classList.add('visible');
            } else {
                DOM.backToTopBtn.classList.remove('visible');
            }
        });
        
        DOM.backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Filtres produits
    function setupProductFilters() {
        DOM.filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                DOM.filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                renderProducts(this.dataset.filter);
            });
        });
    }

    // Configuration des événements
    function setupEventListeners() {
        // Panier
        DOM.cartIcon.addEventListener('click', openCartModal);
        DOM.viewCartBtn.addEventListener('click', openCartModal);
        DOM.closeModal.addEventListener('click', closeCartModal);
        DOM.continueShoppingBtn.addEventListener('click', closeCartModal);
        DOM.checkoutBtn.addEventListener('click', showCheckoutForm);
        
        // Paiement
        DOM.payWithWaveBtn.addEventListener('click', processPayment);
        
        // Success modal
        DOM.closeSuccessBtn.addEventListener('click', hideSuccessModal);
        
        // Fermer les modales en cliquant à l'extérieur
        document.addEventListener('click', function(e) {
            if (e.target === DOM.cartModal) {
                closeCartModal();
            }
            if (e.target === DOM.successModal) {
                hideSuccessModal();
            }
        });
        
        // Fermer avec Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCartModal();
                hideSuccessModal();
            }
        });
        
        // Formulaire de contact
        if (DOM.contactForm) {
            DOM.contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                showToast('Votre message a été envoyé avec succès !');
                this.reset();
            });
        }
    }
});