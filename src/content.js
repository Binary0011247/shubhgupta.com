export const profile = {
  name: "Shubh Gupta",
  email: "shubh.etw22@gmail.com",
  phone: "+919997587234",
  phoneDisplay: "+91 99975 87234",
  github: "https://github.com/Binary0011247",
  githubLabel: "github.com/Binary0011247",
  linkedin: "https://www.linkedin.com/in/shubh-05640-gupta/",
  linkedinLabel: "linkedin.com/in/shubh-05640-gupta",
  location: "Ghaziabad, Uttar Pradesh",
  school: "SRM Institute of Science and Technology",
  degree: "B.Tech in Computer Science and Engineering",
  cgpa: "9.5 / 10",
  study: "July 2023 — Present",
};

const ext = 'target="_blank" rel="noopener noreferrer"';

export const sections = [
  { id: "home", label: "Intro", accent: "#1a237e" },
  { id: "education", label: "Education", accent: "#15803d" },
  { id: "experience", label: "Experience", accent: "#b45309" },
  { id: "projects", label: "Projects", accent: "#6d28d9" },
  { id: "skills", label: "Skills", accent: "#0f766e" },
  { id: "contact", label: "Contact", accent: "#be123c" },
];

export const pages = [
  {
    id: "home",
    section: "home",
    title: "Intro",
    winTitle: "Shubh Gupta — Intro",
    html: `
      <div class="intro">
        <h1>★ Hello, I am Shubh Gupta ★</h1>
        <p class="tagline">Backend + AI engineer in the making: 3 internships, 9.5 CGPA, RAG systems, and production deployments on Azure.</p>
        <p>
          CSE student at <b>${profile.school}</b> —
          ${profile.degree}.
        </p>
      </div>
      <div class="ticker">
        <div class="ticker-track">
          <span>Building scalable system that solves real world problems ◆ ← / → to flip pages ◆ ↑ / ↓ to scroll ◆&nbsp;</span>
          <span>Building scalable system that solves real world problems ◆ ← / → to flip pages ◆ ↑ / ↓ to scroll ◆&nbsp;</span>
        </div>
      </div>
      <div class="navguide">
        <p class="navguide-title">★ Navigate</p>
        <div class="navguide-box">
          <div class="navkeys">
            <button type="button" data-nav="prev" aria-label="Previous page">←</button>
            <button type="button" data-nav="next" aria-label="Next page">→</button>
            <button type="button" data-nav="up" aria-label="Scroll up">↑</button>
            <button type="button" data-nav="down" aria-label="Scroll down">↓</button>
          </div>
          <p>flip pages</p>
          <p>or click ◀ ▶ above</p>
          <p>scroll page</p>
          <p>PgUp / PgDn / Space too</p>
        </div>
      </div>
    `,
  },
  {
    id: "education",
    section: "education",
    title: "Education",
    winTitle: "Shubh Gupta — Education",
    html: `
      <p class="kicker">Education</p>
      <h1>${profile.school}</h1>
      <p class="meta">${profile.location}<br>${profile.study}</p>
      <p><b>${profile.degree}</b></p>
      <p>CGPA ${profile.cgpa}</p>
      <h2>Certifications and papers</h2>
      <ul class="bullets">
        <li>
          ICDSST 2026 — short paper accepted, AI-Powered University Assistant.
          <a ${ext} href="https://drive.google.com/file/d/1KcPYHmttxBr3dvZt1vngyroWN_Cf0jpz/view">Acceptance letter</a>
        </li>
        <li>
          NPTEL — Natural Language Processing, and Introduction to Large Language Models.
          <a ${ext} href="https://drive.google.com/file/d/1Cr7HawhTaXNJY5GMSZ6nWXOL1slEe8Db/view">Certificate</a>
        </li>
        <li>
          Infosys SpringBoard — Artificial Intelligence Primer.
          <a ${ext} href="https://drive.google.com/file/d/1yKHwVF-tRdF4lK_4b8hpLzXHalG4dlCD/view">Certificate</a>
        </li>
      </ul>
    `,
  },
  {
    id: "orbit",
    section: "experience",
    title: "Orbit",
    winTitle: "Experience — Orbit Skilling",
    html: `
      <p class="kicker">Experience · 01</p>
      <h1>Orbit Skilling Solutions</h1>
      <p class="meta">SDE Intern · Remote<br>July 2025 — March 2026</p>
      <ul class="bullets">
        <li>Owned the backend architecture end to end: Django and React, PostgreSQL, Redis, Celery, and Firebase Auth. Containerised with Docker, deployed on an Azure VM through Kubernetes, with GitHub Actions for CI/CD.</li>
        <li>Found the latency bottleneck in the AI evaluation pipeline and redesigned the async Celery path. Processing time dropped by 60%, which kept scoring reliable for 100+ submissions a day.</li>
        <li>Put Google Meet and Zoom behind one service for creating meetings, managing recordings, and tracking attendance.</li>
        <li>Rebuilt the student dashboard so recording stats, assessment scores, and assigned assessments sit in a single view.</li>
        <li>Set up Google Play Console and Apple Developer for the company: signing, store listings, and the compliance needed to publish on both stores.</li>
      </ul>
      <p><a class="btn" ${ext} href="https://drive.google.com/file/d/152XKscv_W4om7Z53vVpovrI6Z0AwMIu1/view">Internship certificate</a></p>
    `,
  },
  {
    id: "myeasypharma",
    section: "experience",
    title: "Myeasypharma",
    winTitle: "Experience — Myeasypharma",
    html: `
      <p class="kicker">Experience · 02</p>
      <h1>Myeasypharma</h1>
      <p class="meta">Technical Associate Intern · Remote<br>May 2025 — July 2025</p>
      <ul class="bullets">
        <li>Trained a Random Forest on 3,000 hospital records to score patient risk as high, medium, or low, at 75–80% accuracy. Vitals-trend features came from raw daily readings.</li>
        <li>Built an AI health synopsis that reads the past 7 days of vitals and drafts a report for the doctor, with in-app prescription notifications to the patient.</li>
        <li>Owned the full stack: React, a Node and Express API, the PostgreSQL schema, and the Python model. Deployed on Supabase, Render, and Vercel at zero infrastructure cost.</li>
      </ul>
      <p><a class="btn" ${ext} href="https://github.com/Binary0011247/Nuclecare.git">Nuclecare on GitHub</a></p>
    `,
  },
  {
    id: "springboard",
    section: "experience",
    title: "SpringBoard",
    winTitle: "Experience — Infosys SpringBoard",
    html: `
      <p class="kicker">Experience · 03</p>
      <h1>Infosys SpringBoard</h1>
      <p class="meta">Internship</p>
      <ul class="bullets">
        <li>Developed autonomous AI agents that analyze patient requests and assign priority levels using NLP algorithms.</li>
        <li>Created data pipelines to process and analyze patient interaction data for system optimization.</li>
        <li>Built responsive front-end interfaces with React Native and designed RESTful APIs with Node.js/Express.js.</li>
        <li>Architected MongoDB database schemas for efficient storage and retrieval of patient interaction data.</li>
      </ul>
    `,
  },
  {
    id: "acadix",
    section: "projects",
    title: "Acadix",
    winTitle: "Project — Acadix AI",
    html: `
      <p class="kicker">Project · RAG</p>
      <h1>Acadix AI</h1>
      <p class="meta">AI-powered university assistant<br>React, FastAPI, PostgreSQL, Whisper, Groq</p>
      <ul class="bullets">
        <li>Architected a RAG pipeline: FAISS vector search and Sentence-BERT embeddings over private university documents — syllabi, notices, timetables — with Llama 3.1 on Groq answering from that context.</li>
        <li>Ingestion runs PyPDF2 to sentence-transformers to a FAISS index. Access is split by Student, Faculty, and Admin. Batch enrollment takes CSV and Excel. APScheduler and SendGrid send deadline alerts.</li>
        <li>Short paper accepted at ICDSST 2026.</li>
      </ul>
      <p>
        <a class="btn" ${ext} href="https://github.com/Binary0011247/AI-Powered-University-Assistant.git">GitHub</a>
        <a class="btn" ${ext} href="https://drive.google.com/file/d/1KcPYHmttxBr3dvZt1vngyroWN_Cf0jpz/view">Acceptance letter</a>
      </p>
    `,
  },
  {
    id: "voice",
    section: "projects",
    title: "Voice calls",
    winTitle: "Project — Voice patient calls",
    html: `
      <p class="kicker">Project · Healthcare</p>
      <h1>Voice-based patient call system</h1>
      <p class="meta">React Native, Node.js, Express, MongoDB, FastAPI, Databricks</p>
      <ul class="bullets">
        <li>Cross-platform mobile app so a patient can raise a help request by voice or text from the phone.</li>
        <li>A PySpark pipeline on Databricks processes historical requests, priority, response times, and escalations into datasets for operations.</li>
        <li>Batch ETL surfaces request volume, average response time, escalation rate, and staff workload for the dashboard.</li>
      </ul>
      <p><a class="btn" ${ext} href="https://github.com/Binary0011247/Voice-Based-Patient-Call-System__.git">GitHub</a></p>
    `,
  },
  {
    id: "skills",
    section: "skills",
    title: "Skills",
    winTitle: "Shubh Gupta — Skills",
    html: `
      <p class="kicker">Technical skills</p>
      <h1>What I ship with</h1>
      <h2>Languages</h2>
      <p class="chips"><span>C++</span><span>Python</span><span>Pandas</span><span>NumPy</span><span>SQL</span><span>TypeScript</span><span>JavaScript</span><span>HTML / CSS</span></p>
      <h2>Backend and infra</h2>
      <p class="chips"><span>Django</span><span>FastAPI</span><span>Node.js</span><span>Express</span><span>Celery</span><span>Docker</span><span>Kubernetes</span><span>CI/CD</span><span>Databricks</span><span>Azure</span></p>
      <h2>AI / ML / NLP</h2>
      <p class="chips"><span>BERT</span><span>DistilBERT</span><span>Whisper</span><span>Sentence-BERT</span><span>FAISS</span><span>OpenAI API</span><span>Azure Speech</span></p>
      <h2>Data and tools</h2>
      <p class="chips"><span>PostgreSQL</span><span>MySQL</span><span>MongoDB</span><span>Git</span><span>Figma</span><span>Jupyter</span><span>Colab</span></p>
      <h2>Practice</h2>
      <p>Data analysis, information retrieval, natural language processing, and database design. The through-line is a model with a job, a store behind it, and a deploy path.</p>
    `,
  },
  {
    id: "contact",
    section: "contact",
    title: "Contact",
    winTitle: "Shubh Gupta — Contact",
    html: `
      <p class="kicker">Contact</p>
      <h1>Write to me</h1>
      <p class="meta">Open to architecture work, internships, and collaborations on retrieval and applied ML systems.</p>
      <ul class="facts">
        <li><b>Email</b> <a href="mailto:${profile.email}">${profile.email}</a></li>
        <li><b>Phone</b> <a href="tel:${profile.phone}">${profile.phoneDisplay}</a></li>
        <li><b>GitHub</b> <a ${ext} href="${profile.github}">${profile.githubLabel}</a></li>
        <li><b>LinkedIn</b> <a ${ext} href="${profile.linkedin}">${profile.linkedinLabel}</a></li>
        <li><b>Based</b> ${profile.location}</li>
      </ul>
      <form id="contactForm">
        <label>Your name <input name="name" type="text" required maxlength="80" autocomplete="name" /></label>
        <label>Your email <input name="email" type="email" maxlength="120" autocomplete="email" /></label>
        <label>Message <textarea name="message" required maxlength="2000" rows="4"></textarea></label>
        <p class="form-row">
          <button class="btn primary" type="submit">Send</button>
          <span class="fine">Opens your mail client, addressed to ${profile.email}.</span>
        </p>
      </form>
    `,
  },
];

export const themes = [
  {
    id: "nature",
    label: "Nature",
    swatch: "#2f6b3a",
    src: "/themes/nature.jpg",
    zoom: 1.08,
    main: { rect: [33.28, 12.50, 66.80, 54.03] },
  },
  {
    id: "nightlife",
    label: "Nightlife",
    swatch: "#7c3aed",
    src: "/themes/nightlife.jpg",
    main: { rect: [37.11, 23.75, 62.03, 53.89] },
  },
  {
    id: "cosmos",
    label: "Cosmos",
    swatch: "#22d3ee",
    src: "/themes/cosmos.jpg",
    main: { rect: [36.56, 20.97, 63.91, 54.17] },
  },
  {
    id: "rain",
    label: "Rain",
    swatch: "#64748b",
    src: "/themes/rain.jpg",
    zoom: 1.08,
    main: { rect: [33.75, 14.03, 67.89, 54.44] },
  },
];
