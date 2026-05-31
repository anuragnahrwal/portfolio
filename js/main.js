// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

function closeMobile() {
  navMobile.classList.remove('open');
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Skill bar animation
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('animated');
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(el => skillObserver.observe(el));

// Add reveal classes programmatically
document.querySelectorAll('.work-card').forEach((el, i) => {
  el.classList.add('reveal');
  if (i > 0) el.classList.add(`reveal-delay-${Math.min(i, 3)}`);
});
document.querySelectorAll('.about-block').forEach((el, i) => {
  el.classList.add('reveal', `reveal-delay-${i + 1}`);
});
document.querySelectorAll('.contact-form, .contact-info').forEach((el, i) => {
  el.classList.add('reveal', `reveal-delay-${i + 1}`);
});
document.querySelector('.section-head') && document.querySelectorAll('.section-head').forEach(el => {
  el.classList.add('reveal');
});

// Re-observe newly classed elements
document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Message sent! ✓';
    btn.style.background = '#4ade80';
    btn.style.color = '#0a1a0a';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
      form.reset();
    }, 3000);
  });
}

// Smooth active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => activeObserver.observe(s));
