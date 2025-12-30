// 1. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});

// 2. Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {

        // Simple animation for the hamburger menu
      menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
};
document.addEventListener('click', (e) => {
    if (
        navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navLinks.classList.remove('active');
    }
});



// 3. Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// 4. Highlight Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});
let startX = 0;
let endX = 0;

// Detect touch start
navLinks.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

// Detect touch move
navLinks.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
});

// Detect touch end
navLinks.addEventListener("touchend", () => {
    // Swipe right → left (close menu)
    if (startX - endX > 50) {
        navLinks.classList.remove("active");
    }
});

