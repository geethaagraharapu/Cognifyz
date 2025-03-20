
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
 document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for choosing organic! Redirecting to the shop...');
    });
});
    document.querySelector('form').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
        }
    });
    const sections = document.querySelectorAll('selector');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
     document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for choosing organic! Redirecting to the shop...');
        });
    });
   // Get reference to the button
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show button when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
}

