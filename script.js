const musicGithub = "https://github.com/davidisaac22/react-music-player";
const musicDemo ="https://dave-musicplayer.vercel.app/";
const tictactoeGithub = "https://github.com/davidisaac22/Tic-tac-toe";
const tictactoeDemo = "https://dave-tictactoe.vercel.app/";
const libraryGithub = "https://github.com/davidisaac22/library";
const libraryDemo = "https://dave-library.vercel.app/";
const calculatorGithub = "https://github.com/davidisaac22/calculator";
const calculatorDemo = "https://dave-calculator.vercel.app/";
const rockpaperscissorsGithub = "https://github.com/davidisaac22/rock-paper-scissors";
const rockpaperscissorsDemo = "https://rock-paper-scissors-rosy-eight.vercel.app/";
const etchGithub = "https://github.com/davidisaac22/etch-a-sketch";
const etchDemo = "https://etch-a-sketch-ruby-eta.vercel.app/";

const projects = {
  featured: [
    {
      number: "01",
      title: "React Music Player",
      type: "React interface / media experience",
      description: "A React music player that coordinates song selection, active-track state, HTML5 audio playback, progress scrubbing, previous/next controls, and automatic advance when a track ends.",
      technologies: ["React", "SCSS", "HTML5 Audio", "Font Awesome React", "UUID"],
      githubUrl: musicGithub,
      liveUrl: musicDemo,
      preview: "player",
      featured: true
    },
    {
      number: "02",
      title: "Tic-Tac-Toe",
      type: "Vanilla JavaScript / game interface",
      description: "A two-player JavaScript game split into board, game-controller, and display-controller modules, with win/tie detection, configurable starting player and timer, move history, settings, and session statistics.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: tictactoeGithub,
      liveUrl: tictactoeDemo,
      preview: "tic-tac-toe",
      featured: true
    },
    {
      number: "03",
      title: "Library",
      type: "Vanilla JavaScript / CRUD interface",
      description: "A reading-list CRUD interface for adding books through a validated modal form, toggling read status, removing entries, showing read/unread counts, and persisting the collection with localStorage.",
      technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
      githubUrl: libraryGithub,
      liveUrl: libraryDemo,
      preview: "library",
      featured: true
    }
  ],
  supporting: [
    {
      number: "04",
      title: "Calculator",
      type: "Vanilla JavaScript",
      description: "A browser calculator supporting arithmetic, decimals, percentages, square roots, sign changes, and chained calculations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: calculatorGithub,
      liveUrl: calculatorDemo,
      preview: "calculator"
    },
    {
      number: "05",
      title: "Etch-a-Sketch",
      type: "DOM interaction experiment",
      description: "A dynamically generated hover-drawing grid with solid and random color modes, reset behavior, and a prompt for choosing the number of cells.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: etchGithub,
      liveUrl: etchDemo,
      preview: "etch"
    },
    {
      number: "06",
      title: "Rock Paper Scissors",
      type: "Game logic / DOM updates",
      description: "A first-to-three game with randomized computer choices, score tracking, round feedback, Font Awesome hand icons, and a Canvas Confetti effect when the game ends.",
      technologies: ["HTML", "CSS", "JavaScript", "Font Awesome", "Canvas Confetti"],
      githubUrl: rockpaperscissorsGithub,
      liveUrl: rockpaperscissorsDemo,
      preview: "rps"
    }
  ]
};

const professionalProjects = [
  {
    title: "TOYOBO JAPAN",
    type: "Large-scale website revamp",
    description: "Contributed to the TOYOBO website revamp by producing more than 300 pages as part of the website production.",
    technologies: ["HTML", "CSS", "JavaScript", "CMS", "Figma", "Git"],
    contribution: "Developed pages using reusable frontend structures and templates while maintaining consistency across the large-scale website.",
    liveUrl: "https://www.toyobo.co.jp/sustainability/",
    featured: true
  },
  {
    title: "LINE FOR BUSINESS",
    type: "Landing page development",
    description: "Created a landing page as the sole developer, translating the Adobe XD design into a functional web page.",
    technologies: ["HTML", "CSS", "jQuery", "Adobe XD"],
    contribution: "Implemented interactive UI elements including sliders and accordions.",
    liveUrl: "https://www.lycbiz.com/jp/support/line-official-account/"
  },
  {
    title: "SANRIO JAPAN",
    type: "Responsive e-commerce landing page",
    description: "Created a responsive landing page for an e-commerce website based on the provided design requirements.",
    technologies: ["HTML", "CSS", "JavaScript", "Photoshop"],
    contribution: "Maintained communication with the client throughout the project and implemented the page based on the provided design requirements.",
    liveUrl: "https://www.sanrio.co.jp/"
  }
];

