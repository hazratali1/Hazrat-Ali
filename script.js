/* ======================================
   SPA NAVIGATION + MOBILE NAVBAR
====================================== */

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("nav a");
  const pages = document.querySelectorAll(".page");

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector(".navbar ul");

  /* =========================
     PAGE SWITCH FUNCTION
  ========================= */
  function openPage(id){

    // hide all pages
    pages.forEach(page=>{
      page.classList.remove("active");
    });

    // show selected page
    const activePage = document.getElementById(id);
    if(activePage){
      activePage.classList.add("active");
    }

    // navbar active state
    links.forEach(link=>link.classList.remove("active"));

    const activeLink =
      document.querySelector(`nav a[href="#${id}"]`);

    if(activeLink){
      activeLink.classList.add("active");
    }

    // ✅ auto close mobile menu
    navMenu.classList.remove("show");
  }

  /* =========================
     NAV LINK CLICK
  ========================= */
  links.forEach(link=>{
    link.addEventListener("click", e=>{
      e.preventDefault();

      const pageId = link
        .getAttribute("href")
        .substring(1);

      openPage(pageId);
    });
  });

  /* =========================
     MOBILE MENU TOGGLE
  ========================= */
  menuToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
  });

  // default page
  openPage("home");

});
