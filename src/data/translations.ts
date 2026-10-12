export interface ProjectItemI18n {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: 'QA Automation' | 'Mobile Testing' | 'API & Backend' | 'Desarrollo Web';
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: 'Completado' | 'En Desarrollo' | 'Próximamente';
}

export interface InterestItemI18n {
  id: string;
  title: { es: string; en: string };
  tag: { es: string; en: string };
  description: { es: string; en: string };
  iconType: 'cat' | 'scifi' | 'gaming' | 'coffee' | 'cinema' | 'tcg' | 'mindset';
  image?: string;
  imageAlt?: string;
  badge?: { es: string; en: string };
  isSpecial?: boolean;
}

export interface CertificationItemI18n {
  id: string;
  title: string;
  issuer: string;
  tag: { es: string; en: string };
  credentialUrl?: string;
  status: 'Verificada' | 'Pendiente';
  featured?: boolean;
  notes?: { es: string; en: string };
}

export const I18N_PROJECTS: ProjectItemI18n[] = [
  {
    id: 'playwright-framework',
    title: {
      es: 'Framework E2E con Playwright & TypeScript',
      en: 'E2E Framework with Playwright & TypeScript',
    },
    description: {
      es: 'Arquitectura de automatización de pruebas web con Page Object Model (POM), ejecución paralela, generación automática de reportes HTML e integración CI/CD.',
      en: 'Web test automation architecture using Page Object Model (POM), parallel execution, automatic HTML report generation, and CI/CD integration.',
    },
    category: 'QA Automation',
    tags: ['Playwright', 'TypeScript', 'POM', 'CI/CD', 'GitHub Actions'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'appium-mobile',
    title: {
      es: 'Framework de Automatización Móvil con Appium',
      en: 'Mobile Test Automation Framework with Appium',
    },
    description: {
      es: 'Suite de pruebas automatizadas para aplicaciones móviles Android e iOS. Inspección de elementos dinámicos, control de emuladores y captura de trazas Logcat.',
      en: 'Automated test suite for Android and iOS mobile applications. Dynamic UI element inspection, emulator orchestration, and Logcat trace analysis.',
    },
    category: 'Mobile Testing',
    tags: ['Appium', 'Android/iOS', 'Java', 'Logcat', 'Mobile E2E'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'api-rest-karate',
    title: {
      es: 'Suite de Validación de APIs REST & Backend',
      en: 'REST API & Backend Validation Suite',
    },
    description: {
      es: 'Validación automatizada de endpoints RESTful: esquemas JSON, status codes, tiempos de respuesta, autenticación por tokens y aserciones de base de datos SQL.',
      en: 'Automated validation of RESTful endpoints: JSON schemas, HTTP status codes, response times, bearer token auth, and relational SQL database assertions.',
    },
    category: 'API & Backend',
    tags: ['Postman', 'Karate Framework', 'REST APIs', 'SQL', 'JSON Schema'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'selenium-testng',
    title: {
      es: 'Framework de Pruebas Web con Selenium & Java',
      en: 'Web Automation Framework with Selenium & Java',
    },
    description: {
      es: 'Suite de regresión automatizada implementando Selenium WebDriver y TestNG, con parametrización de datos y aserciones robustas para flujos críticos.',
      en: 'Automated regression suite implementing Selenium WebDriver and TestNG, with data-driven parametrization and robust assertions for critical user journeys.',
    },
    category: 'QA Automation',
    tags: ['Selenium WebDriver', 'Java', 'TestNG', 'Data-Driven'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: false,
    status: 'Completado',
  },
  {
    id: 'unam-ecommerce-qa',
    title: {
      es: 'Plataforma E-Commerce UNAM & Control de Calidad',
      en: 'UNAM E-Commerce Platform & QA Quality Control',
    },
    description: {
      es: 'Desarrollo de módulos interactivos web y ejecución de matrices de pruebas funcionales para el sistema de comercio electrónico de librerías UNAM.',
      en: 'Interactive web module development and execution of functional test matrices for the UNAM online bookstores e-commerce platform.',
    },
    category: 'Desarrollo Web',
    tags: ['JavaScript', 'MySQL', 'Pruebas Funcionales', 'UNAM'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: false,
    status: 'Completado',
  },
];

export const I18N_INTERESTS: InterestItemI18n[] = [
  {
    id: 'cat-qa',
    title: {
      es: 'Michi Elegante (QA & Chief Officer)',
      en: 'Fancy Cat (QA & Chief Officer)',
    },
    tag: {
      es: 'Compañero Dev',
      en: 'Dev Companion',
    },
    description: {
      es: 'Mi supervisor felino de código en traje de gala. Cero tolerancia a los errores en producción, máxima elegancia y encargado oficial de supervisar los builds.',
      en: 'My feline code supervisor in a formal tuxedo. Zero tolerance for production bugs, top elegance, and official build oversight.',
    },
    iconType: 'cat',
    image: './meme-cat.png',
    imageAlt: 'Gatito formal con traje y corbata',
    badge: {
      es: '100% Sin Bugs',
      en: '100% Bug Free',
    },
    isSpecial: true,
  },
  {
    id: 'cinema',
    title: {
      es: 'Cine & Películas en Pantalla Grande',
      en: 'Cinema & Big Screen Movies',
    },
    tag: {
      es: 'Séptimo Arte',
      en: 'Cinema & Film',
    },
    description: {
      es: 'Me fascina ir al cine y disfrutar las historias en pantalla grande. Admirador de la fotografía, la narrativa cinematográfica y las bandas sonoras impactantes.',
      en: 'I love going to theaters and experiencing stories on the big screen. Passionate about cinematography, visual storytelling, and epic soundtracks.',
    },
    iconType: 'cinema',
    badge: {
      es: 'Amante del Cine',
      en: 'Film Lover',
    },
  },
  {
    id: 'smash-gaming',
    title: {
      es: 'Super Smash Bros & Gaming',
      en: 'Super Smash Bros & Gaming',
    },
    tag: {
      es: 'Estrategia & Reflejos',
      en: 'Tactics & Reflexes',
    },
    description: {
      es: 'Competitividad sana, agilidad mental y reflejos rápidos en Super Smash Bros y videojuegos de reto que premian el análisis táctico.',
      en: 'Friendly competition, quick reflexes, and mental agility in Super Smash Bros and challenging video games that reward tactical precision.',
    },
    iconType: 'gaming',
    badge: {
      es: 'Smash Bros & Gaming',
      en: 'Smash & Gaming',
    },
  },
  {
    id: 'pokemon-tcg',
    title: {
      es: 'Pokémon TCG & Coleccionismo',
      en: 'Pokémon TCG & Collecting',
    },
    tag: {
      es: 'Estrategia de Cartas',
      en: 'Card Strategy & Hobby',
    },
    description: {
      es: 'Estrategia en juegos de cartas coleccionables Pokémon (TCG) y coleccionismo. Disfruto la sinergia de mazos, el arte visual y la búsqueda de piezas especiales.',
      en: 'Tabletop strategy with the Pokémon Trading Card Game (TCG) and collecting. Passionate about deck synergy, card artwork, and hunting rare editions.',
    },
    iconType: 'tcg',
    badge: {
      es: 'Coleccionista TCG',
      en: 'TCG Collector',
    },
  },
  {
    id: 'can-do-mindset',
    title: {
      es: 'Mentalidad «Cómo Sí» & Tendencias',
      en: '"Can-Do" Mindset & Modern Trends',
    },
    tag: {
      es: 'Innovación & Ambición',
      en: 'Innovation & Ambition',
    },
    description: {
      es: 'Persona dedicada, persistente y motivada en encontrar siempre la forma de lograr las metas («el cómo sí»). Siempre al día con las nuevas tecnologías y lo más actual.',
      en: 'Dedicated, persistent, and always motivated to find the "how-to" and solve challenges. Constantly adapting to modern trends and cutting-edge tech.',
    },
    iconType: 'mindset',
    badge: {
      es: 'Siempre Actualizado',
      en: 'Always Evolving',
    },
  },
];

export const I18N_CERTIFICATIONS: CertificationItemI18n[] = [
  {
    id: 'diplomado-automation',
    title: 'Diplomado en Automatización de Pruebas',
    issuer: 'Lite Thinking Institute of Technology',
    tag: { es: 'QA Automation', en: 'QA Automation' },
    credentialUrl: 'https://badge.litethinking.com/credentials-badge?badge=d9ce0e87-fcde-4a88-b472-2e437669a085',
    status: 'Verificada',
    featured: true,
  },
  {
    id: 'istqb-ctfl',
    title: 'ISTQB Certified Tester Foundation Level (CTFL)',
    issuer: 'ISTQB / Credly',
    tag: { es: 'Certificación Internacional', en: 'International Certification' },
    credentialUrl: 'https://www.credly.com/badges/266787bc-77a5-4da5-b3d1-89d4f100fc21/public_url',
    status: 'Verificada',
    featured: true,
  },
  {
    id: 'ibm-data-science',
    title: 'IBM Enterprise Data Science',
    issuer: 'IBM / Credly',
    tag: { es: 'Data Science & AI', en: 'Data Science & AI' },
    credentialUrl: 'https://www.credly.com/badges/2f472ce4-b255-4840-95ae-76685e65ca76/linked_in_profile',
    status: 'Verificada',
    featured: true,
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing (IBM Journey to Cloud)',
    issuer: 'IBM Cloud',
    tag: { es: 'Cloud & Arquitectura', en: 'Cloud & Architecture' },
    credentialUrl: 'https://drive.google.com/file/d/1oZ8gMlHrZmEc_n2Owv_aODn7RXtQ_3C7/view',
    status: 'Verificada',
  },
  {
    id: 'english-b2',
    title: 'Certificación de Inglés Nivel B2',
    issuer: 'Acreditación Oficial',
    tag: { es: 'Idiomas', en: 'Languages' },
    status: 'Pendiente',
    notes: { es: 'Certificación en proceso de carga', en: 'Certification upload in progress' },
  },
  {
    id: 'scrum-fundamentals',
    title: 'Scrum Fundamentals Certified (SFPC)',
    issuer: 'CertiProf / Scrum',
    tag: { es: 'Metodologías Ágiles', en: 'Agile Methodologies' },
    status: 'Verificada',
  },
];

export const I18N_SKILLS = [
  {
    category: {
      es: 'Automatización & Testing E2E',
      en: 'Automation & E2E Testing',
    },
    items: ['Playwright (TypeScript)', 'Selenium WebDriver (Java/Python)', 'Appium (Android & iOS)', 'Karate Framework', 'TestNG'],
  },
  {
    category: {
      es: 'Lenguajes de Programación & BD',
      en: 'Programming Languages & Databases',
    },
    items: ['TypeScript', 'Java', 'Python', 'JavaScript (ES6+)', 'SQL Avanzado (MySQL, Oracle DB)'],
  },
  {
    category: {
      es: 'Backend, APIs & Móvil',
      en: 'Backend, APIs & Mobile Testing',
    },
    items: ['Pruebas REST & SOAP/XML', 'Postman & Automatización de Colecciones', 'Validación de Payloads', 'Análisis de Logs (Logcat Android)', 'Inspección de UI Elements'],
  },
  {
    category: {
      es: 'Metodologías & Gestión de Calidad',
      en: 'Methodologies & Quality Leadership',
    },
    items: ['ISTQB Standards', 'STLC & SDLC', 'Scrum / Agile Framework', 'Jira & Zephyr', 'CI/CD Pipelines (GitHub Actions)', 'Lean & Six Sigma (Causa Raíz)'],
  },
];

export const TRANSLATIONS = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Habilidades',
      certifications: 'Certificaciones',
      interests: 'Intereses',
      contact: 'Contacto',
      themeDark: 'Cambiar a modo claro',
      themeLight: 'Cambiar a modo oscuro',
      langToggle: 'Cambiar idioma (Switch to English)',
    },
    hero: {
      badge: 'Portafolio Profesional',
      role: 'Ingeniero de QA Automation & QA Lead Jr | SDET',
      shortRole: 'QA Lead Jr & SDET',
      coreTag: 'PROFESIONAL',
      coreCaption: 'QA AUTOMATION & SDET',
      aboutTag: 'Sobre Mí',
      bio: 'Ingeniero de QA Automation y QA Lead Jr con título y cédula profesional en Informática / Computación (UNAM). Persona dedicada, persistente y con ambición constante, motivado siempre en encontrar el «cómo sí» ante cualquier desafío técnico. Me mantengo al día con las nuevas tecnologías, frameworks modernos y soluciones frescas y escalables.',
      educationLabel: 'Título & Cédula Profesional',
      educationValue: 'Lic. en Informática / Computación (UNAM) • Con Cédula Profesional',
      emailLabel: 'Correo',
      githubLabel: 'GitHub',
      locationLabel: 'Ubicación',
      locationValue: 'CDMX, México • Remoto / Híbrido',
      btnProjects: 'Ver Proyectos',
      btnCertifications: 'Certificaciones',
      btnContact: 'Contactar',
    },
    projects: {
      tag: 'Catálogo de Proyectos',
      title: 'Proyectos & Frameworks',
      subtitle: 'Arquitecturas de automatización, suites de pruebas para Web, Móviles y validación profunda de APIs.',
      searchPlaceholder: 'Buscar por tecnología (Playwright, Appium, TypeScript, Postman, SQL...)',
      categoryAll: 'Todos',
      categoryWebDev: 'Desarrollo Web',
      showing: 'Mostrando',
      of: 'de',
      countWord: 'proyectos',
      clear: 'Limpiar filtros',
      emptyTitle: 'No se encontraron proyectos',
      emptySubtitle: 'Intenta buscar con otros términos o selecciona otra categoría.',
      btnDemo: 'Demo / Repositorio',
      btnCode: 'Código',
      statusCompleted: '✓ Completado',
      statusInDev: 'En Desarrollo',
      statusUpcoming: '⏳ Próximamente',
    },
    skills: {
      tag: 'Tecnologías & Habilidades',
      title: 'Habilidades y Herramientas',
      subtitle: 'Frameworks de automatización, lenguajes, herramientas de pruebas y metodologías que utilizo para garantizar la máxima calidad de software.',
    },
    certifications: {
      tag: 'Credenciales & Certificaciones',
      title: 'Certificaciones Oficiales',
      subtitle: 'Acreditaciones internacionales, respaldo académico oficial y certificaciones técnicas en QA Automation, Cloud y metodologías ágiles.',
      degreeCard: {
        tag: 'Título Universitario & Cédula Oficial',
        title: 'Licenciatura en Informática / Computación',
        institution: 'Universidad Nacional Autónoma de México (UNAM)',
        status: 'Titulado con Cédula Profesional',
        description: 'Grado académico superior oficial con título y cédula profesional registrada ante la Dirección General de Profesiones (SEP / UNAM).',
      },
      verified: 'Verificada',
      pending: 'Pendiente de carga',
      btnView: 'Ver Credencial Oficial',
      pendingNotes: 'En proceso de carga',
    },
    interests: {
      tag: 'Más Allá del Código',
      title: 'Intereses & Pasatiempos',
      subtitle: 'No todo es programar: las cosas que me apasionan, mi afición por el cine y los videojuegos, coleccionables y mi leal supervisor felino.',
    },
    contact: {
      tag: '¿Hablamos?',
      title: 'Conectemos',
      subtitle: '¿Tienes una propuesta, un proyecto en mente o te gustaría colaborar? Puedes encontrarme a través de estos canales:',
      emailLabel: 'Correo Electrónico',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      tagline: 'QA Automation Lead Jr & SDET • Portafolio Profesional • Preparado para GitHub Pages',
      rights: 'Todos los derechos reservados.',
    },
    scroll: {
      title: 'Volver arriba',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      interests: 'Interests',
      contact: 'Contact',
      themeDark: 'Switch to light mode',
      themeLight: 'Switch to dark mode',
      langToggle: 'Switch language (Cambiar a Español)',
    },
    hero: {
      badge: 'Professional Portfolio',
      role: 'QA Automation Engineer & QA Lead Jr | SDET',
      shortRole: 'QA Lead Jr & SDET',
      coreTag: 'PROFESSIONAL',
      coreCaption: 'QA AUTOMATION & SDET',
      aboutTag: 'About Me',
      bio: 'QA Automation Engineer & QA Lead Jr with an official university degree and professional license in Computer Science / IT (UNAM). Dedicated, persistent, and ambitious professional, always driven to find the "can-do" solution for any technical challenge. Constantly staying up to date with modern tech trends, frameworks, and fresh, scalable approaches.',
      educationLabel: 'Degree & Professional License',
      educationValue: 'B.S. in Computer Science / IT (UNAM) • Licensed Degree',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      locationLabel: 'Location',
      locationValue: 'Mexico City • Remote / Hybrid',
      btnProjects: 'View Projects',
      btnCertifications: 'Certifications',
      btnContact: 'Contact Me',
    },
    projects: {
      tag: 'Project Catalog',
      title: 'Projects & Frameworks',
      subtitle: 'Test automation architectures, mobile testing suites, and deep REST API verification.',
      searchPlaceholder: 'Search by tech (Playwright, Appium, TypeScript, Postman, SQL...)',
      categoryAll: 'All',
      categoryWebDev: 'Web Development',
      showing: 'Showing',
      of: 'of',
      countWord: 'projects',
      clear: 'Clear filters',
      emptyTitle: 'No projects found',
      emptySubtitle: 'Try searching with different terms or selecting another category.',
      btnDemo: 'Demo / Repository',
      btnCode: 'Code',
      statusCompleted: '✓ Completed',
      statusInDev: 'In Development',
      statusUpcoming: '⏳ Coming Soon',
    },
    skills: {
      tag: 'Tech Stack & Skills',
      title: 'Skills & Toolset',
      subtitle: 'Automation frameworks, languages, testing tools, and methodologies I use to guarantee top software quality.',
    },
    certifications: {
      tag: 'Credentials & Certifications',
      title: 'Official Certifications',
      subtitle: 'International accreditations, verified academic degree, and technical certifications in QA Automation, Cloud, and Agile methodologies.',
      degreeCard: {
        tag: 'University Degree & Professional License',
        title: "Bachelor's Degree in Computer Science / IT",
        institution: 'National Autonomous University of Mexico (UNAM)',
        status: 'Licensed Degree Holder',
        description: 'Official higher education degree with registered professional license issued by the General Directorate of Professions (SEP / UNAM).',
      },
      verified: 'Verified',
      pending: 'Pending upload',
      btnView: 'View Official Credential',
      pendingNotes: 'Upload in progress',
    },
    interests: {
      tag: 'Beyond Code',
      title: 'Interests & Hobbies',
      subtitle: 'Not everything is code: what drives me, movies on the big screen, gaming, collectibles, and my loyal feline supervisor.',
    },
    contact: {
      tag: "Let's Talk",
      title: "Let's Connect",
      subtitle: 'Have a proposal, an exciting project in mind, or want to collaborate? Reach out through any of these channels:',
      emailLabel: 'Email Address',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      tagline: 'QA Automation Lead Jr & SDET • Professional Portfolio • Ready for GitHub Pages',
      rights: 'All rights reserved.',
    },
    scroll: {
      title: 'Back to top',
    },
  },
};
