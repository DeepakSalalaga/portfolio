/* Renders portfolio pages from data.js + handles motion / interactions.
   Do not edit unless changing layout or behavior. */

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

  const page = document.body.getAttribute("data-page");
  setTitle(page);

  /* ---- Header ---- */
  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    const navLinks = D.nav
      .map((n) => {
        const active = n.href === `${page}.html` ? " is-active" : "";
        return `<a class="${active.trim()}" href="${esc(n.href)}">${esc(n.label)}</a>`;
      })
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

  /* ---- Marquee builder ---- */
  const buildMarquee = () => {
    if (!D.marqueeWords || !D.marqueeWords.length) return "";
    const items = D.marqueeWords
      .map((w) => `<span class="marquee-item">${esc(w)}</span>`)
      .join("");
    return `
      <div class="marquee">
        <div class="marquee-track">${items}${items}</div>
      </div>`;
  };

  /* ---- HOME ---- */
  if (page === "home" && D.hero) {
    const h = D.hero;
    const nameHtml = h.accentWord
      ? esc(h.name).replace(
          esc(h.accentWord),
          `<span class="accent">${esc(h.accentWord)}</span>`
        )
      : esc(h.name);
    const actions = h.actions
      .map(
        (a, i) =>
          `<a class="button button-${esc(a.style)} magnetic" data-reveal data-delay="${
            i + 1
          }" href="${esc(a.href)}">${esc(a.label)}</a>`
      )
      .join("");
    const metrics = h.metrics
      .map(
        (m, i) =>
          `<article class="metric-card" data-reveal data-delay="${i + 1}">
            <strong>${esc(m.value)}</strong><span>${esc(m.label)}</span>
          </article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="hero-section" id="home">
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow" data-reveal>${esc(h.eyebrow)}</span>
            <h1 data-reveal data-delay="1">${nameHtml}</h1>
            <p class="hero-role" data-reveal data-delay="2">${esc(h.role)}</p>
            <p class="hero-text" data-reveal data-delay="2">${esc(h.tagline)}</p>
            <div class="hero-actions">${actions}</div>
            <div class="hero-metrics">${metrics}</div>
          </div>
          <div class="hero-visual" data-reveal data-delay="2">
            <div class="profile-card">
              <div class="profile-glow"></div>
              <img src="${esc(h.image)}" alt="${esc(h.imageAlt)}">
              <div class="profile-badge"><span>${esc(h.badge)}</span></div>
            </div>
          </div>
        </div>
      </section>
      ${buildMarquee()}`
    );
  }

  /* ---- ABOUT ---- */
  if (page === "about" && D.about) {
    const a = D.about;
    const highlights = a.highlights
      .map(
        (h, i) =>
          `<article class="glass-card highlight-card" data-reveal data-delay="${
            i + 1
          }">
            <strong>${esc(h.title)}</strong>
            <p>${esc(h.text)}</p>
          </article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="about-section section" id="about">
        <div class="container">
          <div class="section-heading" data-reveal>
            <span class="section-tag">About</span>
            <h2>${esc(a.heading)}</h2>
          </div>
          <div class="about-grid">
            <article class="glass-card about-card" data-reveal>
              <p>${esc(a.body)}</p>
            </article>
            <div class="highlight-list">${highlights}</div>
          </div>
        </div>
      </section>
      ${buildMarquee()}`
    );
  }

  /* ---- SKILLS ---- */
  if (page === "skills" && D.skills) {
    const s = D.skills;
    const items = s.items
      .map(
        (i, idx) => `
        <article class="glass-card skill-card" data-reveal data-delay="${
          (idx % 4) + 1
        }">
          <span class="skill-num">${String(idx + 1).padStart(2, "0")} / ${String(
          s.items.length
        ).padStart(2, "0")}</span>
          <div>
            <h3>${esc(i.title)}</h3>
            <p>${esc(i.text)}</p>
          </div>
        </article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="skills-section section" id="skills">
        <div class="container">
          <div class="section-heading" data-reveal>
            <span class="section-tag">Skills</span>
            <h2>${esc(s.heading)}</h2>
          </div>
          <div class="skills-grid">${items}</div>
        </div>
      </section>`
    );
  }

  /* ---- PROJECTS ---- */
  if (page === "projects" && D.projects) {
    const p = D.projects;
    const items = p.items
      .map(
        (i) => `
        <article class="project-card glass-card" data-reveal>
          <div class="project-image-wrap">
            <img src="${esc(i.image)}" alt="${esc(i.imageAlt)}">
          </div>
          <div class="project-content">
            <span class="project-label">${esc(i.label)}</span>
            <h3>${esc(i.title)}</h3>
            <p>${esc(i.description)}</p>
            <a class="button button-secondary magnetic" href="${esc(
              i.link
            )}">${esc(i.linkLabel)}</a>
          </div>
        </article>`
      )
      .join("");
    set(
      "page-content",
      `
      <section class="projects-section section" id="projects">
        <div class="container">
          <div class="section-heading" data-reveal>
            <span class="section-tag">Projects</span>
            <h2>${esc(p.heading)}</h2>
          </div>
          <div class="projects-grid">${items}</div>
        </div>
      </section>`
    );
  }

  /* ---- EXPERIENCE ---- */
  if (page === "experience" && D.experience) {
    const e = D.experience;
    const items = e.items
      .map(
        (i) => `
        <article class="timeline-card" data-reveal>
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
          <div class="section-heading" data-reveal>
            <span class="section-tag">Experience</span>
            <h2>${esc(e.heading)}</h2>
          </div>
          <div class="timeline">${items}</div>
        </div>
      </section>`
    );
  }

  /* ---- CONTACT ---- */
  if (page === "contact" && D.contact) {
    const c = D.contact;
    set(
      "page-content",
      `
      <section class="contact-section section" id="contact">
        <div class="container">
          <div class="contact-panel">
            <div class="contact-copy" data-reveal>
              <span class="section-tag">Contact</span>
              <h2>${esc(c.heading)}</h2>
              <p>${esc(c.text)}</p>
            </div>
            <div class="contact-details">
              <a data-reveal data-delay="1" href="mailto:${esc(c.email)}">${esc(
        c.email
      )}</a>
              <a data-reveal data-delay="2" href="tel:${esc(c.phoneHref)}">${esc(
        c.phone
      )}</a>
              <a data-reveal data-delay="3" href="${esc(
                c.linkedin
              )}" target="_blank" rel="noreferrer">${esc(c.linkedinLabel)}</a>
              <a class="button button-primary magnetic" data-reveal data-delay="4" href="mailto:${esc(
                c.email
              )}">${esc(c.ctaLabel)}</a>
            </div>
          </div>
        </div>
      </section>`
    );
  }

  /* =========================================================
     MOTION + INTERACTIONS
     ========================================================= */

  /* Scroll progress bar */
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);
  const updateProgress = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    progress.style.width = `${Math.min(100, Math.max(0, scrolled * 100))}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* Custom cursor (skip on touch) */
  const isTouch = matchMedia("(hover: none)").matches || window.innerWidth <= 768;
  if (!isTouch) {
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    tick();

    const hoverables = "a, button, .button, .project-card, .skill-card, .profile-card, .metric-card";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) document.body.classList.add("is-hovering");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) document.body.classList.remove("is-hovering");
    });
  }

  /* Magnetic buttons */
  document.querySelectorAll(".magnetic").forEach((el) => {
    let raf = null;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      });
    });
    el.addEventListener("mouseleave", () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    });
  });

  /* Skill cards spotlight follow */
  document.querySelectorAll(".skill-card").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  /* Scroll reveals via IntersectionObserver */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
})();
