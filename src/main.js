import '@fortawesome/fontawesome-free/css/all.min.css'

const projects = [
    {
        img: 'tcc',
        inst: 'IFSP',
        name: 'TCC',
        link: 'https://github.com/A-Marvulle/readnplay',
        stack: ['Flutter', 'Dart', 'FluterFlow', 'Firebase'],
        desc: 'Trabalho de Conclusão de Curso do IFSP. Esse projeto desenvolvido em grupo, teve como objetivo criar um aplicativo mobile que incentivasse em jovens o hábito de ler.',
    },
    {
        img: 'doutores',
        inst: 'Grupo Ideal Trends',
        name: 'Teste Técnico',
        link: 'https://a-marvulle.github.io/testegitanalista/',
        stack: ['HTML', 'CSS', 'JavaScript'],
        desc: 'Teste técnico aprovado para a empresa Doutores da Web do Grupo Ideal Trends. O teste consistia em replicar um mockup com um tema livre.',
    },
    {
        img: 'pmt',
        inst: 'Pinta Mundi Tintas Jaguaré',
        name: 'Landing Page',
        link: 'https://pintamunditintasjaguare.com.br/',
        stack: ['PHP', 'Bootstrap', 'MySql'],
        desc: 'Landing Page criada para comércio familiar.',
    },
]

const work = [
    {
        img: 'logo-phd',
        name: 'PHD do Brasil',
        description: 'Desenvolver interfaces de usuário utilizando Nuxt e Vue.js',
        ocupation: 'Desenvolvedor Front-End',
        links: [
            {
                url: 'https://phddobrasil.com.br/',
                title: 'Site',
            },
        ],
        skills: ['JavaScript', 'Vue', 'Nuxt', 'Nuxt UI', 'Tailwind', 'MVC', 'Git'],
    },
    {
        img: 'logo-ideal',
        name: 'Grupo Ideal Trends',
        description: 'Criação de sites com PHP, JavaScript e Bootstrap focados em SEO.',
        ocupation: 'Analista de Front-End Junior',
        links: [
            {
                url: 'https://idealtrends.com.br/',
                title: 'Site Grupo',
            },
            {
                url: 'https://www.doutoresdaweb.com.br/',
                title: 'Site Doutores',
            },
        ],
        skills: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'PHP', 'MySql', 'Git'],
    },
    {
        img: 'logo-aceda',
        name: 'ACEDA',
        description: 'Criação de arte para mídias sociais e Desenvolvimento do Site com PHP e Bootstrap',
        ocupation: 'Web Designer',
        links: [
            {
                url: 'https://www.aceda.org.br/',
                title: 'Site',
            },
            {
                url: 'https://www.instagram.com/aceda.sampa/',
                title: 'Instagram',
            },
        ],
        skills: ['Canva', 'Design', 'HTML', 'CSS', 'PHP', 'Bootstrap', 'Git'],
    },
    {
        img: 'logo-morgan',
        name: 'Instituto Morgan',
        description: 'Suporte aos colaboradores, Social Media e apoio a equipe de Comunicação.',
        ocupation: 'Técnico de Suporte Júnior',
        links: [
            {
                url: 'https://www.instagram.com/institutomorgan/',
                title: 'Instagram',
            },
        ],
        skills: ['Canva', 'Meta Business', 'Mídias Sociais', 'Pacote Office', 'Suporte a Sistemas'],
    },
    {
        img: 'logo-moreno',
        name: 'Moreno Advogados',
        description: 'Manutenção do site (lowcode), suporte técnico aos colaboradores e alimentação do banco de dados interno.',
        ocupation: 'Estágio',
        links: [
            {
                url: 'http://morenoadvogados.com.br/',
                title: 'Site',
            },
        ],
        skills: ['HTML', 'CSS', 'Excel', 'Pacote Office', 'Suporte a Sistemas', 'Photoshop'],
    },
]

const education = [
    {
        img: 'logo-senac',
        name: 'Senac',
        course: 'Pós Graduação em Engenharia da Qualidade de Software',
    },
    {
        img: 'logo-ifsp',
        name: 'IFSP Pirituba',
        course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    },
    {
        img: 'logo-cps',
        name: 'Etec Raposo',
        course: 'Técnico de Informática Integrado ao Ensino Médio',
    },
]
const personal_info = [
    {
        icon: 'fab fa-github',
        link: 'https://github.com/A-Marvulle',
        name: 'Github',
    },
    {
        icon: 'fa fa-envelope',
        link: 'mailto:alfredo.marvulle@gmail.com',
        name: 'alfredo.marvulle@gmail.com',
    },
    {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/alfredoperesmarvulle-87920a1b7/',
        name: 'LinkedIn',
    },
    {
        icon: 'fab fa-whatsapp',
        link: 'https://api.whatsapp.com/send/?phone=5511976007382&text=&type=phone_number&app_absent=0',
        name: '+55 11 9.7600-7382',
    },
]

const desktop = document.querySelector('desktop-manager')
const openWindows = new Map()
let topZ = 100

const windowTitles = {
    work: 'Experiências',
    school: 'Formação',
    projects: 'Projetos',
    contact: 'Contato',
}

