document.addEventListener('DOMContentLoaded', function() {
    // AOS animasyon kütüphanesini başlat
    AOS.init({
        duration: 1000,
        once: true
    });

    // Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#dc3545';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Smooth scroll için
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
