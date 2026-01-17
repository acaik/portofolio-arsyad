window.addEventListener('load', () => {
    // Hilangkan overlay saat halaman selesai dimuat
    document.body.classList.add('page-loaded');
});

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LOGIKA TRANSISI HALAMAN ---
    const transitionLinks = document.querySelectorAll('.transition-link, .back-button');
    
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.getAttribute('href');

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = destination;
            }, 1000); // Durasi 1 detik sesuai CSS
        });
    });

    // --- 2. LOGIKA NOTIFIKASI FORM KONTAK ---
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman saat kirim

            // Tampilkan Loading
            Swal.fire({
                title: 'Sedang Mengirim...',
                text: 'Mohon tunggu sebentar ya.',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Simulasi Proses Pengiriman (2 detik)
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Pesan Terkirim!',
                    text: 'Terima kasih! Pesan Anda sudah saya terima. Mohon tunggu balasan saya ya!',
                    confirmButtonColor: '#3b82f6', // Warna biru sesuai tema Anda
                    confirmButtonText: 'Oke Sip!',
                    timer: 5000 // Notif hilang sendiri setelah 5 detik
                });

                contactForm.reset(); // Kosongkan form setelah berhasil
            }, 2000);
        });
    }
});