const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(product=>{

    total += product.price * product.quantity;

    checkoutItems.innerHTML += `

        <div class="checkout-item">

            <h4>${product.name}</h4>

            <p>

            ₹${product.price}

            ×

            ${product.quantity}

            </p>

        </div>

    `;

});

checkoutTotal.textContent = total;

document.getElementById("place-order")
.addEventListener("click",()=>{

    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href="index.html";

});