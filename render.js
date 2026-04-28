/* Renders portfolio pages from data.js. Do not edit unless changing layout. */

(function () {
  const D = window.PORTFOLIO_DATA;
  if (!D) return;

  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  const setTitle = (key) => {
    if (D.pageTitles && D.pageTitles[key]) document.title = D.pageTitles[key];
  };

  /* ---- Header ---- */
  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    const navLinks = D.nav
      .map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`)
      .join("");
    headerEl.innerHTML = `
      <div class="container nav-wrap">
        <a class="brand" href="index.html">${esc(D.brand)}</a>
        <nav class="site-nav" aria-label="Primary navigation">${navLinks}</nav>
      </div>`;
  }

  /* ---- Footer ---- */
  const footerEl = document.getElementById("site-footer");
  if (footerEl && D.footer) {
    const links = D.footer.links
      .map(
        (l) =>
          `<a href="${esc(l.href)}"${
            l.external ? ' target="_blank" rel="noreferrer"' : ""
          }>${esc(l.label)}</a>`
      )
      .join("");
    footerEl.innerHTML = `
      <div class="container footer-wrap">
        <div>
          <p class="footer-name">${esc(D.footer.name)}</p>
          <p class="footer-tagline">${esc(D.footer.tagline)}</p>
        </div>
        <div class="footer-links">${links}</div>
      </div>`;
  }

  /* ---- Page-specific renderers ---- */
  const page = document.body.getAttribute("data-page");
  setTitle(page);

  if (page === "home" && D.hero) {
    const h = D.hero;
    const actions = h.actions
      .map(
        (a) =>
          `<a class="button button-${esc(a.style)}" href="${esc(a.href)}">${esc(
            a.label
          )}</a>`
      )
      .join("");
    const metrics = h.metrics
      .map(
        (m) =>
          `<article class="metric-card"><strong>${esc(
            m.value
          )}</strong><span>${esc(m.label)}</span></article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="hero-section" id="home">
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">${esc(h.eyebrow)}</span>
            <h1>${esc(h.name)}</h1>
            <p class="hero-role">${esc(h.role)}</p>
            <p class="hero-text">${esc(h.tagline)}</p>
            <div class="hero-actions">${actions}</div>
            <div class="hero-metrics">${metrics}</div>
          </div>
          <div class="hero-visual">
            <div class="profile-card">
              <div class="profile-glow"></div>
              <img src="${esc(h.image)}" alt="${esc(h.imageAlt)}">
              <div class="profile-badge"><span>${esc(h.badge)}</span></div>
            </div>
          </div>
        </div>
      </section>`
    );
  }

  if (page === "about" && D.about) {
    const a = D.about;
    const highlights = a.highlights
      .map(
        (h) =>
          `<article class="glass-card highlight-card"><strong>${esc(
            h.title
          )}</strong><p>${esc(h.text)}</p></article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="about-section section" id="about">
        <div class="container">
          <div class="section-heading">
            <span class="section-tag">About</span>
            <h2>${esc(a.heading)}</h2>
          </div>
          <div class="about-grid">
            <article class="glass-card about-card"><p>${esc(a.body)}</p></article>
            <div class="highlight-list">${highlights}</div>
          </div>
        </div>
      </section>`
    );
  }

  if (page === "skills" && D.skills) {
    const s = D.skills;
    const items = s.items
      .map(
        (i) =>
          `<article class="glass-card skill-card"><h3>${esc(
            i.title
          )}</h3><p>${esc(i.text)}</p></article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="skills-section section" id="skills">
        <div class="container">
          <div class="section-heading">
            <span class="section-tag">Skills</span>
            <h2>${esc(s.heading)}</h2>
          </div>
          <div class="skills-grid">${items}</div>
        </div>
      </section>`
    );
  }

  if (page === "projects" && D.projects) {
    const p = D.projects;
    const items = p.items
      .map(
        (i) => `
        <article class="project-card glass-card">
          <div class="project-image-wrap">
            <img src="${esc(i.image)}" alt="${esc(i.imageAlt)}">
          </div>
          <div class="project-content">
            <span class="project-label">${esc(i.label)}</span>
            <h3>${esc(i.title)}</h3>
            <p>${esc(i.description)}</p>
            <a class="button button-secondary" href="${esc(i.link)}">${esc(
          i.linkLabel
        )}</a>
          </div>
        </article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="projects-section section" id="projects">
        <div class="container">
          <div class="section-heading">
            <span class="section-tag">Projects</span>
            <h2>${esc(p.heading)}</h2>
          </div>
          <div class="projects-grid">${items}</div>
        </div>
      </section>`
    );
  }

  if (page === "experience" && D.experience) {
    const e = D.experience;
    const items = e.items
      .map(
        (i) => `
        <article class="timeline-card glass-card">
          <div>
            <span class="timeline-company">${esc(i.company)}</span>
            <h3>${esc(i.role)}</h3>
          </div>
          <p>${esc(i.text)}</p>
          <span class="timeline-duration">${esc(i.duration)}</span>
        </article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="experience-section section" id="experience">
        <div class="container">
          <div class="section-heading">
            <span class="section-tag">Experience</span>
            <h2>${esc(e.heading)}</h2>
          </div>
          <div class="timeline">${items}</div>
        </div>
      </section>`
    );
  }

  if (page === "contact" && D.contact) {
    const c = D.contact;
    set(
      "page-content",
      `
      <section class="contact-section section" id="contact">
        <div class="container">
          <div class="contact-panel glass-card">
            <div class="contact-copy">
              <span class="section-tag">Contact</span>
              <h2>${esc(c.heading)}</h2>
              <p>${esc(c.text)}</p>
            </div>
            <div class="contact-details">
              <a href="mailto:${esc(c.email)}">${esc(c.email)}</a>
              <a href="tel:${esc(c.phoneHref)}">${esc(c.phone)}</a>
              <a href="${esc(c.linkedin)}" target="_blank" rel="noreferrer">${esc(
        c.linkedinLabel
      )}</a>
              <a class="button button-primary" href="mailto:${esc(
                c.email
              )}">${esc(c.ctaLabel)}</a>
            </div>
          </div>
        </div>
      </section>`
    );
  }
})();
