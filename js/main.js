/* ============================================================
   FRONTLINE RESTORATION — Main JS
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Menu ── */
  const toggle  = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  /* ── Active Nav Link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ── Photo Slider ── */
  document.querySelectorAll('.photo-slider').forEach(slider => {
    const track  = slider.querySelector('.photo-slider__track');
    const slides = slider.querySelectorAll('.photo-slider__slide');
    const prevBtn = slider.parentElement.querySelector('.slider-btn--prev');
    const nextBtn = slider.parentElement.querySelector('.slider-btn--next');
    if (!track || !slides.length) return;

    let current = 0;
    const visibleCount = () => window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 4;

    function goto(idx) {
      const max = Math.max(0, slides.length - visibleCount());
      current = Math.max(0, Math.min(idx, max));
      const slideW = slides[0].offsetWidth + 3;
      track.style.transform = `translateX(-${current * slideW}px)`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goto(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goto(current + 1));

    // Auto-advance
    let autoPlay = setInterval(() => goto(current + 1 > slides.length - visibleCount() ? 0 : current + 1), 4000);
    slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
    slider.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => goto(current + 1 > slides.length - visibleCount() ? 0 : current + 1), 4000);
    });
  });

  /* ── Consent Banner ── */
  const banner = document.getElementById('consent-banner');
  const acceptBtn = document.getElementById('consent-accept');
  const declineBtn = document.getElementById('consent-decline');

  if (banner) {
    const stored = localStorage.getItem('fr_consent');
    if (!stored) {
      setTimeout(() => banner.classList.add('show'), 1500);
    }
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('fr_consent', 'accepted');
        banner.classList.remove('show');
        // Load analytics here if accepted
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        localStorage.setItem('fr_consent', 'declined');
        banner.classList.remove('show');
      });
    }
  }

  /* ── Scroll Reveal ── */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Contact Form ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate send (replace with real endpoint)
      await new Promise(r => setTimeout(r, 1400));

      const msg = document.getElementById('form-success');
      if (msg) {
        msg.style.display = 'block';
        msg.focus();
      }
      contactForm.reset();
      btn.textContent = origText;
      btn.disabled = false;
    });
  }

  /* ── Animate stat numbers ── */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const start = performance.now();
    const suffix = el.getAttribute('data-suffix') || '';
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const counters = document.querySelectorAll('[data-count]');
    const cObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          cObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObs.observe(c));
  }

  /* ── Trap focus in mobile menu for accessibility ── */
  if (mobileMenu) {
    mobileMenu.addEventListener('keydown', e => {
      if (!mobileMenu.classList.contains('open')) return;
      const focusable = mobileMenu.querySelectorAll('a, button, [tabindex="0"]');
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    });
  }

})();
