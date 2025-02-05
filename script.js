const menuItems = [
    { name: "Margherita Pizza", price: 299, image: "Margherita.webp" },
    { name: "Farmhouse Pizza", price: 249, image: "Farmhouse.webp" },
    { name: "Cheese & Corn Pizza", price: 229, image: "Cheese & Corn.webp" },
    { name: "Peppy Paneer Pizza", price: 349, image: "Peppy Paneer.webp" },
    { name: "Fiery Jalapeno & Paprika Pizza", price: 299, image: "Fiery Jalapeno & Paprika.jpg" },
    { name: "Cheese Overload Pizza", price: 599, image: "Cheese Overload.jpg" },
    { name: "Cheese Volcano Peppy Paneer", price:399, image: "Cheese Volcano Peppy Paneer.jpg"},
    { name: "Indo Tandoori Paneer", price:349, image:"Indo Tandoori Paneer.webp"},
    { name: "Fresh Veggie", price:199, image:"Fresh Veggie.webp"},
    { name: "Veg Extravanganza", price:299, image:"Veg Extravanganza.webp"},
    { name: "Mexican Green Wave", price:249, image:"Mexican Green Wave.jpg"},
    { name: "Blazing Onion & Paprika", price:199, image:"Blazing Onion & Paprika.jpg"}
];


const cart = [];

function displayMenu() {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';

    menuItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        menuContainer.appendChild(div);
    });
}

function addToCart(index) {
    cart.push(menuItems[index]);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, idx) => {
        total += item.price;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.style.animationDelay = `${idx * 0.2}s`;
        div.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${idx})">Remove</button>`;
        cartItemsContainer.appendChild(div);
    });

    totalSpan.innerText = total;
}

// Initialize the menu display
displayMenu();
