// Gestion des erreurs de chargement d'images
function handleImageError(img) {
    img.onerror = function() {
        this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23f0f0f0"/><text x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="16">Image non disponible</text></svg>';
        this.alt = 'Image non disponible';
    };
}

// Données des produits
const products = [
    {
        id: 1,
        name: "Tomahawk de bœuf",
        description: "Côte de bœuf avec l'os long, parfaite pour les grillades. Viande persillée et tendre.",
        price: 7500,
        image: "https://laboucherie.be/cdn/shop/products/tomahawk-rubia-gallega-mature-la-boucherie-viande-en-ligne.jpg?v=1643725171",
        unit: "250g",
        category: "beef"
    },
    {
        id: 2,
        name: "Entrecôte de bœuf",
        description: "Morceau persillé, idéal pour les grillades. Origine locale, élevage en plein air.",
        price:5000,
        image: "https://boutique.pacantal.fr/wp-content/uploads/2024/08/Entrecote-scaled.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 3,
        name: "Filet de bœuf",
        description: "Le morceau le plus tendre, parfait pour les tournedos et béarnaise.",
        price: 5000,
        image: "https://media.istockphoto.com/id/475924176/fr/photo/fruits-de-mer-de-prime-fra%C3%AEcheur-et-de-la-viande-steaks-de-faux-filet-row-pr%C3%AAt-%C3%A0-cuisiner.jpg?s=612x612&w=0&k=20&c=66UjKOXPq_OIJwh6KheK16uMDeBGxhvLJVi4JOlC7xU=",
        unit: "250g",
        category: "beef"
    },
    {
        id: 4,
        name: "T-Bone",
        description: "Steak contenant à la fois le filet et le contre-filet. Parfait pour les amateurs.",
        price: 5000,
        image: "https://static.ticimax.cloud/43437/uploads/urunresimleri/buyuk/premium-t-bone-steak-f4212a.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 5,
        name: "Ribs de bœuf",
        description: "Côtes levées de bœuf, idéales pour la cuisson lente et barbecue.",
        price: 5000,
        image: "https://meatbros.lu/site/71-home_default/st-louis-spare-ribs.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 6,
        name: "Joue de bœuf",
        description: "Viande gélatineuse parfaite pour les mijotés et plats en sauce.",
        price: 5000,
        image: "https://maisonduroti.com/cdn/shop/products/Joue-de-boeuf_c1560eb8-e139-46df-b489-95f8bad2a8b8_530x@2x.jpg?v=1642098059",
        unit: "250g",
        category: "beef"
    },
    {
        id: 7,
        name: "Patte de bœuf",
        description: "Idéale pour préparer du bouillon riche et nourrissant.",
        price: 5000,
        image: "https://epicerierina.ca/wp-content/uploads/2021/07/pied-de-boeuf.png",
        unit: "250g",
        category: "beef"
    },
    {
        id: 8,
        name: "Queue de bœuf",
        description: "Parfaite pour les ragoûts et soupes, riche en collagène.",
        price: 5000,
        image: "https://dynfiles.comme-a-la-boucherie.com/original-catalogue-produit-11-21-2023---10-05-15---706.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 9,
        name: "Cuisses de bœuf",
        description: "Morceaux savoureux pour les plats mijotés et braisés.",
        price: 5000,
        image: "https://img.freepik.com/photos-premium/cuisse-boeuf-crue-planche-bois-marron_93675-109904.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 10,
        name: "Épaules de bœuf",
        description: "Viande goûteuse, parfaite pour les pot-au-feu et daubes.",
        price: 5000,
        image: "https://monbeaubonboeuf.ca/cdn/shop/files/Marteau_de_thor_a0fcb2d0-63e3-4491-8a53-a837900ecba2.jpg?crop=center&height=3024&v=1723597252&width=3024",
        unit: "250g",
        category: "beef"
    },
    {
        id: 11,
        name: "Saucisses de bœuf",
        description: "Saucisses artisanales 100% bœuf, parfumées aux herbes.",
        price: 5000,
        image: "https://www.boeuf-a-la-ferme.fr/wp-content/uploads/2020/07/saucisse-boeuf-herbes-blond-aquitaine-ferme-producteur-gaec-villeneuve-480x480.webp",
        unit: "250g",
        category: "beef"
    },
    {
        id: 12,
        name: "Viande pour burger",
        description: "Haché spécial burger, 80% de maigre, 20% de gras pour un burger juteux.",
        price: 5000,
        image: "https://www.leseleveursdelacharentonne.fr/documents/1383_1.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 13,
        name: "Viande hachée",
        description: "Haché de bœuf 15% de matière grasse, parfait pour les sauces et lasagnes.",
        price: 5000,
        image: "https://img-3.journaldesfemmes.fr/SFp-8xzyuMZZLC59bRuGHZvoohQ=/1500x/smart/a9e53b751f6a47748c6dd5b64c93a8af/ccmcms-jdf/35554472.jpg",
        unit: "250g",
        category: "beef"
    },
    {
        id: 14,
        name: "Souris d'agneau",
        description: "Morceau d'épaule d'agneau, tendre et savoureux après cuisson lente.",
        price: 5000,
        image: "https://drive.fechter.fr/1-large_default/souris-d-agneau-450-gr.jpg",
        unit: "250g",
        category: "lamb"
    },
    {
        id: 15,
        name: "Agneau entier",
        description: "Agneau entier prêt à rôtir, parfait pour les grandes occasions.",
        price: 5000,
        image: "https://www.happymeat.ch/wp-content/uploads/2013/10/Demi-agneau.jpg",
        unit: "250g",
        category: "lamb"
    },
    {
        id: 16,
        name: "Viande d'autruche",
        description: "Viande rouge maigre, riche en protéines et faible en cholestérol.",
        price: 5000,
        image: "https://bretagne-autruches.com/wp-content/uploads/2024/03/bretagne-autruches-photo-cuisne-viande-autruche-non-cuite.jpg",
        unit: "250g",
        category: "ostrich"
    },
];

