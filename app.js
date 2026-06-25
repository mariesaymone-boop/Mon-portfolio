// ==================== DONNÉES STATIQUES ====================
const projects = [
    {
        title: "Carte du trafic routier de quelques carrefours de la ville de Thiès",
        description: "Visualisation du niveau de trafic routier dans la ville de Thiès.",
        technologies: ["QGIS", "Excel", "KOBOTOOLBOX"],
        iconClass: "fa-solid fa-map-location-dot",
        link: "Rapport Sur le trafic routier de la ville de Thiès Groupe 4.pdf",
        category: "analyse"
    },
    {
        title: "Qualité de l’air, bruit et microclimat à Thiès (2025)",
        description: "  Les causes de certains phénomènes spatiaux contatés dans ces localités.",
        technologies: ["RStudio", "Excel"],
        iconClass: "fa-solid fa-cloud-sun-rain",
        link: "rapport-analyse-3.pdf",
        category: "analyse"
    },
     {
        title: "Cercle de correlation",
        description: " Le cercle de corrélation met en évidence le niveau de corrélation entre ces variables avec les deux dimensions représentant des axes principaux qui résument la variation observée dans les données.",
        technologies: ["RStudio"],
        iconClass: "fa-solid fa-chart-line",
        link: "Cercle de correlation.png",
        category: "analyse"
    },
     {
        title: "Diagramme triangulaire",
        description: " Le diagramme triangulaire met en évidence la relation  entre trois variables .",
        technologies: ["Philcarto"],
        iconClass: "fa-solid fa-chart-pie",
        link: "Diagramme triangulaire.png",
        category: "analyse"
    },
    {
        title: "Mon Curriculum Vitae(CV)",
        description: "Ce portfolio que vous visitez actuellement, conçu en pur HTML/CSS.",
        technologies: ["HTML", "CSS"],
        iconClass:  "fa-solid fa-file-alt",
        link: "CV.html",
        category: "web"
    },
    {
        title: "Mes differentes cartes",
        description: "Chaque carte  est faites à base de données fiables , et aboutir à des résultats concrets.",
        technologies: ["QGIS"],
        iconClass: "fa-solid fa-map",
        link: "carte.html",
        category: "carte"
    },
];
function renderProjects(filter = "all") {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    const projectsData = currentLang === 'fr' ? projects : projects_en;
    const filteredProjects = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);

    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">
                    <i class="${project.iconClass}"></i>
                </div>
                <h3>${project.title}</h3>
            </div>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">
                ${currentLang === 'fr' ? 'Voir le projet' : 'See project'} <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}
const skills = [
    { name: "QGIS", level: 50, icon: "img" ,},
    { name: "ArcGIS", level: 40, icon: "fas fa-globe" },
    { name: "RStudio", level: 75, icon: "fab fa-r-project" },
    { name: "AutoCAD", level: 40, icon: "fas fa-drafting-compass" },
    { name: "XAMPP", level: 90, icon: "fas fa-database" },
    { name: "PyCharm", level: 70, icon: "fab fa-python" }, // ici on utilise l'icône Python (fa-python)
    { name: "Python", level: 75, icon: "fab fa-python" },
    { name: "Philcarto", level: 65, icon: "fas fa-chart-line" }
];
function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <span>Niveau : ${skill.level}%</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${skill.level}%; background: ${skillColors[skill.name] || 'var(--primary)'};"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Couleurs principales des logiciels
const skillColors = {
    "QGIS": "#589632",      // vert QGIS
    "ArcGIS": "#2C7A4D",    // vert ArcGIS
    "RStudio": "#75AADB",   // bleu clair RStudio
    "AutoCAD": "#C66D33",   // orange AutoCAD
    "XAMPP": "#FB7A24",     // orange XAMPP
    "PyCharm": "#21D789",   // vert PyCharm
    "Python": "#3776AB",    // bleu Python
    "Philcarto": "#FDB913"  // jaune Philcarto (couleur approximative)
};
 // ==================== DONNÉES FORMATIONS ====================
        const formations = [
           
            {
                title: "Baccalauréat Scientifique",
                institution: "Lycée EL Hadji Tafsir DIOUF, Bargny",
                date: "2024",
                shortDesc: "Formation générale scientifique en série S2 (mathématiques, physique-chimie, sciences de la vie et de la terre).",
                fullDesc: "Le baccalauréat série S2 a permis d'acquérir une solide culture scientifique, avec un enseignement approfondi en mathématiques, physique, chimie et SVT. Ce cursus a développé la rigueur, la logique et la capacité d'analyse nécessaires pour les études supérieures en géomatique."
            },
             {
                title: "Licence en Géomatique",
                institution: "Université Iba Der Thiam de Thiès",
                date: "2024 - 2027",
                shortDesc: "Formation en analyse spatiale, systèmes d'information géographique (SIG), télédétection, cartographie numérique , programmation (Python) et informatique.",
                fullDesc: "Cette licence forme des spécialistes capables de collecter, analyser et visualiser des données géographiques. Les enseignements incluent :\n• SIG (QGIS, ArcGIS)\n• Télédétection\n• Programmation pour la géomatique\n• Analyse spatiale et statistique\n• cartographie."
            },
           
        ];
        // ==================== DONNÉES EXPÉRIENCES ====================
