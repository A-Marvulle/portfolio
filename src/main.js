const skills = [
    { img: 'logo-js', name: 'JavaScript' },
    { img: 'logo-ts', name: 'TypeScript' },
    { img: 'logo-vue', name: 'Vue' },
    { img: 'logo-nuxt', name: 'Nuxt' },
    { img: 'logo-php', name: 'PHP' },
    { img: 'logo-bootstrap', name: 'Bootstrap' },
    { img: 'logo-tailwind', name: 'Tailwind' },
    { img: 'logo-sql', name: 'MySql' },
];

const projects = [
    { img: 'tcc', inst: 'IFSP', name: 'TCC', link: 'https://github.com/A-Marvulle/readnplay', stack: ['Flutter', 'Dart', 'FluterFlow', 'Firebase'], desc: 'Trabalho de conclusão de curso do IFSP' },
    { img: 'doutores', inst: 'Grupo Ideal Trends', name: 'Teste Técnico', link: 'https://a-marvulle.github.io/testegitanalista/', stack: ['HTML', 'CSS', 'JavaScript'], desc: 'Teste técnico aprovado' },
    { img: 'pmt', inst: 'Pinta Mundi Tintas Jaguaré', name: 'Landing Page', link: 'https://pintamunditintasjaguare.com.br/', stack: ['PHP', 'Bootstrap', 'MySql'], desc: 'Landing Page criada para comércio familiar' },
];

const work = [
    { img: 'logo-moreno', name: 'Moreno Advogados', description: 'Manutenção do site (lowcode), suporte técnico aos colaboradores e alimentação do banco de dados interno.', ocupation: 'Estágio', links: 'http://morenoadvogados.com.br/' },
    { img: 'logo-morgan', name: 'Instituto Morgan', description: 'Suporte aos colaboradores, Social Media e apoio a equipe de Comunicação.', ocupation: 'Técnico de Suporte Júnior', links: 'https://www.instagram.com/institutomorgan/' },
    { img: 'logo-aceda', name: 'ACEDA', description: 'Criação de arte para mídias sociais e Desenvolvimento do Site com PHP e Bootstrap', ocupation: 'Web Designer', links: ['https://www.aceda.org.br/', 'https://www.instagram.com/aceda.sampa/', 'recomendação'] },
    { img: 'logo-ideal', name: 'Grupo Ideal Trends', description: 'Criação de sites com PHP, JavaScript e Bootstrap focados em SEO.', ocupation: 'Analista de Front-End Junior', links: ['https://idealtrends.com.br/', 'https://www.doutoresdaweb.com.br/'] },
    { img: 'logo-phd', name: 'PHD do Brasil', description: 'Desenvolver interfaces de usuário utilizando Nuxt e Vue.js', ocupation: 'Desenvolvedor Front-End', links: 'https://phddobrasil.com.br/' },
];

const education = [
    { img: 'logo-cps', name: 'Etec Raposo', course: 'Técnico de Informática Integrado ao Ensino Médio' },
    { img: 'logo-ifsp', name: 'IFSP Pirituba', course: 'Tecnologia em Análise e Desenvolvimento de Sistemas' },
    { img: 'logo-senac', name: 'Senac', course: 'Pós Graduação em Engenharia da Qualidade de Software' },
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
        const card = this.createCard();
        const content = this.createContent();

        content.innerHTML = `
            <div>
                <img src="./src/assets/skills/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" width="150" height="150" />
                ${item.name}
            </div>
        `;

        card.appendChild(content);
        return card;
    }
}

class ProjectComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard();
        const content = this.createContent();
        const stackHTML = item.stack.map(tech => `<span class="badge">${tech}</span>`).join('');

        content.innerHTML = `
            <div>
                <a href="${item.link}" title="${item.name}" target="_blank" rel="noopener noreferrer">
                    <img src="./src/assets/projects/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" />
                    <h2>${item.name}</h2>
                    <p>${item.inst}</p>
                    <p>${item.desc}</p>
                    <div class="stack">${stackHTML}</div>
                </a>
            </div>
        `;

        card.appendChild(content);
        return card;
    }
}

class WorkComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard();
        const content = this.createContent();

        content.innerHTML = `
            <div>
                <img src="./src/assets/work/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" width="150" height="150" />
                ${item.name}
            </div>
        `;

        card.appendChild(content);
        return card;
    }
}

class EducationComponent extends BaseComponent {
    renderItem(item) {
        const card = this.createCard();
        const content = this.createContent();

        content.innerHTML = `
            <div>
                <img src="./src/assets/education/${item.img}.png" title="Logo ${item.name}" alt="Logo ${item.name}" width="150" height="150" />
                <h2>${item.name}</h2>
                <p>${item.course}</p>
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