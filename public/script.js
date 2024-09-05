// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#hero h1", {duration: 1, opacity: 0, y: -50, ease: "power3.out"});
    gsap.from("#hero h2", {duration: 1, opacity: 0, y: -50, delay: 0.5, ease: "power3.out"});

    gsap.to("#skills .col-md-4", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Lottie Animation
var animation = lottie.loadAnimation({
    container: document.getElementById('hero-animation'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'lottie-animation.json' // Path to your Lottie animation JSON file
});
