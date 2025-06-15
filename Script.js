const specialties = [
    {
        name: "Anestesiologia",
        icon: "fas fa-syringe",
        description: "Especialidade médica responsável pela administração de anestesias e cuidados perioperatórios."
    },
    {
        name: "Angiologia",
        icon: "fas fa-heartbeat",
        description: "Tratamento de doenças dos vasos sanguíneos e linfáticos, incluindo varizes e tromboses."
    },
    {
        name: "Cardiologia",
        icon: "fas fa-heart",
        description: "Diagnóstico e tratamento de doenças do coração e sistema cardiovascular."
    },
    {
        name: "Cirurgia Cardiovascular",
        icon: "fas fa-user-md",
        description: "Procedimentos cirúrgicos do coração, grandes vasos e sistema cardiovascular."
    },
    {
        name: "Cirurgia da Mão",
        icon: "fas fa-hand-paper",
        description: "Tratamento cirúrgico de lesões e patologias da mão, punho e antebraço."
    },
    {
        name: "Cirurgia do Aparelho Digestivo",
        icon: "fas fa-pills",
        description: "Cirurgias do sistema digestivo, incluindo estômago, intestinos e fígado."
    },
    {
        name: "Cirurgia Geral",
        icon: "fas fa-cut",
        description: "Procedimentos cirúrgicos gerais em diversas partes do corpo humano."
    },
    {
        name: "Cirurgia Oncológica",
        icon: "fas fa-ribbon",
        description: "Tratamento cirúrgico de tumores malignos e benignos."
    },
    {
        name: "Cirurgia Pediátrica",
        icon: "fas fa-baby",
        description: "Procedimentos cirúrgicos em recém-nascidos, crianças e adolescentes."
    },
    {
        name: "Cirurgia Plástica",
        icon: "fas fa-spa",
        description: "Cirurgias reparadoras e estéticas para correção de deformidades."
    },
    {
        name: "Cirurgia Torácica",
        icon: "fas fa-lungs",
        description: "Cirurgias do tórax, incluindo pulmões, esôfago e mediastino."
    },
    {
        name: "Cirurgia Vascular",
        icon: "fas fa-stethoscope",
        description: "Tratamento cirúrgico de doenças dos vasos sanguíneos."
    },
    {
        name: "Clínica Médica",
        icon: "fas fa-user-doctor",
        description: "Diagnóstico e tratamento clínico de doenças em adultos."
    },
    {
        name: "Coloproctologia",
        icon: "fas fa-microscope",
        description: "Tratamento de doenças do intestino grosso, reto e ânus."
    },
    {
        name: "Dermatologia",
        icon: "fas fa-hand-holding-medical",
        description: "Diagnóstico e tratamento de doenças da pele, cabelos e unhas."
    },
    {
        name: "Endocrinologia e Metabologia",
        icon: "fas fa-dna",
        description: "Tratamento de distúrbios hormonais e metabólicos."
    },
    {
        name: "Endoscopia",
        icon: "fas fa-search",
        description: "Exames endoscópicos para diagnóstico de doenças internas."
    },
    {
        name: "Gastroenterologia",
        icon: "fas fa-stomach",
        description: "Tratamento de doenças do sistema digestivo."
    },
    {
        name: "Genética Médica",
        icon: "fas fa-dna",
        description: "Diagnóstico e aconselhamento de doenças genéticas hereditárias."
    },
    {
        name: "Geriatria",
        icon: "fas fa-walking",
        description: "Cuidados médicos especializados para idosos."
    },
    {
        name: "Ginecologia e Obstetrícia",
        icon: "fas fa-female",
        description: "Saúde da mulher, gravidez, parto e doenças ginecológicas."
    },
    {
        name: "Hematologia e Hemoterapia",
        icon: "fas fa-tint",
        description: "Tratamento de doenças do sangue e transfusões."
    },
    {
        name: "Homeopatia",
        icon: "fas fa-leaf",
        description: "Tratamento baseado nos princípios da medicina homeopática."
    },
    {
        name: "Infectologia",
        icon: "fas fa-virus",
        description: "Diagnóstico e tratamento de doenças infecciosas."
    },
    {
        name: "Mastologia",
        icon: "fas fa-ribbon",
        description: "Especialidade focada na saúde das mamas."
    },
    {
        name: "Medicina de Emergência",
        icon: "fas fa-ambulance",
        description: "Atendimento médico de urgência e emergência."
    },
    {
        name: "Medicina de Família e Comunidade",
        icon: "fas fa-home",
        description: "Atenção primária à saúde de indivíduos e famílias."
    },
    {
        name: "Medicina do Trabalho",
        icon: "fas fa-hard-hat",
        description: "Prevenção e tratamento de doenças ocupacionais."
    },
    {
        name: "Medicina de Tráfego",
        icon: "fas fa-car",
        description: "Avaliação médica para condutores de veículos."
    },
    {
        name: "Medicina Esportiva",
        icon: "fas fa-running",
        description: "Cuidados médicos relacionados à prática esportiva."
    },
    {
        name: "Medicina Física e Reabilitação",
        icon: "fas fa-wheelchair",
        description: "Reabilitação de pacientes com deficiências físicas."
    },
    {
        name: "Medicina Intensiva",
        icon: "fas fa-heartbeat",
        description: "Cuidados intensivos para pacientes críticos."
    },
    {
        name: "Medicina Legal e Perícia Médica",
        icon: "fas fa-gavel",
        description: "Medicina aplicada às questões legais e periciais."
    },
    {
        name: "Medicina Nuclear",
        icon: "fas fa-radiation",
        description: "Diagnóstico e tratamento com radioisótopos."
    },
    {
        name: "Medicina Preventiva e Social",
        icon: "fas fa-shield-alt",
        description: "Prevenção de doenças e promoção da saúde coletiva."
    },
    {
        name: "Nefrologia",
        icon: "fas fa-kidneys",
        description: "Tratamento de doenças dos rins e sistema urinário."
    },
    {
        name: "Neurocirurgia",
        icon: "fas fa-brain",
        description: "Cirurgias do sistema nervoso central e periférico."
    },
    {
        name: "Neurologia",
        icon: "fas fa-brain",
        description: "Diagnóstico e tratamento de doenças do sistema nervoso."
    },
    {
        name: "Nutrologia",
        icon: "fas fa-apple-alt",
        description: "Diagnóstico e tratamento de distúrbios nutricionais."
    },
    {
        name: "Oftalmologia",
        icon: "fas fa-eye",
        description: "Diagnóstico e tratamento de doenças dos olhos."
    },
    {
        name: "Oncologia Clínica",
        icon: "fas fa-ribbon",
        description: "Tratamento clínico de pacientes com câncer."
    },
    {
        name: "Ortopedia e Traumatologia",
        icon: "fas fa-bone",
        description: "Tratamento de lesões e doenças do sistema músculo-esquelético."
    },
    {
        name: "Otorrinolaringologia",
        icon: "fas fa-head-side-mask",
        description: "Tratamento de doenças do ouvido, nariz e garganta."
    },
    {
        name: "Patologia",
        icon: "fas fa-microscope",
        description: "Diagnóstico de doenças através de análises laboratoriais."
    },
    {
        name: "Patologia Clínica",
        icon: "fas fa-vial",
        description: "Medicina laboratorial e análises clínicas."
    },
    {
        name: "Pediatria",
        icon: "fas fa-child",
        description: "Cuidados médicos especializados para crianças e adolescentes."
    },
    {
        name: "Pneumologia",
        icon: "fas fa-lungs",
        description: "Diagnóstico e tratamento de doenças respiratórias."
    },
    {
        name: "Psiquiatria",
        icon: "fas fa-brain",
        description: "Diagnóstico e tratamento de transtornos mentais."
    },
    {
        name: "Radiologia e Diagnóstico por Imagem",
        icon: "fas fa-x-ray",
        description: "Diagnóstico por meio de exames de imagem."
    },
    {
        name: "Radioterapia",
        icon: "fas fa-radiation",
        description: "Tratamento oncológico através de radiação."
    },
    {
        name: "Reumatologia",
        icon: "fas fa-hands",
        description: "Tratamento de doenças reumáticas e autoimunes."
    },
    {
        name: "Urologia",
        icon: "fas fa-kidneys",
        description: "Tratamento de doenças do sistema urogenital masculino."
    },
    {
        name: "Acupuntura",
        icon: "fas fa-leaf",
        description: "Tratamento através da medicina tradicional chinesa."
    },
    {
        name: "Medicina de Adolescentes",
        icon: "fas fa-child",
        description: "Cuidados médicos especializados para adolescentes."
    },
    {
        name: "Alergia e Imunologia",
        icon: "fas fa-allergies",
        description: "Tratamento de alergias e distúrbios imunológicos."
    },
    {
        name: "Angiorradiologia e Cirurgia Endovascular",
        icon: "fas fa-heartbeat",
        description: "Procedimentos minimamente invasivos nos vasos sanguíneos."
    },
    {
        name: "Cancerologia",
        icon: "fas fa-ribbon",
        description: "Especialidade dedicada ao tratamento do câncer."
    },
    {
        name: "Reprodução Humana",
        icon: "fas fa-baby",
        description: "Tratamento de infertilidade e reprodução assistida."
    },
    {
        name: "Cirurgia de Cabeça e Pescoço",
        icon: "fas fa-head-side-virus",
        description: "Cirurgias da região da cabeça e pescoço."
    },
    {
        name: "Medicina Hiperbárica",
        icon: "fas fa-prescription-bottle",
        description: "Tratamento com oxigênio em alta pressão."
    }
];
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
            }
        }
    });
}, observerOptions);

