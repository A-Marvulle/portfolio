import "@fortawesome/fontawesome-free/css/all.min.css";

const skills = [
  { icon: "fa-brands fa-js", name: "JavaScript", color: "#f7df1e" },
  { icon: "fa-brands fa-typescript", name: "TypeScript", color: "#3178C6" },
  { icon: "fa-brands fa-vuejs", name: "Vue / Nuxt", color: "#41B883" },
  // { icon: '', name: 'Nuxt' },
  { icon: "fa-brands fa-php", name: "PHP", color: "#474a8a" },
  { icon: "fa-brands fa-bootstrap", name: "Bootstrap", color: "#553C7B" },
  { icon: "fa-brands fa-tailwind-css", name: "Tailwind", color: "#06B6D4" },
  {
    icon: "fa-brands fa-postgresql",
    name: "MySql e Postgres",
    color: "#F29111",
  },
  { icon: "fa-brands fa-docker", name: "Docker", color: "#0db7ed" },
];

const projects = [
  {
    img: "tcc",
    inst: "IFSP",
    name: "TCC",
    link: "https://github.com/A-Marvulle/readnplay",
    stack: ["Flutter", "Dart", "FluterFlow", "Firebase"],
    desc: "Trabalho de Conclusão de Curso do IFSP. Esse projeto desenvolvido em grupo, teve como objetivo criar um aplicativo mobile que incentivasse em jovens o hábito de ler.",
  },
  {
    img: "doutores",
    inst: "Grupo Ideal Trends",
    name: "Teste Técnico",
    link: "https://a-marvulle.github.io/testegitanalista/",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Teste técnico aprovado para a empresa Doutores da Web do Grupo Ideal Trends. O teste consistia em replicar um mockup com um tema livre.",
  },
  {
    img: "pmt",
    inst: "Pinta Mundi Tintas Jaguaré",
    name: "Landing Page",
    link: "https://pintamunditintasjaguare.com.br/",
    stack: ["PHP", "Bootstrap", "MySql"],
    desc: "Landing Page criada para comércio familiar.",
  },
];

const work = [
  {
    img: "logo-moreno",
    name: "Moreno Advogados",
    description:
      "Manutenção do site (lowcode), suporte técnico aos colaboradores e alimentação do banco de dados interno.",
    ocupation: "Estágio",
    links: [
      {
        url: "http://morenoadvogados.com.br/",
        title: "Site",
      },
    ],
    skills: [
      "HTML",
      "CSS",
      "Excel",
      "Pacote Office",
      "Suporte a Sistemas",
      "Photoshop",
    ],
  },
  {
    img: "logo-morgan",
    name: "Instituto Morgan",
    description:
      "Suporte aos colaboradores, Social Media e apoio a equipe de Comunicação.",
    ocupation: "Técnico de Suporte Júnior",
    links: [
      {
        url: "https://www.instagram.com/institutomorgan/",
        title: "Instagram",
      },
    ],
    skills: [
      "Canva",
      "Meta Business",
      "Mídias Sociais",
      "Pacote Office",
      "Suporte a Sistemas",
    ],
  },
  {
    img: "logo-aceda",
    name: "ACEDA",
    description:
      "Criação de arte para mídias sociais e Desenvolvimento do Site com PHP e Bootstrap",
    ocupation: "Web Designer",
    links: [
      {
        url: "https://www.aceda.org.br/",
        title: "Site",
      },
      {
        url: "https://www.instagram.com/aceda.sampa/",
        title: "Instagram",
      },
    ],
    skills: ["Canva", "Design", "HTML", "CSS", "PHP", "Bootstrap", "Git"],
  },
  {
    img: "logo-ideal",
    name: "Grupo Ideal Trends",
    description:
      "Criação de sites com PHP, JavaScript e Bootstrap focados em SEO.",
    ocupation: "Analista de Front-End Junior",
    links: [
      {
        url: "https://idealtrends.com.br/",
        title: "Site Grupo",
      },
      {
        url: "https://www.doutoresdaweb.com.br/",
        title: "Site Doutores",
      },
    ],
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "PHP", "MySql", "Git"],
  },
  {
    img: "logo-phd",
    name: "PHD do Brasil",
    description: "Desenvolver interfaces de usuário utilizando Nuxt e Vue.js",
    ocupation: "Desenvolvedor Front-End",
    links: [
      {
        url: "https://phddobrasil.com.br/",
        title: "Site",
      },
    ],
    skills: ["JavaScript", "Vue", "Nuxt", "Nuxt UI", "Tailwind", "MVC", "Git"],
  },
];

const education = [
  {
    img: "logo-cps",
    name: "Etec Raposo",
    course: "Técnico de Informática Integrado ao Ensino Médio",
  },
  {
    img: "logo-ifsp",
    name: "IFSP Pirituba",
    course: "Tecnologia em Análise e Desenvolvimento de Sistemas",
  },
  {
    img: "logo-senac",
    name: "Senac",
    course: "Pós Graduação em Engenharia da Qualidade de Software",
  },
];

