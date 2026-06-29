
let products = [];
let currentPage = 1;
const productsPerPage = 20;
let totalPages = 0;

const productContainer = document.getElementById("product-container");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");
const pageNumber = document.getElementById("page-number");
const searchInput = document.getElementById("search-input");
const imageMap = {
    "Leather Jacket":     [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400&h=500&fit=crop"
    ],
    "Running Shoes":      [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=500&fit=crop"
    ],
    "Smart Watch":        [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=500&fit=crop"
    ],
    "Casual Shirt":       [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop"
    ],
    "Bluetooth Speaker":  [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=500&fit=crop"
    ],
    "Backpack":           [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=500&fit=crop"
    ],
    "Sunglasses":         [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556306535-38febf6782fe?w=400&h=500&fit=crop"
    ],
    "Gaming Mouse":       [
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1625003246768-4c1e9d4f7c36?w=400&h=500&fit=crop"
    ],
    "Wireless Headphones":[
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1546435770-a3e736c2b3e4?w=400&h=500&fit=crop"
    ],
    "Sports T-Shirt":     [
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1631541911232-dc600d641f32?w=400&h=500&fit=crop"
    ]
};
function getRealImage(product) {
    for (const [type, urls] of Object.entries(imageMap)) {
        if (product.name.startsWith(type)) {
            return urls[product.id % urls.length];
        }
    }
    return product.image; // fallback to origina
}
async function loadProducts() {
    try {
        const response = await fetch("./products.json");

        if (!response.ok) {
            throw new Error("Unable to load products.json");
        }

        products = await response.json();

        totalPages = Math.ceil(products.length / productsPerPage);

        displayProducts();

    } catch (error) {
        console.error(error);
        productContainer.innerHTML = "<h2>Failed to load products.</h2>";
    }
}
function displayProducts() {

    productContainer.innerHTML = "";
if(filteredProducts.length === 0){

    productContainer.innerHTML = `
        <h2 style="text-align:center;">
            No products found 😢
        </h2>
    `;

    pageNumber.textContent = "0 / 0";

    return;
}
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

const currentProducts = filteredProducts.slice(startIndex, endIndex);
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
                    ⭐ ${product.rating} (${product.reviews} Reviews)
                </p>

               <button class="add-cart" data-id="${product.id}">
    Add to Cart
</button>
            </div>

        </div>

        `;
    });

    pageNumber.textContent = `${currentPage} / ${totalPages}`;

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

nextPageBtn.addEventListener("click", () => {

    if (currentPage < totalPages) {

        currentPage++;

        displayProducts();

        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });

    }

});

prevPageBtn.addEventListener("click", () => {

    if (currentPage > 1) {

        currentPage--;

        displayProducts();

        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });

    }
});
let filteredProducts = [];
searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    currentPage = 1;

    totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    displayProducts();

});
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        const productId = Number(e.target.dataset.id);

        const productToAdd = products.find(product => product.id === productId);

        addToCart(productToAdd);

    });

});
function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} added to cart!`);

}
loadProducts();