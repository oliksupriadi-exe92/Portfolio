/**
 * SCRIPT.JS - Interaktivitas Website Portofolio & Sistem Bilingual
 * ================================================================
 * File ini mengatur:
 * 1. Logika pergantian bahasa dinamis (ID <-> EN) menggunakan data dari content.js.
 * 2. Penyimpanan preferensi bahasa di localStorage.
 * 3. Pengiriman form kontak serverless via Web3Forms (AJAX tanpa reload halaman).
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Ambil preferensi bahasa yang tersimpan di browser, atau default ke 'id' (Bahasa Indonesia)
  let currentLang = localStorage.getItem('portfolio_lang') || 'id';

  // Elemen tombol bahasa di navbar
  const langToggleBtn = document.getElementById('lang-toggle');
  const langIdText = document.getElementById('lang-id');
  const langEnText = document.getElementById('lang-en');

  // --- FUNGSI GANTI BAHASA DINAMIS ---
  function updateContent(lang) {
    if (!portfolioData || !portfolioData[lang]) return;

    const data = portfolioData[lang];

    // --- A. NAVBAR ---
    const navAbout = document.getElementById('nav-about');
    const navSkills = document.getElementById('nav-skills');
    const navExperience = document.getElementById('nav-experience');
    const navProjects = document.getElementById('nav-projects');
    const navContact = document.getElementById('nav-contact');
    const navCtaBtn = document.getElementById('nav-cta-btn');

    if (navAbout) navAbout.textContent = data.nav.about;
    if (navSkills) navSkills.textContent = data.nav.skills;
    if (navExperience) navExperience.textContent = data.nav.experience;
    if (navProjects) navProjects.textContent = data.nav.projects;
    if (navContact) navContact.textContent = data.nav.contact;
    if (navCtaBtn) navCtaBtn.textContent = data.nav.cta;

    // --- B. HERO SECTION ---
    const heroStatus = document.getElementById('hero-status-text');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroDesc = document.getElementById('hero-description');
    const heroBtnProjects = document.getElementById('hero-btn-projects');
    const heroBtnCvText = document.getElementById('hero-btn-cv-text');
    const heroSocialLabel = document.getElementById('hero-social-label');

    if (heroStatus) heroStatus.textContent = data.hero.status;
    if (heroTitle && data.hero.headline) {
      heroTitle.innerHTML = data.hero.headline;
    }
    if (heroSubtitle && data.hero.role) {
      heroSubtitle.innerHTML = data.hero.role;
    }
    if (heroDesc) heroDesc.textContent = data.hero.description;
    if (heroBtnProjects) {
      heroBtnProjects.innerHTML = `
        ${data.hero.btnProjects}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      `;
    }
    if (heroBtnCvText && data.hero.btnCv) {
      heroBtnCvText.textContent = data.hero.btnCv;
    }
    if (heroSocialLabel) heroSocialLabel.textContent = data.hero.socialLabel;

    // --- C. ABOUT ME SECTION ---
    const aboutBadge = document.getElementById('about-badge');
    const aboutTitle = document.getElementById('about-title');
    const aboutSubtitle = document.getElementById('about-subtitle');
    const aboutP1 = document.getElementById('about-p1');
    const aboutP2 = document.getElementById('about-p2');

    if (aboutBadge) aboutBadge.textContent = data.about.badge;
    if (aboutTitle) {
      aboutTitle.innerHTML = lang === 'id' 
        ? `Tentang <span class="text-gradient">Saya</span>` 
        : `About <span class="text-gradient">Me</span>`;
    }
    if (aboutSubtitle) aboutSubtitle.textContent = data.about.subtitle;
    if (aboutP1) aboutP1.textContent = data.about.paragraphs[0];
    if (aboutP2) aboutP2.textContent = data.about.paragraphs[1];

    // --- D. EXPERIENCE SECTION ---
    const expBadge = document.getElementById('experience-badge');
    const expTitle = document.getElementById('experience-title');
    const expSubtitle = document.getElementById('experience-subtitle');

    if (expBadge && data.experienceSection) expBadge.textContent = data.experienceSection.badge;
    if (expTitle && data.experienceSection) {
      expTitle.innerHTML = lang === 'id'
        ? `Pengalaman & <span class="text-gradient">Kepemimpinan</span>`
        : `Experience & <span class="text-gradient">Leadership</span>`;
    }
    if (expSubtitle && data.experienceSection) expSubtitle.textContent = data.experienceSection.subtitle;

    if (data.experiences && data.experiences.length >= 3) {
      const expRole1 = document.getElementById('exp-role-1');
      const expOrg1 = document.getElementById('exp-org-1');
      const expDesc1 = document.getElementById('exp-desc-1');
      const expPeriod1 = document.getElementById('exp-period-1');

      const expRole2 = document.getElementById('exp-role-2');
      const expOrg2 = document.getElementById('exp-org-2');
      const expDesc2 = document.getElementById('exp-desc-2');
      const expPeriod2 = document.getElementById('exp-period-2');

      const expRole3 = document.getElementById('exp-role-3');
      const expOrg3 = document.getElementById('exp-org-3');
      const expDesc3 = document.getElementById('exp-desc-3');
      const expPeriod3 = document.getElementById('exp-period-3');

      if (expRole1) expRole1.textContent = data.experiences[0].role;
      if (expOrg1) expOrg1.textContent = data.experiences[0].organization;
      if (expDesc1) expDesc1.textContent = data.experiences[0].description;
      if (expPeriod1) expPeriod1.textContent = data.experiences[0].period;

      if (expRole2) expRole2.textContent = data.experiences[1].role;
      if (expOrg2) expOrg2.textContent = data.experiences[1].organization;
      if (expDesc2) expDesc2.textContent = data.experiences[1].description;
      if (expPeriod2) expPeriod2.textContent = data.experiences[1].period;

      if (expRole3) expRole3.textContent = data.experiences[2].role;
      if (expOrg3) expOrg3.textContent = data.experiences[2].organization;
      if (expDesc3) expDesc3.textContent = data.experiences[2].description;
      if (expPeriod3) expPeriod3.textContent = data.experiences[2].period;
    }

    // --- E. PROJECTS SECTION HEADER ---
    const projectsBadge = document.getElementById('projects-badge');
    const projectsTitle = document.getElementById('projects-title');
    const projectsSubtitle = document.getElementById('projects-subtitle');

    if (projectsBadge) projectsBadge.textContent = data.projectsSection.badge;
    if (projectsTitle) {
      projectsTitle.innerHTML = lang === 'id'
        ? `Karya & <span class="text-gradient">Proyek Pilihan</span>`
        : `Featured <span class="text-gradient">Projects</span>`;
    }
    if (projectsSubtitle) projectsSubtitle.textContent = data.projectsSection.subtitle;

    // --- F. CONTACT SECTION & FORM ---
    const contactBadge = document.getElementById('contact-badge');
    const contactTitle = document.getElementById('contact-title');
    const contactSubtitle = document.getElementById('contact-subtitle');
    const contactInfoTitle = document.getElementById('contact-info-title');
    const infoEmailLabel = document.getElementById('info-email-label');
    const infoGithubLabel = document.getElementById('info-github-label');
    const infoLocationLabel = document.getElementById('info-location-label');
    const infoLocationVal = document.getElementById('info-location-val');
    const infoStatusLabel = document.getElementById('info-status-label');
    const infoStatusVal = document.getElementById('info-status-val');

    const formNameLabel = document.getElementById('form-name-label');
    const formNameInput = document.getElementById('form-name');
    const formEmailLabel = document.getElementById('form-email-label');
    const formEmailInput = document.getElementById('form-email');
    const formSubjectLabel = document.getElementById('form-subject-label');
    const formMessageLabel = document.getElementById('form-message-label');
    const formMessageInput = document.getElementById('form-message');
    const formSubmitText = document.getElementById('form-submit-text');

    const opt1 = document.getElementById('subj-opt-1');
    const opt2 = document.getElementById('subj-opt-2');
    const opt3 = document.getElementById('subj-opt-3');
    const opt4 = document.getElementById('subj-opt-4');

    if (contactBadge) contactBadge.textContent = data.contact.badge;
    if (contactTitle) {
      contactTitle.innerHTML = lang === 'id'
        ? `Mari <span class="text-gradient">Berkolaborasi</span>`
        : `Let's <span class="text-gradient">Collaborate</span>`;
    }
    if (contactSubtitle) contactSubtitle.textContent = data.contact.subtitle;

    if (contactInfoTitle && data.contact.infoTitle) contactInfoTitle.textContent = data.contact.infoTitle;
    if (infoEmailLabel && data.contact.infoEmailLabel) infoEmailLabel.textContent = data.contact.infoEmailLabel;
    if (infoGithubLabel && data.contact.infoGithubLabel) infoGithubLabel.textContent = data.contact.infoGithubLabel;
    if (infoLocationLabel && data.contact.infoLocationLabel) infoLocationLabel.textContent = data.contact.infoLocationLabel;
    if (infoLocationVal && data.contact.infoLocation) infoLocationVal.textContent = data.contact.infoLocation;
    if (infoStatusLabel && data.contact.infoStatusLabel) infoStatusLabel.textContent = data.contact.infoStatusLabel;
    if (infoStatusVal && data.contact.infoStatus) infoStatusVal.textContent = data.contact.infoStatus;

    if (formNameLabel && data.contact.formNameLabel) formNameLabel.textContent = data.contact.formNameLabel;
    if (formNameInput && data.contact.formNamePlaceholder) formNameInput.placeholder = data.contact.formNamePlaceholder;
    if (formEmailLabel && data.contact.formEmailLabel) formEmailLabel.textContent = data.contact.formEmailLabel;
    if (formEmailInput && data.contact.formEmailPlaceholder) formEmailInput.placeholder = data.contact.formEmailPlaceholder;
    if (formSubjectLabel && data.contact.formSubjectLabel) formSubjectLabel.textContent = data.contact.formSubjectLabel;
    if (formMessageLabel && data.contact.formMessageLabel) formMessageLabel.textContent = data.contact.formMessageLabel;
    if (formMessageInput && data.contact.formMessagePlaceholder) formMessageInput.placeholder = data.contact.formMessagePlaceholder;
    if (formSubmitText && data.contact.formSubmitBtn) formSubmitText.textContent = data.contact.formSubmitBtn;

    if (data.contact.formSubjects && data.contact.formSubjects.length >= 4) {
      if (opt1) { opt1.textContent = data.contact.formSubjects[0]; opt1.value = data.contact.formSubjects[0]; }
      if (opt2) { opt2.textContent = data.contact.formSubjects[1]; opt2.value = data.contact.formSubjects[1]; }
      if (opt3) { opt3.textContent = data.contact.formSubjects[2]; opt3.value = data.contact.formSubjects[2]; }
      if (opt4) { opt4.textContent = data.contact.formSubjects[3]; opt4.value = data.contact.formSubjects[3]; }
    }

    // Perbarui penanda visual tombol ID / EN
    if (lang === 'id') {
      langIdText.classList.add('active');
      langEnText.classList.remove('active');
    } else {
      langEnText.classList.add('active');
      langIdText.classList.remove('active');
    }

    // Simpan pilihan ke localStorage browser
    localStorage.setItem('portfolio_lang', lang);
  }

  // Terapkan bahasa saat halaman pertama kali dimuat
  updateContent(currentLang);

  // Event Listener: Klik tombol ganti bahasa
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'id' ? 'en' : 'id';
      updateContent(currentLang);
    });
  }

  // =========================================================================
  // LOGIKA FORM KONTAK SERVERLESS (WEB3FORMS VIA AJAX)
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');
  const submitText = document.getElementById('form-submit-text');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Mencegah reload halaman

      const data = portfolioData[currentLang].contact;

      // Status loading
      submitBtn.disabled = true;
      if (submitText) submitText.textContent = data.formSending || 'Mengirim...';
      formStatus.className = 'form-status-message';
      formStatus.style.display = 'none';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          formStatus.className = 'form-status-message success';
          formStatus.textContent = data.formSuccess;
          formStatus.style.display = 'block';
          contactForm.reset();
        } else {
          // Jika access_key belum diisi atau terjadi kendala
          formStatus.className = 'form-status-message error';
          formStatus.textContent = result.message || data.formError;
          formStatus.style.display = 'block';
        }
      } catch (err) {
        formStatus.className = 'form-status-message error';
        formStatus.textContent = data.formError;
        formStatus.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        if (submitText) submitText.textContent = data.formSubmitBtn;
      }
    });
  }

  // =========================================================================
  // LOGIKA MENU NAVIGASI MOBILE (HAMBURGER DRAWER)
  // =========================================================================
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggleBtn && navMenu) {
    // Buka / Tutup drawer saat tombol hamburger diklik
    menuToggleBtn.addEventListener('click', () => {
      menuToggleBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Otomatis tutup drawer saat salah satu menu diklik
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuToggleBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Tutup menu jika pengguna mengklik area luar menu
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
        menuToggleBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
});
