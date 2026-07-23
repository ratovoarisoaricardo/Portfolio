// ==========================================
// Portfolio AI - Interactive Script
// Owner: RATOVOARISOA Mendrika Manjaka Ricardo
// ==========================================

// --- I18N Translations Dictionary ---
const translations = {
  fr: {
    "nav.about": "À Propos",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.badge": "Développeur IA & Full-Stack",
    "hero.title": "Créateur d'Expériences <span class=\"gradient-text\">Intelligentes</span>",
    "hero.btnProjects": "Voir mes projets",
    "hero.btnContact": "Me contacter",
    "stats.projects": "Projets Majeurs",
    "stats.agents": "Essaims Autonomes",
    "stats.ai": "Architectures IA",
    "about.title": "À Propos de Moi",
    "about.p1": "Bonjour ! Je suis <strong>RATOVOARISOA Mendrika Manjaka Ricardo</strong>, un <strong>Développeur IA & Full-Stack</strong> passionné par la conception et le développement d'applications web intelligentes à forte valeur ajoutée, de systèmes multi-agents et de solutions de Machine Learning modernes.",
    "about.p2": "Des systèmes multi-agents autonomes aux plateformes RAG d'entreprise, en passant par l'analyse de flux en temps réel via WebSockets et la vision par ordinateur avec YOLOv5, je m'efforce d'allier rigueur algorithmique, performance backend et interfaces utilisateurs élégantes.",
    "about.skillsTitle": "Compétences & Technologies Clés",
    "projects.title": "Projets Réalisés",
    "projects.subtitle": "Une sélection de mes projets en IA, Vision par Ordinateur et Développement Web.",
    "filter.all": "✨ Tous les Projets",
    "filter.ai": "🤖 Agents & IA",
    "filter.vision": "👁️ ML & Vision",
    "filter.fullstack": "🌐 Full-Stack & Web",
    "contact.title": "Prêt à collaborer ?",
    "contact.subtitle": "Je suis toujours ouvert à de nouveaux projets, opportunités et défis technologiques. N'hésitez pas à me contacter !",
    "contact.emailDirect": "✉️ Email Direct",
    "contact.copyEmail": "📋 Copier l'Email",
    "footer.copyright": "© 2026 Ricardo RATOVOARISOA. Tous droits réservés. Conçu avec passion.",
    "modal.sourceCode": "Voir le code source sur GitHub →",
    "modal.keyFeatures": "Caractéristiques Clés :",
    "modal.techStack": "Technologies Utilisées :",
    "toast.copied": "Email copié dans le presse-papiers !"
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "AI & Full-Stack Developer",
    "hero.title": "Crafting <span class=\"gradient-text\">Intelligent</span> Experiences",
    "hero.btnProjects": "View my projects",
    "hero.btnContact": "Contact me",
    "stats.projects": "Major Projects",
    "stats.agents": "Autonomous Swarms",
    "stats.ai": "AI Architectures",
    "about.title": "About Me",
    "about.p1": "Hello! I am <strong>RATOVOARISOA Mendrika Manjaka Ricardo</strong>, an <strong>AI & Full-Stack Developer</strong> passionate about designing and building intelligent, high-performance web applications, multi-agent systems, and modern machine learning solutions.",
    "about.p2": "From autonomous multi-agent systems and enterprise RAG platforms to real-time WebSocket streaming analytics and YOLOv5 computer vision, I focus on turning complex algorithms into sleek, scalable, high-impact applications.",
    "about.skillsTitle": "Key Skills, Tools & Technologies",
    "projects.title": "Featured Projects",
    "projects.subtitle": "A curated selection of my AI, Computer Vision, and Full-Stack Web projects.",
    "filter.all": "✨ All Projects",
    "filter.ai": "🤖 Agents & AI",
    "filter.vision": "👁️ ML & Vision",
    "filter.fullstack": "🌐 Full-Stack & Web",
    "contact.title": "Ready to collaborate?",
    "contact.subtitle": "I am always open to new projects, technology challenges, and innovative opportunities. Feel free to reach out!",
    "contact.emailDirect": "✉️ Direct Email",
    "contact.copyEmail": "📋 Copy Email",
    "footer.copyright": "© 2026 Ricardo RATOVOARISOA. All rights reserved. Built with passion.",
    "modal.sourceCode": "View source code on GitHub →",
    "modal.keyFeatures": "Key Features:",
    "modal.techStack": "Technologies Used:",
    "toast.copied": "Email copied to clipboard!"
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

// --- Typewriter Phrases ---
const typewriterPhrases = {
  fr: [
    "Spécialiste Essaims d'Agents IA Autonomes",
    "Architecte RAG & Recherche Vectorielle",
    "Analyse de Flux Temps Réel & WebSockets",
    "Vision par Ordinateur YOLOv5 & Deep Learning"
  ],
  en: [
    "Autonomous AI Agent Swarms Specialist",
    "Enterprise RAG & Vector Search Architect",
    "Real-Time Streaming Analytics & WebSockets",
    "YOLOv5 Computer Vision & Deep Learning"
  ]
};

// --- Featured Projects Dataset ---
const projects = [
  {
    id: "autoops",
    category: "fullstack",
    title: "AutoOps AI Suite",
    desc: {
      fr: "Plateforme d'administration système, cartographie de topologie réseau sous-réseau et gestionnaire de règles de pare-feu avec copilote terminal SSH.",
      en: "SysAdmin & NetOps platform featuring server telemetry, automated log diagnostics, subnet topology mapping, and firewall rules control."
    },
    tech: ["Python", "FastAPI", "JavaScript", "Docker", "WebSockets"],
    icon: "⚡",
    github: "https://github.com/ratovoarisoaricardo/AutoOpsAI",
    features: {
      fr: [
        "Télémétrie serveur en direct (CPU, RAM, Disque, Processus, Bande passante)",
        "Analyseur de logs système (syslog) avec suggestions de remédiation par IA",
        "Cartographie dynamique de topologie réseau sous-réseau avec scanner de ports",
        "Terminal web SSH interactif et gestionnaire de règles de pare-feu NetShield"
      ],
      en: [
        "Live server telemetry (CPU, RAM, Disk, PIDs, Network Bandwidth)",
        "System log parser with AI remediation suggestions",
        "Subnet network topology discovery graph & port scanner",
        "Interactive SSH Web Terminal & NetShield Firewall Rule Manager"
      ]
    }
  },
  {
    id: "visionguard",
    category: "vision",
    title: "VisionGuard AI Mobile",
    desc: {
      fr: "Application mobile de vision par ordinateur en temps réel proposant la détection de somnolence du conducteur, le suivi d'objets à 60 FPS et des alertes d'intrusion.",
      en: "Mobile computer vision & surveillance app featuring driver drowsiness detection, 60 FPS object tracking, and acoustic hazard alerts."
    },
    tech: ["JavaScript", "HTML5", "CSS3", "PWA", "YOLOv8", "OpenCV"],
    icon: "📱",
    github: "https://github.com/ratovoarisoaricardo/visionguard-ai",
    features: {
      fr: [
        "Surveillance anti-somnolence du conducteur (suivi du regard et alertes sonores)",
        "Suivi d'objets et de véhicules en temps réel à 60 images par seconde",
        "Protection de périmètre et capture d'écran automatique d'intrusions",
        "Progressive Web App (PWA) installable sur iOS et Android"
      ],
      en: [
        "Driver drowsiness & eye closure tracking with acoustic alarm alerts",
        "60 FPS real-time vehicle and pedestrian object tracking",
        "Perimeter security guard mode with instant snapshot logger",
        "Standalone Progressive Web App (PWA) installable on iOS & Android"
      ]
    }
  },
  {
    id: "agentcraft",
    category: "ai",
    title: "AgentCraft AI",
    desc: {
      fr: "Plateforme d'essaims multi-agents autonomes où des agents IA spécialisés (Chercheur, Analyste, Rédacteur) collaborent de manière asynchrone pour résoudre des objectifs complexes.",
      en: "Autonomous Multi-Agent Swarm platform where specialized AI agents (Researcher, Analyst, Writer) collaborate asynchronously to solve complex user goals."
    },
    tech: ["Python", "LangChain", "Multi-Agent Systems", "Streamlit", "Gemini API"],
    icon: "🤖",
    github: "https://github.com/ratovoarisoaricardo/Agentcraft",
    features: {
      fr: [
        "Délégation dynamique de tâches entre agents chercheurs, analystes et rédacteurs",
        "Gestion de mémoire partagée et état d'exécution multi-tours",
        "Intégration d'outils personnalisés (recherche web, analyse de données)",
        "Streaming en direct de la pensée et des logs des agents"
      ],
      en: [
        "Dynamic task delegation across specialized researcher, analyst, and writer agents",
        "Shared state memory & multi-turn execution tracking",
        "Custom tool execution (web search, python data analyst)",
        "Real-time agent reasoning & log streaming"
      ]
    }
  },
  {
    id: "documind",
    category: "ai",
    title: "DocuMind AI",
    desc: {
      fr: "Plateforme RAG d'entreprise réalisant le découpage vectoriel de documents, la recherche sémantique et des Q/R précises avec citations de pages.",
      en: "Enterprise RAG platform performing document vector chunking, semantic similarity search, and precise Q&A with page attribution."
    },
    tech: ["Python", "LangChain", "ChromaDB", "FastAPI", "OpenAI"],
    icon: "🧠",
    github: "https://github.com/ratovoarisoaricardo/Documind",
    features: {
      fr: [
        "Parsing multi-formats (PDF, DOCX, TXT, Markdown)",
        "Persistance vectorielle locale et recherche sémantique ChromaDB",
        "Attribution exacte des paragraphes et numéros de pages sources",
        "Endpoints API REST rapides avec FastAPI"
      ],
      en: [
        "Multi-format document parsing (PDF, DOCX, TXT, Markdown)",
        "ChromaDB local vector persistence & semantic search",
        "Precise source citation with page & snippet attribution",
        "FastAPI REST endpoints for seamless integration"
      ]
    }
  },
  {
    id: "pulsegrid",
    category: "vision",
    title: "PulseGrid AI",
    desc: {
      fr: "Moteur d'analyse en flux temps réel à haute fréquence et de détection d'anomalies ML propulsé par WebSockets et cache Redis sous-milliseconde.",
      en: "High-frequency real-time streaming analytics & ML anomaly detection engine with WebSockets & Redis caching."
    },
    tech: ["FastAPI", "WebSockets", "Redis", "Scikit-Learn", "Python"],
    icon: "⚡",
    github: "https://github.com/ratovoarisoaricardo/Pulsegrid",
    features: {
      fr: [
        "Streaming bi-directionnel à faible latence via WebSockets",
        "Scoring d'anomalies en direct par Isolation Forest",
        "Pub/Sub Redis pour scalabilité horizontale",
        "Visualisation de télémétrie en temps réel"
      ],
      en: [
        "Low-latency bi-directional WebSocket streaming",
        "Live anomaly scoring using Isolation Forest ML models",
        "Redis Pub/Sub architecture for horizontal scaling",
        "Real-time telemetry dashboard visualization"
      ]
    }
  },
  {
    id: "brandpulse",
    category: "vision",
    title: "BrandPulse AI",
    desc: {
      fr: "Plateforme d'analyse de sentiment par Deep Learning classant les médias sociaux avec tokenisation TF-IDF et réseaux Bi-LSTM.",
      en: "Sentiment analysis platform classifying Twitter & social media data using TF-IDF and Bi-Directional LSTM neural networks."
    },
    tech: ["Python", "TensorFlow", "Streamlit", "NLP", "Bi-LSTM"],
    icon: "📊",
    github: "https://github.com/ratovoarisoaricardo/Brandpulse",
    features: {
      fr: [
        "Architecture de réseau de neurones récurrents Bi-LSTM",
        "Prétraitement NLP (NLTK, Tokenization TF-IDF)",
        "Tableau de bord Streamlit avec jauge de probabilité",
        "Classification multi-classes de polarités de sentiments"
      ],
      en: [
        "Bi-Directional LSTM recurrent neural network architecture",
        "NLP text cleaning & TF-IDF vectorization pipeline",
        "Interactive Streamlit confidence gauge UI",
        "Multi-class sentiment polarity classification"
      ]
    }
  },
  {
    id: "safecity",
    category: "vision",
    title: "SafeCity AI",
    desc: {
      fr: "Tableau de bord automatisé de sécurité routière et de surveillance d'objets en temps réel basé sur YOLOv5 et traitement de flux OpenCV.",
      en: "Automated real-time traffic safety monitoring dashboard powered by YOLOv5 object detection & OpenCV."
    },
    tech: ["Python", "YOLOv5", "OpenCV", "Flask", "PyTorch"],
    icon: "🚦",
    github: "https://github.com/ratovoarisoaricardo/Safety-AI",
    features: {
      fr: [
        "Détection et suivi d'objets en direct sur vidéo avec YOLOv5",
        "Comptage de véhicules et détection de ralentissements",
        "Interface de surveillance Flask avec overlay vidéo",
        "Alertes de densité de trafic configurables"
      ],
      en: [
        "YOLOv5 deep learning real-time object tracking",
        "Vehicle density counting & congestion hazard alerts",
        "Flask web streaming UI with bounding box overlays",
        "Configurable traffic metric thresholds"
      ]
    }
  },
  {
    id: "vocalis",
    category: "ai",
    title: "Vocalis AI",
    desc: {
      fr: "Assistant vocal conversationnel web orchestrant la reconnaissance vocale continue, le raisonnement LLM Gemini et la synthèse vocale.",
      en: "Sophisticated web-based voice assistant orchestrating speech recognition, Gemini LLM reasoning, and natural speech synthesis."
    },
    tech: ["JavaScript", "Gemini API", "Python", "Web Speech API", "TTS"],
    icon: "🎙️",
    github: "https://github.com/ratovoarisoaricardo/Vocalis",
    features: {
      fr: [
        "Reconnaissance vocale continue en temps réel",
        "Orchestration des réponses via Gemini LLM API",
        "Visualiseur d'ondes audio interactif sur Canvas HTML5",
        "Synthèse vocale (Text-To-Speech) naturelle et fluide"
      ],
      en: [
        "Continuous hands-free speech recognition",
        "Contextual LLM reasoning powered by Gemini API",
        "Interactive HTML5 canvas audio waveform visualizer",
        "Natural multi-voice Text-To-Speech synthesis"
      ]
    }
  },
  {
    id: "helpdesk",
    category: "ai",
    title: "HelpDesk AI",
    desc: {
      fr: "Réseau de neurones Seq2Seq personnalisé avec mécanisme d'Attention Bahdanau conçu en PyTorch pour répondre aux demandes de support IT.",
      en: "Seq2Seq neural network with Bahdanau Attention mechanism built in PyTorch to automate IT helpdesk FAQ responses."
    },
    tech: ["PyTorch", "Python", "Streamlit", "Seq2Seq", "Attention"],
    icon: "🤖",
    github: "https://github.com/ratovoarisoaricardo/helpdesk",
    features: {
      fr: [
        "Modèle Encodeur-Décodeur personnalisé sous PyTorch",
        "Pondération des mots clés par mécanisme d'Attention",
        "Indexation du vocabulaire et prétraitement de requêtes IT",
        "Interface de messagerie d'assistance avec Streamlit"
      ],
      en: [
        "Custom Encoder-Decoder architecture in PyTorch",
        "Bahdanau Attention mechanism for key context weighting",
        "Custom vocabulary indexing & text tokenization",
        "Interactive helpdesk chat UI built with Streamlit"
      ]
    }
  },
  {
    id: "sentinel",
    category: "fullstack",
    title: "Sentinel AI",
    desc: {
      fr: "Plateforme Full-stack de surveillance SecOps et de gestion de la sécurité fournissant des diagnostics de santé serveur et visuels de menaces.",
      en: "Full-stack monitoring and security platform (Frontend & Backend) providing server health metrics and threat diagnostics."
    },
    tech: ["Node.js", "Python", "React", "SecOps", "Docker"],
    icon: "🛡️",
    github: "https://github.com/ratovoarisoaricardo/Sentinel-ai",
    features: {
      fr: [
        "Tableau de bord télémétrique en temps réel (CPU, Mémoire, Réseau)",
        "Contrôle d'accès basé sur les rôles (RBAC)",
        "Alertes de sécurité et registres d'audit",
        "Déploiement containerisé avec Docker"
      ],
      en: [
        "Real-time system health dashboard (CPU, Memory, Network)",
        "Role-Based Access Control (RBAC) security layer",
        "Threat detection alerts & system audit logs",
        "Containerized deployment with Docker"
      ]
    }
  },
  {
    id: "mangai",
    category: "fullstack",
    title: "MangAI",
    desc: {
      fr: "Application web moderne sous Vite pour la gestion d'actifs graphiques Manga & Chibi, le taggage de personnages et la gestion de galerie.",
      en: "Vite application for Manga and Chibi character asset management, character tagging, and gallery curation."
    },
    tech: ["Vite", "Node.js", "JavaScript", "CSS3"],
    icon: "🎨",
    github: "https://github.com/ratovoarisoaricardo/MangAI",
    features: {
      fr: [
        "Architecture ultra-rapide propulsée par Vite JS",
        "Système de filtrage d'actifs par étiquettes et catégories",
        "Aperçu haute résolution des cartes de personnages",
        "Interface utilisateur responsive et fluide"
      ],
      en: [
        "Ultra-fast lightning build & load powered by Vite JS",
        "Tagging & category filtering system for character assets",
        "High-resolution card preview dialogs",
        "Sleek responsive masonry gallery layout"
      ]
    }
  },
  {
    id: "bthebeginning",
    category: "fullstack",
    title: "B-The Beginning",
    desc: {
      fr: "Application web full-stack proposant des services backend REST dédiés, flux d'authentification utilisateur et composants UI réactifs.",
      en: "Full-stack web project featuring dedicated frontend and backend services with user authentication."
    },
    tech: ["Node.js", "Express", "HTML/CSS", "JavaScript"],
    icon: "🌐",
    github: "https://github.com/ratovoarisoaricardo/b-the-beginning",
    features: {
      fr: [
        "Backend RESTful modulable avec Express et Node.js",
        "Gestion d'authentification et sessions utilisateur",
        "Rendu DOM réactif et animations CSS",
        "Structure de projet propre et maintenable"
      ],
      en: [
        "Modular RESTful backend using Express and Node.js",
        "User authentication and session management",
        "Dynamic responsive DOM rendering & CSS transitions",
        "Clean, scalable full-stack code architecture"
      ]
    }
  }
];

// --- Typewriter Effect Engine ---
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typewriterTimeout = null;

function runTypewriter() {
  const targetEl = document.getElementById('typewriter');
  if (!targetEl) return;

  const currentPhrases = typewriterPhrases[currentLang];
  const currentPhrase = currentPhrases[phraseIdx % currentPhrases.length];

  if (isDeleting) {
    targetEl.textContent = currentPhrase.substring(0, charIdx - 1);
    charIdx--;
  } else {
    targetEl.textContent = currentPhrase.substring(0, charIdx + 1);
    charIdx++;
  }

  let typingSpeed = isDeleting ? 30 : 70;

  if (!isDeleting && charIdx === currentPhrase.length) {
    typingSpeed = 2200; // Pause at end of sentence
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx++;
    typingSpeed = 400; // Pause before typing next phrase
  }

  clearTimeout(typewriterTimeout);
  typewriterTimeout = setTimeout(runTypewriter, typingSpeed);
}

// --- Project Rendering Engine ---
let currentFilter = 'all';

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = '';

  const filteredProjects = projects.filter(p => currentFilter === 'all' || p.category === currentFilter);

  filteredProjects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.setAttribute('data-id', project.id);

    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const description = project.desc[currentLang] || project.desc.en;

    card.innerHTML = `
      <div class="card-content">
        <div class="project-header">
          <div class="project-icon">${project.icon}</div>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${description}</p>
        <div class="tech-stack">
          ${techTags}
        </div>
        <div class="card-actions">
          <button class="btn-details" onclick="openProjectModal('${project.id}')">
            🔍 ${currentLang === 'fr' ? 'Détails' : 'Details'}
          </button>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            GitHub ↗
          </a>
        </div>
      </div>
    `;

    // Interactive mouse spotlight effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    projectsGrid.appendChild(card);
  });
}