const experiences = [
    {
        title: "Méthode de collecte",
       
        date: "2025 -  2026",
        shortDesc: "Réalisation de cartes thématiques sous QGIS et participation à la mise à jour du SIG.",
        fullDesc: "Création de cartes de flux, analyse de données de trafic routier à Thiès ,  et rédaction d’un rapport technique."
    },
    {
        title: "Assistante SIG (projet universitaire)",
      
        date: " 2025 -  2025",
        shortDesc: "Aide à la collecte de données .",
        fullDesc: "Participation à un projet de recherche sur la qualité de l’air : collecte de points GPS, traitement de données avec RStudio."
    },
     {
        title: " Développement web",
        institution: "formation & Projets personnels",
        date: "2026",
        shortDesc: "Apprentissage du HTML, CSS, JavaScript, et des frameworks modernes pour créer des applications web interactives.",
        fullDesc: "En parallèle de la licence, grace aux  tutoriels en ligne et le cours j'ai pu réalisé des projets (portfolio, developpement d'application) pour maîtriser le développement front‑end. Compétences acquises : HTML/CSS , JavaScript ."
    }
];

        // ==================== RENDU DYNAMIQUE ====================
      function renderFormations() {
    const grid = document.getElementById("formations-grid");
    if (!grid) {
        console.error("formations-grid not found");
        return;
    }

    grid.innerHTML = formations.map((formation, index) => `
        <div class="formation-card">
            <div class="formation-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="formation-header">
                <h3>${formation.title}</h3>
                <p class="institution"><i class="fas fa-university"></i> ${formation.institution}</p>
                <p class="date"><i class="far fa-calendar-alt"></i> ${formation.date}</p>
            </div>
            <hr class="formation-divider">
            <p class="short-desc">${formation.shortDesc}</p>
            <button class="btn-voir-plus" data-index="${index}">Voir plus <i class="fas fa-arrow-right"></i></button>
        </div>
    `).join('');

    // Attacher les événements après avoir inséré le HTML
    const btns = document.querySelectorAll('.btn-voir-plus');
    console.log(`${btns.length} boutons trouvés`); // pour vérifier
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = btn.getAttribute('data-index');
            if (idx !== null && formations[idx]) {
                console.log("Bouton cliqué, index:", idx);
                openModal(formations[idx].title, formations[idx].fullDesc);
            } else {
                console.error("Formation introuvable pour index", idx);
            }
        });
    });
}
function renderExperiences() {
    const container = document.getElementById("experiences-grid");
    if (!container) {
        console.error("experiences-grid not found");
        return;
    }

    container.innerHTML = experiences.map((exp, index) => `
        <div class="experience-card">
            <div class="experience-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <div class="experience-header">
                <h3>${exp.title}</h3>
                <p class="company"><i class="fas fa-building"></i> ${exp.company}</p>
                <p class="date"><i class="far fa-calendar-alt"></i> ${exp.date}</p>
            </div>
            <hr class="experience-divider">
            <p class="short-desc">${exp.shortDesc}</p>
            <button class="btn-voir-plus-exp" data-index="${index}">Voir plus <i class="fas fa-arrow-right"></i></button>
        </div>
    `).join('');

    // Attacher les événements pour la modale
    const btns = document.querySelectorAll('.btn-voir-plus-exp');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = btn.getAttribute('data-index');
            if (idx !== null && experiences[idx]) {
                openModal(experiences[idx].title, experiences[idx].fullDesc);
            }
        });
    });
}
    

    // Attacher les événements (inchangé)
    document.querySelectorAll('.btn-voir-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = btn.getAttribute('data-index');
            if (idx !== null) {
                const formation = formations[idx];
                openModal(formation.title, formation.fullDesc);
            }
        });
    });

      // ==================== MODAL ====================
