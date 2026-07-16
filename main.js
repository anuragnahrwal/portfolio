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
  if (type === 'shorts') {
    player.classList.add('shorts-mode');
  } else {
    player.classList.remove('shorts-mode');
  }
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
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

// Short cards — only YT ones (not insta-card)
document.querySelectorAll('.short-card:not(.insta-card)').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.video, 'shorts'));
});

// Long form cards
document.querySelectorAll('.lf-card').forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.video, 'watch'));
});

// Scroll reveal
const reveals = document.querySelectorAll('.section-head-row, .short-card, .lf-card, .about-left, .about-right, .contact-info');
reveals.forEach(el => el.classList.add('reveal'));
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
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
