// =======================================
// PRODUCTS.JS
// PART 1
// Variables + DOM + Image Map
// =======================================

// -------------------------------
// Product Data
// -------------------------------

let products = [];
let filteredProducts = [];

let currentPage = 1;
const productsPerPage = 20;
let totalPages = 0;

// -------------------------------
// DOM Elements
// -------------------------------

const productContainer = document.getElementById("product-container");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");
const pageNumber = document.getElementById("page-number");
const searchInput = document.getElementById("search-input");
const cartCount = document.querySelector(".cart-count");

// -------------------------------
// Product Image Map
// -------------------------------

const imageMap = {

    "Leather Jacket": [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400&h=500&fit=crop"
    ],

    "Running Shoes": [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=500&fit=crop"
    ],

    "Smart Watch": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=500&fit=crop"
    ],

    "Casual Shirt": [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop"
    ],

    "Bluetooth Speaker": [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=500&fit=crop"
    ],

    "Backpack": [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=500&fit=crop"
    ],

    "Sunglasses": [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556306535-38febf6782fe?w=400&h=500&fit=crop"
    ],

    "Gaming Mouse": [
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1625003246768-4c1e9d4f7c36?w=400&h=500&fit=crop"
    ],

    "Wireless Headphones": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1546435770-a3e736c2b3e4?w=400&h=500&fit=crop"
    ],

    "Sports T-Shirt": [
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1631541911232-dc600d641f32?w=400&h=500&fit=crop"
    ],

    "Laptop Bag": [
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=500&fit=crop"
    ],

    "Wireless Keyboard": [
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
    ],

    "Coffee Mug": [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=500&fit=crop"
    ],

    "Office Chair": [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=500&fit=crop"
    ],

    "Desk Lamp": [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=400&h=500&fit=crop"
    ],

    "Power Bank": [
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1609592806596-b43bada2f2fe?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1612817159949-195b6eb9d4c1?w=400&h=500&fit=crop"
    ],

    "Fitness Band": [
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=500&fit=crop"
    ],

    "Bluetooth Earbuds": [
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop"
    ],

    "Travel Suitcase": [
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=500&fit=crop"
    ],

    "Winter Hoodie": [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=500&fit=crop"
    ],
    "Power Bank": [
"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=500&fit=crop"
],

"Wireless Earbuds": [
"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop"
],

"Gaming Mouse": [
"https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=500&fit=crop"
],
"Bluetooth Earbuds": [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=500&fit=crop"
],
"Power Bank":[
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=500&fit=crop"
],

"Bluetooth Earbuds":[
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=500&fit=crop"
],

"Laptop":[
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
],

"Tablet":[
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=500&fit=crop"
],

"DSLR Camera":[
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&h=500&fit=crop"
],

"Mechanical Keyboard":[
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=500&fit=crop"
],

"Gaming Chair":[
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1616627459369-0f9bb2f2d3e3?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=500&fit=crop"
],

"USB Flash Drive":[
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1628557115111-9f0d86d2df96?w=400&h=500&fit=crop"
],

"Smartphone":[
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=500&fit=crop"
],

"Monitor":[
    "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400&h=500&fit=crop"
],
"Power Bank":[
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=500&fit=crop"
],

"Bluetooth Earbuds":[
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=500&fit=crop"
],

"Laptop":[
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop"
],

"Tablet":[
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=500&fit=crop"
],

"DSLR Camera":[
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&h=500&fit=crop"
],

"Mechanical Keyboard":[
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=500&fit=crop"
],

"Gaming Chair":[
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1616627459369-0f9bb2f2d3e3?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=500&fit=crop"
],

"USB Flash Drive":[
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1628557115111-9f0d86d2df96?w=400&h=500&fit=crop"
],

"Smartphone":[
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=500&fit=crop"
],

"Monitor":[
    "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400&h=500&fit=crop"
],

};
// =======================================
// IMAGE FUNCTION
// =======================================

function getRealImage(product) {

    for (const [type, urls] of Object.entries(imageMap)) {

        if (product.name.startsWith(type)) {

            return urls[product.id % urls.length];

        }

    }

    // fallback image from JSON
    return product.image;

}

// =======================================
// LOAD PRODUCTS
// =======================================

async function loadProducts() {

    try {

        const response = await fetch("./products.json");

        if (!response.ok) {

            throw new Error("Unable to load products.json");

        }

        products = await response.json();

        // Initially display every product
        filteredProducts = [...products];

        totalPages = Math.ceil(
            filteredProducts.length / productsPerPage
        );

        displayProducts();

        updateCartCount();

    } catch (error) {

        console.error(error);

        productContainer.innerHTML = `
            <div style="
                text-align:center;
                padding:40px;
                color:red;
                font-size:22px;
            ">
                Failed to load products.json
            </div>
        `;

    }

}
// =======================================
// DISPLAY PRODUCTS
// =======================================

function displayProducts() {

    productContainer.innerHTML = "";

    // No products found
    if (filteredProducts.length === 0) {

        productContainer.innerHTML = `
            <h2 style="text-align:center;padding:40px;">
                No products found 😢
            </h2>
        `;

        pageNumber.textContent = "0 / 0";

        prevPageBtn.disabled = true;
        nextPageBtn.disabled = true;

        return;
    }

    // Total pages
    totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    // Current page indexes
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentProducts = filteredProducts.slice(
        startIndex,
        endIndex
    );

    // Display products
    currentProducts.forEach(product => {

        const imageUrl = getRealImage(product);

        productContainer.innerHTML += `

        <div class="product-card">

            <img
                src="${imageUrl}"
                alt="${product.name}"
                onerror="this.src='${product.image}'"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p class="price">
                    ₹${product.price}
                    <del>₹${product.oldPrice}</del>
                </p>

                <p class="rating">
                    ⭐ ${product.rating}
                    (${product.reviews} Reviews)
                </p>

                <button
                    class="add-cart"
                    data-id="${product.id}">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add to Cart
                </button>

            </div>

        </div>

        `;

    });

    // Update page number
    pageNumber.textContent =
        `${currentPage} / ${totalPages}`;

    // Enable / Disable buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    // Add cart events
    attachCartEvents();

}
// =======================================
// SEARCH PRODUCTS
// =======================================

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(searchText)

    );

    // Return to first page after searching
    currentPage = 1;

    // Update total pages
    totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    displayProducts();

});

// =======================================
// NEXT PAGE
// =======================================

nextPageBtn.addEventListener("click", () => {

    if (currentPage < totalPages) {

        currentPage++;

        displayProducts();

        window.scrollTo({

            top: document.querySelector(".featured-products").offsetTop,

            behavior: "smooth"

        });

    }

});

// =======================================
// PREVIOUS PAGE
// =======================================

prevPageBtn.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        displayProducts();

        window.scrollTo({

            top: document.querySelector(".featured-products").offsetTop,

            behavior: "smooth"

        });

    }

});
// =======================================
// ATTACH CART EVENTS
// =======================================

function attachCartEvents() {

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const productId = Number(button.dataset.id);

            const product = products.find(item => item.id === productId);

            if (product) {

                addToCart(product);

            }

        });

    });

}

// =======================================
// ADD TO CART
// =======================================

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            image: getRealImage(product),

            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(`${product.name} added to cart!`);

}

// =======================================
// UPDATE CART COUNT
// =======================================

function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((total, item) => {

        return total + item.quantity;

    }, 0);

    if (cartCount) {

        cartCount.textContent = totalItems;

    }

}
// =======================================
// INITIALIZE
// =======================================

loadProducts();