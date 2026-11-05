/**
 * THEME.JS - Logika Tema Gelap (Dark Mode) & Terang (Light Mode)
 * ==============================================================
 * Fungsi:
 * 1. Mencegah efek kedipan layar (Flash of Unstyled Content / FOUC) dengan
 *    menerapkan tema yang tersimpan di localStorage sesegera mungkin.
 * 2. Mengatur tombol toggle tema (Matahari / Bulan) di Navbar.
 */

// Eksekusi segera sebelum render selesai untuk mencegah FOUC
(function () {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
})();

// Hubungkan tombol toggle begitu DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const targetTheme = isLight ? 'dark' : 'light';

      if (targetTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }

      // Simpan preferensi pilihan pengunjung di browser
      localStorage.setItem('portfolio_theme', targetTheme);
    });
  }
});

