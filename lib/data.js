export const site = {
  name: "Antony Mwandiki",
  title: "Full-Stack Software Engineer & Founder",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://antony-mwandiki.vercel.app",
  email: "antonymwandiki26@gmail.com",
  github: "https://github.com/MwandikiAntony",
  linkedin: "https://www.linkedin.com/in/antony-mwandiki-36a788255/",
  description:
    "Antony Mwandiki is a Nairobi-based full-stack software engineer, entrepreneur and website developer. Founder of IsoMount Tech Collective, Sanctum and Innovant Technologies. Builds with React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL and Hedera.",
};

export const nav = [
  ["/", "Home"], ["/about", "About"], ["/experience", "Experience"],
  ["/projects", "Projects"], ["/certifications", "Certifications"], ["/blog", "Blog"], ["/contact", "Contact"],
];

export const stats = [
  ["3", "Ventures founded since 2024"],
  ["8+", "Products shipped"],
  ["8", "Certifications earned"],
  ["2022", "Studying Applied Physics and Computer Science"],
];

export const skills = [
  ["Languages", "JavaScript, TypeScript, C++, Python, Dart, HTML, CSS"],
  ["Frontend and mobile", "React, Next.js, React Native, Flutter, Framer Motion"],
  ["Backend", "Node.js, Express, Next.js API routes, REST API design"],
  ["Databases", "MongoDB, Mongoose, PostgreSQL, Prisma"],
  ["Security", "JWT, OAuth, NextAuth, role-based access control, validation"],
  ["Web3", "Hedera Hashgraph, smart contracts, tokenization, DLT"],
  ["Tools", "Git, GitHub, Postman, VS Code, Cloudinary, Vercel"],
  ["Business", "Entrepreneurship, product strategy, mentoring, client delivery"],
];

export const services = [
  ["Web Development", "Custom websites and web applications built around how your business and customers actually work."],
  ["Mobile App Development", "Android and iOS apps built to be fast, reliable and easy for your team to keep updating after launch."],
  ["UI/UX Design", "Interface design grounded in how people actually use a product, from first wireframe to final screen."],
  ["Cloud Solutions", "Hosting, deployment and monitoring set up properly, so your systems stay online when it matters."],
  ["IT Consulting", "Guidance on the right technology, architecture and plan before a single line of code gets written."],
  ["System Maintenance", "Ongoing support, fixes and updates once your system is live, so it keeps running the way it should."],
];

export const whyUs = [
  ["Experienced team", "Every project is worked on by people who have built and shipped real systems before."],
  ["Modern technologies", "We build with tools and practices that are current, well supported and built to last."],
  ["Client focused solutions", "We build around your actual goals and constraints, not a one size fits all template."],
  ["Secure and scalable systems", "Security and the ability to grow are considered from the start, not bolted on later."],
  ["Timely project delivery", "We plan realistic timelines and keep you updated, so there are no surprises near the deadline."],
];

export const workflow = [
  ["Discover", "We learn your business, your users and what the software actually needs to do."],
  ["Design", "We map out the screens, the data and the technical plan before any building starts."],
  ["Build", "We write and test the software in short cycles, so you can see progress along the way."],
  ["Launch and support", "We deploy the system properly and stay on hand to fix, improve and support it after launch."],
];

export const experience = [
  { role: "Intern", org: "Momentum Labs", when: "Sep 2026 to present", where: "Remote",
    points: ["Learning Distributed Ledger Technology, Web3 and Hedera Hashgraph through practical tasks.",
      "Working with Cloudora and building StockSense, an AI-powered inventory management solution for the company.",
      "Completed the Hedera Certified Foundation certification."] },
  { role: "Founder", org: "Sanctum", when: "Founded 12 March 2026", where: "Nairobi, Kenya",
    points: ["Founded and building a global Catholic social network for prayer, parish life and community.",
      "Leading product design, architecture and development across the full stack."] },
  { role: "Founder", org: "Innovant Technologies", when: "Since 2024", where: "Nairobi, Kenya",
    points: ["Founded a technology company delivering reliable, scalable and innovative digital solutions for modern businesses.",
      "Offer web and mobile development, UI/UX design, cloud solutions, IT consulting and system maintenance.",
      "Lead client discovery, design, development, launch and long-term support."] },
  { role: "Founder", org: "IsoMount Tech Collective", when: "Apr 2025 to present", where: "Nairobi, Kenya",
    points: ["Built a production developer ecosystem with Next.js, TypeScript, Prisma and PostgreSQL.",
      "Implemented NextAuth sign-in (OAuth and JWT), developer profiles, an opportunity board, mentorship and events.",
      "Own product vision, user experience and scalability."] },
  { role: "Mathematics and Physics Teacher", org: "Thaicu Secondary School", when: "Sep to Nov 2023", where: "Meru County, Kenya",
    points: ["Taught Mathematics and Physics, drafted lesson plans and mentored students."] },
  { role: "Teaching Assistant", org: "Kirindine Secondary School", when: "May to Dec 2021", where: "Meru County, Kenya",
    points: ["Supported classroom teaching, prepared lesson plans and encouraged critical thinking.",
      "Led the Christian union choir in praise and worship."] },
];

