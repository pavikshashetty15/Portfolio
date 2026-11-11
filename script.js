
// Welcome message
console.log("Welcome to Paviksha's Portfolio!");

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation clicked:", this.textContent);
    });
});

// Welcome animation
window.addEventListener("load", function() {
    console.log("Paviksha's Portfolio loaded successfully!");
});
