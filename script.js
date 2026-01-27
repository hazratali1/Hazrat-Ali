/* =================================================
   SPA PORTFOLIO SCRIPT — FINAL WORKING VERSION
================================================= */

/* ============================
   SPA NAVIGATION
============================ */

const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    openPage(id);
  });
});

function openPage(id) {

  // hide all pages
  pages.forEach(p => p.classList.remove("active"));

  // show selected page
  const page = document.getElementById(id);
  if (page) page.classList.add("active");

  // navbar indicator
  links.forEach(l => l.classList.remove("active"));
  const activeLink = document.querySelector(`nav a[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("active");

  // load projects only when projects page opens
  if (id === "projects") {
    loadProjectSystem();
  }
}

// default page
openPage("home");


/* ============================
   PROJECT SYSTEM
============================ */

function loadProjectSystem() {

  const categoryList = document.getElementById("categoryList");
  const projectCards = document.getElementById("projectCards");

  if (!categoryList || !projectCards) return;

  categoryList.innerHTML = "";
  projectCards.innerHTML = "";

  let firstCategory = null;

  /* ---------- LOAD CATEGORIES ---------- */
  Object.keys(projectsData).forEach(category => {

    const div = document.createElement("div");
    div.textContent = category;

    if (!firstCategory) {
      firstCategory = category;
      div.classList.add("active");
    }

    div.addEventListener("click", () => {

      categoryList
        .querySelectorAll("div")
        .forEach(d => d.classList.remove("active"));

      div.classList.add("active");
      loadProjects(category);
    });

    categoryList.appendChild(div);
  });

  // load first category automatically
  loadProjects(firstCategory);
}


/* ============================
   LOAD PROJECTS
============================ */

function loadProjects(category) {

  const projectCards = document.getElementById("projectCards");
  projectCards.innerHTML = "";

  if (!projectsData[category]) return;

  projectsData[category].forEach(project => {

    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.title}</h3>

      <p style="opacity:.85;margin-top:6px;">
        ${project.desc}
      </p>

      <div class="project-more">
        <p style="margin-top:12px;">
          ${project.details}
        </p>

        <p style="margin-top:10px;">
          <b>Tech:</b> ${project.tech}
        </p>

        <a href="${project.github}"
           target="_blank"
           onclick="event.stopPropagation()"
           style="display:inline-block;margin-top:10px;color:#14e0ff;">
           GitHub →
        </a>
      </div>
    `;

    card.addEventListener("click", () => {

      document
        .querySelectorAll(".project-card")
        .forEach(c => c.classList.remove("open"));

      card.classList.toggle("open");
    });

    projectCards.appendChild(card);
  });
}

/* ======================
   MOBILE NAV TOGGLE
====================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* ===============================
   MOBILE NAVBAR AUTO CLOSE
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar ul");
const navLinks = document.querySelectorAll(".navbar ul li a");

// toggle menu open / close
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// auto close menu after click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

/* ===============================
   MOBILE NAVBAR FIX
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar ul");
const navLinks = document.querySelectorAll(".navbar ul li a");

// open / close menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// auto close after clicking link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

