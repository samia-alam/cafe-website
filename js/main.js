/**
 * The Roasted Bean Café - JavaScript Logic
 * Handles navigation, video player controls, menu filtering, and contact form.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroVideo();
  initMenuFilters();
  initContactForm();
  initFooterYear();
});

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const siteHeader = document.querySelector('.site-header');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');

      // Change hamburger icon to close (X)
      const svg = menuToggle.querySelector('svg');
      if (navLinks.classList.contains('active')) {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        const svg = menuToggle.querySelector('svg');
        if (svg) {
          svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      });
    });

    // Close menu when clicked outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        const svg = menuToggle.querySelector('svg');
        if (svg) {
          svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        }
      }
    });
  }

  // Header scroll shadow effect
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });
  }
}

/* ==========================================================================
   Hero Video Controls & Autoplay Fallback
   ========================================================================== */
function initHeroVideo() {
  const heroVideo = document.getElementById('heroVideo');
  const videoToggleBtn = document.getElementById('videoToggleBtn');

  if (!heroVideo || !videoToggleBtn) return;

  // Attempt autoplay
  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay prevented by browser power saver or security; update toggle icon to play
      updateVideoIcon(false);
    });
  }

  videoToggleBtn.addEventListener('click', () => {
    if (heroVideo.paused) {
      heroVideo.play();
      updateVideoIcon(true);
      videoToggleBtn.setAttribute('aria-label', 'Pause background video');
    } else {
      heroVideo.pause();
      updateVideoIcon(false);
      videoToggleBtn.setAttribute('aria-label', 'Play background video');
    }
  });

  function updateVideoIcon(isPlaying) {
    if (isPlaying) {
      // Show pause icon
      videoToggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24">
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
        </svg>
      `;
    } else {
      // Show play icon
      videoToggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      `;
    }
  }
}

/* ==========================================================================
   Menu Category Filter Tabs
   ========================================================================== */
function initMenuFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-item-card');

  if (!filterButtons.length || !menuCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Contact Form Validation & Client Feedback
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    // Basic Validation
    if (!name || !email || !message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate submission (for GitHub Pages static site)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerText : 'Send Message';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending...';
    }

    setTimeout(() => {
      showStatus(`Thank you, ${name}! Your message has been received. We will get back to you shortly.`, 'success');
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }
    }, 800);
  });

  function showStatus(text, type) {
    if (!formStatus) return;
    formStatus.innerText = text;
    formStatus.className = `form-status ${type}`;
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* ==========================================================================
   Automatic Footer Year
   ========================================================================== */
function initFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
