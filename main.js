// Featured projects dataset
const projects = [
  {
    title: "BrandPulse AI",
    desc: "Sentiment analysis platform classifying Twitter data using TF-IDF and Bi-Directional LSTM.",
    tech: ["Python", "TensorFlow", "Streamlit", "NLP"],
    icon: "📊",
    github: "https://github.com/ratovoarisoaricardo/Brandpulse"
  },
  {
    title: "SafeCity AI",
    desc: "Automated real-time traffic safety monitoring dashboard powered by YOLOv5.",
    tech: ["Python", "YOLOv5", "OpenCV", "Flask"],
    icon: "🚦",
    github: "https://github.com/ratovoarisoaricardo/Safety-AI"
  },
  {
    title: "Vocalis AI",
    desc: "Sophisticated web-based voice assistant orchestrating speech recognition and Gemini/Ollama.",
    tech: ["JS", "Gemini API", "Python", "TTS"],
    icon: "🎙️",
    github: "https://github.com/ratovoarisoaricardo/Vocalis"
  },
  {
    title: "HelpDesk AI",
    desc: "Seq2Seq chatbot with Attention mechanism in PyTorch to answer FAQs.",
    tech: ["PyTorch", "Python", "Streamlit"],
    icon: "🤖",
    github: "https://github.com/ratovoarisoaricardo/helpdesk"
  },
  {
    title: "Sentinel AI",
    desc: "Full-stack monitoring and security platform (Frontend & Backend).",
    tech: ["Node.js", "Python", "React", "SecOps"],
    icon: "🛡️",
    github: "https://github.com/ratovoarisoaricardo/Sentinel-ai"
  },
  {
    title: "MangAI",
    desc: "Vite application for Manga and Chibi character asset management.",
    tech: ["Vite", "Node.js", "JS"],
    icon: "🎨",
    github: "https://github.com/ratovoarisoaricardo/MangAI"
  },
  {
    title: "B-The Beginning",
    desc: "Full-stack web project featuring dedicated frontend and backend services.",
    tech: ["Node.js", "Express", "HTML/CSS", "JavaScript"],
    icon: "🌐",
    github: "https://github.com/ratovoarisoaricardo/b-the-beginning"
  }
];

// Render project cards to the DOM
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = '';

  projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    
    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-content">
        <div class="project-icon">${project.icon}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="tech-stack">
          ${techTags}
        </div>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">Source code →</a>
      </div>
    `;
    
    // Mouse spotlight interaction
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

// Lifecycle initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjects);
} else {
  renderProjects();
}
