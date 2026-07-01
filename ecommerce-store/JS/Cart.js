const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
function displayCart() {

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <h2>Your cart is empty 🛒</h2>
        `;

        totalPrice.innerHTML = "₹0";

        return;
    }

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price * product.quantity;
cartContainer.innerHTML += `

<div class="cart-item">

    <img src="${product.image}" alt="${product.name}">

    <div class="cart-info">

        <h3>${product.name}</h3>

        <p>₹${product.price}</p>

        <div class="quantity-box">

            <button onclick="decreaseQuantity(${index})">−</button>

            <span>${product.quantity}</span>

            <button onclick="increaseQuantity(${index})">+</button>

        </div>

        <button class="remove-btn"
            onclick="removeItem(${index})">
            Remove
        </button>

    </div>

</div>

`;
    });

    totalPrice.innerHTML = `₹${total}`;

}
function increaseQuantity(index){

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}
displayCart();
