/* ═══════════════════════════════════════════════════════════
   PORTFOLIO HAMZA ELAIANE — Interactions
   ═══════════════════════════════════════════════════════════ */

// ─── Année dynamique dans le footer ───
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── Menu mobile ───
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 860) sidebar.classList.remove('open');
  });
});

// ─── Lien actif au scroll ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(l => {
        l.classList.toggle('active', l.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));

// ═══════════════════════════════════════════════════════════
// MODALES — Projets
// ═══════════════════════════════════════════════════════════
document.querySelectorAll('.case-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

// ═══════════════════════════════════════════════════════════
// MODALE — Contact (bouton "Me contacter")
// ═══════════════════════════════════════════════════════════
const openContactBtn = document.getElementById('openContact');
if (openContactBtn) {
  openContactBtn.addEventListener('click', () => {
    const modal = document.getElementById('modal-contact');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
}

// ═══════════════════════════════════════════════════════════
// Fermeture des modales (clic sur croix, clic extérieur, Échap)
// ═══════════════════════════════════════════════════════════
document.querySelectorAll('.modal').forEach(modal => {
  // Clic sur la croix
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }
  // Clic en dehors de la modale
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
  });
});

// Touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(modal => closeModal(modal));
  }
});

function closeModal(modal) {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}