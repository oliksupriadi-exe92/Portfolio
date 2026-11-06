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

    // --- D. EXPERIENCE SECTION (Dinamis dari content.js) ---
    const expBadge = document.getElementById('experience-badge');
    const expTitle = document.getElementById('experience-title');
    const expSubtitle = document.getElementById('experience-subtitle');
    const expTimeline = document.getElementById('experience-timeline');

    if (expBadge && data.experienceSection) expBadge.textContent = data.experienceSection.badge;
    if (expTitle && data.experienceSection) {
      expTitle.innerHTML = lang === 'id'
        ? `Pengalaman & <span class="text-gradient">Kepemimpinan</span>`
        : `Experience & <span class="text-gradient">Leadership</span>`;
    }
    if (expSubtitle && data.experienceSection) expSubtitle.textContent = data.experienceSection.subtitle;

    // Render kartu pengalaman otomatis dari data.experiences
    if (expTimeline && Array.isArray(data.experiences)) {
      expTimeline.innerHTML = data.experiences.map((exp) => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-tag">${exp.type}</span>
              <span class="timeline-period">${exp.period}</span>
            </div>
            <h3 class="timeline-role">${exp.role}</h3>
            <h4 class="timeline-org">${exp.organization}</h4>
            <p class="timeline-desc">${exp.description}</p>
            <div class="timeline-skills">
              ${exp.skills.map((s) => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }

    // --- E. PROJECTS SECTION (Dinamis dari content.js) ---
    const projectsBadge = document.getElementById('projects-badge');
    const projectsTitle = document.getElementById('projects-title');
    const projectsSubtitle = document.getElementById('projects-subtitle');
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsBadge) projectsBadge.textContent = data.projectsSection.badge;
    if (projectsTitle) {
      projectsTitle.innerHTML = lang === 'id'
        ? `Karya & <span class="text-gradient">Proyek Pilihan</span>`
        : `Featured <span class="text-gradient">Projects</span>`;
    }
    if (projectsSubtitle) projectsSubtitle.textContent = data.projectsSection.subtitle;

    // Render kartu proyek otomatis dari data.projects
    if (projectsGrid && Array.isArray(data.projects)) {
      const problemLabel = lang === 'id' ? 'Masalah yang Diselesaikan:' : 'The Problem:';
      const solutionLabel = lang === 'id' ? 'Solusi Sistem:' : 'The Solution:';
      const viewGithubLabel = lang === 'id' ? 'Lihat di GitHub' : 'View on GitHub';
      const demoLabel = lang === 'id' ? 'Demo Langsung' : 'Live Demo';

      projectsGrid.innerHTML = data.projects.map((proj, idx) => {
        const isFeatured = idx === 0 || proj.isFeatured;
        return `
          <article class="project-card ${isFeatured ? 'featured-project' : ''}">
            <div class="project-header">
              <span class="project-tag">${proj.tag}</span>
              <span class="project-category">${proj.category}</span>
            </div>
            
            <h3 class="project-title">${proj.title}</h3>
            
            <p class="project-desc">${proj.description}</p>

            ${(proj.problem || proj.solution) ? `
              <div class="project-details">
                ${proj.problem ? `
                  <div class="detail-box">
                    <span class="detail-title">${problemLabel}</span>
                    <p>${proj.problem}</p>
                  </div>
                ` : ''}
                ${proj.solution ? `
                  <div class="detail-box">
                    <span class="detail-title">${solutionLabel}</span>
                    <p>${proj.solution}</p>
                  </div>
                ` : ''}
              </div>
            ` : ''}

            <div class="project-tech-list">
              ${proj.tools.map((t) => `<span class="tech-badge">${t}</span>`).join('')}
            </div>

            <div class="project-actions">
              ${proj.githubUrl ? `
                <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn ${isFeatured ? 'btn-primary' : 'btn-outline'} btn-sm">
                  ${viewGithubLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ` : ''}
              ${(proj.demoUrl && proj.demoUrl !== proj.githubUrl && proj.demoUrl !== '#') ? `
                <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  ${demoLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </a>
              ` : ''}
            </div>
          </article>
        `;
      }).join('');
    }

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
