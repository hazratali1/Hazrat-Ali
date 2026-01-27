# Hazrat Ali Portfolio

📘 Portfolio Website – Full Developer README
🔹 Project Overview

এটা একটি Single Page Portfolio Website (SPA)
যেটা বানানো হয়েছে শুধুমাত্র:

HTML

CSS

Vanilla JavaScript

কোনো framework ব্যবহার করা হয়নি।

📁 Folder Structure
portfolio/
│
├── index.html          👉 main website structure
├── style.css           👉 all design & animation
├── script.js            👉 page navigation logic
│
├── assets/
│   ├── profile.png      👉 profile photo
│   ├── favicon.png
│   └── Hazrat_Ali_CV.pdf 👉 downloadable CV
│
└── README.md

🧠 How This Website Works

এই website টা single page app (SPA)।

মানে:

page reload হয় না

section hide / show হয় JavaScript দিয়ে

🔁 Page system

HTML-এ সব section আছে:

<section class="page" id="home"></section>
<section class="page" id="about"></section>
<section class="page" id="education"></section>
<section class="page" id="experience"></section>
<section class="page" id="skills"></section>
<section class="page" id="projects"></section>
<section class="page" id="achievement"></section>
<section class="page" id="contact"></section>

⚙️ JavaScript কী করে?
👉 script.js
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");


এখানে:

links = navbar menu

pages = সব section

🔹 openPage() function
function openPage(id){


এই function কাজ করে:

সব page hide করে

যেটায় click করো সেটাকে show করে

navbar active color change করে

Page hide
pages.forEach(page=>{
  page.classList.remove("active");
});

Page show
document.getElementById(id).classList.add("active");

Navbar highlight
nav a.active


এই CSS অংশ active link দেখায়:

.navbar a.active{
  color:#14e0ff;
}

🎨 CSS EXPLANATION (Full)
🔹 Global reset
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


➡️ Browser default spacing remove করে।

🔹 Body
body{
  background:radial-gradient(...);
  overflow-y:auto;
}


dark theme background

scroll enabled

🌊 Animated background
.wave-bg{
  background-size:300% 300%;
  animation:waveMove 18s ease infinite;
}


এইটা background slowly move করায়।

🔝 Navbar
.navbar{
  position:fixed;
  top:0;
}


Navbar সবসময় উপরে থাকবে।

Navbar underline animation
.navbar a::after{
  width:0;
}

.navbar a.active::after{
  width:100%;
}


👉 active menu নিচে glowing line দেখায়।

📄 Page system
.page{
  opacity:0;
  transform:translateY(40px);
}
.page.active{
  opacity:1;
}


মানে:

inactive page invisible

active page visible + animation

📦 Box System

সব card / skill / project box একই style follow করে:

background:linear-gradient(145deg,#0b2742,#061a30);
border-radius:26px;


Hover করলে:

transform:scale(1.04);
box-shadow:glow;

🧑‍💻 Home Section
<img class="dp large">
<h1>Hazrat Ali</h1>
<h2>Applied AI Engineer</h2>


CSS:

#home .dp{
  width:170px;
}

🎓 Education Section

একটা education = একটা .box

<div class="box">
  <b>Degree</b><br>
  Institute
</div>


নতুন education যোগ করতে:

<div class="box">New Degree</div>

💼 Experience Section

Structure:

<div class="exp-box">
  <h3>Company Name</h3>
  <ul>
    <li>Work 1</li>
    <li>Work 2</li>
  </ul>
</div>


নতুন experience add করতে শুধু আরেকটা exp-box বসাও।

🧠 Skills Section
Category based system
<div class="skill-group">
  <h3>Programming</h3>

  <div class="skills-grid">
    <div>Python</div>
    <div>SQL</div>
  </div>
</div>


👉 নতুন skill যোগ করতে:

<div>New Skill</div>


👉 নতুন category:

<div class="skill-group">
  <h3>New Category</h3>
  ...
</div>

🚀 Projects Section
Project box structure
<div class="project-box">
  <h3>Project Name</h3>
  <p>Short description</p>
  <span>Tools used</span>
</div>

নতুন project add করতে:

Copy → Paste → Edit text

📚 Publications
<div class="publication-box">
  <ul>
    <li>Paper name — Conference</li>
  </ul>
</div>

🏆 Achievements
<div class="box">
  Certificate Name
</div>


যত খুশি add করা যাবে।

📥 Download CV
<a href="assets/Hazrat_Ali_CV.pdf" download>
  Download My CV
</a>

📞 Footer
<footer>
  <a href="mailto:...">Email</a>
  <a href="https://github.com/...">GitHub</a>
</footer>

🧩 How To Edit Easily
Change	File
Text content	index.html
Design / color	style.css
Navigation	script.js
CV file	assets/
Photo	assets/profile.png