const personal_info = [
  {
    icon: "fab fa-github",
    link: "https://github.com/A-Marvulle",
    name: "Github",
  },
  {
    icon: "fa fa-envelope",
    link: "mailto:alfredo.marvulle@gmail.com",
    name: "alfredo.marvulle@gmail.com",
  },
  {
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/alfredoperesmarvulle-87920a1b7/",
    name: "LinkedIn",
  },
  {
    icon: "fab fa-whatsapp",
    link: "https://api.whatsapp.com/send/?phone=5511976007382&text=&type=phone_number&app_absent=0",
    name: "+55 11 9.7600-7382",
  },
];

const desktop = document.querySelector("desktop-manager");
const openWindows = new Map();
let topZ = 100;

const windowTitles = {
  work: "Experiências",
  school: "Formação",
  projects: "Projetos",
  contact: "Contato",
};

function renderContent(id) {
  switch (id) {
    case "work":
      return work
        .map(
          (w) => `
        <div style="margin-bottom:16px;border-bottom:1px solid #eee;padding-bottom:12px">
          <strong>${w.name}</strong> — <em>${w.ocupation}</em>
          <p style="margin:4px 0;font-size:13px">${w.description}</p>
          <div style="font-size:12px;color:#555">${w.skills.join(" · ")}</div>
          <div style="margin-top:4px">${w.links.map((l) => `<a href="${l.url}" target="_blank" style="font-size:12px;margin-right:8px;color:#45567d">${l.title}</a>`).join("")}</div>
        </div>`,
        )
        .join("");

    case "school":
      return education
        .map(
          (e) => `
        <div style="margin-bottom:12px">
          <strong>${e.name}</strong>
          <p style="font-size:13px;margin:2px 0;color:#444">${e.course}</p>
        </div>`,
        )
        .join("");

    case "projects":
      return projects
        .map(
          (p) => `
        <div style="margin-bottom:16px;border-bottom:1px solid #eee;padding-bottom:12px">
          <strong><a href="${p.link}" target="_blank" style="color:#45567d">${p.name}</a></strong>
          <span style="font-size:12px;color:#777;margin-left:6px">${p.inst}</span>
          <p style="font-size:13px;margin:4px 0">${p.desc}</p>
          <div style="font-size:12px;color:#555">${p.stack.join(" · ")}</div>
        </div>`,
        )
        .join("");

    case "contact":
      return personal_info
        .map(
          (c) => `
        <div style="margin-bottom:10px">
          <i class="${c.icon}" style="width:20px"></i>
          <a href="${c.link}" target="_blank" style="color:#45567d;font-size:14px;margin-left:6px">${c.name}</a>
        </div>`,
        )
        .join("");

    default:
      return "";
  }
}

function bringToFront(id) {
  const el = openWindows.get(id);
  if (!el) return;
  topZ++;
  el.style.zIndex = topZ;
  updateActiveButton(id);
}

function updateActiveButton(id) {
  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.modal === id);
  });
}

function closeWindow(id) {
  const el = openWindows.get(id);
  if (!el) return;

  el.remove();
  openWindows.delete(id);

  if (openWindows.size === 0) {
    updateActiveButton(null);
    return;
  }

  let topWindow = null;
  let highestZ = -1;

  openWindows.forEach((win, key) => {
    const z = parseInt(win.style.zIndex);
    if (z > highestZ) {
      highestZ = z;
      topWindow = key;
    }
  });

  updateActiveButton(topWindow);
}
function makeDraggable(win, titlebar) {
  let dragging = false;
  let startX, startY, startLeft, startTop;

  titlebar.addEventListener("mousedown", (e) => {
    if (e.target.tagName === "BUTTON") return;
    const rect = win.getBoundingClientRect();
    win.style.width = rect.width + "px";
    win.style.height = rect.height + "px";
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(win.style.left) || 0;
    startTop = parseInt(win.style.top) || 0;
    bringToFront(win.dataset.windowId);
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const bounds = desktop.getBoundingClientRect();
    const maxLeft = bounds.width - win.offsetWidth;
    const maxTop = bounds.height - win.offsetHeight;
    const newLeft = Math.max(
      0,
      Math.min(maxLeft, startLeft + (e.clientX - startX)),
    );
    const newTop = Math.max(
      0,
      Math.min(maxTop, startTop + (e.clientY - startY)),
    );
    win.style.left = newLeft + "px";
    win.style.top = newTop + "px";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });
}

function createWindow(id) {
  topZ++;

  const win = document.createElement("div");
  win.className = "window";
  win.dataset.windowId = id;
  win.style.left = "5px";
  win.style.top = "5px";
  win.style.width = "95%";
  win.style.height = "95%";
  win.style.zIndex = topZ;

  const titlebar = document.createElement("div");
  titlebar.className = "window-titlebar";
  titlebar.innerHTML = `<span>${windowTitles[id] ?? id}</span><button title="Fechar">✕</button>`;

  const content = document.createElement("div");
  content.className = "window-content";
  content.innerHTML = renderContent(id);

  titlebar
    .querySelector("button")
    .addEventListener("click", () => closeWindow(id));

  win.appendChild(titlebar);
  win.appendChild(content);

  win.addEventListener("mousedown", () => bringToFront(id));

  makeDraggable(win, titlebar);

  desktop.appendChild(win);
  openWindows.set(id, win);

  updateActiveButton(id);
}

function toggleWindow(id) {
  if (openWindows.has(id)) {
    bringToFront(id);
  } else {
    createWindow(id);
  }
}

document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => toggleWindow(btn.dataset.modal));
});
