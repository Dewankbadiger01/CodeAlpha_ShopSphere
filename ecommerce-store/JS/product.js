const products = [

{
    id:1,
    name:"Leather Jacket",
    price:"₹2499",
    image:"Images/jacket.avif"
},

{
    id:2,
    name:"Running Shoes",
    price:"₹1999",
    image:"Images/shoes.avif"
},

{
    id:3,
    name:"Smart Watch",
    price:"₹3499",
    image:"Images/watch.avif"
},

{
    id:4,
    name:"Casual Shirt",
    price:"₹1499",
    image:"Images/shirt.avif"
}

];
const productContainer = document.getElementById("product-container");
products.forEach(product=>{

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">${product.price}</p>

<p class="rating">⭐⭐⭐⭐⭐</p>

<button class="add-cart">Add to Cart</button>

</div>

</div>

`;

});