const modal = document.getElementById("formationModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const closeModalBtn = document.querySelector(".close-modal");

function openModal(title, details) {
    if (!modal || !modalTitle || !modalDetails) {
        console.error("Modal elements missing !");
        return;
    }
    modalTitle.textContent = title;
    modalDetails.textContent = details;
    modal.style.display = "flex";
    console.log("Modal opened:", title);
}

function closeModal() {
    if (modal) modal.style.display = "none";
}

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
}); 


        // ==================== INITIALISATION ====================
     document.addEventListener("DOMContentLoaded", () => {
    renderFormations();
    renderExperiences();
    renderSkills();
    renderProjects();     
});


    // ==================== FILTRAGE PROJETS ====================
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Mise à jour classe active
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            renderProjects(filterValue);
        });
    });

    // ==================== FORMULAIRE DE CONTACT ====================
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            showFormMessage("Tous les champs sont obligatoires.", "error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage("Veuillez entrer une adresse email valide.", "error");
            return;
        }

        const domainRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!domainRegex.test(email)) {
            showFormMessage("Veuillez saisir le nom de domaine (ex: .com, .fr).", "error");
            return;
        }

        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';

        fetch('https://formspree.io/f/mojoerzj', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => {
            if (response.ok) {
                showFormMessage("✅ Merci ! Je te réponds dans 2 heures.", "success");
                contactForm.reset();
            } else {
                showFormMessage("Une erreur est survenue. Réessaie.", "error");
            }
        })
        .catch(() => {
            showFormMessage("Une erreur est survenue. Réessaie.", "error");
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
        });
    });

    function showFormMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        // Disparaît après 5 secondes
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }

    // ==================== THÈME CLAIR/SOMBRE ====================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Vérifier le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Changer l'icône
        if (body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    // ==================== PETITE ANIMATION SUPPLEMENTAIRE (optionnelle) ====================
    // Animation des barres de compétences au défilement (pour le plaisir)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress-fill').forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0';
                    setTimeout(() => fill.style.width = width, 100);
                });
            }
        });
    }, { threshold: 0.3 });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) observer.observe(skillsSection);
;

