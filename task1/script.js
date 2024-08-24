// Smooth Scrolling & Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Adjusted for fixed header
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
            document.body.style.backgroundColor = getComputedStyle(link).backgroundColor;
        }
    });
});

// Fade-In Animation on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Sticky navigation on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Change background color of sections when menu link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const targetSection = document.querySelector(this.getAttribute('href'));
        document.querySelectorAll('section').forEach(section => {
            section.style.backgroundColor = '#f9f9f9'; // Default background color
        });
        targetSection.style.backgroundColor = 'pink'; // Change background color of active section
    });
});