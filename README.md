# ⚡ Kholid Supriadi — Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Website-00ff66?style=for-the-badge&logo=githubpages&logoColor=black)](https://oliksupriadi-exe92.github.io/Portfolio/)
[![GitHub repo](https://img.shields.io/badge/GitHub-Portfolio%20Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oliksupriadi-exe92/Portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-00e5ff?style=for-the-badge)](LICENSE)

> Website portofolio pribadi modern yang dibangun dengan estetika **Cyber Black & Neon Green**, dirancang khusus untuk menampilkan profil keahlian, rekam jejak pengalaman, dan showcase proyek *Web Development* serta *UI/UX Design*.

---

## 🌐 Demo & Tampilan Langsung

Kunjungi website portofolio yang sudah ter-deploy secara live di GitHub Pages:  
👉 **[https://oliksupriadi-exe92.github.io/Portfolio/](https://oliksupriadi-exe92.github.io/Portfolio/)**

---

## ✨ Fitur Utama

- 🌐 **Sistem Bilingual Dinamis (ID / EN)**: Berganti bahasa antara Bahasa Indonesia dan English secara instan tanpa reload halaman, ditenagai oleh struktur data modular di [`content.js`](assets/js/content.js).
- 🌓 **Dual Theme (Dark / Light Mode)**: Dukungan tema gelap (*Cyberpunk Dark*) dan tema terang (*Clean Tech Light*) dengan transisi mulus dan penyimpanan preferensi di `localStorage`.
- ⚡ **Anti-FOUC (Flash of Unstyled Content)**: Pemuatan skrip tema di bagian `<head>` memastikan tidak terjadi kedipan putih saat pengguna me-refresh halaman dalam mode gelap.
- 📱 **Desain 100% Responsif & Mobile-First**: Dilengkapi menu navigasi hamburger interaktif, drawer animasi halus, dan *safe tap targets* untuk perangkat smartphone maupun layar desktop lebar.
- 💼 **Showcase Proyek & Pengalaman Terstruktur**: Menyajikan studi kasus proyek (Problem, Solution, Tech Stack) lengkap dengan tautan repositori GitHub dan demo langsung.
- 📬 **Formulir Kontak Serverless (Web3Forms AJAX)**: Pengunjung dapat mengirim pesan langsung ke inbox email tanpa backend server dan tanpa reload halaman (*seamless feedback*).
- 🎨 **Estetika Tipografi Modern**: Menggabungkan font *Space Grotesk* (heading futuristik), *Inter* (keterbacaan teks utama yang optimal), dan *JetBrains Mono* (aksen kode dan teknologi).
- 🚀 **Performa Tinggi & Zero Dependencies**: 100% Vanilla HTML5, CSS3, dan ES6+ JavaScript tanpa framework berat, menghasilkan waktu muat secepat kilat (*lightning-fast loading speed*).

---

## 🛠️ Tech Stack & Alat Pengembangan

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantik | Struktur halaman yang aksesibel dan SEO-friendly |
| **Styling** | Vanilla CSS3 | Desain modular dengan CSS Custom Properties (Variables), Flexbox, dan CSS Grid |
| **Scripting** | Vanilla JavaScript (ES6+) | Logika tema, translasi bahasa dinamis, dan integrasi API form |
| **Icons & Font** | Google Fonts & Inline SVG | *Space Grotesk*, *Inter*, *JetBrains Mono*, serta ikon SVG yang tajam dan ringan |
| **Integrasi Kontak** | Web3Forms API | Layanan pengiriman form kontak langsung ke email pemilik |
| **Hosting & Deploy**| GitHub Pages | Deployment statis gratis, stabil, dan otomatis |

---

## 📂 Struktur Direktori

```text
portofolio/
├── assets/
│   ├── css/
│   │   ├── style.css           # Styling utama seluruh komponen, tata letak, dan animasi
│   │   └── variables.css       # Definisi token desain (warna tema, spasi, tipografi)
│   ├── docs/
│   │   └── CV_Kholid_Supriadi.pdf # Berkas Curriculum Vitae yang dapat diunduh
│   ├── images/
│   │   ├── favicon.svg         # Ikon tab peramban (brand logo)
│   │   └── kholid-profile.jpeg # Foto profil utama
│   └── js/
│       ├── content.js          # Basis data teks bilingual (ID/EN) dan daftar proyek/pengalaman
│       ├── script.js           # Pengendali interaksi UI, perender data, dan form kontak
│       └── theme.js            # Pengatur status tema dark/light & pencegah FOUC
├── .gitignore                  # Berkas pengecualian file yang tidak perlu di-track Git
├── index.html                  # Halaman utama portofolio
└── README.md                   # Dokumentasi resmi proyek repositori
```

---

## 🚀 Panduan Menjalankan Secara Lokal (Quick Start)

Karena proyek ini murni dibangun dengan teknologi web standar (*Vanilla Web*), Anda tidak memerlukan instalasi `npm`, `node_modules`, ataupun proses *build* yang rumit.

### Opsi 1: Buka Langsung di Peramban
1. Klon repositori ini ke komputer Anda:
   ```bash
   git clone https://github.com/oliksupriadi-exe92/Portfolio.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd Portfolio
   ```
3. Klik dua kali pada berkas `index.html` atau buka melalui peramban favorit Anda (Chrome, Edge, Firefox).

### Opsi 2: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder proyek di **Visual Studio Code**.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) dari tab Extensions (`Ctrl+Shift+X`).
3. Klik kanan pada berkas `index.html` lalu pilih **"Open with Live Server"** (atau tekan tombol *Go Live* di status bar bawah).
4. Portofolio akan berjalan di `http://127.0.0.1:5500`.

### Opsi 3: Menggunakan Python Server
Jika Anda memiliki Python terpasang di komputer:
```bash
# Jalankan server lokal pada port 3000
python -m http.server 3000
```
Buka browser dan akses alamat `http://localhost:3000`.

---

## ⚙️ Panduan Kustomisasi Konten

Anda dapat memperbarui seluruh isi portofolio dengan mudah tanpa perlu menyentuh struktur kode HTML:

1. **Memperbarui Teks & Data Proyek**:
   - Buka berkas [`assets/js/content.js`](assets/js/content.js).
   - Edit bagian objek `id` (Bahasa Indonesia) atau `en` (Bahasa Inggris) sesuai kebutuhan Anda (profil, keahlian, daftar pengalaman, dan studi kasus proyek).
2. **Mengganti Foto Profil**:
   - Ganti berkas gambar di [`assets/images/kholid-profile.jpeg`](assets/images/kholid-profile.jpeg) dengan foto profil terbaru Anda (disarankan rasio 1:1 / persegi dengan resolusi tajam).
3. **Memperbarui CV / Resume**:
   - Ganti berkas PDF di [`assets/docs/CV_Kholid_Supriadi.pdf`](assets/docs/CV_Kholid_Supriadi.pdf) dengan berkas CV asli Anda yang terbaru.
4. **Mengatur Penerimaan Email Kontak (Web3Forms)**:
   - Dapatkan *Access Key* gratis di [Web3Forms](https://web3forms.com/).
   - Buka `index.html`, cari elemen `input` tersembunyi `name="access_key"`, lalu ganti nilainya dengan *Access Key* milik Anda:
     ```html
     <input type="hidden" name="access_key" value="KUNCI_AKSES_MILIK_ANDA" id="web3forms-key">
     ```

---

## 🌐 Panduan Deployment ke GitHub Pages

Jika Anda melakukan fork atau mengunggah repositori ini ke akun GitHub Anda:

1. Pastikan seluruh berkas sudah di-push ke branch `main`.
2. Buka tab **Settings** pada repositori GitHub Anda.
3. Pada panel sebelah kiri, pilih menu **Pages** (di bawah bagian *Code and automation*).
4. Pada opsi **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan direktori `/ (root)`.
5. Klik **Save**. Tunggu 1–2 menit, dan website portofolio Anda akan aktif secara publik di `https://<username>.github.io/<repository-name>/`.

---

## 👨‍💻 Profil Pembuat

**Kholid Supriadi**  
Mahasiswa Teknik Informatika — *Institut Teknologi Sains Bandung (ITSB)*  
Fokus: *Web Development, Front-End Engineering & UI/UX Design*

- 🐙 **GitHub**: [@oliksupriadi-exe92](https://github.com/oliksupriadi-exe92)
- 💼 **LinkedIn**: [Kholik Supriadi](https://www.linkedin.com/in/kholik-supriadi-5b3ba6427/)
- ✉️ **Email**: [oliksupriadi92@gmail.com](mailto:oliksupriadi92@gmail.com)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT License](LICENSE) — Anda bebas menggunakan, memodifikasi, dan mengembangkan kode ini untuk keperluan pembelajaran maupun portofolio pribadi Anda.

