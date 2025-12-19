// 1. Scroll Reveal Animation
// This makes sections fade and slide up when they enter the screen
const observerOptions = {
    threshold: 0.15 // Section starts appearing when 15% is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Select all sections with the 'reveal' class and start observing them
document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});

// 2. Mobile Navigation Toggle
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('open');
    });
}

// 3. Smooth Active Link Highlighting
// Updates the navigation menu to show which section you are currently viewing
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
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

// 4. Contact Form Logic
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // You can later connect this to an email service like EmailJS
        alert("Thanks for reaching out, Karun! This is a demo; your message was captured locally.");
        contactForm.reset();
    });
}
