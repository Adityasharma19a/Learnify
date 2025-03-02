document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector('.hero-text');
    const floatingBooks = document.querySelector('.floating-books');
    const exploreBtn = document.getElementById('explore-btn');
    const exploreSection = document.getElementById('explore-section');
    const video = document.getElementById('background-video');

    // Ensure hero content fades in smoothly
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        floatingBooks.style.opacity = "1";
    }, 1000);

    // Smooth scroll to the Explore section
    exploreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        exploreSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Ensure the video plays correctly after user interaction (some browsers block autoplay)
    video.play().catch(error => {
        console.log("Autoplay was blocked, user interaction required.", error);
    });
});