function renderContent(id) {
    switch (id) {
        case 'work':
            return work
                .map(
                    (w) => `
        <div class="content">
          <img src="${import.meta.env.BASE_URL}images/work/${w.img}.png" alt="${w.name}" title="${w.name}" />
          <div class="content__info">
            <h3>${w.name} <span>${w.ocupation}</span></h3>
            <p>${w.description}</p>
            <div class="content__skills">${w.skills.map((s) => `<span>${s}</span>`).join('')}</div>
            <div class="content__links">${w.links
                .map((l) => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" title="${l.title}">${l.title}</a>`)
                .join('')}
            </div>
          </div>
        </div>`
                )
                .join('')

        case 'school':
            return education
                .map(
                    (e) => `
        <div class="content">
          <img src="${import.meta.env.BASE_URL}images/education/${e.img}.png" alt="${e.name}" title="${e.name}" />
          <div class="content__info">
            <h3>${e.name}</h3>
            <p>${e.course}</p>
          </div>
        </div>`
                )
                .join('')

        case 'projects':
            return projects
                .map(
                    (p) => `
        <div class="content">
          <img src="${import.meta.env.BASE_URL}images/projects/${p.img}.png" alt="${p.name}" title="${p.name}" />
          <div class="content__info">
            <h3><a class="project__link" href="${p.link}" target="_blank" rel="noopener noreferrer" title="${p.name}">${p.name}</a></h3>
            <p>${p.desc}</p>
            <div class="content__skills">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
          </div>
        </div>`
                )
                .join('')

        case 'contact':
            return personal_info
                .map(
                    (c) => `
        <div class="content__contact">
          <i class="${c.icon}"></i>
          <a href="${c.link}" target="_blank" rel="noopener noreferrer" title="${c.name}">${c.name}</a>
        </div>`
                )
                .join('')

        default:
            return ''
    }
}

function bringToFront(id) {
    const window = openWindows.get(id)
    if (!window) return
    topZ++
    window.style.zIndex = topZ
    updateActiveButton(id)
}

function updateActiveButton(id) {
    document.querySelectorAll('[data-modal]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.modal === id)
    })
}

function closeWindow(id) {
    const win = openWindows.get(id)
    if (!win) return

    openWindows.delete(id)

    win.classList.add('window-closing')
    win.addEventListener('animationend', () => win.remove(), { once: true })

    if (openWindows.size === 0) {
        updateActiveButton(null)
        return
    }

    let topWindow = null
    let highestZ = -1

    openWindows.forEach((w, key) => {
        const z = parseInt(w.style.zIndex)
        if (z > highestZ) {
            highestZ = z
            topWindow = key
        }
    })

    updateActiveButton(topWindow)
}

function resizeWindow(id) {
    const window = openWindows.get(id)
    if (!window) return

    if (window.dataset.maximized === 'true') {
        window.style.width = '50%'
        window.style.height = '50%'
        window.style.left = '5px'
        window.style.top = '5px'

        window.dataset.maximized = 'false'
    } else {
        window.style.width = '100%'
        window.style.height = '100%'
        window.style.left = '0'
        window.style.top = '0'

        window.dataset.maximized = 'true'
    }
}

function makeDraggable(window, titlebar) {
    let dragging = false
    let startX, startY, startLeft, startTop

    titlebar.addEventListener('mousedown', (element) => {
        if (element.target.tagName === 'BUTTON') return
        const rect = window.getBoundingClientRect()
        window.style.width = rect.width + 'px'
        window.style.height = rect.height + 'px'
        dragging = true
        window.classList.add('window-dragging')
        startX = element.clientX
        startY = element.clientY
        startLeft = parseInt(window.style.left) || 0
        startTop = parseInt(window.style.top) || 0
        bringToFront(window.dataset.windowId)
        element.preventDefault()
    })

    document.addEventListener('mousemove', (element) => {
        if (!dragging) return
        const bounds = desktop.getBoundingClientRect()
        const maxLeft = bounds.width - window.offsetWidth
        const maxTop = bounds.height - window.offsetHeight
        const newLeft = Math.max(0, Math.min(maxLeft, startLeft + (element.clientX - startX)))
        const newTop = Math.max(0, Math.min(maxTop, startTop + (element.clientY - startY)))
        window.style.left = newLeft + 'px'
        window.style.top = newTop + 'px'
    })

    document.addEventListener('mouseup', () => {
        if (dragging) window.classList.remove('window-dragging')
        dragging = false
    })
}

function createWindow(id) {
    topZ++

    const window = document.createElement('div')
    window.className = 'window'
    window.dataset.windowId = id
    window.style.left = '0'
    window.style.top = '0'
    window.style.width = '100%'
    window.style.height = '100%'
    window.style.zIndex = topZ
    window.dataset.maximized = 'true'

    const titlebar = document.createElement('div')
    titlebar.className = 'window-titlebar'
    titlebar.innerHTML = `
    <h2>${windowTitles[id] ?? id}</h2>
    <div class="window-titlebar-buttons">
     <button id="resize" title="Restaurar Tamanho"><i class="fa-regular fa-square"></i></button>
     <button id="close" title="Fechar"><i class="fa-solid fa-xmark"></i></button>
    </div>
    `

    const content = document.createElement('div')
    content.className = 'window-content'
    content.innerHTML = renderContent(id)

    titlebar.querySelector('#resize').addEventListener('click', () => resizeWindow(id))

    titlebar.querySelector('#close').addEventListener('click', () => closeWindow(id))

    window.appendChild(titlebar)
    window.appendChild(content)

    window.addEventListener('mousedown', () => bringToFront(id))

    makeDraggable(window, titlebar)

    desktop.appendChild(window)
    window.classList.add('window-opening')
    openWindows.set(id, window)

    updateActiveButton(id)
}

function toggleWindow(id) {
    if (openWindows.has(id)) {
        bringToFront(id)
    } else {
        createWindow(id)
    }
}

document.querySelectorAll('[data-modal]').forEach((btn) => {
    btn.addEventListener('click', () => toggleWindow(btn.dataset.modal))
})
