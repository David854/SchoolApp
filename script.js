document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const sideMenu = document.getElementById('sideMenu');
  const cards = document.querySelectorAll('.card');
  const pages = document.querySelectorAll('.page');
  const gridPage = document.getElementById('home');
  const homeBtn = document.getElementById('homeBtn');
  const backBtn = document.getElementById('backBtn');

  // Toggle side menu visibility
  function toggleMenu(open) {
    const show = open ?? !sideMenu.classList.contains('open');
    sideMenu.classList.toggle('open', show);
  }

  // Click handlers
  menuButton.onclick = () => toggleMenu();
  document.onclick = e => {
    if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
      toggleMenu(false);
    }
  };

  // Card click = open page
  cards.forEach(c => c.onclick = () => showPage(c.dataset.card));

  // Navigation buttons
  homeBtn.onclick = () => showHome();
  backBtn.onclick = () => showHome();

  // Show a specific page
  function showPage(id) {
    pages.forEach(p => p.classList.remove('show'));
    const page = document.getElementById(id);
    if (page) {
      page.classList.add('show');
      gridPage.classList.remove('show');
    }
    toggleMenu(false);
  }

  // Return to home grid
  function showHome() {
    pages.forEach(p => p.classList.remove('show'));
    gridPage.classList.add('show');
    toggleMenu(false);
  }

  // Start on home
  showHome();
});
