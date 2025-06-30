// Données des produits
const products = [
    {
        id: 1,
        name: "Entrecôte de bœuf",
        description: "Morceau persillé, idéal pour les grillades. Origine locale.",
        price: 16300,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        unit: "kg"
    },
    {
        id: 2,
        name: "Filet de porc",
        description: "Tendre et savoureux, parfait pour rôtir ou poêler. Élevé en plein air.",
        price: 10800,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        unit: "kg"
    },
    {
        id: 3,
        name: "Côtelettes d'agneau",
        description: "Saveur délicate, élevage traditionnel.",
        price: 18900,
        image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        unit: "kg"
    },
    {
        id: 4,
        name: "Poulet fermier",
        description: "Élevé en plein air, chair ferme et goûteuse. Prêt à cuire.",
        price: 8500,
        image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        unit: "pièce"
    },
    {
        id: 5,
        name: "Saucisses artisanales",
        description: "Faites maison avec des viandes sélectionnées et des épices de qualité.",
        price: 3900,
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        unit: "pièce"
    },
    {
        id: 6,
        name: "Burgers maison",
        description: "Steaks hachés pur bœuf, préparés à la commande. 180g pièce.",
        price: 2600,
        image: "https://images.unsplash.com/photo-1606660265511-fe9d5374a1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        unit: "pièce"
    }
];

// Panier
let cart = [];

// Éléments du DOM
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.querySelector('.cart-count');
const viewCartBtn = document.getElementById('view-cart');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-modal');
const continueShoppingBtn = document.getElementById('continue-shopping');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const payWithJekoBtn = document.getElementById('pay-with-jeko');
const productsGrid = document.getElementById('products-grid');

// Initialisation de la page
document.addEventListener('DOMContentLoaded', () => {
    // Afficher les produits
    renderProducts();
    
    // Événements
    setupEventListeners();
});

// Afficher les produits
function renderProducts() {
    let html = '';
    
    products.forEach(product => {
        html += `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${formatPrice(product.price)} FCFA/${product.unit}</div>
                    <div class="product-actions">
                        <div class="quantity-selector">
                            <button class="decrement">-</button>
                            <input type="number" value="1" min="1" class="quantity">
                            <button class="increment">+</button>
                        </div>
                        <button class="btn add-to-cart">Ajouter</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = html;
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Configurer les événements
function setupEventListeners() {
    // Ajout au panier
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    // Gestion de la quantité
    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', incrementQuantity);
    });
    
    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', decrementQuantity);
    });
    
    // Panier modal
    cartIcon.addEventListener('click', openCartModal);
    viewCartBtn.addEventListener('click', openCartModal);
    closeModal.addEventListener('click', closeCartModal);
    continueShoppingBtn.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', showCheckoutForm);
    
    // Paiement Jeko
    payWithJekoBtn.addEventListener('click', processPayment);
}

// Ajouter au panier
function addToCart(e) {
    const productCard = e.target.closest('.product-card');
    const productId = parseInt(productCard.dataset.id);
    const quantity = parseInt(productCard.querySelector('.quantity').value);
    
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
    showAddedToCartMessage(product.name, quantity);
}

// Incrémenter la quantité
function incrementQuantity(e) {
    const input = e.target.parentElement.querySelector('.quantity');
    input.value = parseInt(input.value) + 1;
}

// Décrémenter la quantité
function decrementQuantity(e) {
    const input = e.target.parentElement.querySelector('.quantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Mettre à jour le panier
function updateCart() {
    // Mettre à jour le compteur
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Mettre à jour le panier modal
    renderCartItems();
}

// Afficher les éléments du panier
function renderCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center;">Votre panier est vide</p>';
        cartTotal.textContent = '0 FCFA';
        checkoutBtn.style.display = 'none';
        return;
    }
    
    checkoutBtn.style.display = 'block';
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div>
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)} FCFA/${item.unit}</div>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-selector">
                        <button class="decrement">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="cart-item-quantity">
                        <button class="increment">+</button>
                    </div>
                    <div class="cart-item-total">${formatPrice(itemTotal)} FCFA</div>
                    <button class="remove-item">&times;</button>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    cartTotal.textContent = `${formatPrice(total)} FCFA`;
    
    // Ajouter les événements pour les nouveaux éléments
    document.querySelectorAll('.cart-item .increment').forEach(button => {
        button.addEventListener('click', incrementCartItem);
    });
    
    document.querySelectorAll('.cart-item .decrement').forEach(button => {
        button.addEventListener('click', decrementCartItem);
    });
    
    document.querySelectorAll('.cart-item-quantity').forEach(input => {
        input.addEventListener('change', updateCartItemQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeCartItem);
    });
}

// Incrémenter un élément du panier
function incrementCartItem(e) {
    const cartItem = e.target.closest('.cart-item');
    const productId = parseInt(cartItem.dataset.id);
    const input = cartItem.querySelector('.cart-item-quantity');
    input.value = parseInt(input.value) + 1;
    updateCartItem(productId, parseInt(input.value));
}

// Décrémenter un élément du panier
function decrementCartItem(e) {
    const cartItem = e.target.closest('.cart-item');
    const productId = parseInt(cartItem.dataset.id);
    const input = cartItem.querySelector('.cart-item-quantity');
    
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        updateCartItem(productId, parseInt(input.value));
    }
}

// Mettre à jour la quantité d'un élément du panier
function updateCartItemQuantity(e) {
    const cartItem = e.target.closest('.cart-item');
    const productId = parseInt(cartItem.dataset.id);
    const quantity = parseInt(e.target.value);
    
    if (quantity >= 1) {
        updateCartItem(productId, quantity);
    } else {
        e.target.value = 1;
    }
}

// Mettre à jour un élément du panier
function updateCartItem(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        updateCart();
    }
}

// Supprimer un élément du panier
function removeCartItem(e) {
    const cartItem = e.target.closest('.cart-item');
    const productId = parseInt(cartItem.dataset.id);
    
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Afficher une notification d'ajout au panier
function showAddedToCartMessage(productName, quantity) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = '#4a8c2b';
    toast.style.color = 'white';
    toast.style.padding = '15px 25px';
    toast.style.borderRadius = '5px';
    toast.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    toast.style.zIndex = '1000';
    toast.style.animation = 'fadeIn 0.3s';
    toast.innerHTML = `<i class="fas fa-check-circle" style="margin-right: 10px;"></i> ${quantity} ${quantity > 1 ? 'articles' : 'article'} de "${productName}" ajouté${quantity > 1 ? 's' : ''} au panier`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
    
    // Ajouter les styles d'animation si ils n'existent pas déjà
    if (!document.getElementById('toast-animations')) {
        const style = document.createElement('style');
        style.id = 'toast-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Ouvrir la modale du panier
function openCartModal() {
    cartModal.style.display = 'flex';
    checkoutForm.style.display = 'none';
    document.body.style.overflow = 'hidden';
}

// Fermer la modale du panier
function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Afficher le formulaire de commande
function showCheckoutForm() {
    checkoutForm.style.display = 'block';
    checkoutBtn.style.display = 'none';
    
    // Faire défiler vers le formulaire
    checkoutForm.scrollIntoView({ behavior: 'smooth' });
}

// Traiter le paiement avec Jeko
async function processPayment() {
    // Valider le formulaire
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const deliveryAddress = document.getElementById('delivery-address').value;
    const comments = document.getElementById('comments').value;
    
    if (!firstName || !lastName || !email || !phone || !deliveryAddress) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
    
    // Calculer le total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Créer un objet avec les données de la commande
    const orderData = {
        firstName,
        lastName,
        email,
        phone,
        address: deliveryAddress,
        comments,
        cart,
        total,
        date: new Date().toISOString()
    };

    // 1. Enregistrer la commande dans votre système (backend)
    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error('Erreur lors de l\'enregistrement de la commande');
        }
        
        // 2. Redirection vers Jeko avec les paramètres nécessaires
        const jekoPaymentUrl = `https://pay.jeko.africa/pl/aef8e27a-ce7b-4463-af13-d0c2ab176b6b?amount=${total}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(lastName)}`;
        
        // Ouvrir le paiement dans un nouvel onglet
        window.open(jekoPaymentUrl, '_blank');
        
        // Afficher une confirmation
        alert('Redirection vers Jeko pour le paiement. Un reçu sera envoyé à votre email après paiement.');
        
        // Réinitialiser le panier
        cart = [];
        updateCart();
        closeCartModal();
        
        // Réinitialiser le formulaire
        checkoutForm.style.display = 'none';
        checkoutBtn.style.display = 'block';
        document.getElementById('checkout-form').reset();
        
    } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors du traitement du paiement: ' + error.message);
    }
}