function generateSpecialtiesGrid() {
    const grid = document.getElementById('specialties-grid');
    if (!grid) return;

    specialties.forEach((specialty, index) => {
        const card = document.createElement('div');
        card.className = 'specialty-card fade-in card-3d';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="specialty-icon">
                <i class="${specialty.icon}"></i>
            </div>
            <h3>${specialty.name}</h3>
            <p>${specialty.description}</p>
        `;

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
        });
        
        grid.appendChild(card);
        observer.observe(card);
    });
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .stat-number');
    elements.forEach(el => observer.observe(el));
}

document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    if (!data.name || !data.email || !data.phone || !data.message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

function createFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.medical-card, .shape');
    
    floatingElements.forEach((element, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
    });
}

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
});

function populateSpecialtySelect() {
    const select = document.getElementById('specialty');
    if (!select) return;
    
    while (select.children.length > 1) {
        select.removeChild(select.lastChild);
    }
    
    specialties.forEach(specialty => {
        const option = document.createElement('option');
        option.value = specialty.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = specialty.name;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateSpecialtiesGrid();
    initScrollAnimations();
    createFloatingAnimation();
    populateSpecialtySelect();
    
    setTimeout(() => {
        document.querySelectorAll('.hero-content > *').forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('fade-in');
        });
    }, 100);
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const optimizedScroll = debounce(function() {
}, 16);

window.addEventListener('scroll', optimizedScroll);


function preloadResources() {
    const criticalImages = [
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

window.addEventListener('load', preloadResources);

function addTouchSupport() {
    const cards = document.querySelectorAll('.specialty-card, .stat-card, .info-card');
    
    cards.forEach
    }