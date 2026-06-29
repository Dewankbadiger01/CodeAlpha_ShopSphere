
const images = [
    "Images/hero12.avif",
    "Images/hero1.avif",
    "Images/sum1.avif"
];
const titles = [
    "Women's Latest Fashion Sale",
    "Men's New Collection",
    "Summer Collection 2026"
];
const descriptions = [
    "Up to 50% off on fashion items.",
    "Premium clothing for men.",
    "Fresh arrivals for the summer season."
];
const title = document.getElementById("hero-title");
const desc = document.getElementById("hero-desc");
const img = document.getElementById("img-1");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
function updateSlide() {
    title.innerText = titles[currentIndex];
    desc.innerText = descriptions[currentIndex];
    img.src = images[currentIndex];
img.style.opacity = 0;

setTimeout(()=>{

    img.src = images[currentIndex];

    img.style.opacity = 1;

},200);
}
function changeSlide() {
    currentIndex++;

    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    updateSlide();
}
function nextSlide() {
    currentIndex++;

    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    updateSlide();
}
function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlide();
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
updateSlide();
// Change slide every 3 seconds
setInterval(changeSlide, 3000);