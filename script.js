/* ======================================
   SPA NAVIGATION + MOBILE NAVBAR
   + ACCORDION TOGGLE + PROJECT TABS
====================================== */

/* =========================
   ACCORDION TOGGLE
   (global — called from onclick)
========================= */
function toggleAccordion(el) {
  // Close all other open items of the same type
  const parent = el.parentElement;
  const firstClass = el.className.split(' ')[0];
  const siblings = parent.querySelectorAll(':scope > .' + firstClass);
  siblings.forEach(item => {
    if (item !== el) item.classList.remove('open');
  });
  el.classList.toggle('open');

  // Hide/show siblings when one is open
  if (parent.querySelector(':scope > .' + firstClass + '.open')) {
    parent.classList.add('has-open');
  } else {
    parent.classList.remove('has-open');
  }
}

/* =========================
   PROJECT CATEGORY TABS
   (global — called from onclick)
========================= */
function switchTab(btn, catId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.project-category').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(catId).classList.add('active');
}

/* =========================
   SPA + MOBILE MENU
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const links      = document.querySelectorAll("nav a");
  const pages      = document.querySelectorAll(".page");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu    = document.querySelector(".navbar ul");

  /* --- Page Switch --- */
  function openPage(id) {

    pages.forEach(page => page.classList.remove("active"));

    const activePage = document.getElementById(id);
    if (activePage) activePage.classList.add("active");

    links.forEach(link => link.classList.remove("active"));

    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (activeLink) activeLink.classList.add("active");

    navMenu.classList.remove("show");

    // scroll back to top on page switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* --- Nav Link Click --- */
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pageId = link.getAttribute("href").substring(1);
      openPage(pageId);
    });
  });

  /* --- Mobile Menu Toggle --- */
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  /* --- Default Page --- */
  openPage("home");

});
