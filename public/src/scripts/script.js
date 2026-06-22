(function() {
  'use strict';

  const DOM = {
    burgerMenu: document.getElementById('burgerMenu'),
    navMenu: document.getElementById('navMenu'),
    langToggle: document.getElementById('langToggle'),
    langMenu: document.getElementById('langMenu'),
    langOptions: document.querySelectorAll('.header__lang-option'),
    navLinks: document.querySelectorAll('.header__menu-link'),
    contactForm: document.getElementById('contactForm'),
    fadeElements: document.querySelectorAll('.fade-in')
  };

  function getCurrentLang() {
    return (window.I18N && typeof window.I18N.getCurrentLanguage === 'function')
      ? window.I18N.getCurrentLanguage()
      : 'es';
  }

  function initMobileMenu() {
    if (!DOM.burgerMenu || !DOM.navMenu) return;

    DOM.burgerMenu.addEventListener('click', () => {
      const isExpanded = DOM.burgerMenu.getAttribute('aria-expanded') === 'true';
      DOM.burgerMenu.setAttribute('aria-expanded', String(!isExpanded));
      DOM.burgerMenu.classList.toggle('active');
      DOM.navMenu.classList.toggle('active');
      document.body.style.overflow = DOM.navMenu.classList.contains('active') ? 'hidden' : '';
    });

    DOM.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        DOM.burgerMenu.setAttribute('aria-expanded', 'false');
        DOM.burgerMenu.classList.remove('active');
        DOM.navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (!DOM.navMenu.contains(e.target) && !DOM.burgerMenu.contains(e.target)) {
        DOM.burgerMenu.setAttribute('aria-expanded', 'false');
        DOM.burgerMenu.classList.remove('active');
        DOM.navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  function initLanguageSelector() {
    if (!DOM.langToggle || !DOM.langMenu) return;

    DOM.langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = DOM.langToggle.getAttribute('aria-expanded') === 'true';
      DOM.langToggle.setAttribute('aria-expanded', String(!isExpanded));
      DOM.langMenu.classList.toggle('active');
    });

    DOM.langOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = option.getAttribute('data-lang');
        const loader = document.getElementById('langLoader');

        if (loader) {
          loader.classList.add('lang-loader--active');
          loader.setAttribute('aria-hidden', 'false');

          setTimeout(() => {
            if (window.I18N && typeof window.I18N.setLanguage === 'function') {
              window.I18N.setLanguage(selectedLang);
              window.I18N.translatePage(selectedLang);
            }
            
            setTimeout(() => {
              loader.classList.remove('lang-loader--active');
              loader.setAttribute('aria-hidden', 'true');
            }, 100);
          }, 400);
        } else {
          if (window.I18N && typeof window.I18N.setLanguage === 'function') {
            window.I18N.setLanguage(selectedLang);
            window.I18N.translatePage(selectedLang);
          }
        }
        DOM.langMenu.classList.remove('active');
        DOM.langToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!DOM.langToggle.contains(e.target) && !DOM.langMenu.contains(e.target)) {
        DOM.langMenu.classList.remove('active');
        DOM.langToggle.setAttribute('aria-expanded', 'false');
      }
    });

    DOM.langMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        DOM.langMenu.classList.remove('active');
        DOM.langToggle.setAttribute('aria-expanded', 'false');
        DOM.langToggle.focus();
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
            block: 'start'
          });

          if (DOM.navMenu.classList.contains('active')) {
            DOM.burgerMenu.setAttribute('aria-expanded', 'false');
            DOM.burgerMenu.classList.remove('active');
            DOM.navMenu.classList.remove('active');
            document.body.style.overflow = '';
          }
        }
      });
    });
  }

  function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length || !DOM.navLinks.length) return;

    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          DOM.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  function initScrollAnimations() {
    if (!DOM.fadeElements.length) return;

    const observerOptions = {
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    DOM.fadeElements.forEach(element => observer.observe(element));
  }
  function initContactForm() {
    if (!DOM.contactForm) return;

    const submitBtn = DOM.contactForm.querySelector('.contact-form__submit-btn');

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        DOM.contactForm.classList.add('contact-form--submitted');
      });
    }

    DOM.contactForm.addEventListener('reset', () => {
      DOM.contactForm.classList.remove('contact-form--submitted');
    });

    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = DOM.contactForm.querySelector('input[type="email"]');
      const nameInput = DOM.contactForm.querySelector('input[name="name"]');
      const email = emailInput?.value;

      if (emailInput && nameInput && emailInput.checkValidity() && nameInput.checkValidity()) {
        const currentLang = getCurrentLang();
        const message = currentLang === 'es'
          ? '¡Gracias por tu interés! Pronto nos pondremos en contacto contigo.'
          : 'Thank you for your interest! We will contact you soon.';
        
        console.log('Email submitted:', email);
        alert(message);
        DOM.contactForm.classList.remove('contact-form--submitted');
        DOM.contactForm.reset();
      }
    });
  }
  function initPricingButtons() {
    document.querySelectorAll('.pricing-card__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const currentLang = getCurrentLang();
        const message = currentLang === 'es'
          ? 'Gracias por tu interés. Esta función estará disponible pronto.'
          : 'Thank you for your interest. This feature will be available soon.';
        alert(message);
      });
    });
  }

  function initDownloadButtons() {
    document.querySelectorAll('.download__btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = getCurrentLang();
        const message = currentLang === 'es'
          ? 'La aplicación estará disponible pronto. ¡Gracias por tu interés!'
          : 'The app will be available soon. Thank you for your interest!';
        alert(message);
      });
    });
  }

  function initAuthButtons() {
    document.querySelectorAll('.header__auth-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLang = getCurrentLang();
        const message = currentLang === 'es'
          ? 'Esta función estará disponible pronto.'
          : 'This feature will be available soon.';
        alert(message);
      });
    });
  }

  function initHeroButtons() {
    document.querySelectorAll('.hero__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const currentLang = getCurrentLang();
        const message = currentLang === 'es'
          ? '¡Gracias por tu interés! Te notificaremos cuando la app esté disponible.'
          : 'Thank you for your interest! We will notify you when the app is available.';
        alert(message);
      });
    });
  }

  function init() {
    initMobileMenu();
    initLanguageSelector();
    initSmoothScroll();
    initActiveNavigation();
    initScrollAnimations();
    initContactForm();
    initPricingButtons();
    initDownloadButtons();
    initAuthButtons();
    initHeroButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('SATECHO Landing Page Script Initialized');
})();
