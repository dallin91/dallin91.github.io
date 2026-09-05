// ---------- Project data ----------
// Add or edit projects here. Each entry renders as one card in the Projects section.
const projects = [
  {
    title: "Streaming Service Analysis",
    description: "An analysis of which streaming services provide the most bang for your buck.",
    image: "assets/images/projects/project-1.svg",
    tags: ["Python", "PostgreSQL", "Tableau"],
    repoUrl: "https://github.com/dallin91/streaming-service-analysis-2026",
  },
  {
    title: "Houston Texans Recap (Work in Progress)",
    description: "A statistical deep-dive into 24 seasons of Houston Texans football.",
    image: "assets/images/projects/project-2.svg",
    tags: ["Python", "PostgreSQL", "Power BI"],
    repoUrl: "https://github.com/dallin91/houston-texans-recap",
  },
  {
    title: "Baseball Pitch-Strike Predictor (Work in Progress)",
    description: "A model that will predict whether any given pitch will be a strike or not.",
    image: "assets/images/projects/project-3.svg",
    tags: ["Python", "React", "Machine Learning"],
    repoUrl: "https://github.com/dallin91/pitch-hit-predictor",
  },
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="${project.title} preview" loading="lazy">
          <div class="project-card-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.repoUrl}" target="_blank" rel="noopener">Source Code</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

// ---------- Mobile nav toggle ----------
function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- Active nav link on scroll ----------
function setupActiveNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---------- Footer year ----------
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNavToggle();
  setupActiveNavHighlight();
  setFooterYear();
});
