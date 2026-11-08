// ==========================================================
// TORNA (PRACHANDAGAD) - APPLICATION ENGINE
// Editorial UI: Lenis smooth scroll, staggered column parallax,
// letter-by-letter strapline, cursor hover reveal, sticky footer.
// ==========================================================

document.addEventListener('DOMContentLoaded', () => App.init());

const App = {
  currentLang: 'mr', // 'mr' | 'en'
  activeMapTab: 'sketch',
  activeArchTab: 'all',
  activeGalleryFilter: 'all',
  showAllMemories: false,
  MEMORY_LIMIT: 6,
  galleryItems: [],
  lightboxList: [],
  lightboxIndex: 0,
  tempUploadedBase64: null,
  lenis: null,
  reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  map: { z: 1, x: 0, y: 0 },
  lastFocus: null,

  STAGES: ['planning', 'mudwork', 'sculpting', 'lighting', 'squad'],
  STAGE_LABEL: {
    planning: { mr: 'प्लॅनिंग व गप्पा', en: 'Planning & Banter' },
    mudwork: { mr: 'मातीकाम व धमाल', en: 'Mud Work & Fun' },
    sculpting: { mr: 'किल्ला साकारताना', en: 'Shaping the Fort' },
    lighting: { mr: 'रोषणाई व दिवा', en: 'Diyas & Flags' },
    squad: { mr: 'आमची गँग', en: 'The Squad' }
  },
  TINTS: ['var(--sky)', 'var(--terracotta)', 'var(--sage)', 'var(--sand)'],
  ASPECTS: ['1500 / 2048', '2250 / 2813', '1080 / 1440', '1852 / 2314', '760 / 1140', '1380 / 1731'],
  COL_BASE: [53, 66, 7, 38, 20],
  COL_FACTOR: [0.06, -0.045, 0.07, -0.06, 0.04],

  // ---------------------------------------------------------
  init() {
    this.loadGalleryData();
    this.initSmoothScroll();
    this.bindEvents();
    this.render();
    this.initScrollEffects();
    this.initHoverReveal();
    this.initVideoObserver();
    this.initCardObserver();
  },

  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  get isMr() { return this.currentLang === 'mr'; },
  t(mr, en) { return this.isMr ? mr : en; },

  // ================= STORAGE & MEMORIES =================
  loadGalleryData() {
    const storageKey = 'torna_diwali_gallery_v2';
    let userUploaded = [];
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const items = JSON.parse(saved) || [];
        userUploaded = items.filter(it => it && it.id && String(it.id).startsWith('user_'));
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    }
    this.galleryItems = [...userUploaded, ...TORNA_DATA.initialGallery];
    this.saveGalleryData();
  },

  saveGalleryData() {
    try {
      const onlyUser = this.galleryItems.filter(it => String(it.id).startsWith('user_'));
      localStorage.setItem('torna_diwali_gallery_v2', JSON.stringify(onlyUser));
    } catch (e) {
      console.warn('Storage quota exceeded', e);
    }
  },

  addGalleryItem(item) {
    this.galleryItems.unshift(item);
    this.saveGalleryData();
    this.activeGalleryFilter = 'all';
    this.syncFilterTabs();
    this.renderMemories();
  },

  // ================= SMOOTH SCROLL (LENIS) =================
  initSmoothScroll() {
    if (this.reduceMotion || typeof Lenis === 'undefined') return;
    this.lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    const raf = (time) => { this.lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  },

  scrollToTarget(hash) {
    const target = hash === '#top' || hash === '#' ? 0 : document.querySelector(hash);
    if (target === null) return;
    if (this.lenis) this.lenis.scrollTo(target, { duration: 1.6 });
    else if (target === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
    else target.scrollIntoView({ behavior: this.reduceMotion ? 'auto' : 'smooth', block: 'start' });
  },

  lockScroll(lock) {
    if (this.lenis) { lock ? this.lenis.stop() : this.lenis.start(); }
    else document.body.style.overflow = lock ? 'hidden' : '';
  },

  // ================= SCROLL EFFECTS (nav mark + parallax) =================
  initScrollEffects() {
    this.nav = document.getElementById('nav');
    this.hero = document.getElementById('top');
    this.rosterGrid = document.getElementById('rosterGrid');
    this.ticking = false;

    const onScroll = () => {
      if (this.ticking) return;
      this.ticking = true;
      requestAnimationFrame(() => { this.updateScrollEffects(); this.ticking = false; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { this.updateScrollEffects(); this.checkMasonryCols(); });
    if (this.lenis) this.lenis.on('scroll', onScroll);
    this.updateScrollEffects();
  },

  updateScrollEffects() {
    const y = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;

    // Crescent mark appears once the hero wordmark has scrolled past
    const heroBottom = this.hero ? this.hero.offsetTop + (this.hero.querySelector('.hero__mark')?.offsetHeight || 300) : vh;
    this.nav.classList.toggle('is-past', y > heroBottom - 40);

    // Staggered column parallax (desktop only)
    if (this.reduceMotion || !this.rosterGrid) return;
    const cols = this.rosterGrid.children;
    if (window.innerWidth < 992) {
      for (const c of cols) c.style.setProperty('--y', '0px');
      return;
    }
    const rect = this.rosterGrid.getBoundingClientRect();
    const rel = (vh / 2) - (rect.top + rect.height / 2);
    const clamped = Math.max(-vh, Math.min(vh, rel));
    Array.from(cols).forEach((c, i) => {
      const base = this.COL_BASE[i % 5];
      const f = this.COL_FACTOR[i % 5];
      c.style.setProperty('--y', (base + clamped * f * -1).toFixed(1) + 'px');
    });
  },

  // ================= VIDEO PERFORMANCE =================
  initVideoObserver() {
    if (!('IntersectionObserver' in window)) return;
    this.videoIO = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const v = en.target;
        if (en.isIntersecting) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
        else v.pause();
      });
    }, { threshold: 0.25 });
    this.observeVideos(document);
  },

  observeVideos(root) {
    if (!this.videoIO) return;
    root.querySelectorAll('video[data-autoplay]').forEach(v => this.videoIO.observe(v));
  },

  initCardObserver() {
    this.cardIO = ('IntersectionObserver' in window)
      ? new IntersectionObserver(entries => {
          entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); this.cardIO.unobserve(en.target); } });
        }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })
      : null;
    this.observeCards();
  },

  observeCards() {
    document.querySelectorAll('.card:not(.in)').forEach(c => {
      if (this.cardIO) this.cardIO.observe(c); else c.classList.add('in');
    });
  },

  // ================= CURSOR HOVER REVEAL =================
  initHoverReveal() {
    const box = document.getElementById('hoverReveal');
    const img = document.getElementById('hoverRevealImg');
    if (!box || !window.matchMedia('(hover: hover) and (min-width: 992px)').matches) return;

    let tx = -999, ty = -999, cx = -999, cy = -999, running = false;
    const w = () => box.offsetWidth || 240, h = () => box.offsetHeight || 320;

    const loop = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      box.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (running) requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', e => {
      tx = e.clientX + 26;
      ty = e.clientY - h() / 2;
      ty = Math.max(10, Math.min(window.innerHeight - h() - 10, ty));
      if (tx + w() > window.innerWidth - 10) tx = e.clientX - w() - 26;
    }, { passive: true });

    document.addEventListener('mouseover', e => {
      const el = e.target.closest && e.target.closest('[data-reveal]');
      if (!el) return;
      const src = el.getAttribute('data-reveal');
      if (src) img.src = src;
      if (cx < -500) { cx = tx; cy = ty; }
      if (!running) { running = true; requestAnimationFrame(loop); }
      box.classList.add('on');
    });
    document.addEventListener('mouseout', e => {
      const el = e.target.closest && e.target.closest('[data-reveal]');
      if (!el) return;
      if (e.relatedTarget && el.contains(e.relatedTarget)) return;
      box.classList.remove('on');
    });
  },

  // ================= EVENTS =================
  bindEvents() {
    // Anchor links (smooth scroll + close burger)
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash.length < 1) return;
      e.preventDefault();
      this.closeMenu();
      const nav = a.getAttribute('data-nav');
      if (a.classList.contains('nav-plus')) {
        a.classList.add('is-rot');
        setTimeout(() => a.classList.remove('is-rot'), 900);
      }
      const phase = a.getAttribute('data-phase');
      if (phase) { this.activeGalleryFilter = phase; this.showAllMemories = false; this.syncFilterTabs(); this.renderMemories(); }
      this.scrollToTarget(hash);
    });

    // Language + tutari (nav and mobile menu)
    document.querySelectorAll('.js-lang').forEach(b => b.addEventListener('click', () => this.setLanguage(this.isMr ? 'en' : 'mr')));
    document.querySelectorAll('.js-tutari').forEach(b => b.addEventListener('click', () => SoundFX.playTutari()));

    // Burger
    const burger = document.getElementById('burger');
    if (burger) burger.addEventListener('click', () => this.toggleMenu());

    // Map tabs
    document.querySelectorAll('[data-maptab]').forEach(btn =>
      btn.addEventListener('click', e => this.switchMapTab(e.currentTarget.getAttribute('data-maptab'))));
    document.getElementById('mapZoomIn')?.addEventListener('click', () => this.zoomMap(0.25));
    document.getElementById('mapZoomOut')?.addEventListener('click', () => this.zoomMap(-0.25));
    document.getElementById('mapZoomReset')?.addEventListener('click', () => this.resetMapZoom());
    this.bindMapPan();

    // Architecture tabs
    document.querySelectorAll('[data-archtab]').forEach(btn =>
      btn.addEventListener('click', e => this.switchArchTab(e.currentTarget.getAttribute('data-archtab'))));

    // Memory filters + show all
    document.querySelectorAll('.gallery-filter-btn').forEach(btn =>
      btn.addEventListener('click', e => this.switchGalleryFilter(e.currentTarget.getAttribute('data-filter'))));
    document.getElementById('allMemoriesBtn')?.addEventListener('click', () => {
      this.showAllMemories = !this.showAllMemories;
      this.renderMemories();
    });

    // Delegated: stories, cards, roster media
    document.addEventListener('click', e => {
      const head = e.target.closest('.story__head');
      if (head) { this.toggleStory(head.closest('.story')); return; }
      const media = e.target.closest('[data-open]');
      if (media) this.openLightboxById(media.getAttribute('data-open'), media.getAttribute('data-scope'));
    });

    // Blueprint hotspots
    document.querySelectorAll('.hotspot-pin').forEach(pin => {
      const go = () => this.showHotspotDetails(pin.getAttribute('data-pin'), pin);
      pin.addEventListener('click', go);
      pin.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });

    // Upload modal
    const uploadModal = document.getElementById('uploadModal');
    document.getElementById('openUploadModal')?.addEventListener('click', () => this.openModal(uploadModal));
    document.getElementById('closeUploadModal')?.addEventListener('click', () => this.closeModal(uploadModal));
    uploadModal?.addEventListener('click', e => { if (e.target === uploadModal) this.closeModal(uploadModal); });

    const dropzone = document.getElementById('photoDropzone');
    const fileInput = document.getElementById('photoFileInput');
    const previewImg = document.getElementById('uploadPreviewImg');
    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); } });
      dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.classList.add('drag'); });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag'));
      dropzone.addEventListener('drop', e => {
        e.preventDefault(); dropzone.classList.remove('drag');
        if (e.dataTransfer.files.length) this.handleFileSelect(e.dataTransfer.files[0], previewImg);
      });
      fileInput.addEventListener('change', e => { if (e.target.files.length) this.handleFileSelect(e.target.files[0], previewImg); });
    }
    const form = document.getElementById('galleryUploadForm');
    form?.addEventListener('submit', e => { e.preventDefault(); this.handleFormUpload(form, uploadModal); });

    // Lightbox
    const lb = document.getElementById('lightboxModal');
    document.getElementById('closeLightbox')?.addEventListener('click', () => this.closeLightbox());
    lb?.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox')) this.closeLightbox(); });
    document.getElementById('nextLightbox')?.addEventListener('click', () => this.stepLightbox(1));
    document.getElementById('prevLightbox')?.addEventListener('click', () => this.stepLightbox(-1));

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.closeModal(uploadModal);
        this.closeLightbox();
        this.closeMenu();
      } else if (lb && lb.classList.contains('open')) {
        if (e.key === 'ArrowRight') this.stepLightbox(1);
        if (e.key === 'ArrowLeft') this.stepLightbox(-1);
      }
    });

    // Re-layout masonry when breakpoint changes
    this.mqMasonry = window.matchMedia('(min-width: 992px)');
    this.masonryCols = this.mqMasonry.matches ? 3 : 2;
  },

  // ================= MENU / MODALS =================
  toggleMenu() {
    const open = !document.getElementById('mobileMenu').classList.contains('open');
    open ? this.openMenu() : this.closeMenu();
  },
  openMenu() {
    const m = document.getElementById('mobileMenu'), b = document.getElementById('burger');
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    b.setAttribute('aria-expanded', 'true'); b.setAttribute('aria-label', this.t('मेनू बंद करा', 'Close menu'));
    this.lockScroll(true);
  },
  closeMenu() {
    const m = document.getElementById('mobileMenu'), b = document.getElementById('burger');
    if (!m || !m.classList.contains('open')) return;
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
    b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-label', this.t('मेनू उघडा', 'Open menu'));
    this.lockScroll(false);
  },
  openModal(modal) {
    if (!modal) return;
    this.lastFocus = document.activeElement;
    modal.classList.add('open');
    this.lockScroll(true);
    const f = modal.querySelector('input, select, button');
    setTimeout(() => f && f.focus(), 60);
  },
  closeModal(modal) {
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    this.lockScroll(false);
    if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
  },

  // ================= UPLOAD =================
  handleFileSelect(file, previewEl) {
    if (!file.type.startsWith('image/')) {
      alert(this.t('कृपया केवळ फोटो निवडा.', 'Please select an image file.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      this.tempUploadedBase64 = e.target.result;
      if (previewEl) { previewEl.src = e.target.result; previewEl.style.display = 'block'; }
    };
    reader.readAsDataURL(file);
  },

  handleFormUpload(form, modal) {
    const title = form.photoTitle.value.trim();
    const stage = form.photoStage.value;
    const desc = form.photoDesc.value.trim();
    const url = form.photoUrl.value.trim();
    const finalImg = this.tempUploadedBase64 || url;
    if (!finalImg) {
      alert(this.t('कृपया फोटो निवडा किंवा इमेज URL टाका.', 'Please select a photo or enter an image URL.'));
      return;
    }
    this.addGalleryItem({
      id: 'user_' + Date.now(),
      titleMr: title || 'किल्ल्याची सुंदर आठवण',
      titleEn: title || 'Memorable Fort Moment',
      stage,
      stageMr: this.STAGE_LABEL[stage].mr,
      stageEn: this.STAGE_LABEL[stage].en,
      image: finalImg,
      descMr: desc || 'दिवाळी किल्ला बनवतानाची आमची आठवण.',
      descEn: desc || 'A moment from building our Diwali fort.'
    });
    form.reset();
    this.tempUploadedBase64 = null;
    const prev = document.getElementById('uploadPreviewImg');
    if (prev) prev.style.display = 'none';
    this.closeModal(modal);
    SoundFX.playDhol();
  },

  // ================= LANGUAGE =================
  setLanguage(lang) {
    this.currentLang = lang;
    this.render();
  },

  render() {
    document.documentElement.lang = this.currentLang;
    this.updateStaticLabels();
    this.renderHero();
    this.renderRoster();
    this.renderStrapline();
    this.renderArchitecture();
    this.renderStories();
    this.renderMemories();
    this.renderFooter();
    this.switchMapTab(this.activeMapTab, true);
    this.updateScrollEffects && this.rosterGrid && this.updateScrollEffects();
  },

  updateStaticLabels() {
    const isMr = this.isMr;
    document.title = isMr
      ? 'तोरणा (प्रचंडगड) | ऐतिहासिक माहिती व किल्ला आठवणी'
      : 'Torna Fort (Prachandagad) | History, Maps & Making Memories';

    document.querySelectorAll('[data-mr]').forEach(el => {
      el.textContent = isMr ? el.getAttribute('data-mr') : el.getAttribute('data-en');
    });
    document.querySelectorAll('[data-mr-ph]').forEach(el => {
      el.placeholder = isMr ? el.getAttribute('data-mr-ph') : el.getAttribute('data-en-ph');
    });
    document.querySelectorAll('.js-lang-label').forEach(el => { el.textContent = isMr ? 'EN' : 'मराठी'; });
    document.querySelectorAll('.js-lang').forEach(b => b.setAttribute('aria-label', isMr ? 'Switch to English' : 'मराठीत पहा'));
    const burger = document.getElementById('burger');
    if (burger) burger.setAttribute('aria-label', burger.getAttribute('aria-expanded') === 'true' ? this.t('मेनू बंद करा', 'Close menu') : this.t('मेनू उघडा', 'Open menu'));
    const heroH1 = document.querySelector('.hero .sr-only');
    if (heroH1) heroH1.textContent = isMr ? 'तोरणा (प्रचंडगड) · दिवाळी किल्ला प्रकल्प' : 'Torna (Prachandagad) · Diwali killa project';
  },

  // ================= HERO =================
  renderHero() {
    const g = TORNA_DATA.general[this.currentLang];
    const meta = document.getElementById('heroMeta');
    if (meta) {
      const rows = [
        [this.t('ठिकाण', 'Location'), g.location],
        [this.t('उंची', 'Elevation'), g.elevation],
        [this.t('विजय', 'Conquered'), g.conqueredDate],
        [this.t('अंतर', 'Distance'), g.distanceFromPune]
      ];
      meta.innerHTML = rows.map(([k, v]) => `<li><span>${this.esc(k)}</span> ${this.esc(v)}</li>`).join('');
    }
    const stats = document.getElementById('heroStatsContainer');
    if (stats) {
      stats.innerHTML = TORNA_DATA.stats.map(s => {
        const info = s[this.currentLang];
        return `<div><span class="stat__val">${this.esc(info.value)}</span><span class="stat__lbl">${this.esc(info.label)}</span></div>`;
      }).join('');
    }
  },

  // ================= PARALLAX ROSTER =================
  renderRoster() {
    const grid = this.rosterGrid || document.getElementById('rosterGrid');
    if (!grid) return;
    const all = TORNA_DATA.initialGallery;

    grid.innerHTML = this.STAGES.map((stage, i) => {
      const inStage = all.filter(it => it.stage === stage);
      const videos = inStage.filter(it => it.video);
      const photos = inStage.filter(it => !it.video);
      const want = videos.length ? 3 : 4;
      const step = photos.length / want;
      const picks = [];
      for (let k = 0; k < want && photos.length; k++) picks.push(photos[Math.min(photos.length - 1, Math.floor(k * step))]);
      if (videos.length) picks.splice(Math.min(1 + (i % 2), picks.length), 0, videos[0]);

      const cards = picks.map((it, k) => this.mediaHTML(it, this.TINTS[(i + k) % 4], 'roster')).join('');
      const label = this.STAGE_LABEL[stage][this.currentLang];
      const reveal = (photos[0] || inStage[0]).image;
      return `
        <div class="col" data-stage="${stage}" style="--y:${this.COL_BASE[i]}px">
          ${cards}
          <a class="col__label u-link" href="#memories" data-phase="${stage}" data-reveal="${this.esc(reveal)}">${this.esc(label)}</a>
        </div>`;
    }).join('');
    this.observeVideos(grid);
  },

  mediaHTML(it, tint, scope, ar) {
    const title = this.esc(this.isMr ? it.titleMr : it.titleEn);
    const style = `--tint:${tint};${ar ? `--ar:${ar};` : ''}`;
    const inner = it.video
      ? `<video src="${this.esc(it.video)}" poster="${this.esc(it.image)}" muted loop playsinline preload="metadata" data-autoplay aria-label="${title}"></video>`
      : `<img src="${this.esc(it.image)}" alt="${title}" loading="lazy" decoding="async">`;
    return `<button type="button" class="media ${scope === 'memories' ? 'card__media' : ''}" style="${style}" data-open="${this.esc(it.id)}" data-scope="${scope}" aria-label="${title}">${inner}</button>`;
  },

  // ================= STRAPLINE =================
  renderStrapline() {
    const el = document.getElementById('strapText');
    if (!el) return;
    // [word, italic-serif?]
    const en = [['Torna', 1], ['is the', 0], ['first fort', 1], ['of', 0], ['Swarajya,', 1], ['the first', 0], ['conquest', 1], ['of', 0], ['Shivaji Maharaj.', 1]];
    const mr = [['तोरणा', 1], ['हा', 0], ['स्वराज्याचा', 1], ['पहिला', 0], ['गड,', 1], ['छत्रपती', 0], ['शिवरायांचा', 1], ['पहिला', 0], ['विजय.', 1]];
    // split multi-word entries so every word is its own inline-block (keeps real spaces between words)
    const words = (this.isMr ? mr : en).flatMap(([w, it]) => w.split(' ').map(x => [x, it]));
    const rnd = n => { const x = Math.sin(n * 9301 + 49297) * 233280; return x - Math.floor(x); };
    // Narrow screens: a +/-18deg swing pushed the outer words past both
    // viewport edges, so the tilt is scaled down on phones.
    const amp = window.innerWidth < 768 ? 12 : 37;
    const rot = n => (rnd(n) * amp - amp / 2).toFixed(1) + 'deg';
    let n = 0;

    el.innerHTML = words.map(([w, it]) => {
      const cls = it ? 'w w--i' : 'w';
      if (this.isMr) {
        // Devanagari: rotate whole words so conjuncts stay intact
        const i = n++;
        return `<span class="${cls}"><span class="ch" style="--r:${rot(i)};--d:${i * 70}ms">${this.esc(w)}</span></span>`;
      }
      const chars = Array.from(w).map(c => {
        const i = n++;
        return `<span class="ch" style="--r:${rot(i)};--d:${i * 22}ms">${this.esc(c)}</span>`;
      }).join('');
      n += 1;
      return `<span class="${cls}" aria-hidden="true">${chars}</span>`;
    }).join(' ');
    el.setAttribute('aria-label', words.map(w => w[0]).join(' '));

    const sec = el.closest('.strap');
    if (!this.strapIO && 'IntersectionObserver' in window) {
      this.strapIO = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { sec.classList.add('in'); } });
      }, { threshold: 0.3 });
      this.strapIO.observe(sec);
    } else if (!('IntersectionObserver' in window)) {
      sec.classList.add('in');
    }
  },

  // ================= MAPS =================
  switchMapTab(tab, silent) {
    this.activeMapTab = tab;
    document.querySelectorAll('[data-maptab]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-maptab') === tab);
      b.setAttribute('aria-selected', b.getAttribute('data-maptab') === tab ? 'true' : 'false');
    });

    const imgEl = document.getElementById('mapMainImage');
    const pdfFrame = document.getElementById('mapPdfFrame');
    const schematic = document.getElementById('schematicContainer');
    const titleEl = document.getElementById('mapTitleText');
    const badgeEl = document.getElementById('mapBadgeText');
    const dl = document.getElementById('mapDownloadBtn');
    if (!imgEl || !pdfFrame) return;

    const cfg = {
      sketch: { src: 'assets/maps/torna_sketch_map.jpg', badge: ['नकाशा १', 'Map 1'], title: ['तोरणा गड ऐतिहासिक रेखाचित्र', 'Torna Fort historical sketch'] },
      contour: { src: 'assets/maps/torna_contour_map.jpg', badge: ['नकाशा २', 'Map 2'], title: ['दिशा, खोरे व सभोवतालचे किल्ले', 'Contour, directions and neighbouring forts'] },
      trekshitiz: { src: 'assets/maps/torna_trekshitiz_map.pdf', pdf: true, badge: ['नकाशा ३', 'Map 3'], title: ['ट्रेकशितीज सर्वेक्षण नकाशा (PDF)', 'Trekshitiz survey map (PDF)'] },
      schematic: { badge: ['ब्लूप्रिंट', 'Blueprint'], title: ['तोरणा परस्परसंवादी ब्लूप्रिंट', 'Interactive Torna blueprint'] }
    }[tab];

    if (!silent) this.resetMapZoom();
    imgEl.style.display = cfg.src && !cfg.pdf ? 'block' : 'none';
    pdfFrame.style.display = cfg.pdf ? 'block' : 'none';
    schematic.style.display = tab === 'schematic' ? 'flex' : 'none';

    if (cfg.src && !cfg.pdf) { if (!imgEl.src.endsWith(cfg.src)) imgEl.src = cfg.src; imgEl.alt = cfg.title[this.isMr ? 0 : 1]; }
    if (cfg.pdf && !pdfFrame.src.endsWith(cfg.src)) pdfFrame.src = cfg.src;
    titleEl.textContent = cfg.title[this.isMr ? 0 : 1];
    badgeEl.textContent = cfg.badge[this.isMr ? 0 : 1];
    if (dl) { dl.href = cfg.src || '#maps'; dl.style.visibility = cfg.src ? 'visible' : 'hidden'; }
  },

  applyMap() {
    const img = document.getElementById('mapMainImage');
    if (!img) return;
    img.style.setProperty('--mz', this.map.z);
    img.style.setProperty('--mx', this.map.x + 'px');
    img.style.setProperty('--my', this.map.y + 'px');
  },
  zoomMap(d) {
    this.map.z = Math.max(1, Math.min(4, +(this.map.z + d).toFixed(2)));
    if (this.map.z === 1) { this.map.x = 0; this.map.y = 0; }
    this.applyMap();
  },
  resetMapZoom() { this.map = { z: 1, x: 0, y: 0 }; this.applyMap(); },

  bindMapPan() {
    const img = document.getElementById('mapMainImage');
    if (!img) return;
    let sx, sy, ox, oy, down = false;
    img.addEventListener('pointerdown', e => {
      if (this.map.z <= 1) return;
      down = true; sx = e.clientX; sy = e.clientY; ox = this.map.x; oy = this.map.y;
      img.classList.add('dragging'); img.setPointerCapture(e.pointerId);
    });
    img.addEventListener('pointermove', e => {
      if (!down) return;
      this.map.x = ox + (e.clientX - sx); this.map.y = oy + (e.clientY - sy); this.applyMap();
    });
    const end = () => { down = false; img.classList.remove('dragging'); };
    img.addEventListener('pointerup', end);
    img.addEventListener('pointercancel', end);
  },

  showHotspotDetails(pinId, pinEl) {
    SoundFX.playClick();
    const panel = document.getElementById('hotspotDetailsPanel');
    if (!panel) return;
    document.querySelectorAll('.hotspot-pin').forEach(p => p.classList.toggle('active', p === pinEl));

    const D = TORNA_DATA;
    const lookups = [['machis', this.t('माची', 'Machi')], ['temples', this.t('मंदिर', 'Temple')], ['gates', this.t('दरवाजा', 'Gate')], ['buruj', this.t('बुरुज', 'Bastion')], ['waterTanks', this.t('टाके', 'Water tank')]];
    let item = null, kind = '';
    for (const [key, label] of lookups) {
      const f = (D[key] || []).find(x => x.id === pinId);
      if (f) { item = f; kind = label; break; }
    }
    if (!item) return;

    const l = this.currentLang;
    const title = item.nameMr ? (this.isMr ? item.nameMr : item.nameEn) : item[l].name;
    const desc = item.descMr ? (this.isMr ? item.descMr : item.descEn) : item[l].desc;
    const loc = this.isMr ? (item.locationMr || (item.mr && item.mr.location) || '') : (item.locationEn || (item.en && item.en.location) || '');

    panel.innerHTML = `
      <h4>${this.esc(title)}</h4>
      <span class="kind">${this.esc(kind)}</span>
      ${loc ? `<p class="loc">${this.esc(loc)}</p>` : ''}
      <p>${this.esc(desc)}</p>`;
    panel.classList.add('active');
  },

  // ================= FORT DIRECTORY =================
  switchArchTab(tab) {
    this.activeArchTab = tab;
    document.querySelectorAll('[data-archtab]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-archtab') === tab);
      b.setAttribute('aria-selected', b.getAttribute('data-archtab') === tab ? 'true' : 'false');
    });
    this.renderArchitecture();
  },

  renderArchitecture() {
    const box = document.getElementById('archCardsContainer');
    if (!box) return;
    const D = TORNA_DATA, isMr = this.isMr, l = this.currentLang;
    const tab = this.activeArchTab;
    const show = key => tab === 'all' || tab === key;
    const rows = [];

    if (show('machis')) D.machis.forEach(m => rows.push({
      title: isMr ? m.nameMr : m.nameEn, tag: isMr ? 'प्रमुख माची' : 'Major ridge',
      loc: `${isMr ? m.orientationMr : m.orientationEn} · ${isMr ? m.lengthMr : m.lengthEn}`, desc: isMr ? m.descMr : m.descEn
    }));
    if (show('temples')) D.temples.forEach(t => rows.push({
      title: t[l].name, tag: t[l].category, loc: t[l].location, desc: t[l].desc, sig: t[l].significance
    }));
    if (show('buruj')) D.buruj.forEach(b => rows.push({
      title: isMr ? b.nameMr : b.nameEn, tag: isMr ? 'अभेद्य बुरुज' : 'Bastion',
      loc: isMr ? b.locationMr : b.locationEn, desc: isMr ? b.descMr : b.descEn
    }));
    if (show('gates')) D.gates.forEach(g => rows.push({
      title: isMr ? g.nameMr : g.nameEn, tag: isMr ? 'प्रवेश महाद्वार' : 'Gateway',
      loc: isMr ? g.locationMr : g.locationEn, desc: isMr ? g.descMr : g.descEn
    }));
    if (show('tanks')) D.waterTanks.forEach(w => rows.push({
      title: isMr ? w.nameMr : w.nameEn, tag: isMr ? w.typeMr : w.typeEn,
      loc: isMr ? w.locationMr : w.locationEn, desc: isMr ? w.descMr : w.descEn
    }));

    box.innerHTML = rows.map((r, i) => `
      <article class="row">
        <span class="row__n">${String(i + 1).padStart(2, '0')}</span>
        <div class="row__title"><h3>${this.esc(r.title)}</h3><span class="row__tag">${this.esc(r.tag)}</span></div>
        <p class="row__loc">${this.esc(r.loc)}</p>
        <div><p class="row__desc">${this.esc(r.desc)}</p>${r.sig ? `<span class="row__sig">${this.esc(r.sig)}</span>` : ''}</div>
      </article>`).join('');
  },

  // ================= STORIES =================
  renderStories() {
    const box = document.getElementById('storiesContainer');
    if (!box) return;
    const openIds = new Set(Array.from(box.querySelectorAll('.story.open')).map(s => s.dataset.story));
    const first = !box.children.length;

    box.innerHTML = TORNA_DATA.stories.map((s, idx) => {
      const title = this.isMr ? s.titleMr : s.titleEn;
      const sub = this.isMr ? s.subtitleMr : s.subtitleEn;
      const content = (this.isMr ? s.contentMr : s.contentEn).replace(/\*\*/g, '').split(/\n{2,}/).map(p => `<p>${this.esc(p.trim())}</p>`).join('');
      const open = first ? idx === 0 : openIds.has(s.id);
      return `
        <article class="story ${open ? 'open' : ''}" data-story="${s.id}">
          <button type="button" class="story__head" aria-expanded="${open}" aria-controls="story-${s.id}">
            <span class="story__year">${this.esc(s.year)}</span>
            <span><span class="story__title">${this.esc(title)}</span><span class="story__sub">${this.esc(sub)}</span></span>
            <span class="story__chev" aria-hidden="true"></span>
          </button>
          <div class="story__body" id="story-${s.id}"><div class="story__inner"><div class="story__text">${content}</div></div></div>
        </article>`;
    }).join('');
  },

  toggleStory(card) {
    if (!card) return;
    card.classList.toggle('open');
    const open = card.classList.contains('open');
    card.querySelector('.story__head').setAttribute('aria-expanded', open);
    if (open) SoundFX.playClick();
  },

  // ================= MEMORIES (NEWS GRID) =================
  syncFilterTabs() {
    document.querySelectorAll('.gallery-filter-btn').forEach(b => {
      const on = b.getAttribute('data-filter') === this.activeGalleryFilter;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  },

  switchGalleryFilter(filter) {
    this.activeGalleryFilter = filter;
    this.showAllMemories = false;
    this.syncFilterTabs();
    this.renderMemories();
  },

  filteredItems() {
    return this.activeGalleryFilter === 'all'
      ? this.galleryItems
      : this.galleryItems.filter(it => it.stage === this.activeGalleryFilter);
  },

  checkMasonryCols() {
    if (!this.mqMasonry) return;
    const cols = this.mqMasonry.matches ? 3 : 2;
    if (cols !== this.masonryCols) { this.masonryCols = cols; this.renderMemories(); }
  },

  renderMemories() {
    const box = document.getElementById('galleryGrid');
    const btn = document.getElementById('allMemoriesBtn');
    if (!box) return;
    const list = this.filteredItems();
    this.syncFilterTabs();

    if (!list.length) {
      box.innerHTML = `<p class="empty">${this.t("या विभागात अद्याप फोटो नाहीत. 'आठवण जोडा' वापरून तुमचे फोटो जोडा.", "Nothing here yet. Use 'Add memory' to upload your photos.")}</p>`;
      if (btn) btn.parentElement.style.display = 'none';
      return;
    }

    let visible = this.showAllMemories ? list : list.slice(0, this.MEMORY_LIMIT);
    if (!this.showAllMemories && !visible.some(it => it.video)) {
      // surface one video clip in the collapsed grid, like the video card in an editorial news grid
      const v = list.find(it => it.video);
      if (v && visible.length > 2) visible = visible.map((it, i) => (i === 2 ? v : it));
    }
    const cols = this.masonryCols || 3;
    const buckets = Array.from({ length: cols }, () => []);
    visible.forEach((it, i) => buckets[i % cols].push({ it, i }));

    box.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
    box.innerHTML = buckets.map(col => `<div class="masonry__col">${col.map(({ it, i }) => `
      <article class="card">
        ${this.mediaHTML(it, this.TINTS[i % 4], 'memories', this.ASPECTS[i % this.ASPECTS.length])}
        <h3 class="card__title">${this.esc(this.isMr ? it.titleMr : it.titleEn)}</h3>
        <p class="card__meta">${this.esc(this.isMr ? it.stageMr : it.stageEn)}</p>
      </article>`).join('')}</div>`).join('');

    if (btn) {
      btn.parentElement.style.display = list.length > this.MEMORY_LIMIT ? '' : 'none';
      btn.firstElementChild.textContent = this.showAllMemories
        ? this.t('कमी दाखवा', 'Show less')
        : this.t(`सर्व आठवणी (${list.length})`, `All memories (${list.length})`);
    }
    this.observeVideos(box);
    this.observeCards();
  },

  // ================= LIGHTBOX =================
  openLightboxById(id, scope) {
    const list = scope === 'memories' ? this.filteredItems() : this.galleryItems;
    const idx = list.findIndex(it => it.id === id);
    if (idx < 0) return;
    this.lightboxList = list;
    this.lightboxIndex = idx;
    this.paintLightbox();
    const modal = document.getElementById('lightboxModal');
    if (!modal.classList.contains('open')) {
      this.lastFocus = document.activeElement;
      modal.classList.add('open');
      this.lockScroll(true);
      document.getElementById('closeLightbox').focus();
    }
  },

  paintLightbox() {
    const it = this.lightboxList[this.lightboxIndex];
    if (!it) return;
    const img = document.getElementById('lightboxImg');
    const vid = document.getElementById('lightboxVideo');
    const title = this.isMr ? it.titleMr : it.titleEn;
    if (it.video) {
      img.hidden = true; vid.hidden = false;
      vid.src = it.video; vid.poster = it.image; vid.play().catch(() => {});
    } else {
      vid.pause(); vid.removeAttribute('src'); vid.hidden = true; img.hidden = false;
      img.src = it.image; img.alt = title;
    }
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxDesc').textContent = this.isMr ? it.descMr : it.descEn;
  },

  stepLightbox(step) {
    const n = this.lightboxList.length;
    if (!n) return;
    this.lightboxIndex = (this.lightboxIndex + step + n) % n;
    this.paintLightbox();
  },

  closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('open')) return;
    modal.classList.remove('open');
    const vid = document.getElementById('lightboxVideo');
    vid.pause(); vid.removeAttribute('src');
    this.lockScroll(false);
    if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
  },

  // ================= FOOTER =================
  renderFooter() {
    const lines = this.isMr
      ? ['तोरणा म्हणजे स्वराज्याचे पहिले तोरण.', 'तोरणा म्हणजे दगड आणि वाऱ्याचा गड.', 'इ.स. १६४६ — स्वराज्याची मुहूर्तमेढ.', 'या, गड पाहा.']
      : ["Torna is Swarajya's first toran.", 'Torna is a fort of stone and wind.', '1646 — where Swarajya began.', 'Come, see the fort.'];
    const m = document.getElementById('manifesto');
    if (m) m.innerHTML = lines.map(l => `<span>${this.esc(l)}</span>`).join('');

    const ph = document.getElementById('footPhases');
    if (ph) {
      ph.innerHTML = this.STAGES.map(stage => {
        const first = TORNA_DATA.initialGallery.find(it => it.stage === stage && !it.video);
        return `<li><a class="u-link" href="#memories" data-phase="${stage}" data-reveal="${this.esc(first.image)}">${this.esc(this.STAGE_LABEL[stage][this.currentLang])}</a></li>`;
      }).join('');
    }
  }
};
