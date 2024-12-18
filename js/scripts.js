// Ini untuk menjalankan kode saat halaman sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function () {
    console.log('Halaman sudah dimuat!');
  
    // Efek animasi header saat halaman pertama kali dimuat
    const header = document.querySelector('.hero-section');
    if (header) {
      header.classList.add('animated-header');
    }
  
    // Tombol klik pada tombol layanan atau navigasi
    const btnPrimary = document.querySelector('.button-hover');
    if (btnPrimary) {
      btnPrimary.addEventListener('click', function () {
        alert('Tombol ditekan!');
      });
    }
  
    // Efek saat pengguna menggulir halaman
    window.addEventListener('scroll', handleScroll);
  });

  //mUntuk mengatur agar ketika CTA layanan unggulan di klik dia ke detail layanan yang di tuju
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const offset = -150; // Sesuaikan nilai ini untuk mengatur posisi (contohnya -100 px ke atas)
      const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });

// Dapatkan elemen tombol scroll-up
const scrollUpButton = document.getElementById("scrollUp");

// Tampilkan tombol scroll-up ketika halaman digulir lebih dari 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpButton.style.display = "block"; // Menampilkan tombol
  } else {
    scrollUpButton.style.display = "none"; // Menyembunyikan tombol
  }
};

// Menambahkan aksi ketika tombol diklik (scroll ke atas)
scrollUpButton.addEventListener("click", function (e) {
  e.preventDefault(); // Menghindari link default
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Efek scroll yang halus
  });
});

function scrollTestimonials(direction) {
  const wrapper = document.querySelector('.testimonials-wrapper');
  const scrollAmount = 300; // Adjust scroll amount if needed

  if (direction === 'left') {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

  // Fungsi untuk menangani scroll dan memberikan efek pada halaman
  function handleScroll() {
    const header = document.querySelector('.hero-section');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#773288'; // Ganti warna saat menggulir
    } else {
      header.style.backgroundColor = 'transparent';
    }
  }
  