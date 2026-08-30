/* =====================================================================
   RENDERER — builds the page from assets/content.js.
   You normally never need to touch this file.
   ===================================================================== */
(function () {
  "use strict";
  const C = window.CONTENT || CONTENT;
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (id) => document.getElementById(id);

  /* ---------- helpers ---------- */
  const media = (m, cls) => {
    if (!m) return "";
    if (m.type === "video")
      return `<video class="${cls}" autoplay loop muted playsinline loading="lazy"><source src="${m.src}" type="video/mp4"></video>`;
    return `<img class="${cls}" src="${m.src}" alt="" loading="lazy">`;
  };

  const ICONS = {
    email: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5c.7.3 1.5.5 2.4.5 1.1 0 2.1-.3 3-.8L12 5.5l6.6 2.7c.9.5 1.9.8 3 .8.9 0 1.7-.2 2.4-.5L12 0zM5.8 16.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12.4 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/></svg>'
  };
  const TITLES = { email: "Email", github: "GitHub", linkedin: "LinkedIn", scholar: "Google Scholar" };

  /* ---------- NAV + FOOTER (shared) ---------- */
  function chrome() {
    const active = document.body.getAttribute("data-page") || "";
    const link = (href, label, key) =>
      `<a href="${href}"${key === active ? ' class="active"' : ""}>${label}</a>`;
    const navEl = el("site-nav");
    if (navEl) {
      navEl.innerHTML = `
        <div class="nav-container">
          <a href="index.html" class="nav-title">${C.profile.name}</a>
          <div class="nav-links">
            ${link("index.html", "About", "about")}
            ${link("index.html#publications", "Publications", "pubs")}
            ${link("index.html#talks", "Talks", "talks")}
            ${link("projects.html", "Projects", "projects")}
            ${link("cv.html", "CV", "cv")}
            ${link("gallery.html", "Gallery", "gallery")}
            <button class="theme-toggle" id="theme-toggle" title="Toggle theme" aria-label="Toggle theme"></button>
          </div>
        </div>`;
    }
    const footEl = el("site-footer");
    if (footEl)
      footEl.innerHTML = `&copy; ${new Date().getFullYear()} ${C.profile.name}. Built to be easy to update &middot; Hosted on GitHub Pages.`;
    initTheme();
  }

  /* ---------- THEME (localStorage-safe: works even if storage is blocked) ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  function initTheme() {
    const btn = el("theme-toggle");
    const root = document.documentElement;
    const icons = { dark: "☀", light: "☾" }; // sun / moon
    const set = (t) => {
      if (t === "light") root.setAttribute("data-theme", "light");
      else root.removeAttribute("data-theme");
      store.set("theme", t);
      if (btn) { btn.innerHTML = t === "light" ? icons.light : icons.dark; }
    };
    set(store.get("theme") || "dark");
    if (btn)
      btn.addEventListener("click", () =>
        set((root.getAttribute("data-theme") === "light") ? "dark" : "light")
      );
  }

  /* ---------- HERO ---------- */
  function hero() {
    const box = el("hero");
    if (!box) return;
    const p = C.profile;
    box.innerHTML = `
      <div class="hero-bio">
        <span class="hero-role">${p.role}</span>
        <h1>${p.name}</h1>
        ${p.bio.map((t) => `<p>${t}</p>`).join("")}
        <div class="interest-chips">
          ${p.interests.map((i) => `<span class="interest-chip">${i}</span>`).join("")}
        </div>
        <div class="socials">
          ${p.socials.map((s) => `<a class="social-icon" href="${s.url}" title="${TITLES[s.type] || ""}" ${s.type === "email" ? "" : 'target="_blank" rel="noopener"'}>${ICONS[s.type] || ""}</a>`).join("")}
        </div>
      </div>
      <div class="hero-photo-wrap"><img class="hero-photo" src="${p.photo}" alt="${p.name}"></div>`;
  }

  /* ---------- NEWS ---------- */
  function news() {
    const box = el("news");
    if (!box) return;
    if (!C.news || !C.news.length) { box.remove(); return; }
    box.innerHTML = `
      <h2 class="section-title">News</h2>
      <div class="news-list">
        ${C.news.map((n) => `<div class="news-item"><span class="news-date">${n.date}</span><span class="news-content">${n.text}</span></div>`).join("")}
      </div>`;
  }

  /* ---------- PUBLICATIONS ---------- */
  function pubItem(pub) {
    const links = pub.links
      ? `<div class="pub-links">${Object.entries(pub.links).map(([k, v]) => `<a href="${v}" ${/^https?:/.test(v) ? 'target="_blank" rel="noopener"' : ""}>${k}</a>`).join("")}</div>`
      : "";
    const status = pub.status ? `<span class="badge accent">${pub.status}</span>` : "";
    const award = pub.award ? `<div class="pub-award">${pub.award}</div>` : "";
    return `
      <div class="pub-item">
        ${media(pub.media, "pub-thumb")}
        <div class="pub-details">
          <div class="pub-title">${pub.title}${status}</div>
          <div class="pub-authors">${pub.authors}</div>
          <div class="pub-venue">${pub.venue}</div>
          ${award}${links}
        </div>
      </div>`;
  }

  function publications() {
    const box = el("publications");
    if (!box) return;
    let html = `<h2 class="section-title">Publications &amp; Patents</h2>`;
    html += C.publications.map(pubItem).join("");
    if (C.workshops && C.workshops.length) {
      html += `<h3 class="section-subtitle">Workshop &amp; Late-Breaking Results</h3>`;
      html += C.workshops.map((w) => `
        <div class="pub-item plain">
          <div class="pub-details">
            <div class="pub-title">${w.title}</div>
            <div class="pub-venue">${w.venue}</div>
          </div>
        </div>`).join("");
    }
    box.innerHTML = html;
  }

  /* ---------- AWARDS & CONTRIBUTIONS ---------- */
  function recognition() {
    const box = el("recognition");
    if (!box) return;
    if (!C.recognition || !C.recognition.length) { box.remove(); return; }
    box.innerHTML = `
      <h2 class="section-title">Awards &amp; Contributions</h2>
      <div class="recognition-grid">
        ${C.recognition.map((r) => `
          <article class="recognition-card ${r.type.toLowerCase()}">
            <span class="recognition-icon" aria-hidden="true">${r.icon}</span>
            <div>
              <span class="recognition-type">${r.type}</span>
              <div class="recognition-title">${r.title}</div>
              <div class="recognition-detail">${r.detail}</div>
            </div>
          </article>`).join("")}
      </div>`;
  }

  /* ---------- PROJECT CARD ---------- */
  const projectCard = (pr) => `
    <a href="${pr.page}" class="project-card">
      ${media(pr.media, "project-thumb")}
      <div class="pub-details">
        <div class="pub-title">${pr.title}</div>
        <div class="pub-authors">${pr.blurb}</div>
        <div class="pub-tags">${(pr.tags || []).map((t) => `<span class="pub-tag">${t}</span>`).join("")}</div>
      </div>
    </a>`;

  /* homepage: featured 3 + view all */
  function projectsHome() {
    const box = el("projects-home");
    if (!box) return;
    const all = [...C.projects.research, ...C.projects.course];
    const feat = C.projects.homepageFeatured
      .map((id) => all.find((p) => p.id === id))
      .filter(Boolean);
    box.innerHTML = `
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">${feat.map(projectCard).join("")}</div>
      <a href="projects.html" class="view-all">View all projects &rarr;</a>`;
  }

  /* full projects page */
  function projectsFull() {
    const box = el("projects-full");
    if (!box) return;
    box.innerHTML = `
      <div class="section">
        <h2 class="section-title">Research Projects</h2>
        <div class="projects-grid two">${C.projects.research.map(projectCard).join("")}</div>
      </div>
      <div class="section">
        <h2 class="section-title">Course Projects</h2>
        <div class="projects-grid two">${C.projects.course.map(projectCard).join("")}</div>
      </div>`;
  }

  /* ---------- EXPERIENCE ---------- */
  function experience() {
    const box = el("experience");
    if (!box) return;
    box.innerHTML = `
      <h2 class="section-title">Experience</h2>
      <div class="experience-list">
        ${C.experience.map((e) => `
          <div class="experience-item">
            <img class="exp-logo" src="${e.logo}" alt="" loading="lazy">
            <div class="exp-content">
              <div class="exp-header">
                <span class="exp-title">${e.title}</span>
                <span class="exp-date">${e.date}</span>
              </div>
              <div class="exp-org">${e.org}</div>
              <div class="exp-desc">${e.desc}</div>
            </div>
          </div>`).join("")}
      </div>`;
  }

  /* ---------- TALKS ---------- */
  function talks() {
    const box = el("talks");
    if (!box) return;
    const cards = C.talks.map((t) => `
      <div class="talk-card">
        <img class="talk-card-img" src="${t.img}" alt="" loading="lazy">
        <div class="talk-card-content">
          <div class="talk-card-title">${t.title}</div>
          <div class="talk-card-venue">${t.venue}</div>
        </div>
      </div>`).join("");
    // duplicate the track for a seamless loop
    box.innerHTML = `
      <h2 class="section-title">Talks &amp; Presentations</h2>
      <div class="talks-scroller" id="talks-scroller">
        <div class="talks-track">${cards}${cards}</div>
        <div class="talks-hint">Click to pause</div>
      </div>`;
    const sc = el("talks-scroller");
    sc.addEventListener("click", () => {
      sc.classList.toggle("paused");
      $(".talks-hint", sc).textContent = sc.classList.contains("paused") ? "Click to resume" : "Click to pause";
    });
  }

  /* ---------- BOOT ---------- */
  function boot() {
    chrome();
    hero(); news(); publications(); recognition(); projectsHome(); experience(); talks(); // homepage sections
    projectsFull(); // projects page
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
