document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('search');
  const items = Array.from(document.querySelectorAll('.item'));
  const logoutBtn = document.getElementById('logoutBtn');
  const dashboardBtn = document.getElementById('dashboardBtn');

  // Search filter (by text label / data-label / aria-label)
  const getText = el =>
    (el.dataset.label || el.getAttribute('aria-label') || el.textContent || '').toLowerCase();

  const filter = (q) => {
    const term = (q || '').toLowerCase().trim();
    items.forEach(el => {
      const hit = getText(el).includes(term);
      el.style.display = hit ? '' : 'none';
    });
  };

  search?.addEventListener('input', (e) => filter(e.target.value));

  // Buttons
  logoutBtn?.addEventListener('click', () => {
    // optional: sessionStorage.removeItem('isAuthenticated');
    window.location.href = 'index.html';
  });

  dashboardBtn?.addEventListener('click', () => {
    // Ganti target kalau perlu
    window.location.href = 'dashboard.html';
  });

  // Prevent default for demo links that are '#'
  items.forEach(a => {
    if (a.getAttribute('href') === '#') {
      a.addEventListener('click', (e) => e.preventDefault());
    }
  });
});