const printBtn = document.getElementById('print-btn');
if (printBtn) {
    printBtn.addEventListener('click', () => {
        window.print();
    });
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ==================== TRADUCTIONS ====================
let currentLang = 'fr'; // 'fr' ou 'en'

// Textes statiques (pour les éléments avec data-i18n)
const translations = {
    fr: {
       "home": "Accueil",
       "projects": "Projets",
       "skills": "Compétences",
       "education": "Formation",
       "experience": "Expérience",
       "contact": "Contact",
       "home-greeting": "Bonjour, je suis <span class=\"highlight\">Marie Simone DJIBOUNE</span>",
       "home-title": "Débutante en developpement web & Étudiante en Géomatique",
       "home-bio": "Étudiante motivée et dynamique en GEOMATIQUE, cherchant à acquérir des connaissances et de l'expérience professionnelle, en étude des sciences géographiques et en informatique. Passionnée par la cartographie interactive et le développement web, je combine mes compétences en géomatique avec le code pour créer des sites utiles et esthétiques.",
       "projects-title": "Mes projets",
       "skills-title": "Compétences techniques",
       "education-title": "Formation",
       "experience-title": "Expérience professionnelle",
       "contact-title": "Contactez-moi",
       "filter-all": "Tous",
       "filter-web": "Web",
       "filter-carte": "Mes cartes",
       "filter-analyse": "Analyse de données",
       "address": "Thiès, Sénégal",
       "phone": "+221 78 448 55 12",
       "email-coord": "mariesimonedjiboune5@gmail.com",
       "see-project": "Voir le projet",
       "form-name": "Nom",
       "form-email": "Email",
       "form-message-label": "Message",
       "form-submit": "Envoyer le message",
       "qr-title": "📱 Scanner pour voir mon travail",
       "qr-note": "Ou visitez :",
       "copy-btn": "Copier le lien",
       "coordinates-title": "Mes coordonnées",
       "footer-rights": "© 2026 Marie Simone DJIBOUNE. Tous droits réservés.",
       "footer-made": "Réalisé en HTML/CSS/JS",
       "contact-success": "✅ Merci ! Je te réponds dans 2 heures.",
       "contact-error": "Veuillez remplir tous les champs.",
       "contact-email-error": "Veuillez entrer un email valide.",
       "contact-domain-error": "Veuillez saisir le nom de domaine (ex: .com, .fr).",
    },
    en: {
        "home": "Home",
        "projects": "Projects",
        "skills": "Skills",
        "education": "Education",
        "experience": "Experience",
        "contact": "Contact",
        "home-greeting": "Hello, I am <span class=\"highlight\">Marie Simone DJIBOUNE</span>",
        "home-title": "Beginner in web development & Geomatics Student",
        "home-bio": "Motivated and dynamic student in GEOMATICS, seeking to acquire knowledge and professional experience in geographic sciences and computer science. Passionate about interactive cartography and web development, I combine my geomatics skills with coding to create useful and aesthetic websites.",
        "projects-title": "My projects",
        "skills-title": "Technical skills",
        "education-title": "Education",
        "experience-title": "Work Experience",
        "contact-title": "Contact me",
        "filter-all": "All",
        "filter-web": "Web",
        "filter-carte": "My maps",
        "filter-analyse": "Data analysis",
        "address": "Thiès, Senegal",
        "phone": "+221 78 448 55 12",
        "email-coord": "mariesimonedjiboune5@gmail.com",
        "see-project": "See project",
        "form-name": "Name",
        "form-email": "Email",
        "form-message-label": "Message",
        "form-submit": "Send message",
        "qr-title": "📱 Scan to see my work",
        "qr-note": "Or visit:",
        "copy-btn": "Copy link",
        "coordinates-title": "My contact details",
        "footer-rights": "© 2026 Marie Simone DJIBOUNE. All rights reserved.",
        "footer-made": "Built with HTML/CSS/JS",
        "contact-success": "✅ Thank you! I'll get back to you within 2 hours.",
        "contact-error": "Please fill in all fields.",
        "contact-email-error": "Please enter a valid email address.",
        "contact-domain-error": "Please enter a domain name (e.g. .com, .fr).",
    }
};

// Traduction des données dynamiques (projets, compétences, formations, expériences)
const projects_en = [
    {
        title: "Road traffic map of some intersections in Thiès",
        description: "Visualization of road traffic levels in Thiès.",
        technologies: ["QGIS", "Excel", "KOBOTOOLBOX"],
        iconClass: "fa-solid fa-map-location-dot",
        link: "Rapport Sur le trafic routier de la ville de Thiès Groupe 4.pdf",
        category: "analyse"
    },
    {
        title: "Air quality, noise and microclimate in Thiès (2025)",
        description: "The causes of certain spatial phenomena observed in these locations.",
        technologies: ["RStudio", "Excel"],
        iconClass: "fa-solid fa-cloud-sun-rain",
        link: "rapport-analyse-3.pdf",
        category: "analyse"
    },
    {
        title: "Correlation circle",
        description: "The correlation circle highlights the level of correlation between these variables with the two dimensions representing main axes that summarize the observed variation in the data.",
        technologies: ["RStudio"],
        iconClass: "fa-solid fa-cloud-sun-rain",
        link: "Cercle de correlation.png",
        category: "analyse"
    },
    {
        title: "Triangular diagram",
        description: "The triangular diagram highlights the relationship between three variables.",
        technologies: ["Philcarto"],
        iconClass: "fa-solid fa-cloud-sun-rain",
        link: "Diagramme triangulaire.png",
        category: "analyse"
    },
    {
        title: "My Curriculum Vitae (CV)",
        description: "This portfolio you are currently visiting, designed in pure HTML/CSS.",
        technologies: ["HTML", "CSS"],
        iconClass: "fa-solid fa-laptop-code",
        link: "CV.html",
        category: "web"
    },
    {
        title: "My different maps",
        description: "Each map is made from reliable data, leading to concrete results.",
        technologies: ["QGIS"],
        iconClass: "fa-solid fa-calculator",
        link: "carte.html",
        category: "carte"
    },
];

const skills_en = [
    { name: "QGIS", level: 50, icon: "img" },
    { name: "ArcGIS", level: 40, icon: "fas fa-globe" },
    { name: "RStudio", level: 75, icon: "fab fa-r-project" },
    { name: "AutoCAD", level: 40, icon: "fas fa-drafting-compass" },
    { name: "XAMPP", level: 90, icon: "fas fa-database" },
    { name: "PyCharm", level: 70, icon: "fab fa-python" },
    { name: "Python", level: 75, icon: "fab fa-python" },
    { name: "Philcarto", level: 65, icon: "fas fa-chart-line" }
];

const formations_en = [
    {
        title: "Scientific Baccalaureate",
        institution: "El Hadji Tafsir DIOUF High School, Bargny",
        date: "2024",
        shortDesc: "General scientific training in S2 series (mathematics, physics-chemistry, life and earth sciences).",
        fullDesc: "The S2 scientific baccalaureate provided a solid scientific background with in-depth teaching in mathematics, physics, chemistry and biology. This course developed rigor, logic and analytical skills necessary for higher studies in geomatics."
    },
    {
        title: "Bachelor's degree in Geomatics",
        institution: "Iba Der Thiam University of Thiès",
        date: "2024 - 2027",
        shortDesc: "Training in spatial analysis, GIS, remote sensing, digital cartography and programming (Python).",
        fullDesc: "This bachelor's degree trains specialists capable of collecting, analyzing and visualizing geographic data. Courses include:\n• GIS (QGIS, ArcGIS)\n• Remote sensing\n• Programming for geomatics\n• Spatial and statistical analysis\n• Cartography."
    },
    {
        title: "Additional training: Web development",
        institution: "Self-learning & Personal projects",
        date: "2025 - 2026",
        shortDesc: "Learning HTML, CSS, JavaScript, and modern frameworks to create interactive web applications.",
        fullDesc: "Alongside my bachelor's degree, I followed online tutorials and completed several projects (portfolio, interactive maps) to master front-end development. Acquired skills: responsive HTML/CSS, JavaScript."
    }
];

const experiences_en = [
    {
        title: "Internship in digital cartography",
        company: "Thiès Urban Planning Agency",
        date: "June 2025 - August 2025",
        shortDesc: "Creation of thematic maps with QGIS and participation in GIS updates.",
        fullDesc: "Creation of flow maps, traffic data analysis, digitization of paper plans, and writing of a technical report."
    },
    {
        title: "GIS Assistant (university project)",
        company: "Iba Der Thiam University of Thiès",
        date: "Sept 2025 - Dec 2025",
        shortDesc: "Help with GPS data collection and preparation of georeferenced layers.",
        fullDesc: "Participation in a research project on air quality: GPS point collection, processing with RStudio, creation of noise maps."
    },
    {
        title: "Freelance – Web development",
        company: "Self-employed",
        date: "2026 - present",
        shortDesc: "Creation of showcase websites for local small businesses.",
        fullDesc: "HTML/CSS/JS, responsive design, integration of interactive maps (Leaflet), SEO optimization."
    }
];

// Fonction pour appliquer la traduction des textes statiques
function translateStaticTexts(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'LABEL' && el.querySelector('.required')) {
                const star = el.querySelector('.required');
                el.innerHTML = translations[lang][key] + ' ';
                el.appendChild(star);
            } else if (key === 'home-greeting') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    // Mise à jour du texte du bouton de traduction
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
        translateBtn.innerHTML = lang === 'fr' 
            ? '<i class="fas fa-language"></i> English' 
            : '<i class="fas fa-language"></i> Français';
    }
}

