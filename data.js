/* =========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT.
   No need to touch HTML. Save this file and refresh the page.
   ========================================================= */

window.PORTFOLIO_DATA = {

  /* ---- Branding shown in the top-left of every page ---- */
  brand: "Deepak",

  /* ---- Page <title> tags (browser tab) ---- */
  pageTitles: {
    home:       "Deepak Salagala | UI/UX Designer Portfolio",
    about:      "About | Deepak Salagala",
    skills:     "Skills | Deepak Salagala",
    projects:   "Projects | Deepak Salagala",
    experience: "Experience | Deepak Salagala",
    contact:    "Contact | Deepak Salagala"
  },

  /* ---- Top navigation links (label + page file) ---- */
  nav: [
    { label: "About",      href: "about.html" },
    { label: "Skills",     href: "skills.html" },
    { label: "Projects",   href: "projects.html" },
    { label: "Experience", href: "experience.html" },
    { label: "Contact",    href: "contact.html" }
  ],

  /* ---- Marquee strip below the hero (rotating words) ---- */
  marqueeWords: [
    "UI / UX Design",
    "Brand Systems",
    "Digital Marketing",
    "Visual Identity",
    "Product Thinking",
    "Motion & 3D"
  ],

  /* ---- Home / Hero section ---- */
  hero: {
    eyebrow: "Available for select projects — 2026",
    name: "Deepak Salagala",
    accentWord: "Salagala",
    role: "UI/UX Designer & Digital Marketer",
    tagline: "I design user experiences that are visually engaging and drive real results.",
    image: "deepak.webp",
    imageAlt: "Portrait of Deepak Salagala",
    badge: "Available for exciting product roles",
    actions: [
      { label: "View Work",   href: "projects.html", style: "primary"   },
      { label: "Contact Me",  href: "contact.html",  style: "secondary" }
    ],
    metrics: [
      { value: "3+",              label: "Years of creative problem solving" },
      { value: "2",               label: "Flagship brands shaped end-to-end" },
      { value: "UI + Marketing",  label: "Design decisions backed by growth thinking" }
    ]
  },

  /* ---- About page ---- */
  about: {
    heading: "Designing digital experiences with clarity, strategy, and impact.",
    body:
      "I'm Deepak Salagala, a UI/UX Designer, Graphic Designer, and Digital Marketer focused " +
      "on building products that look refined, feel intuitive, and support business growth. " +
      "My work blends user-centered design with marketing insight, helping brands create " +
      "stronger experiences across apps, websites, and digital campaigns.",
    highlights: [
      {
        title: "3+ Years Experience",
        text: "Hands-on work across product design, brand visuals, and digital campaigns."
      },
      {
        title: "UI/UX + Marketing Combination",
        text: "Design choices shaped by both usability and audience conversion goals."
      },
      {
        title: "Worked on MaaBooking & Hectnow",
        text: "Delivered complete user interface systems and engaging digital touchpoints."
      }
    ]
  },

  /* ---- Skills page ---- */
  skills: {
    heading: "A well-rounded creative skill set for modern digital products.",
    items: [
      {
        title: "UI/UX Design",
        text: "Wireframes, user flows, high-fidelity interfaces, and design systems that feel polished and practical."
      },
      {
        title: "Graphic Design",
        text: "Visual assets, brand creatives, social media designs, and layouts that strengthen brand identity."
      },
      {
        title: "Digital Marketing",
        text: "Creative strategy with performance thinking to support reach, engagement, and conversion goals."
      },
      {
        title: "3D & Blender",
        text: "Simple 3D visuals and product-focused explorations that add depth to presentations and concepts."
      }
    ]
  },

  /* ---- Projects page ---- */
  projects: {
    heading: "Selected work that blends experience design with business value.",
    items: [
      {
        label: "Case Study 01",
        title: "MaaBooking",
        description: "Farmhouse booking platform with food and event services.",
        image: "deepak.webp",
        imageAlt: "MaaBooking project preview",
        link: "contact.html",
        linkLabel: "View Details"
      },
      {
        label: "Case Study 02",
        title: "Hectnow",
        description: "Designed complete UI/UX for app and website.",
        image: "deepak.webp",
        imageAlt: "Hectnow project preview",
        link: "contact.html",
        linkLabel: "View Details"
      }
    ]
  },

  /* ---- Experience page ---- */
  experience: {
    heading: "Creative experience across teams, products, and freelance collaborations.",
    items: [
      {
        company: "Easy Minds Services Pvt. Ltd.",
        role: "UI/UX Designer & Digital Marketer",
        text: "Worked on user experience improvements, digital creatives, and marketing support.",
        duration: "Duration: 1.7 months"
      },
      {
        company: "Freelance Work",
        role: "UI/UX & Graphic Designer",
        text: "Designed interfaces, brand assets, and visual systems for clients across different domains.",
        duration: "Duration: 1.5+ years"
      }
    ]
  },

  /* ---- Contact page ---- */
  contact: {
    heading: "Let's build something amazing together",
    text: "I'm open to UI/UX design, product design, graphic design, and digital marketing opportunities.",
    email: "your-email@example.com",
    phone: "+91 00000 00000",
    phoneHref: "+910000000000",
    linkedin: "https://www.linkedin.com/",
    linkedinLabel: "LinkedIn Profile",
    ctaLabel: "Let's Talk"
  },

  /* ---- Footer (every page) ---- */
  footer: {
    name: "Deepak Salagala",
    tagline: "Designing thoughtful digital experiences with visual clarity and strategy.",
    links: [
      { label: "LinkedIn",    href: "https://www.linkedin.com/", external: true },
      { label: "Email",       href: "mailto:your-email@example.com" },
      { label: "Back to Top", href: "index.html" }
    ]
  }
};
