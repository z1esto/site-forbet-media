(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.fullscreen-menu');
    const menuLinks = document.querySelectorAll('.fullscreen-menu a');
    const body = document.body;

    if (!burger || !menu) return;

    function openMenu() {
      burger.classList.add('is-open');
      menu.classList.add('is-open');
      body.classList.add('menu-open');
      burger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
      burger.classList.remove('is-open');
      menu.classList.remove('is-open');
      body.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    }

    function toggleMenu() {
      if (menu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    burger.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    menuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close menu on resize to desktop (optional safety)
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth > 1200 && menu.classList.contains('is-open')) {
          // keep it consistent; menu works on all sizes — no auto-close
        }
      }, 150);
    });
  });

  // Simple contact form handler (no backend — for demo purposes)
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const note = form.querySelector('.form-note');
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(function () {
        if (note) {
          note.textContent = 'Thank you. Your message has been received. We will get back to you within two business days.';
          note.style.color = 'var(--color-highlight)';
        }
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 800);
    });
  });
})();
