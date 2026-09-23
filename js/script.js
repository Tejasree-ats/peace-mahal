/**
 * ============================================================
 * PEACE MAHAL — MAIN SCRIPT (V2 BILINGUAL & UPGRADES)
 * ============================================================
 */

(function () {
  'use strict';

  var currentLang = 'en';

  // ── Helper: Get config value safely ──────────────────────
  function getConfig(key, fallback) {
    if (typeof SITE_CONFIG === 'undefined') return fallback || '';
    return SITE_CONFIG[key] || fallback || '';
  }

  // ── DOM Ready ────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initScrollEffects();
    initGallery();
    initGallerySlider();
    initLightbox();
    initContactLinks();
    initRevealAnimations();
    initBackToTop();
    initLanguage();
    renderDynamicContent();
  });

  // ── Language System (Bilingual English / Tamil) ───────────
  function initLanguage() {
    var storedLang = localStorage.getItem('pm_lang');
    var modalBackdrop = document.getElementById('lang-modal-backdrop');
    var modalClose = document.getElementById('lang-modal-close');
    var btnEn = document.getElementById('lang-choose-en');
    var btnTa = document.getElementById('lang-choose-ta');

    if (storedLang === 'ta' || storedLang === 'en') {
      currentLang = storedLang;
      applyLanguage(currentLang);
    } else {
      // First visit: show language choice popup after short delay
      setTimeout(function () {
        if (modalBackdrop) modalBackdrop.classList.add('active');
      }, 700);
    }

    // Modal button handlers
    if (btnEn) {
      btnEn.addEventListener('click', function () {
        setLanguage('en');
        closeLangModal();
      });
    }

    if (btnTa) {
      btnTa.addEventListener('click', function () {
        setLanguage('ta');
        closeLangModal();
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', function () {
        closeLangModal();
        if (!localStorage.getItem('pm_lang')) {
          setLanguage('en');
        }
      });
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', function (e) {
        if (e.target === modalBackdrop) {
          closeLangModal();
          if (!localStorage.getItem('pm_lang')) {
            setLanguage('en');
          }
        }
      });
    }

    // Language switchers (in header and footer)
    var switchers = document.querySelectorAll('.lang-switch');
    switchers.forEach(function (sw) {
      sw.addEventListener('click', function (e) {
        var opt = e.target.closest('.lang-switch__opt');
        if (opt) {
          var selected = opt.getAttribute('data-lang');
          if (selected && selected !== currentLang) {
            setLanguage(selected);
          }
        }
      });
    });
  }

  function closeLangModal() {
    var modal = document.getElementById('lang-modal-backdrop');
    if (modal) modal.classList.remove('active');
  }

  function setLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem('pm_lang', lang);
    } catch (e) {
      // localStorage may fail in restricted iframe / private browsing
    }
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    if (lang === 'ta') {
      document.body.classList.add('lang-ta');
    } else {
      document.body.classList.remove('lang-ta');
    }

    if (typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.translations) return;
    var dict = SITE_CONFIG.translations[lang] || SITE_CONFIG.translations.en;
    if (!dict) return;

    // 1. Text elements with data-i18n
    var i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // 2. Events cards with data-i18n-event-title & data-i18n-event-desc
    if (SITE_CONFIG.eventTypes) {
      var eventTitles = document.querySelectorAll('[data-i18n-event-title]');
      eventTitles.forEach(function (el) {
        var idx = parseInt(el.getAttribute('data-i18n-event-title'), 10);
        if (SITE_CONFIG.eventTypes[idx]) {
          el.textContent = lang === 'ta' && SITE_CONFIG.eventTypes[idx].nameTa 
            ? SITE_CONFIG.eventTypes[idx].nameTa 
            : SITE_CONFIG.eventTypes[idx].name;
        }
      });

      var eventDescs = document.querySelectorAll('[data-i18n-event-desc]');
      eventDescs.forEach(function (el) {
        var idx = parseInt(el.getAttribute('data-i18n-event-desc'), 10);
        if (SITE_CONFIG.eventTypes[idx]) {
          el.textContent = lang === 'ta' && SITE_CONFIG.eventTypes[idx].descriptionTa 
            ? SITE_CONFIG.eventTypes[idx].descriptionTa 
            : SITE_CONFIG.eventTypes[idx].description;
        }
      });
    }

    // 3. Gallery slide captions & data-caption attributes
    var slides = document.querySelectorAll('.gallery__slide');
    slides.forEach(function (slide, idx) {
      var captionEn = slide.getAttribute('data-caption') || '';
      var captionTa = slide.getAttribute('data-caption-ta') || captionEn;
      var currentCap = lang === 'ta' ? captionTa : captionEn;
      var captionEl = slide.querySelector('.gallery__slide-caption');
      if (captionEl) {
        captionEl.textContent = currentCap;
      }
    });

    // 4. Update switcher active styles
    var switcherOpts = document.querySelectorAll('.lang-switch__opt');
    switcherOpts.forEach(function (opt) {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // 5. Re-render facilities in chosen language
    renderFacilities();
  }

  // ── Navigation ───────────────────────────────────────────
  function initNavigation() {
    var toggle = document.getElementById('navbar-toggle');
    var menu = document.getElementById('navbar-menu');
    var links = menu ? menu.querySelectorAll('.navbar__link') : [];

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
      });

      // Close menu on link click
      links.forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.classList.remove('active');
          menu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close menu on outside click
      document.addEventListener('click', function (e) {
        if (menu.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
          toggle.classList.remove('active');
          menu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // Active link on scroll
    var sections = document.querySelectorAll('section[id]');
    function updateActiveLink() {
      var scrollY = window.scrollY + 120;
      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        var link = menu ? menu.querySelector('a[href="#' + id + '"]') : null;
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
  }

  // ── Scroll Effects ───────────────────────────────────────
  function initScrollEffects() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Gallery Base ─────────────────────────────────────────
  function initGallery() {
    // Handled by horizontal slider and lightbox
  }

  // ── Gallery Horizontal Slider ────────────────────────────
  function initGallerySlider() {
    var track = document.getElementById('gallery-slider-track');
    var prevBtn = document.getElementById('gallery-slider-prev');
    var nextBtn = document.getElementById('gallery-slider-next');

    if (!track) return;

    function getSlideScrollAmount() {
      var slide = track.querySelector('.gallery__slide');
      if (slide) {
        return slide.offsetWidth + 24; // Width + gap
      }
      return 340;
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        track.scrollBy({ left: -getSlideScrollAmount(), behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        track.scrollBy({ left: getSlideScrollAmount(), behavior: 'smooth' });
      });
    }
  }

  // ── Lightbox ─────────────────────────────────────────────
  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var lightboxCounter = document.getElementById('lightbox-counter');
    var closeBtn = document.getElementById('lightbox-close');
    var prevBtn = document.getElementById('lightbox-prev');
    var nextBtn = document.getElementById('lightbox-next');

    var galleryItems = [];
    var currentIndex = 0;

    function updateGalleryItems() {
      galleryItems = Array.from(document.querySelectorAll('.gallery__item'));
    }

    function openLightbox(index) {
      updateGalleryItems();
      currentIndex = index;
      showImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showImage() {
      if (!galleryItems[currentIndex]) return;
      var item = galleryItems[currentIndex];
      var img = item.querySelector('img');
      var captionEn = item.getAttribute('data-caption') || '';
      var captionTa = item.getAttribute('data-caption-ta') || captionEn;
      var caption = currentLang === 'ta' ? captionTa : captionEn;

      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      lightboxCaption.textContent = caption;
      lightboxCounter.textContent = (currentIndex + 1) + ' / ' + galleryItems.length;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showImage();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showImage();
    }

    // Bind gallery items
    document.addEventListener('click', function (e) {
      var item = e.target.closest('.gallery__item');
      if (item) {
        updateGalleryItems();
        var idx = galleryItems.indexOf(item);
        if (idx >= 0) openLightbox(idx);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    // Close on background click
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox__content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage();
        else prevImage();
      }
    }, { passive: true });
  }

  // ── Contact Links ────────────────────────────────────────
  function initContactLinks() {
    if (typeof SITE_CONFIG === 'undefined') return;

    // Phone links
    var phoneLinks = document.querySelectorAll('[data-action="call"]');
    phoneLinks.forEach(function (link) {
      if (SITE_CONFIG.phone) {
        link.href = 'tel:' + SITE_CONFIG.phone;
        link.style.display = '';
      }
    });

    // Secondary phone links
    var secondaryPhoneLinks = document.querySelectorAll('[data-action="call-secondary"]');
    secondaryPhoneLinks.forEach(function (link) {
      if (SITE_CONFIG.phoneSecondary) {
        link.href = 'tel:' + SITE_CONFIG.phoneSecondary;
        link.style.display = '';
      }
    });

    // WhatsApp links
    var waLinks = document.querySelectorAll('[data-action="whatsapp"]');
    waLinks.forEach(function (link) {
      if (SITE_CONFIG.whatsapp) {
        var msg = link.getAttribute('data-wa-message') || SITE_CONFIG.whatsappDefaultMessage;
        link.href = 'https://wa.me/' + SITE_CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.display = '';
      }
    });

    // Directions links
    var dirLinks = document.querySelectorAll('[data-action="directions"]');
    dirLinks.forEach(function (link) {
      link.href = SITE_CONFIG.googleMapsDirectionsURL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    // WhatsApp float
    var waFloat = document.getElementById('whatsapp-float');
    if (waFloat) {
      if (SITE_CONFIG.whatsapp) {
        waFloat.href = 'https://wa.me/' + SITE_CONFIG.whatsapp + '?text=' + encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage);
        waFloat.target = '_blank';
        waFloat.rel = 'noopener noreferrer';
      }
    }
  }

  // ── Render Dynamic Content ───────────────────────────────
  function renderDynamicContent() {
    if (typeof SITE_CONFIG === 'undefined') return;
    renderFacilities();
    renderSocialMedia();
  }

  function renderFacilities() {
    var container = document.getElementById('facilities-grid');
    if (!container || typeof SITE_CONFIG === 'undefined') return;

    var enabledFacilities = SITE_CONFIG.facilities.filter(function (f) { return f.enabled; });

    if (enabledFacilities.length === 0) {
      container.innerHTML = '<div class="gallery__placeholder"><div class="gallery__placeholder-icon">🏛️</div><p class="gallery__placeholder-text">Facility details coming soon</p></div>';
      return;
    }

    container.innerHTML = enabledFacilities.map(function (facility, i) {
      var name = currentLang === 'ta' && facility.nameTa ? facility.nameTa : facility.name;
      var desc = currentLang === 'ta' && facility.descriptionTa ? facility.descriptionTa : facility.description;

      return '<div class="facility-card reveal reveal--delay-' + ((i % 5) + 1) + '">' +
        '<span class="facility-card__icon">' + facility.icon + '</span>' +
        '<h3 class="facility-card__name">' + name + '</h3>' +
        '<p class="facility-card__description">' + desc + '</p>' +
        '</div>';
    }).join('');

    initRevealAnimations();
  }

  function renderSocialMedia() {
    var container = document.getElementById('social-links');
    if (!container || typeof SITE_CONFIG === 'undefined') return;

    var social = SITE_CONFIG.socialMedia;
    var hasAnySocial = Object.values(social).some(function (v) { return v; });

    if (!hasAnySocial) {
      container.style.display = 'none';
      return;
    }

    var html = '';
    if (social.facebook) html += '<a href="' + social.facebook + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Facebook">📘</a>';
    if (social.instagram) html += '<a href="' + social.instagram + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">📸</a>';
    if (social.youtube) html += '<a href="' + social.youtube + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="YouTube">▶️</a>';
    if (social.twitter) html += '<a href="' + social.twitter + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Twitter">🐦</a>';
    container.innerHTML = html;
  }

  // ── Reveal Animations ────────────────────────────────────
  function initRevealAnimations() {
    var reveals = document.querySelectorAll('.reveal:not(.revealed)');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      reveals.forEach(function (el) {
        el.classList.add('revealed');
      });
    }
  }

  // ── Back to Top ──────────────────────────────────────────
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
