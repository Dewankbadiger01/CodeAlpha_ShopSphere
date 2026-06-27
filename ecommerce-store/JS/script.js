// Images
const images = [
    "Images/hero12.avif",
    "Images/hero1.avif",
    "Images/sum1.avif"
];

// Titles
const titles = [
    "Women's Latest Fashion Sale",
    "Men's New Collection",
    "Summer Collection 2026"
];

// Descriptions
const descriptions = [
    "Up to 50% off on fashion items.",
    "Premium clothing for men.",
    "Fresh arrivals for the summer season."
];

// Select HTML elements
const title = document.getElementById("hero-title");
const desc = document.getElementById("hero-desc");
const img = document.getElementById("img-1");

// Buttons
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Current slide
let currentIndex = 0;
function updateSlide() {
    title.innerText = titles[currentIndex];
    desc.innerText = descriptions[currentIndex];
    img.src = images[currentIndex];
    img.classList.remove("fade");

setTimeout(() => {
    img.classList.add("fade");
}, 10);
}

// Automatic slider
function changeSlide() {
    currentIndex++;

    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    updateSlide();
}

// Next button
function nextSlide() {
    currentIndex++;

    if (currentIndex === images.length) {
        currentIndex = 0;
    }

    updateSlide();
}

// Previous button
function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    updateSlide();
}

// Button events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Show first slide when page loads
updateSlide();

// Change slide every 3 seconds
setInterval(changeSlide, 3000);