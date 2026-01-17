// Animasi masuk halus saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease forwards';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index); // Efek staggered (berurutan)
    });
});

// Gunakan DOMContentLoaded agar script menunggu HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // 1. Logika Klik Utama
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            // Berhenti menyebarkan event agar tidak dianggap "klik di luar"
            e.stopPropagation(); 
            
            navLinks.classList.toggle('active');

            // Animasi rotasi titik 3
            if (navLinks.classList.contains('active')) {
                menuToggle.style.transform = 'rotate(90deg)';
            } else {
                menuToggle.style.transform = 'rotate(0deg)';
            }
        });

        // 2. Menutup menu jika user mengklik link di dalamnya
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.style.transform = 'rotate(0deg)';
            });
        });

        // 3. Menutup menu jika user mengklik di mana saja di luar menu
        document.addEventListener('click', (e) => {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickOnToggle = menuToggle.contains(e.target);

            if (!isClickInsideMenu && !isClickOnToggle) {
                navLinks.classList.remove('active');
                menuToggle.style.transform = 'rotate(0deg)';
            }
        });
    } else {
        console.error("Elemen navbar tidak ditemukan! Periksa ID 'mobile-menu' dan class 'nav-links' di HTML Anda.");
    }
});