export const education = [
  ["Multimedia University of Kenya", "BSc Applied Physics and Computer Science", "2022 to present (fourth year)",
    "Data Structures and Algorithms, Computer Networks, Software Engineering, Database Systems, Object-Oriented Programming, Web Development, Operating Systems, Systems Analysis and Design."],
  ["Power Learn Project (PLP) Academy", "Software Development, S-Hook Cohort", "Oct 2024 to Jun 2025",
    "Python, web technologies, database management, and Dart with Flutter."],
  ["Power Learn Project (PLP) Academy", "Full-Stack Web Development (MERN), July Cohort", "2025",
    "A 16-week programme in MongoDB, Express, React and Node.js, with strong foundations in Python, databases and software engineering."],
  ["The Hashgraph Association", "Hedera Certified Foundation (HCF)", "Sep 2026",
    "Hedera Hashgraph, aBFT consensus, tokenization, stablecoins, smart contracts, decentralized identity, AI data provenance, ESG applications and developer tools."],
  ["Professors Without Borders", "Entrepreneurship Bootcamp 2026", "2026",
    "Practical training in building and running a venture."],
];

export const projects = [
  { title: "Sanctum", tag: "Founder", year: "Founded 12 March 2026", featured: true,
    text: "A global Catholic social network built around faith, prayer and parish life. It combines Daily Readings, the Bible, the Catholic Missal and an interactive Rosary with private hubs for parishes and Small Christian Communities, live Mass streaming, event updates, tithes and donations, Mass intention requests and a marketplace for verified Catholic goods.",
    stack: ["Full-stack", "Social network", "Payments", "Live streaming"] },
  { title: "IsoMount Tech Collective", tag: "Founder", year: "2025 to present", featured: true,
    link: "https://isomount-tech-collective.vercel.app/",
    text: "A developer ecosystem that fixes Africa's visibility gap. Developers get verified profiles synced with GitHub, a project showcase, one-click A4 CV generation, an opportunity board, structured mentorship and an events and hackathons hub. It is free for developers and funded by hiring companies.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary", "Framer Motion"] },
  { title: "StockSense", tag: "Momentum Labs and Cloudora", year: "2026", featured: true,
    text: "A comprehensive inventory management solution designed for modern business. Using advanced AI algorithms and real-time analytics, it helps teams maintain optimal stock levels, predict future needs and streamline operations. I am building it for Cloudora during my internship at Momentum Labs.",
    stack: ["AI algorithms", "Real-time analytics", "Inventory management", "Client project"] },
  { title: "Igembe South Digital Bursary System", tag: "Public sector", year: "Dec 2025 to May 2026",
    link: "http://igembe-south-digital-bursary-system.pages.dev/",
    text: "Digitises constituency bursary applications. Students sign in with a birth certificate or admission number, complete a guided multi-step application, upload documents and track status. Ward, CDF and super admins review, approve or reject, with bulk approvals and audit logs.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "RBAC"] },
  { title: "Capital Bank of Kenya", tag: "Fintech", year: "Jun to Dec 2025",
    link: "https://capital-bank-of-kenya.vercel.app/",
    text: "A simulated digital bank with secure sign-in, a dashboard of balance and recent transactions, deposits, withdrawals, transfers, statements, card management, spending limits, notifications and dark mode.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"] },
  { title: "Afya Diary Kenya", tag: "Health", year: "2025",
    text: "A health management platform with secure data modules and multi-role dashboards for clinicians, community health volunteers and chemists, backed by validated APIs and structured data modelling.",
    stack: ["Node.js", "MongoDB", "REST APIs", "RBAC"] },
  { title: "PesaFlow", tag: "Mobile fintech", year: "2025",
    text: "A mobile payment app with wallet management, transaction flows, API security checks, structured error handling and offline capability.",
    stack: ["React Native", "REST APIs"] },
];

export const certs = [
  { img: "entrepreneurship-bootcamp-2026.jpg", title: "Entrepreneurship Bootcamp 2026", org: "Professors Without Borders", date: "2026", note: "Training in building, validating and running a business." },
  { img: "hedera-certified-foundation.jpg", title: "Hedera Certified Foundation (HCF)", org: "The Hashgraph Association", date: "Sep 2026", note: "aBFT consensus, tokenization, smart contracts, decentralized identity and Hedera developer tools.", link: "https://certs.hashgraphdev.com/2fbe854f-bdb8-4d93-b869-b233c3e30096.pdf?v=1e9c2f10" },
  { img: "mern-stack-plp.jpg", title: "Full-Stack Development (MERN Stack)", org: "Power Learn Project", date: "Nov 2025", note: "A 16-week programme in MongoDB, Express, React and Node.js.", link: "https://academy.powerlearnprojectafrica.org/certificates?scholarship=76a52676-d442-41af-b6bd-69e1c3efca2b" },
  { img: "software-development-plp.jpg", title: "Software Development Fundamentals", org: "Power Learn Project", date: "Jun 2025", note: "Databases, Git and core software engineering." },
  { img: "python-developer-sololearn.jpg", title: "Python Developer", org: "Sololearn", date: "Sep 2024", note: "Python fundamentals and problem solving.", link: "https://www.sololearn.com/certificates/CC-8GLW1OQ3" },
  { img: "ai-career-essentials-alx.jpg", title: "AI Career Essentials", org: "ALX Academy", date: "Jul 2024", note: "Foundations of AI and its career applications." },
  { img: "html-css-js-johns-hopkins.jpg", title: "HTML, CSS and JavaScript for Web Developers", org: "The Johns Hopkins University", date: "Mar 2024", note: "Core front-end web development.", link: "https://www.coursera.org/account/accomplishments/certificate/K2XPVELRXZ2X" },
  { img: "technical-support-fundamentals-coursera.jpg", title: "Technical Support Fundamentals", org: "Coursera", date: "Apr 2023", note: "Troubleshooting, networking and IT support basics." },
];
