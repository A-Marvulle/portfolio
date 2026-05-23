import '@fortawesome/fontawesome-free/css/all.min.css';
const skills = [
    { icon: 'fa-brands fa-js', name: 'JavaScript', color: '#f7df1e' },
    { icon: 'fa-brands fa-typescript', name: 'TypeScript', color: '#3178C6' },
    { icon: 'fa-brands fa-vuejs', name: 'Vue / Nuxt', color: '#41B883' },
    // { icon: '', name: 'Nuxt' },
    { icon: 'fa-brands fa-php', name: 'PHP', color: '#474a8a' },
    { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap', color: '#553C7B' },
    { icon: 'fa-brands fa-tailwind-css', name: 'Tailwind', color: '#06B6D4' },
    { icon: 'fa-brands fa-postgresql', name: 'MySql e Postgres', color: '#F29111' },
    { icon: 'fa-brands fa-docker', name: 'Docker', color: '#0db7ed' },
];

const projects = [
    {
        img: 'tcc',
        inst: 'IFSP',
        name: 'TCC',
        link: 'https://github.com/A-Marvulle/readnplay',
        stack: [
            'Flutter',
            'Dart',
            'FluterFlow',
            'Firebase'
        ],
        desc: 'Trabalho de Conclusão de Curso do IFSP. Esse projeto desenvolvido em grupo, teve como objetivo criar um aplicativo mobile que incentivasse em jovens o hábito de ler.'
    },
    {
        img: 'doutores',
        inst: 'Grupo Ideal Trends',
        name: 'Teste Técnico',
        link: 'https://a-marvulle.github.io/testegitanalista/',
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        desc: 'Teste técnico aprovado para a empresa Doutores da Web do Grupo Ideal Trends. O teste consistia em replicar um mockup com um tema livre.'
    },
    {
        img: 'pmt',
        inst: 'Pinta Mundi Tintas Jaguaré',
        name: 'Landing Page',
        link: 'https://pintamunditintasjaguare.com.br/',
        stack: [
            'PHP',
            'Bootstrap',
            'MySql'
        ],
        desc: 'Landing Page criada para comércio familiar.'
    },
];

const work = [
    {
        img: 'logo-moreno',
        name: 'Moreno Advogados',
        description: 'Manutenção do site (lowcode), suporte técnico aos colaboradores e alimentação do banco de dados interno.',
        ocupation: 'Estágio',
        links: [
            { 
                url: 'http://morenoadvogados.com.br/', 
                title: 'Site' 
            }
        ], 
        skills: [
            'HTML',
            'CSS',
            'Excel',
            'Pacote Office',
            'Suporte a Sistemas',
            'Photoshop'
        ]
    },
    {
        img: 'logo-morgan',
        name: 'Instituto Morgan',
        description: 'Suporte aos colaboradores, Social Media e apoio a equipe de Comunicação.', ocupation: 'Técnico de Suporte Júnior', 
        links: [
            { 
                url: 'https://www.instagram.com/institutomorgan/', 
                title: 'Instagram' 
            }
        ], 
        skills: [
            'Canva',
            'Meta Business',
            'Mídias Sociais',
            'Pacote Office',
            'Suporte a Sistemas'
        ]
    },
    {
        img: 'logo-aceda',
        name: 'ACEDA',
        description: 'Criação de arte para mídias sociais e Desenvolvimento do Site com PHP e Bootstrap',
        ocupation: 'Web Designer',
        links: [
            { 
                url: 'https://www.aceda.org.br/', 
                title: 'Site' 
            },
            { 
                url: 'https://www.instagram.com/aceda.sampa/', 
                title: 'Instagram' 
            }
        ], 
        skills: [
            'Canva',
            'Design',
            'HTML',
            'CSS',
            'PHP',
            'Bootstrap',
            'Git'
        ] 
    },
    {
        img: 'logo-ideal',
        name: 'Grupo Ideal Trends',
        description: 'Criação de sites com PHP, JavaScript e Bootstrap focados em SEO.',
        ocupation: 'Analista de Front-End Junior', 
        links: [
            {
                url: 'https://idealtrends.com.br/', 
                title: 'Site Grupo'
            },
            {
                url: 'https://www.doutoresdaweb.com.br/', 
                title: 'Site Doutores'
            }
        ],
        skills: [
            'HTML',
            'CSS',
            'Javascript',
            'Bootstrap',
            'PHP',
            'MySql',
            'Git'] 
    },
    { 
        img: 'logo-phd',
        name: 'PHD do Brasil',
        description: 'Desenvolver interfaces de usuário utilizando Nuxt e Vue.js',
        ocupation: 'Desenvolvedor Front-End', 
        links: [
            {
                url: 'https://phddobrasil.com.br/',
                title: 'Site'
            }
        ],
        skills: [
            'JavaScript',
            'Vue',
            'Nuxt',
            'Nuxt UI',
            'Tailwind',
            'MVC',
            'Git'
        ]
    },
];

const education = [
    { 
        img: 'logo-cps',
        name: 'Etec Raposo',
        course: 'Técnico de Informática Integrado ao Ensino Médio'
    },
    {
        img: 'logo-ifsp',
        name: 'IFSP Pirituba',
        course: 'Tecnologia em Análise e Desenvolvimento de Sistemas' 
    },
    { 
        img: 'logo-senac',
        name: 'Senac',
        course: 'Pós Graduação em Engenharia da Qualidade de Software'
    },
];

const personal_info = [
    { icon: 'fab fa-github', link: 'https://github.com/A-Marvulle', name: 'Github' },
    { icon: 'fa fa-envelope', link: 'mailto:alfredo.marvulle@gmail.com', name: 'alfredo.marvulle@gmail.com' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/alfredoperesmarvulle-87920a1b7/', name: 'LinkedIn' },
    { icon: 'fab fa-whatsapp', link: 'https://api.whatsapp.com/send/?phone=5511976007382&text=&type=phone_number&app_absent=0', name: '+55 11 9.7600-7382' },
];

class BaseComponent {
    constructor(data) {
        this.data = data;
    }

    createCard(elementClassName = 'card') {
        const card = document.createElement('div');
        card.className = elementClassName;
        return card;
    }

    createContent(elementClassName = 'card__content') {
        const content = document.createElement('div');
        content.className = elementClassName;
        return content;
    }

    renderItem(item) {
        throw new Error('renderItem precisa ser implementado');
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        this.data.forEach(item => {
            const element = this.renderItem(item);
            container.appendChild(element);
        });
    }
}

class SkillsComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard('card__skills');
        const content = this.createContent();

        content.innerHTML = `
            <div class="relative z-1 overflow-hidden w-[60%] bg-opacity-50 flex gap-3 items-center justify-start p-3 rounded-2xl" style="--item-color: ${item.color}">
              <i class="${item.icon} text-[40px]" style="color: ${item.color}"></i>
              <h3>${item.name}</h3>
            </div>
        `;

        card.appendChild(content);
        return card;
    }
}

class ProjectComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard('card__project transition duration-300 ease-in-out hover:outline-2 hover:outline-offset-2 hover:outline-[#9e2a3e] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#9e2a3e]');
        const content = this.createContent('card__content h-full p-6');
        const stackHTML = item.stack.map(tech => `<span class="badge">${tech}</span>`).join('');

        content.innerHTML = `
              <a class="flex flex-col gap-3 h-full items-center lg:items-start focus:outline-none" href="${item.link}" title="${item.name}" target="_blank" rel="noopener noreferrer">
                <div class="card__project-img">
                  <img class="aspect-1/1 object-cover" src="./src/assets/projects/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" />
                </div>
                <div class="card__project-info flex flex-col justify-around h-full">
                  <h2 class="text-3xl text-[#9e1a3e] font-bold">${item.name}</h2>
                    <p>${item.inst}</p>
                    <p>${item.desc}</p>
                  <div class="stack flex flex-wrap gap-5 mt-6 justify-center lg:justify-start">
                    ${stackHTML}
                  </div>
                </div>
               </a>
              <span class="icon-hover absolute right-0 top-0 me-6 mt-6"><i class="fa-solid fa-code fa-2xl text-[#9e2a3e]"></i></span>
        `;

        card.appendChild(content);
        return card;
    }
}

class WorkComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard('card__work');
        const content = this.createContent('card__content h-full p-6');
        const skillsHTML = item.skills.map(tech => `<span class="badge bg-[#303841]">${tech}</span>`).join('');
        const linksHTML = item.links.map(link => `<a class="button button__link" target="_blank" rel="noopener noreferrer" href="${link.url}" title="${link.title}">${link.title}</a>`).join('');

        content.innerHTML = `
            <div class="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <div class="w-30 min-w-30 h-30">
                    <img class="w-full h-full rounded-2xl aspect-square object-cover" src="./src/assets/work/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" width="150" height="150" />
                </div>
              <div>
                <h2 class="my-4 text-[24px] font-bold">${item.name} <span class="block font-light text-lg italic">${item.ocupation}</span> </h2>
                <p>${item.description}</p>
              </div>
            </div>
            <div class="stack flex flex-wrap gap-5 mt-6 justify-center lg:justify-start">
                ${linksHTML}
            </div>
            <div class="stack flex flex-wrap gap-5 mt-6 justify-center lg:justify-start">
              ${skillsHTML}
            </div>
        `;

        card.appendChild(content);
        return card;
    }
}

class EducationComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard('card__education w-150 mx-auto border-y-1 border-[#333] my-8 p-3');
        const content = this.createContent();

        content.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="bg-white rounded-full">
                    <img src="./src/assets/education/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" width="150" height="150" />
                </div>
                <div>
                    <h2 class="text-bold text-xl">${item.name}</h2>
                    <p>${item.course}</p>
                </div>
            </div>
        `;

        card.appendChild(content);
        return card;
    }
}

class PersonalInfoComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard();
        const content = this.createContent();

        content.innerHTML = `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer">
                <i class="${item.icon}" aria-hidden="true"></i> ${item.name}
            </a>
        `;

        card.appendChild(content);
        return card;
    }
}

function initializeComponent(classComponent, data, renderId) {
    const info = new classComponent(data);
    info.render(renderId);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeComponent(SkillsComponent, skills, 'skills');
    initializeComponent(ProjectComponent, projects, 'projects');
    initializeComponent(WorkComponent, work, 'work');
    initializeComponent(EducationComponent, education, 'education');
    initializeComponent(PersonalInfoComponent, personal_info, 'infoId');
});
