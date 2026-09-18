/**
 * ============================================================
 * PEACE MAHAL — MAIN SCRIPT
 * ============================================================
 */

(function () {
  'use strict';

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
    initLightbox();
    initEnquiryForm();
    initContactLinks();
    initRevealAnimations();
    initBackToTop();
    renderDynamicContent();
  });

  // ── Navigation ───────────────────────────────────────────
  function initNavigation() {
    const toggle = document.getElementById('navbar-toggle');
    const menu = document.getElementById('navbar-menu');
    const links = menu ? menu.querySelectorAll('.navbar__link') : [];
    const navbar = document.getElementById('navbar');

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
    const sections = document.querySelectorAll('section[id]');
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

  // ── Gallery ──────────────────────────────────────────────
  function initGallery() {
    // Category filters removed per UX requirements.
    // All 5 unique authentic Peace Mahal photographs are displayed in a clean responsive grid.
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
      galleryItems = Array.from(document.querySelectorAll('.gallery__item:not([style*="display: none"])'));
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
      var img = galleryItems[currentIndex].querySelector('img');
      var caption = galleryItems[currentIndex].getAttribute('data-caption') || '';
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

  // ── Enquiry Form ─────────────────────────────────────────
  function initEnquiryForm() {
    var form = document.getElementById('enquiry-form');
    if (!form) return;

    var formContainer = document.getElementById('enquiry-form-container');
    var successContainer = document.getElementById('enquiry-success');
    var submitBtn = form.querySelector('.form__submit');
    var isSubmitting = false;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (isSubmitting) return;

      // Validate
      var isValid = validateForm(form);
      if (!isValid) return;

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      // Simulate submission (replace with actual backend)
      setTimeout(function () {
        // Store form data for WhatsApp follow-up
        var formData = new FormData(form);
        var fullName = formData.get('full-name') || '';
        var eventType = formData.get('event-type') || 'an event';
        var eventDate = formData.get('event-date') || '';
        var guests = formData.get('guests') || '';

        // Show success
        if (formContainer) formContainer.style.display = 'none';
        if (successContainer) {
          successContainer.classList.add('visible');

          // Update WhatsApp follow-up link
          var waFollowUp = document.getElementById('wa-followup');
          if (waFollowUp && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsapp) {
            var msg = SITE_CONFIG.getWhatsAppEnquiryMessage(eventType, eventDate, guests, fullName);
            waFollowUp.href = 'https://wa.me/' + SITE_CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
          }
        }

        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Enquiry';
        }
      }, 1200);
    });

    // Real-time validation on blur
    var requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });

      field.addEventListener('input', function () {
        if (field.classList.contains('error')) {
          validateField(field);
        }
      });
    });
  }

  function validateForm(form) {
    var fields = form.querySelectorAll('[required]');
    var isValid = true;

    fields.forEach(function (field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    // Scroll to first error
    if (!isValid) {
      var firstError = form.querySelector('.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
    }

    return isValid;
  }

  function validateField(field) {
    var errorEl = field.parentElement.querySelector('.form__error');
    var value = field.value.trim();
    var isValid = true;
    var message = '';

    if (!value) {
      isValid = false;
      message = 'This field is required';
    } else if (field.type === 'email' && value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        message = 'Please enter a valid email address';
      }
    } else if (field.type === 'tel' && value) {
      var phoneRegex = /^[\d\s+\-()]{7,15}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        message = 'Please enter a valid phone number';
      }
    }

    if (isValid) {
      field.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
    } else {
      field.classList.add('error');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
      }
    }

    return isValid;
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
      } else {
        link.href = '#contact';
        link.title = 'Contact details coming soon';
      }
    });

    // Secondary phone links
    var secondaryPhoneLinks = document.querySelectorAll('[data-action="call-secondary"]');
    secondaryPhoneLinks.forEach(function (link) {
      if (SITE_CONFIG.phoneSecondary) {
        link.href = 'tel:' + SITE_CONFIG.phoneSecondary;
        link.style.display = '';
      } else {
        link.style.display = 'none';
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
      } else {
        link.href = '#contact';
        link.title = 'WhatsApp details coming soon';
      }
    });

    // Directions links
    var dirLinks = document.querySelectorAll('[data-action="directions"]');
    dirLinks.forEach(function (link) {
      link.href = SITE_CONFIG.googleMapsDirectionsURL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    // Email links
    var emailLinks = document.querySelectorAll('[data-action="email"]');
    emailLinks.forEach(function (link) {
      if (SITE_CONFIG.email && SITE_CONFIG.email.trim() !== '') {
        link.href = 'mailto:' + SITE_CONFIG.email;
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });

    // WhatsApp float
    var waFloat = document.getElementById('whatsapp-float');
    if (waFloat) {
      if (SITE_CONFIG.whatsapp) {
        waFloat.href = 'https://wa.me/' + SITE_CONFIG.whatsapp + '?text=' + encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage);
        waFloat.target = '_blank';
        waFloat.rel = 'noopener noreferrer';
      } else {
        waFloat.style.display = 'none';
      }
    }
  }

  // ── Render Dynamic Content ───────────────────────────────
  function renderDynamicContent() {
    if (typeof SITE_CONFIG === 'undefined') return;

    // Render facilities
    renderFacilities();

    // Render contact details
    renderContactDetails();

    // Render social media
    renderSocialMedia();
  }

  function renderFacilities() {
    var container = document.getElementById('facilities-grid');
    if (!container || typeof SITE_CONFIG === 'undefined') return;

    var enabledFacilities = SITE_CONFIG.facilities.filter(function (f) { return f.enabled; });

    if (enabledFacilities.length === 0) {
      container.innerHTML = '<div class="gallery__placeholder"><div class="gallery__placeholder-icon">🏛️</div><p class="gallery__placeholder-text">Facility details coming soon</p><p class="gallery__placeholder-subtext">Contact Peace Mahal for information about available facilities.</p></div>';
      return;
    }

    container.innerHTML = enabledFacilities.map(function (facility, i) {
      return '<div class="facility-card reveal reveal--delay-' + ((i % 5) + 1) + '">' +
        '<span class="facility-card__icon">' + facility.icon + '</span>' +
        '<h3 class="facility-card__name">' + facility.name + '</h3>' +
        '<p class="facility-card__description">' + facility.description + '</p>' +
        '</div>';
    }).join('');

    // Re-init reveal for new elements
    initRevealAnimations();
  }

  function renderContactDetails() {
    // Phone display
    var phoneDisplays = document.querySelectorAll('[data-display="phone"]');
    phoneDisplays.forEach(function (el) {
      if (SITE_CONFIG.phone && SITE_CONFIG.phoneSecondary) {
        el.innerHTML = '<a href="tel:' + SITE_CONFIG.phone + '">' + SITE_CONFIG.phone + '</a> &nbsp;|&nbsp; <a href="tel:' + SITE_CONFIG.phoneSecondary + '">' + SITE_CONFIG.phoneSecondary + '</a>';
      } else if (SITE_CONFIG.phone) {
        el.innerHTML = '<a href="tel:' + SITE_CONFIG.phone + '">' + SITE_CONFIG.phone + '</a>';
      } else {
        el.innerHTML = '<span class="contact__placeholder">Contact details will be updated here.</span>';
      }
    });

    // WhatsApp display
    var waDisplays = document.querySelectorAll('[data-display="whatsapp"]');
    waDisplays.forEach(function (el) {
      if (SITE_CONFIG.whatsapp) {
        el.innerHTML = '<a href="https://wa.me/' + SITE_CONFIG.whatsapp + '" target="_blank" rel="noopener noreferrer">Chat on WhatsApp (+91 ' + (SITE_CONFIG.phone || SITE_CONFIG.whatsapp) + ')</a>';
      } else {
        el.innerHTML = '<span class="contact__placeholder">WhatsApp details will be updated here.</span>';
      }
    });

    // Email display - only display once actual email address is configured
    var emailDisplays = document.querySelectorAll('[data-display="email"]');
    emailDisplays.forEach(function (el) {
      var emailCard = document.getElementById('contact-email-card');
      var footerEmail = document.getElementById('footer-email-item');
      if (SITE_CONFIG.email && SITE_CONFIG.email.trim() !== '') {
        el.innerHTML = '<a href="mailto:' + SITE_CONFIG.email + '">' + SITE_CONFIG.email + '</a>';
        if (emailCard) emailCard.style.display = '';
        if (footerEmail) footerEmail.style.display = '';
      } else {
        if (emailCard) emailCard.style.display = 'none';
        if (footerEmail) footerEmail.style.display = 'none';
      }
    });

    // Business hours display
    var hoursDisplays = document.querySelectorAll('[data-display="hours"]');
    hoursDisplays.forEach(function (el) {
      if (SITE_CONFIG.businessHours) {
        el.textContent = SITE_CONFIG.businessHours;
      } else {
        el.innerHTML = 'Monday – Sunday: 9:00 AM – 7:00 PM';
      }
    });
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
    if (social.facebook) {
      html += '<a href="' + social.facebook + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Facebook">📘</a>';
    }
    if (social.instagram) {
      html += '<a href="' + social.instagram + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Instagram">📸</a>';
    }
    if (social.youtube) {
      html += '<a href="' + social.youtube + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="YouTube">▶️</a>';
    }
    if (social.twitter) {
      html += '<a href="' + social.twitter + '" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Twitter">🐦</a>';
    }
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
      // Fallback: show all
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
