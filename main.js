// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

// Mobile menu
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');
burger.addEventListener('click', () => navMobile.classList.toggle('open'));
function closeMobile() { navMobile.classList.remove('open'); }

// ============================
// VIDEO MODAL
// ============================
const overlay = document.getElementById('modalOverlay');
const iframe  = document.getElementById('modalIframe');
const closeBtn = document.getElementById('modalClose');
const player  = overlay.querySelector('.modal-player');

function openModal(videoId, type) {
  let src;
  if (type === 'shorts') {
    src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    player.classList.add('shorts-mode');
  } else {
    src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    player.classList.remove('shorts-mode');
  }
  iframe.src = src;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
  player.classList.remove('shorts-mode');
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Attach to short cards
document.querySelectorAll('.short-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.video, 'shorts'));
});

// Attach to long form cards
document.querySelectorAll('.lf-card, .lf-wide-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.video, 'watch'));
});

// Scroll reveal
const reveals = document.querySelectorAll('.section-head-row, .short-card, .lf-card, .lf-wide-card, .about-left, .about-right, .contact-form, .contact-info');
reveals.forEach(el => el.classList.add('reveal'));
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), 60);
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => ro.observe(el));

// Skill bars
const skillFills = document.querySelectorAll('.skill-fill');
const so = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); so.unobserve(e.target); } });
}, { threshold: 0.5 });
skillFills.forEach(el => so.observe(el));

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent! ✓';
    btn.style.background = '#4ade80';
    btn.style.color = '#0a1a0a';
    setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; btn.style.color = ''; form.reset(); }, 3000);
  });
}