// Panier - chargement sécurisé
let cart = [];
try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
} catch (error) {
    console.error('Erreur lors du chargement initial du panier:', error);
    cart = [];
}

// Panier restaurants - chargement sécurisé
let restaurantCart = [];
try {
    const savedRestaurantCart = localStorage.getItem('restaurantCart');
    if (savedRestaurantCart) {
        restaurantCart = JSON.parse(savedRestaurantCart);
    }
} catch (error) {
    console.error('Erreur lors du chargement initial du panier restaurant:', error);
    restaurantCart = [];
}

// Éléments du DOM
const DOM = {
    cartIcon: document.getElementById('cart-icon'),
    cartCount: document.querySelector('.cart-count'),
    viewCartBtn: document.getElementById('view-cart'),
    cartModal: document.getElementById('cart-modal'),
    closeModal: document.getElementById('close-modal'),
    continueShoppingBtn: document.getElementById('continue-shopping'),
    checkoutBtn: document.getElementById('checkout-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutFormFields: document.getElementById('checkout-form-fields'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartTotal: document.getElementById('cart-total'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    payNowBtn: document.getElementById('pay-now-btn'),
    btnAmount: document.getElementById('btn-amount'),
    productsGrid: document.getElementById('products-grid'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    navModern: document.querySelector('.nav-modern'),
    backToTopBtn: document.getElementById('back-to-top'),
    loadingOverlay: document.getElementById('loading-overlay'),
    successModal: document.getElementById('success-modal'),
    closeSuccessBtn: document.getElementById('close-success'),
    cartPreview: document.getElementById('cart-preview'),
    restaurantsGrid: document.getElementById('restaurants-grid'),
    filterButtonsRestaurant: null, // Sera initialisé après le chargement
    requestQuoteBtn: document.getElementById('request-quote-btn'),
    restaurantQuoteModal: document.getElementById('restaurant-quote-modal'),
    closeQuoteModal: document.getElementById('close-quote-modal'),
    restaurantQuoteForm: document.getElementById('restaurant-quote-form'),
    restaurantQuoteItems: document.getElementById('restaurant-quote-items'),
    cancelQuoteBtn: document.getElementById('cancel-quote'),
    restaurantCartPreview: document.getElementById('restaurant-cart-preview')
};

// Fonctions utilitaires
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

function getCategoryName(category) {
    const categories = {
        beef: 'Bœuf',
        lamb: 'Agneau',
        ostrich: 'Autruche',
    };
    return categories[category] || 'Viande';
}

function showToast(message, title = 'Notification') {
    if (window.showToast) {
        window.showToast(message, title);
    } else {
        console.log(`${title}: ${message}`);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    function init() {
        // Détecter si on est sur la page restaurants
        const isRestaurantPage = window.location.pathname.includes('restaurants.html') || document.getElementById('restaurants-grid');
        
        // Initialiser les éléments DOM qui peuvent ne pas être disponibles immédiatement
        DOM.filterButtonsRestaurant = document.querySelectorAll('.filter-btn-restaurant');
        
        // Initialiser seulement ce qui est nécessaire selon la page
        if (isRestaurantPage) {
            // Page restaurants
            renderRestaurantProducts();
            updateRestaurantCart();
            setupRestaurantFilters();
        } else {
            // Page principale
            renderProducts();
            updateCart();
            setupProductFilters();
        }
        
        setupEventListeners();
        setupMobileMenu();
        setupBackToTop();
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
                            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\'><rect width=\\'400\\' height=\\'300\\' fill=\\'%23f0f0f0\\'/><text x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' fill=\\'%23999\\' font-family=\\'Arial\\' font-size=\\'16\\'>Image non disponible</text></svg>';">
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
                addToCartFromQuickButton(productCard);
            });
        });
    }

    function addToCartFromQuickButton(productCard) {
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
        if (DOM.cartCount) {
            DOM.cartCount.textContent = totalItems;
            DOM.cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // Mettre à jour l'aperçu du panier
        updateCartPreview();
        
        // Mettre à jour le modal du panier
        renderCartItems();
    }

    function updateCartPreview() {
        const cartPreview = document.querySelector('.cart-preview');
        const cartPreviewText = document.querySelector('.cart-preview-text');
        
        if (cartPreview && cartPreviewText) {
            if (cart.length > 0) {
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                cartPreview.classList.add('has-items');
                cartPreviewText.textContent = `${formatPrice(total)} FCFA`;
            } else {
                cartPreview.classList.remove('has-items');
                cartPreviewText.textContent = 'Votre panier est vide';
            }
        }
    }

    function renderCartItems() {
        if (!DOM.cartItemsContainer) return;
        
        if (cart.length === 0) {
            DOM.cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h4>Votre panier est vide</h4>
                    <p>Découvrez nos délicieux produits et ajoutez-les à votre panier</p>
                </div>
            `;
            
            if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = '0 FCFA';
            if (DOM.cartTotal) DOM.cartTotal.textContent = '0 FCFA';
            if (DOM.btnAmount) DOM.btnAmount.textContent = '0 FCFA';
            if (DOM.checkoutBtn) DOM.checkoutBtn.style.display = 'none';
            return;
        }
        
        if (DOM.checkoutBtn) DOM.checkoutBtn.style.display = 'block';
        
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
        if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = `${formatPrice(subtotal)} FCFA`;
        if (DOM.cartTotal) DOM.cartTotal.textContent = `${formatPrice(subtotal)} FCFA`;
        if (DOM.btnAmount) DOM.btnAmount.textContent = `${formatPrice(subtotal)} FCFA`;
        
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
        if (!DOM.cartModal) return;
        
        DOM.cartModal.style.display = 'flex';
        if (DOM.checkoutForm) DOM.checkoutForm.style.display = 'none';
        document.body.style.overflow = 'hidden';
        
        // Animation
        setTimeout(() => {
            DOM.cartModal.classList.add('show');
        }, 10);
    }

    function closeCartModal() {
        if (!DOM.cartModal) return;
        
        DOM.cartModal.classList.remove('show');
        
        setTimeout(() => {
            DOM.cartModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    function showCheckoutForm() {
        if (!DOM.checkoutForm) return;
        
        DOM.checkoutForm.style.display = 'block';
        DOM.checkoutForm.scrollIntoView({ behavior: 'smooth' });
    }

    // Validation améliorée
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePhone(phone) {
        // Accepte les numéros avec ou sans espaces, tirets, points
        const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
    }

    // Paiement
    function processPayment(e) {
        if (e) e.preventDefault();
        
        // Validation du formulaire
        const firstName = document.getElementById('first-name')?.value.trim();
        const lastName = document.getElementById('last-name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const deliveryAddress = document.getElementById('delivery-address')?.value.trim();
        
        if (!firstName || !lastName || !email || !phone || !deliveryAddress) {
            showToast('Veuillez remplir tous les champs obligatoires', 'Erreur');
            return false;
        }
        
        if (firstName.length < 2) {
            showToast('Le prénom doit contenir au moins 2 caractères', 'Erreur');
            return false;
        }
        
        if (lastName.length < 2) {
            showToast('Le nom doit contenir au moins 2 caractères', 'Erreur');
            return false;
        }
        
        if (!validateEmail(email)) {
            showToast('Veuillez entrer une adresse email valide', 'Erreur');
            return false;
        }
        
        if (!validatePhone(phone)) {
            showToast('Veuillez entrer un numéro de téléphone valide', 'Erreur');
            return false;
        }
        
        if (deliveryAddress.length < 10) {
            showToast('Veuillez entrer une adresse de livraison complète', 'Erreur');
            return false;
        }
        
        if (cart.length === 0) {
            showToast('Votre panier est vide', 'Erreur');
            return false;
        }
        
        // Calcul du total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // Enregistrer la commande localement
        const order = {
            id: 'CMD-' + Date.now(),
            customer: { firstName, lastName, email, phone, address: deliveryAddress },
            items: [...cart],
            total,
            date: new Date().toISOString(),
            status: 'En attente'
        };
        
        // Stocker la commande
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Stocker la commande temporairement
        localStorage.setItem('currentOrder', JSON.stringify(order));
        
        // Afficher le message de succès
        showSuccessModal();
        
        // Réinitialiser le panier
        cart = [];
        updateCart();
        saveCartToLocalStorage();
        
        // Fermer le modal du panier
        closeCartModal();
        
        // Réinitialiser le formulaire
        if (DOM.checkoutFormFields) {
            DOM.checkoutFormFields.reset();
        }
        
        return true;
    }

    function showLoading() {
        if (!DOM.loadingOverlay) return;
        
        DOM.loadingOverlay.style.display = 'flex';
        setTimeout(() => {
            DOM.loadingOverlay.classList.add('show');
        }, 10);
    }

    function hideLoading() {
        if (!DOM.loadingOverlay) return;
        
        DOM.loadingOverlay.classList.remove('show');
        setTimeout(() => {
            DOM.loadingOverlay.style.display = 'none';
        }, 300);
    }

    function showSuccessModal() {
        if (!DOM.successModal) return;
        
        DOM.successModal.style.display = 'flex';
        setTimeout(() => {
            DOM.successModal.classList.add('show');
        }, 10);
    }

    function hideSuccessModal() {
        if (!DOM.successModal) return;
        
        DOM.successModal.classList.remove('show');
        setTimeout(() => {
            DOM.successModal.style.display = 'none';
        }, 300);
    }

    // LocalStorage avec gestion d'erreurs
    function saveCartToLocalStorage() {
        try {
        localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du panier:', error);
            showToast('Impossible de sauvegarder le panier. Veuillez réessayer.', 'Erreur');
        }
    }
    
    function loadCartFromLocalStorage() {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
        } catch (error) {
            console.error('Erreur lors du chargement du panier:', error);
            cart = [];
        }
    }

    // ========== FONCTIONS RESTAURANTS ==========
    
    // Afficher les produits pour restaurants (sans prix)
    function renderRestaurantProducts(filter = 'all') {
        if (!DOM.restaurantsGrid) return;
        
        let html = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        if (filteredProducts.length === 0) {
            html = '<p class="no-products">Aucun produit trouvé dans cette catégorie</p>';
        } else {
            filteredProducts.forEach(product => {
                const inCart = restaurantCart.find(item => item.id === product.id);
                html += `
                    <div class="modern-product-card restaurant-product-card" data-id="${product.id}" data-category="${product.category}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\'><rect width=\\'400\\' height=\\'300\\' fill=\\'%23f0f0f0\\'/><text x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' fill=\\'%23999\\' font-family=\\'Arial\\' font-size=\\'16\\'>Image non disponible</text></svg>';">
                            <div class="product-overlay">
                                <button class="quick-add-btn restaurant-quick-add">
                                    <i class="fas fa-plus"></i>
                                    ${inCart ? 'Déjà sélectionné' : 'Sélectionner'}
                                </button>
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <span class="product-category">${getCategoryName(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            
                            <div class="product-actions">
                                <div class="quantity-selector">
                                    <button class="quantity-btn decrement-restaurant">-</button>
                                    <input type="number" value="${inCart ? inCart.quantity : 1}" min="1" class="quantity restaurant-quantity">
                                    <button class="quantity-btn increment-restaurant">+</button>
                                </div>
                                <button class="btn add-to-restaurant-cart ${inCart ? 'added' : ''}">
                                    <i class="fas fa-clipboard-list"></i>
                                    ${inCart ? 'Modifier' : 'Sélectionner'}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        DOM.restaurantsGrid.innerHTML = html;
        
        // Réattacher les événements
        document.querySelectorAll('.add-to-restaurant-cart').forEach(btn => {
            btn.addEventListener('click', addToRestaurantCart);
        });
        
        document.querySelectorAll('.increment-restaurant').forEach(btn => {
            btn.addEventListener('click', incrementRestaurantQuantity);
        });
        
        document.querySelectorAll('.decrement-restaurant').forEach(btn => {
            btn.addEventListener('click', decrementRestaurantQuantity);
        });
        
        document.querySelectorAll('.restaurant-quick-add').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const productCard = e.target.closest('.restaurant-product-card');
                addToRestaurantCartFromQuickButton(productCard);
            });
        });
    }

    function addToRestaurantCartFromQuickButton(productCard) {
        const productId = parseInt(productCard.dataset.id);
        const quantity = 1;
        
        const product = products.find(p => p.id === productId);
        
        const existingItem = restaurantCart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            restaurantCart.push({
                id: productId,
                name: product.name,
                image: product.image,
                unit: product.unit,
                category: product.category,
                quantity: quantity
            });
        }
        
        updateRestaurantCart();
        renderRestaurantProducts();
        showToast(`${quantity} ${product.name} ajouté${quantity > 1 ? 's' : ''} à la sélection`);
        saveRestaurantCartToLocalStorage();
    }

    function addToRestaurantCart(e) {
        const productCard = e.target.closest('.restaurant-product-card');
        const productId = parseInt(productCard.dataset.id);
        const quantity = parseInt(productCard.querySelector('.restaurant-quantity').value);
        
        const product = products.find(p => p.id === productId);
        
        const addButton = productCard.querySelector('.add-to-restaurant-cart');
        addButton.classList.add('added');
        setTimeout(() => addButton.classList.remove('added'), 1000);
        
        const existingItem = restaurantCart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity = quantity;
        } else {
            restaurantCart.push({
                id: productId,
                name: product.name,
                image: product.image,
                unit: product.unit,
                category: product.category,
                quantity: quantity
            });
        }
        
        updateRestaurantCart();
        renderRestaurantProducts();
        showToast(`${quantity} ${product.name} ajouté${quantity > 1 ? 's' : ''} à la sélection`);
        saveRestaurantCartToLocalStorage();
    }

    function incrementRestaurantQuantity(e) {
        const input = e.target.parentElement.querySelector('.restaurant-quantity');
        input.value = parseInt(input.value) + 1;
    }

    function decrementRestaurantQuantity(e) {
        const input = e.target.parentElement.querySelector('.restaurant-quantity');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    }

    function updateRestaurantCart() {
        const totalItems = restaurantCart.reduce((total, item) => total + item.quantity, 0);
        
        if (DOM.restaurantCartPreview) {
            const previewText = DOM.restaurantCartPreview.querySelector('.restaurant-cart-preview-text');
            if (previewText) {
                if (restaurantCart.length > 0) {
                    DOM.restaurantCartPreview.classList.add('has-items');
                    previewText.textContent = `${totalItems} produit${totalItems > 1 ? 's' : ''} sélectionné${totalItems > 1 ? 's' : ''}`;
                } else {
                    DOM.restaurantCartPreview.classList.remove('has-items');
                    previewText.textContent = 'Aucun produit sélectionné';
                }
            }
        }
    }

    function saveRestaurantCartToLocalStorage() {
        try {
            localStorage.setItem('restaurantCart', JSON.stringify(restaurantCart));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du panier restaurant:', error);
            showToast('Impossible de sauvegarder la sélection. Veuillez réessayer.', 'Erreur');
        }
    }

    function setupRestaurantFilters() {
        if (!DOM.filterButtonsRestaurant || DOM.filterButtonsRestaurant.length === 0) return;
        
        DOM.filterButtonsRestaurant.forEach(button => {
            button.addEventListener('click', function() {
                DOM.filterButtonsRestaurant.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                renderRestaurantProducts(this.dataset.filter);
            });
        });
    }

    function openRestaurantQuoteModal() {
        if (!DOM.restaurantQuoteModal) return;
        
        if (restaurantCart.length === 0) {
            showToast('Veuillez sélectionner au moins un produit', 'Erreur');
            return;
        }
        
        renderRestaurantQuoteItems();
        
        DOM.restaurantQuoteModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            DOM.restaurantQuoteModal.classList.add('show');
        }, 10);
    }

    function closeRestaurantQuoteModal() {
        if (!DOM.restaurantQuoteModal) return;
        
        DOM.restaurantQuoteModal.classList.remove('show');
        
        setTimeout(() => {
            DOM.restaurantQuoteModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    function renderRestaurantQuoteItems() {
        if (!DOM.restaurantQuoteItems) return;
        
        let html = '<div class="quote-items-list">';
        html += '<h4>Produits sélectionnés</h4>';
        
        restaurantCart.forEach(item => {
            html += `
                <div class="quote-item">
                    <div class="quote-item-info">
                        <span class="quote-item-name">${item.name}</span>
                        <span class="quote-item-quantity">Quantité: ${item.quantity} ${item.unit}</span>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        DOM.restaurantQuoteItems.innerHTML = html;
    }

    function processRestaurantQuote(e) {
        if (e) e.preventDefault();
        
        const restaurantName = document.getElementById('restaurant-name')?.value.trim();
        const restaurantContact = document.getElementById('restaurant-contact')?.value.trim();
        const restaurantEmail = document.getElementById('restaurant-email')?.value.trim();
        const restaurantPhone = document.getElementById('restaurant-phone')?.value.trim();
        const restaurantAddress = document.getElementById('restaurant-address')?.value.trim();
        const restaurantNotes = document.getElementById('restaurant-notes')?.value.trim();
        
        if (!restaurantName || !restaurantContact || !restaurantEmail || !restaurantPhone || !restaurantAddress) {
            showToast('Veuillez remplir tous les champs obligatoires', 'Erreur');
            return false;
        }
        
        if (!validateEmail(restaurantEmail)) {
            showToast('Veuillez entrer une adresse email valide', 'Erreur');
            return false;
        }
        
        if (!validatePhone(restaurantPhone)) {
            showToast('Veuillez entrer un numéro de téléphone valide', 'Erreur');
            return false;
        }
        
        const quote = {
            id: 'DEVIS-' + Date.now(),
            restaurant: {
                name: restaurantName,
                contact: restaurantContact,
                email: restaurantEmail,
                phone: restaurantPhone,
                address: restaurantAddress,
                notes: restaurantNotes
            },
            items: [...restaurantCart],
            date: new Date().toISOString(),
            status: 'En attente'
        };
        
        const quotes = JSON.parse(localStorage.getItem('restaurantQuotes') || '[]');
        quotes.push(quote);
        localStorage.setItem('restaurantQuotes', JSON.stringify(quotes));
        
        showSuccessModal();
        restaurantCart = [];
        updateRestaurantCart();
        renderRestaurantProducts();
        saveRestaurantCartToLocalStorage();
        closeRestaurantQuoteModal();
        
        if (DOM.restaurantQuoteForm) {
            DOM.restaurantQuoteForm.reset();
        }
        
        showToast('Votre demande de devis a été envoyée avec succès !', 'Succès');
        return true;
    }

    // Menu mobile
    function setupMobileMenu() {
        if (!DOM.mobileMenuToggle || !DOM.navModern) return;
        
        DOM.mobileMenuToggle.addEventListener('click', function() {
            const isActive = this.classList.toggle('active');
            DOM.navModern.classList.toggle('active');
            this.setAttribute('aria-expanded', isActive);
        });
        
        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', function(e) {
            if (!DOM.navModern.contains(e.target) && !DOM.mobileMenuToggle.contains(e.target)) {
                DOM.mobileMenuToggle.classList.remove('active');
                DOM.navModern.classList.remove('active');
                DOM.mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Fermer le menu avec Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && DOM.mobileMenuToggle.classList.contains('active')) {
                DOM.mobileMenuToggle.classList.remove('active');
                DOM.navModern.classList.remove('active');
                DOM.mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Back to top
    function setupBackToTop() {
        if (!DOM.backToTopBtn) return;
        
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
        if (DOM.cartIcon) DOM.cartIcon.addEventListener('click', openCartModal);
        if (DOM.viewCartBtn) DOM.viewCartBtn.addEventListener('click', openCartModal);
        if (DOM.closeModal) DOM.closeModal.addEventListener('click', closeCartModal);
        if (DOM.continueShoppingBtn) DOM.continueShoppingBtn.addEventListener('click', closeCartModal);
        if (DOM.checkoutBtn) DOM.checkoutBtn.addEventListener('click', showCheckoutForm);
        
        // Paiement
        if (DOM.payNowBtn) DOM.payNowBtn.addEventListener('click', processPayment);
        if (DOM.checkoutFormFields) {
            DOM.checkoutFormFields.addEventListener('submit', processPayment);
        }
        
        // Restaurants
        if (DOM.requestQuoteBtn) DOM.requestQuoteBtn.addEventListener('click', openRestaurantQuoteModal);
        if (DOM.closeQuoteModal) DOM.closeQuoteModal.addEventListener('click', closeRestaurantQuoteModal);
        if (DOM.cancelQuoteBtn) DOM.cancelQuoteBtn.addEventListener('click', closeRestaurantQuoteModal);
        if (DOM.restaurantQuoteForm) {
            DOM.restaurantQuoteForm.addEventListener('submit', processRestaurantQuote);
        }
        
        // Success modal
        if (DOM.closeSuccessBtn) DOM.closeSuccessBtn.addEventListener('click', hideSuccessModal);
        
        // Fermer les modales en cliquant à l'extérieur
        document.addEventListener('click', function(e) {
            if (DOM.cartModal && e.target === DOM.cartModal) {
                closeCartModal();
            }
            if (DOM.successModal && e.target === DOM.successModal) {
                hideSuccessModal();
            }
            if (DOM.restaurantQuoteModal && e.target === DOM.restaurantQuoteModal) {
                closeRestaurantQuoteModal();
            }
        });
        
        // Fermer avec Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCartModal();
                hideSuccessModal();
                closeRestaurantQuoteModal();
            }
        });
    }
});

// Exporter les fonctions utiles pour restaurant.js
window.products = products;
window.formatPrice = formatPrice;
window.getCategoryName = getCategoryName;