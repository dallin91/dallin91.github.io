// ---------- Project data ----------
// Add or edit projects here. Each entry renders as one card in the Projects section.
const projects = [
  {
    title: "Task Tracker App",
    description: "A drag-and-drop task board with boards, lists, and cards, built for personal productivity.",
    image: "assets/images/projects/project-1.svg",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/task-tracker",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive dashboard showing live weather and forecasts for saved locations.",
    image: "assets/images/projects/project-2.svg",
    tags: ["JavaScript", "REST API", "Chart.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/weather-dashboard",
  },
  {
    title: "E-Commerce Storefront",
    description: "A storefront clone with product listings, a cart, and a mock checkout flow.",
    image: "assets/images/projects/project-3.svg",
    tags: ["React", "Express", "Stripe API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/storefront-clone",
  },
  {
    title: "Personal Finance Visualizer",
    description: "A tool for tracking spending and visualizing budgets across categories over time.",
    image: "assets/images/projects/project-4.svg",
    tags: ["Python", "Django", "D3.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/finance-visualizer",
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
              <a href="${project.liveUrl}" target="_blank" rel="noopener">Live Demo</a>
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
