// Animation au scroll pour les cartes de passion
document.addEventListener('DOMContentLoaded', () => {
    // Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer toutes les cartes
    const passionCards = document.querySelectorAll('.passion-card');
    passionCards.forEach(card => {
        observer.observe(card);
    });

    // Animation des stats au survol
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const number = card.querySelector('.stat-number');
            number.style.transform = 'scale(1.15)';
            setTimeout(() => {
                number.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Effet parallaxe subtil sur les images
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.passion-card');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - cardCenterX) / 30;
            const deltaY = (e.clientY - cardCenterY) / 30;

            const img = card.querySelector('.passion-image-container img');
            if (img && rect.top < window.innerHeight && rect.bottom > 0) {
                img.style.transform = `scale(1.05) translate(${deltaX}px, ${deltaY}px)`;
            }
        });
    });
});