// Fonction pour envoyer la commande par email (simulation)
function sendOrderEmail(firstName, lastName, email, phone, address, comments, total, orderSummary) {
    // En production, vous utiliseriez un service comme EmailJS ou un backend
    console.log('Commande envoyée par email :');
    console.log('Client:', firstName, lastName);
    console.log('Email:', email);
    console.log('Téléphone:', phone);
    console.log('Adresse:', address);
    console.log('Commentaires:', comments);
    console.log('Total:', formatPrice(total), 'FCFA');
    console.log('Détails de la commande:\n', orderSummary);
    
    // Simuler l'envoi d'un email de confirmation
    const emailContent = `
        Nouvelle commande de ${firstName} ${lastName}
        
        Email: ${email}
        Téléphone: ${phone}
        Adresse de livraison: ${address}
        
        Détails de la commande:
        ${orderSummary}
        
        Total: ${formatPrice(total)} FCFA
        
        Commentaires: ${comments || 'Aucun'}
    `;
    
    console.log('Email envoyé:\n', emailContent);
    
    // Simuler l'envoi d'un reçu au client
    const receiptContent = `
        Bonjour ${firstName},
        
        Merci pour votre commande chez Andy la Boucherie !
        
        Voici le récapitulatif de votre commande :
        
        ${orderSummary}
        
        Total: ${formatPrice(total)} FCFA
        
        Votre commande sera préparée et vous serez contacté pour la livraison.
        
        Cordialement,
        L'équipe Andy la Boucherie
    `;
    
    console.log('Reçu envoyé au client:\n', receiptContent);
}

// Dans la fonction processPayment(), remplacez la simulation par :
async function processPayment() {
    // 1. Récupérer les infos du formulaire
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // 2. Validation minimale
    if (!firstName || !email || !phone || total === 0) {
        alert('Veuillez remplir les champs requis et ajouter des articles au panier');
        return;
    }

    // 3. Redirection directe vers Jeko (sans backend)
    const jekoUrl = new URL('https://pay.jeko.africa/pl/aef8e27a-ce7b-4463-af13-d0c2ab176b6b');
    
    // Paramètres obligatoires pour Jeko
    jekoUrl.searchParams.append('amount', total);
    jekoUrl.searchParams.append('email', email);
    jekoUrl.searchParams.append('phone', phone);
    jekoUrl.searchParams.append('first_name', firstName);
    jekoUrl.searchParams.append('last_name', lastName || ''); // Optionnel
    
    // 4. Ouvrir le paiement
    window.open(jekoUrl.toString(), '_blank');
    
    // 5. Feedback utilisateur
    alert(`Redirection vers Jeko pour payer ${formatPrice(total)} FCFA`);
    
    // 6. Vider le panier (optionnel)
    cart = [];
    updateCart();
}