// --- Project Category Filter Tabs ---
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects();
    });
  });
}

// --- Project Details Modal ---
window.openProjectModal = function(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (!modalOverlay || !modalBody) return;

  const title = project.title;
  const desc = project.desc[currentLang] || project.desc.en;
  const features = project.features[currentLang] || project.features.en;
  const featuresList = features.map(f => `<li>${f}</li>`).join('');
  const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const t = translations[currentLang];

  modalBody.innerHTML = `
    <div class="modal-title">
      <span class="project-icon">${project.icon}</span>
      <span>${title}</span>
    </div>
    <p class="modal-desc">${desc}</p>
    
    <div class="modal-section-title">${t["modal.keyFeatures"]}</div>
    <ul class="modal-features">
      ${featuresList}
    </ul>

    <div class="modal-section-title">${t["modal.techStack"]}</div>
    <div class="tech-stack" style="margin-bottom: 30px;">
      ${techTags}
    </div>

    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; justify-content: center;">
      ${t["modal.sourceCode"]}
    </a>
  `;

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

function setupModalListeners() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// --- Bilingual Translation Manager ---
function updatePageLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update navbar button state
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const flag = lang === 'fr' ? '🇬🇧' : '🇫🇷';
    const code = lang === 'fr' ? 'EN' : 'FR';
    langBtn.innerHTML = `<span class="flag-icon">${flag}</span> <span class="lang-code">${code}</span>`;
  }

  // Update text for all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Re-run typewriter with new phrases
  phraseIdx = 0;
  charIdx = 0;
  isDeleting = false;
  runTypewriter();

  // Re-render projects in new language
  renderProjects();
}

function setupLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'fr' ? 'en' : 'fr';
      updatePageLanguage(nextLang);
    });
  }
}

// --- Toast Notification Manager ---
function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function setupCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'ratovoarisoaricardo@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const msg = translations[currentLang]["toast.copied"];
        showToast(`✅ ${msg}`);
      }).catch(() => {
        showToast(`✉️ ${email}`);
      });
    });
  }
}

// --- Interactive Neural Network Canvas ---
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const nodes = [];
  const nodeCount = Math.min(Math.floor(width * 0.04), 60);

  let mouse = { x: null, y: null, maxDist: 150 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 210, 255, 0.7)';
      ctx.shadowColor = '#00d2ff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw();

      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          const alpha = (1 - dist / 130) * 0.25;
          ctx.strokeStyle = `rgba(138, 43, 226, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = nodes[i].x - mouse.x;
        const mdy = nodes[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.maxDist) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const mAlpha = (1 - mdist / mouse.maxDist) * 0.4;
          ctx.strokeStyle = `rgba(0, 210, 255, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// --- Mobile Menu Drawer ---
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

// --- PWA Service Worker Registration ---
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('PWA ServiceWorker registered with scope:', reg.scope);
      }).catch((err) => {
        console.warn('PWA ServiceWorker registration failed:', err);
      });
    });
  }
}

// --- Lifecycle Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initNeuralCanvas();
  setupLanguageToggle();
  setupProjectFilters();
  setupModalListeners();
  setupCopyEmail();
  setupMobileMenu();
  registerServiceWorker();
  updatePageLanguage(currentLang);
});
