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
    const footerIcon = (label) => {
      const key = String(label || "").toLowerCase();
      if (key.includes("linkedin")) {
        return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.3H3.2v11h3.3v-11ZM6.8 5.9c0-1-.8-1.8-1.9-1.8S3 4.9 3 5.9s.8 1.8 1.9 1.8 1.9-.8 1.9-1.8Zm13.9 8.1c0-3-1.6-4.9-4.2-4.9-1.7 0-2.7.9-3.1 1.6V9.3h-3.2v11h3.3v-5.5c0-1.5.7-2.5 2-2.5s1.9.9 1.9 2.6v5.4h3.3V14Z"/></svg>`;
      }
      if (key.includes("email")) {
        return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5h15A1.5 1.5 0 0 1 21 8v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16V8a1.5 1.5 0 0 1 1.5-1.5Zm.9 2.2 6.6 4.7 6.6-4.7H5.4Zm13.8 1.9-6.6 4.6a1 1 0 0 1-1.2 0l-6.6-4.6V16h14.4v-5.4Z"/></svg>`;
      }
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a7.5 7.5 0 0 0-6.4 11.4L4.8 20l5.3-1.4A7.5 7.5 0 1 0 12 3.5Zm0 2a5.5 5.5 0 0 1 0 11c-.6 0-1.2-.1-1.8-.3l-.3-.1-2.5.7.4-2.4-.2-.3A5.5 5.5 0 0 1 12 5.5Zm-2.2 4.1c-.3 0-.6.3-.6.6v1.3c0 .3.3.6.6.6h4.4c.3 0 .6-.3.6-.6v-1.3c0-.3-.3-.6-.6-.6H9.8Zm0 3.2c-.3 0-.6.3-.6.6s.3.6.6.6h2.6c.3 0 .6-.3.6-.6s-.3-.6-.6-.6H9.8Z"/></svg>`;
    };
    const links = D.footer.links
      .map(
        (l) =>
          `<a class="footer-icon-button" href="${esc(l.href)}" aria-label="${esc(l.label)}"${
            l.external ? ' target="_blank" rel="noreferrer"' : ""
          }>
            <span class="footer-icon">${footerIcon(l.label)}</span>
            <span>${esc(l.label)}</span>
          </a>`
      )
      .join("");
    footerEl.innerHTML = `
      <div class="container footer-wrap">
        <div class="footer-copy">
          <span class="footer-kicker">Let's connect</span>
          <p class="footer-name">${esc(D.footer.name)}</p>
          <p class="footer-tagline">${esc(D.footer.tagline)}</p>
        </div>
        <div class="footer-panel">
          <p class="footer-panel-title">Available for UI/UX, product design, and digital projects.</p>
          <div class="footer-links">${links}</div>
        </div>
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
    const intro = h.intro
      ? `<p class="hero-intro" data-reveal data-delay="3">${esc(h.intro)}</p>`
      : "";
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
            ${intro}
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
              ${a.bodySecond ? `<p>${esc(a.bodySecond)}</p>` : ""}
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
        (i, idx) => {
          const points = i.points && i.points.length
            ? `<ul class="skill-points">${i.points
                .map((point) => `<li>${esc(point)}</li>`)
                .join("")}</ul>`
            : "";
          return `
          <article class="glass-card skill-card" data-reveal data-delay="${
            (idx % 4) + 1
          }">
            <span class="skill-num">${String(idx + 1).padStart(2, "0")} / ${String(
            s.items.length
          ).padStart(2, "0")}</span>
            <div>
              <h3>${esc(i.title)}</h3>
              <p>${esc(i.text)}</p>
              ${points}
            </div>
          </article>`;
        }
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
            ${p.subheading ? `<p class="section-subheading">${esc(p.subheading)}</p>` : ""}
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
        (i, idx) => `
        <article class="timeline-card" data-reveal data-delay="${idx + 1}">
          <span class="timeline-index">${String(idx + 1).padStart(2, "0")}</span>
          <div class="timeline-main">
            <span class="timeline-company">${esc(i.company)}</span>
            <h3>${esc(i.role)}</h3>
            <p>${esc(i.text)}</p>
          </div>
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
    const contactCards = [
      {
        label: "Email",
        value: c.email,
        hint: "Best for project briefs, job opportunities, and design discussions.",
        href: `mailto:${c.email}`,
        icon: "mail",
        external: false
      },
      {
        label: "Phone",
        value: c.phone,
        hint: "Use this for quick calls or time-sensitive conversations.",
        href: `tel:${c.phoneHref}`,
        icon: "phone",
        external: false
      },
      {
        label: "LinkedIn",
        value: c.linkedinLabel,
        hint: "Connect with me professionally and view my profile.",
        href: c.linkedin,
        icon: "linkedin",
        external: true
      }
    ];
    const contactIcon = (icon) => {
      if (icon === "phone") {
        return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 4.5 9.4 4c.7-.1 1.4.3 1.6 1l.8 2.6c.2.6 0 1.2-.5 1.6l-1.2.9a11.5 11.5 0 0 0 4 4l.9-1.2c.4-.5 1-.7 1.6-.5l2.6.8c.7.2 1.1.9 1 1.6l-.5 2.2c-.2.8-.9 1.4-1.8 1.4A14.4 14.4 0 0 1 5.8 6.3c0-.9.6-1.6 1.4-1.8Z"/></svg>`;
      }
      if (icon === "linkedin") {
        return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.3H3.2v11h3.3v-11ZM6.8 5.9c0-1-.8-1.8-1.9-1.8S3 4.9 3 5.9s.8 1.8 1.9 1.8 1.9-.8 1.9-1.8Zm13.9 8.1c0-3-1.6-4.9-4.2-4.9-1.7 0-2.7.9-3.1 1.6V9.3h-3.2v11h3.3v-5.5c0-1.5.7-2.5 2-2.5s1.9.9 1.9 2.6v5.4h3.3V14Z"/></svg>`;
      }
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5h15A1.5 1.5 0 0 1 21 8v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16V8a1.5 1.5 0 0 1 1.5-1.5Zm.9 2.2 6.6 4.7 6.6-4.7H5.4Zm13.8 1.9-6.6 4.6a1 1 0 0 1-1.2 0l-6.6-4.6V16h14.4v-5.4Z"/></svg>`;
    };
    const details = contactCards
      .map(
        (item, idx) => `
          <a class="contact-card" data-reveal data-delay="${idx + 1}" href="${esc(item.href)}"${
          item.external ? ' target="_blank" rel="noreferrer"' : ""
        }>
            <span class="contact-card-icon">${contactIcon(item.icon)}</span>
            <span class="contact-card-copy">
              <span>${esc(item.label)}</span>
              <strong>${esc(item.value)}</strong>
              <small>${esc(item.hint)}</small>
            </span>
          </a>`
      )
      .join("");
    const steps = c.steps && c.steps.length
      ? c.steps
          .map(
            (step, idx) => `
              <li>
                <span>${String(idx + 1).padStart(2, "0")}</span>
                <strong>${esc(step)}</strong>
              </li>`
          )
          .join("")
      : "";
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
              <p>${esc(c.intro)}</p>
              <div class="contact-status">
                <span>${esc(c.availability)}</span>
                <span>${esc(c.location)}</span>
                <span>${esc(c.response)}</span>
              </div>
              <a class="button button-primary magnetic" data-reveal data-delay="2" href="mailto:${esc(
                c.email
              )}">${esc(c.ctaLabel)}</a>
              ${steps ? `<ol class="contact-steps" data-reveal data-delay="3">${steps}</ol>` : ""}
            </div>
            <div class="contact-details">
              <div class="contact-details-head" data-reveal>
                <span>Direct contact</span>
                <strong>Choose the easiest way to reach me.</strong>
              </div>
              ${details}
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

  /* Card spotlight follow */
  document.querySelectorAll(".skill-card, .project-card, .timeline-card").forEach((el) => {
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
