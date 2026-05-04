/* =========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT.
   No need to touch HTML. Save this file and refresh the page.
   ========================================================= */

window.PORTFOLIO_DATA = {

  /* ---- Branding shown in the top-left of every page ---- */
  brand: "Deepak",

  /* ---- Page <title> tags (browser tab) ---- */
  pageTitles: {
    home:       "Deepak Salagala",
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
    "UI/UX Design",
    "Prototyping",
    "Brand Systems",
    "Digital Marketing",
    "Visual Identity",
    "Product Thinking",
    "3D Visuals"
  ],

  /* ---- Home / Hero section ---- */
  hero: {
    eyebrow: "Available for freelance & full-time roles",
    name: "Deepak Salagala",
    accentWord: "Salagala",
    role: "Product Designer • UI/UX • Digital Marketing",
    tagline: "I Design Real Product Experiences",
    intro: "That Solve User Problems I'm a Product Designer working on MaaBooking, where I design end-to-end booking experiences for farmhouses, events, and communities. I combine user-centered design with marketing strategy to create intuitive and impactful digital products.",
    image: "deepak.webp",
    imageAlt: "Portrait of Deepak Salagala",
    badge: "Available for exciting product roles",
    actions: [
      { label: "View Work",   href: "projects.html", style: "primary"   },
      { label: "Hire Me",  href: "contact.html",  style: "secondary" }
    ],
    metrics: [
      { value: "3+",              label: "Years of creative problem solving" },
      { value: "2",               label: "Flagship brands shaped end-to-end" },
      { value: "UI + Marketing",  label: "Design decisions backed by growth thinking" }
    ]
  },

  /* ---- About page ---- */
  about: {
    heading: "Crafting Meaningful Digital Experiences",
    body:
      "I am a Product Designer focused on creating practical, user-centered digital experiences that solve real-world problems. I work at the intersection of design and marketing, allowing me to build solutions that are both intuitive for users and effective for business goals",
    bodySecond:
      "With experience in UI/UX design, digital marketing, and visual design, I take a well-rounded approach to product development. I am committed to continuous learning and consistently strive to improve the quality and impact of the experiences I design.",
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
    heading: "A versatile blend of design, creativity, and marketing skills for building impactful digital experiences.",
    items: [
      {
        title: "UI/UX Design",
        text: "Crafting intuitive and engaging user experiences through thoughtful design.",
        points: [
          "UI/UX Design",
          "Wireframing",
          "Prototyping",
          "Visual Design"
        ]
      },
      {
        title: "Graphic Design & AI Creativity",
        text: "Creating visually compelling designs and leveraging AI tools to generate innovative visuals and concepts.",
        points: [
          "Graphic Design",
          "Branding",
          "Social Media Creatives",
          "AI Image Generation & Prompting"
        ]
      },
      {
        title: "Digital Marketing",
        text: "Driving growth and engagement with data-driven strategies and creative campaigns.",
        points: [
          "Digital Marketing",
          "Meta Ads",
          "Google Ads",
          "Social Media Strategy"
        ] 
      },
      {
        title: "Tools",
        text: "Bringing ideas to life using industry-standard tools and creative workflows.",
        points: [
          "Figma",
          "Adobe Creative Suite",
          "Sketch",
          "Illustrator",
          "Adobe Photoshop"
        ]
      }
    ]
  },

  /* ---- Projects page ---- */
  projects: {
    heading: "Real Product Experience",
    subheading: "I have worked on real-world digital products including MaaBooking and Hectonow, gaining hands-on experience in designing user-centric solutions that align with business goals. My work spans product design, user experience, and digital marketing, helping create impactful and scalable platforms.",
    items: [
      {
        label: "Case Study 01",
        title: "MaaBooking — Booking Platform",
        description: "Designed a seamless experience for users to discover and book farmhouses, events, and communities. Focused on simplifying the booking journey and improving user clarity.",
        image: "deepak.webp",
        imageAlt: "MaaBooking project preview",
        link: "maabooking.html",
        linkLabel: "View Case Study"
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
    heading: "Product Designer — MaaBooking.",
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
    heading: "Let’s Build Something Useful",
    text: "Have a product, website, app, or design opportunity in mind?",
    intro: "Send me a message with a short brief, timeline, and what you need help with. I’ll get back to you and we can discuss the next step.",
    availability: "Open to internships, freelance projects, and product design roles.",
    location: "Based in India",
    response: "Usually replies within 24 hours",
    email: "deepakchintu32@gmail.com",
    phone: "+91 63044 57441",
    phoneHref: "+916304457441",
    linkedin: "https://www.linkedin.com/in/salagala-deepak-a259a424b/",
    linkedinLabel: "LinkedIn Profile",
    ctaLabel: "Let's talk",
    steps: [
      "Share your project or role details",
      "I review the requirements",
      "We plan the next step"
    ]
  },

  /* ---- Footer (every page) ---- */
  footer: {
    name: "Deepak Salagala",
    tagline: "Designing thoughtful digital experiences with visual clarity and strategy.",
    links: [
      { label: "LinkedIn",    href: "https://www.linkedin.com/in/salagala-deepak-a259a424b/", external: true },
      { label: "Email",       href: "mailto:deepakchintu32@gmail.com" },
      { label: "Contact",     href: "contact.html" }
    ]
  }
};