function previewMarkup(type) {
  const previews = {
    player: `<div class="mini-player"><div class="mini-cover"></div><div class="mini-lines"><span></span><span></span></div><div class="mini-progress"><i></i></div><div class="mini-controls"><b>‹</b><strong>▶</strong><b>›</b></div></div>`,
    "tic-tac-toe": `<div class="mini-game"><div class="mini-game-top"><span>X / O</span><span>01:00</span></div><div class="mini-board"><b>X</b><b></b><b>O</b><b></b><b>X</b><b></b><b>O</b><b></b><b>X</b></div><div class="mini-game-foot"><span>Player 1</span><span>Moves 05</span></div></div>`,
    library: `<div class="mini-library"><div class="mini-lib-top"><span>My Library</span><b>+ Add book</b></div><div class="mini-book-list"><div><i></i><span></span><em></em></div><div><i></i><span></span><em></em></div><div><i></i><span></span><em></em></div></div></div>`,
    calculator: `<div class="mini-calc"><div class="mini-calc-display">24<span>.</span>5</div><div class="mini-calc-grid"><b>AC</b><b>√x</b><b>%</b><b>/</b><b>7</b><b>8</b><b>9</b><b>+</b><b>4</b><b>5</b><b>6</b><b>-</b><b>1</b><b>2</b><b>3</b><b>=</b></div></div>`,
    etch: `<div class="mini-etch"><div class="mini-etch-head"><span>Drawing</span><b>Reset</b></div><div class="mini-etch-grid">${Array(25).fill("<i></i>").join("")}</div></div>`,
    rps: `<div class="mini-rps"><span class="mini-rps-title">ROCK / PAPER / SCISSORS</span><div class="mini-rps-score"><b>02</b><i>VS</i><b>01</b></div><div class="mini-rps-actions"><span>✊</span><span>✋</span><span>✌</span></div></div>`
  };
  return previews[type] || "";
}

function projectLinks(project) {
  return `<div class="project-links">
    <a class="button button-small button-dark" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    <a class="button button-small button-light" href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>
  </div>`;
}

function featuredMarkup(project) {
  return `<article class="project-card project-card-featured reveal">
    <div class="project-preview preview-${project.preview}">${previewMarkup(project.preview)}<span class="preview-label">Interactive preview</span></div>
    <div class="project-content">
      <div class="project-meta"><span>${project.number}</span><span>${project.type}</span></div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-list">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div>
      ${projectLinks(project)}
    </div>
  </article>`;
}

function supportingMarkup(project) {
  return `<article class="supporting-card reveal">
    <div class="supporting-top"><span class="project-index">${project.number}</span><span class="supporting-type">${project.type}</span></div>
    <div class="supporting-preview preview-${project.preview}">${previewMarkup(project.preview)}</div>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tech-list">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div>
    ${projectLinks(project)}
  </article>`;
}

function professionalMarkup(project) {
  return `<article class="professional-card ${project.featured ? "professional-card-lead" : ""} reveal">
    <div class="professional-visual" aria-hidden="true">
      <span class="professional-visual-label">Production project</span>
      <span class="professional-visual-mark">${project.featured ? "300+" : "WEB"}</span>
    </div>
    <div class="professional-content">
      <div class="project-meta"><span>${project.type}</span><span>Professional experience</span></div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="professional-detail">
        <h4>Technologies / tools</h4>
        <div class="tech-list">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div>
      </div>
      <div class="professional-detail">
        <h4>My contribution</h4>
        <p>${project.contribution}</p>
      </div>
      <div class="project-links">
        <a class="button button-small button-dark" href="${project.liveUrl}" target="_blank" rel="noreferrer">Visit website <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>`;
}

document.querySelector("#featured-projects").innerHTML = projects.featured.map(featuredMarkup).join("");
document.querySelector("#supporting-projects").innerHTML = projects.supporting.map(supportingMarkup).join("");
document.querySelector("#professional-projects").innerHTML = professionalProjects.map(professionalMarkup).join("");
document.querySelector("[data-current-year]").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