// Fonctions de rendu qui utilisent la langue courante
function renderProjects(filter = "all") {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    const projectsData = currentLang === 'fr' ? projects : projects_en;
    const filteredProjects = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);

    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">
                    <i class="${project.iconClass}"></i>
                </div>
                <h3>${project.title}</h3>
            </div>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">
                ${currentLang === 'fr' ? 'Voir le projet' : 'See project'} <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;
    const skillsData = currentLang === 'fr' ? skills : skills_en;
    container.innerHTML = skillsData.map(skill => `
        <div class="skill-card">
            <div class="skill-icon"><i class="${skill.icon}"></i></div>
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <span>${currentLang === 'fr' ? 'Niveau' : 'Level'} : ${skill.level}%</span>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${skill.level}%; background: ${skillColors[skill.name] || 'var(--primary)'};"></div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFormations() {
    const grid = document.getElementById("formations-grid");
    if (!grid) return;
    const formationsData = currentLang === 'fr' ? formations : formations_en;
    grid.innerHTML = formationsData.map((formation, index) => `
        <div class="formation-card">
            <div class="formation-icon"><i class="fas fa-graduation-cap"></i></div>
            <div class="formation-header">
                <h3>${formation.title}</h3>
                <p class="institution"><i class="fas fa-university"></i> ${formation.institution}</p>
                <p class="date"><i class="far fa-calendar-alt"></i> ${formation.date}</p>
            </div>
            <hr class="formation-divider">
            <p class="short-desc">${formation.shortDesc}</p>
            <p class="full-desc">${formation.fullDesc}</p>
        </div>
    `).join('');
}

function renderExperiences() {
    const container = document.getElementById("experiences-grid");
    if (!container) return;
    const experiencesData = currentLang === 'fr' ? experiences : experiences_en;
    container.innerHTML = experiencesData.map((exp, index) => `
        <div class="experience-card">
            <div class="experience-icon"><i class="fas fa-briefcase"></i></div>
            <div class="experience-header">
                <h3>${exp.title}</h3>
            </div>
            <hr class="experience-divider">
            <p class="short-desc">${exp.shortDesc}</p>
            <p class="full-desc">${exp.fullDesc}</p>
        </div>
    `).join('');
}

// Fonction utilitaire pour attacher les événements modaux
function attachModalEvents(selector, dataArray) {
    const btns = document.querySelectorAll(selector);
    btns.forEach(btn => {
        btn.removeEventListener('click', window.modalHandler);
        const handler = (e) => {
            const idx = btn.getAttribute('data-index');
            if (idx !== null && dataArray[idx]) {
                openModal(dataArray[idx].title, dataArray[idx].fullDesc);
            }
        };
        btn.addEventListener('click', handler);
        window.modalHandler = handler; // pour éviter les doublons, pas parfait mais fonctionne
    });
}

// Fonction principale de changement de langue
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    translateStaticTexts(lang);
    // Re-rendre toutes les sections dynamiques
    const currentFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    renderProjects(currentFilter);
    renderSkills();
    renderFormations();
    renderExperiences();
    // Traduire aussi les messages d'erreur du formulaire (gérés plus tard)
}


// Initialisation au chargement
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        currentLang = savedLang;
    } else {
        currentLang = 'fr';
    }
    setLanguage(currentLang);
    
    // Gestion du bouton de traduction
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
        translateBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(newLang);
        });
    }
    
    // Initialiser les filtres projets après le rendu
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterValue = btn.getAttribute("data-filter");
            renderProjects(filterValue);
        });
    });
    
    // Observer pour les barres de compétences
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress-fill').forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0';
                    setTimeout(() => fill.style.width = width, 100);
                });
            }
        });
    }, { threshold: 0.3 });
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) observer.observe(skillsSection);
});