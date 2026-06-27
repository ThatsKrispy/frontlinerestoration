/* ============================================================
   FRONTLINE RESTORATION — Shared Components
   ============================================================ */
(function () {

  const headerHTML = `
<a href="#main-content" class="skip-link">Skip to main content</a>
<div class="topbar" role="banner">
  <div class="container">
    <div class="topbar__inner">
      <div class="topbar__contact">
        <a href="tel:3055425253" class="topbar__item" aria-label="Call us at (305) 542-5253">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
          (305) 542-5253
        </a>
        <a href="mailto:Hello@FrontlineRestoration.com" class="topbar__item" aria-label="Email us">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
          Hello@FrontlineRestoration.com
        </a>
      </div>
      <nav class="topbar__socials" aria-label="Social media links">
        <a href="https://www.instagram.com/frontlinerestorationllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a href="https://www.facebook.com/frontlinerestorationllc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
        <a href="https://www.linkedin.com/company/frontline-restoration-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
      </nav>
    </div>
  </div>
</div>
<header class="site-header" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="site-header__inner">
      <a href="index.html" class="logo" aria-label="Frontline Restoration — Home">
        <div class="logo__mark">
          <img src="images/logo.png" alt="Frontline Restoration" width="64" height="64">
        </div>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        <a href="index.html" class="nav__link">Home</a>
        <a href="water-damage.html" class="nav__link">Water</a>
        <a href="fire-damage.html" class="nav__link">Fire</a>
        <a href="mold-remediation.html" class="nav__link">Mold</a>
        <a href="odor-removal.html" class="nav__link">Odor</a>
        <a href="roof-tarps.html" class="nav__link">Tarps</a>
        <a href="catastrophe-response.html" class="nav__link">Catastrophe</a>
        <a href="news.html" class="nav__link">News</a>
        <a href="contact.html" class="nav__link">Contact</a>
        <a href="tel:3055425253" class="btn btn--primary nav__cta" aria-label="Call now for emergency service">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
          Call Now
        </a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
  <a href="index.html" class="mobile-menu__link">Home</a>
  <a href="water-damage.html" class="mobile-menu__link">Water Damage</a>
  <a href="fire-damage.html" class="mobile-menu__link">Fire Damage</a>
  <a href="mold-remediation.html" class="mobile-menu__link">Mold Remediation</a>
  <a href="odor-removal.html" class="mobile-menu__link">Odor Removal</a>
  <a href="roof-tarps.html" class="mobile-menu__link">Roof Tarps</a>
  <a href="catastrophe-response.html" class="mobile-menu__link">Catastrophe Response</a>
  <a href="news.html" class="mobile-menu__link">News</a>
  <a href="contact.html" class="mobile-menu__link">Contact</a>
  <div class="mobile-menu__cta">
    <a href="tel:3055425253" class="btn btn--primary btn--lg">Call (305) 542-5253</a>
    <a href="contact.html" class="btn btn--outline btn--lg">Get Free Quote</a>
  </div>
  <div class="mobile-menu__info">
    <a href="mailto:Hello@FrontlineRestoration.com">Hello@FrontlineRestoration.com</a>
    <span style="color:var(--text-muted);font-size:0.84rem;">14313 SW 142nd St, Miami, FL 33186</span>
  </div>
</nav>`;

  const footerHTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="index.html" aria-label="Frontline Restoration home">
          <img src="images/logo.png" alt="Frontline Restoration" width="64" height="64">
        </a>
        <p>South Florida's trusted emergency restoration specialists. Water, fire, mold, odor, tarps &amp; catastrophe response — available 24/7.</p>
        <nav class="footer__socials" aria-label="Social links">
          <a href="https://www.instagram.com/frontlinerestorationllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.facebook.com/frontlinerestorationllc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          <a href="https://www.linkedin.com/company/frontline-restoration-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        </nav>
      </div>
      <div class="footer__col">
        <h5>Services</h5>
        <ul>
          <li><a href="water-damage.html">Water Damage</a></li>
          <li><a href="fire-damage.html">Fire Damage</a></li>
          <li><a href="mold-remediation.html">Mold Remediation</a></li>
          <li><a href="odor-removal.html">Odor Removal</a></li>
          <li><a href="roof-tarps.html">Roof Tarps</a></li>
          <li><a href="catastrophe-response.html">Catastrophe Response</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Company</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="news.html">News &amp; Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="accessibility.html">Accessibility</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Contact</h5>
        <a href="tel:3055425253" class="footer__contact-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>(305) 542-5253</a>
        <a href="mailto:Hello@FrontlineRestoration.com" class="footer__contact-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>Hello@FrontlineRestoration.com</a>
        <div class="footer__contact-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>14313 SW 142nd St, Miami, FL 33186</div>
        <div class="footer__contact-item"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Available 24/7</div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; <span id="footer-year"></span> Frontline Restoration LLC. All rights reserved. Site by <a href="https://thatskrispy.com" target="_blank" rel="noopener noreferrer">@ThatsKrispy</a>.</p>
      <nav class="footer__legal" aria-label="Legal links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="accessibility.html">Accessibility</a>
      </nav>
    </div>
  </div>
</footer>

<!-- Emergency Sticky CTA -->
<div class="emergency-cta" role="complementary" aria-label="Emergency contact">
  <a href="tel:3055425253" class="emergency-cta__btn" aria-label="Call now 24/7: (305) 542-5253">
    <span class="emergency-cta__pulse" aria-hidden="true"></span>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
    <span>24/7 Emergency</span>
  </a>
</div>

<!-- ══════════════════════════════════════════════
     CONSENT MANAGEMENT (GDPR/CCPA compliant)
══════════════════════════════════════════════ -->
<div class="consent-banner" id="consent-banner" role="dialog" aria-modal="true"
     aria-labelledby="consent-title" aria-describedby="consent-desc">
  <div class="consent-banner__inner">
    <div class="consent-banner__text">
      <strong id="consent-title" style="color:var(--white);display:block;margin-bottom:6px;">Cookie Preferences</strong>
      <span id="consent-desc">We use essential cookies to run the site, and optional analytics cookies to help us improve. You can accept all, or choose which types you allow. See our <a href="privacy.html">Privacy Policy</a>.</span>
    </div>
    <div class="consent-banner__actions">
      <button class="consent-btn consent-btn--settings" id="consent-settings" aria-expanded="false">Customize</button>
      <button class="consent-btn consent-btn--decline" id="consent-decline">Decline Optional</button>
      <button class="consent-btn consent-btn--accept" id="consent-accept">Accept All</button>
    </div>
  </div>
  <!-- Expandable detail panel -->
  <div class="consent-details" id="consent-details" hidden>
    <div class="consent-details__inner container">
      <div class="consent-toggle-row">
        <div>
          <strong style="color:var(--white);">Essential Cookies</strong>
          <p style="font-size:0.8rem;color:var(--text-muted);margin:4px 0 0;">Required for the site to function. Cannot be disabled.</p>
        </div>
        <span style="font-size:0.78rem;color:var(--text-muted);font-style:italic;">Always on</span>
      </div>
      <div class="consent-toggle-row">
        <div>
          <strong style="color:var(--white);">Analytics Cookies</strong>
          <p style="font-size:0.8rem;color:var(--text-muted);margin:4px 0 0;">Help us understand how visitors use our site (Google Analytics). No personal data sold.</p>
        </div>
        <label class="consent-switch" aria-label="Toggle analytics cookies">
          <input type="checkbox" id="analytics-toggle" checked>
          <span class="consent-switch__slider"></span>
        </label>
      </div>
      <div style="margin-top:16px;">
        <button class="consent-btn consent-btn--accept" id="consent-save">Save My Preferences</button>
      </div>
    </div>
  </div>
</div>`;

  document.addEventListener('DOMContentLoaded', function () {
    const hi = document.getElementById('site-header-inject');
    if (hi) hi.innerHTML = headerHTML;
    const fi = document.getElementById('site-footer-inject');
    if (fi) fi.innerHTML = footerHTML;
    const yr = document.getElementById('footer-year');
    if (yr) yr.textContent = new Date().getFullYear();
  });
})();
