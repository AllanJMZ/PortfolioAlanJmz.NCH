export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'QA Automation' | 'Mobile Testing' | 'API & Backend' | 'Desarrollo Web';
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: 'Completado' | 'En Desarrollo' | 'Próximamente';
}

export const PERSONAL_INFO = {
  fullName: 'Edgar Allan Jiménez Cruz',
  name: 'Allan Jiménez',
  title: 'Ingeniero de QA Automation & QA Lead | SDET',
  shortTitle: 'QA Lead & SDET',
  bio: 'Ingeniero de QA Automation y QA Lead con sólida trayectoria en el diseño, ejecución y liderazgo de estrategias de pruebas de software para aplicaciones web, móviles y arquitecturas backend/APIs. Especializado en frameworks de automatización con Playwright, Appium, Selenium y TypeScript/Java/Python.',
  currentCompany: 'Grupo Bimbo',
  currentRole: 'QA Lead Analyst & QA Automation Lead',
  education: 'Licenciatura en Informática — UNAM (Titulado con Cédula Profesional)',
  location: 'CDMX, México • Remoto / Híbrido',
  githubUser: 'AllanJMZ',
  githubRepo: 'PortfolioAlanJmz.NCH',
  githubUrl: 'https://github.com/AllanJMZ',
  githubRepoUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
  pagesUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
  linkedinUrl: 'https://www.linkedin.com/in/allan-jimenez-02520726b',
  email: 'eallan.jcruz@gmail.com',
  phone: '5551892244',
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  current?: boolean;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Grupo Bimbo',
    role: 'QA Lead Analyst & QA Automation Lead',
    period: 'Octubre 2023 – Presente',
    highlights: [
      'Lidero las actividades estratégicas de QA coordinando equipos multidisciplinarios en proyectos internacionales (España, Chile, Colombia, Ecuador, Guatemala y Panamá).',
      'Diseño e implemento frameworks de automatización E2E para Web y Móviles (Android/iOS) con Playwright, Appium y TypeScript/Java.',
      'Ejecuto validación profunda de servicios backend REST y XML (Postman, validación de payloads y consultas complejas en bases de datos SQL).',
      'Análisis técnico de causa raíz mediante registros en Android con Logcat y optimización continua con Lean & Six Sigma.'
    ],
    current: true,
  },
  {
    company: 'TSOFT',
    role: 'QA Tester Analyst',
    period: 'Mayo 2023 – Octubre 2023',
    highlights: [
      'Diseño y ejecución de matrices de prueba funcionales en Jira y Zephyr en entornos Ágiles (Scrum).',
      'Pruebas de Integración, Regresión, UAT y UX; gestión y seguimiento al ciclo de vida completo de defectos.'
    ],
  },
  {
    company: 'DGPFE - UNAM',
    role: 'Desarrollador & QA (Servicio Social)',
    period: 'Agosto 2023 – Marzo 2024',
    highlights: [
      'Desarrollo de componentes web (JS, HTML, CSS) y bases de datos MySQL para la plataforma de e-commerce de librerías UNAM.',
      'Diseño de pruebas funcionales e implementación de estándares de QA para el sistema de librerías.'
    ],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  tag: string;
  credentialUrl?: string;
  status: 'Verificada' | 'Pendiente';
  featured?: boolean;
  notes?: string;
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'diplomado-automation',
    title: 'Diplomado en Automatización de Pruebas',
    issuer: 'Lite Thinking Institute of Technology',
    tag: 'QA Automation',
    credentialUrl: 'https://badge.litethinking.com/credentials-badge?badge=d9ce0e87-fcde-4a88-b472-2e437669a085',
    status: 'Verificada',
    featured: true,
  },
  {
    id: 'istqb-ctfl',
    title: 'ISTQB Certified Tester Foundation Level (CTFL)',
    issuer: 'ISTQB / Credly',
    tag: 'Certificación Internacional',
    credentialUrl: 'https://www.credly.com/badges/266787bc-77a5-4da5-b3d1-89d4f100fc21/public_url',
    status: 'Verificada',
    featured: true,
  },
  {
    id: 'ibm-data-science',
    title: 'IBM Enterprise Data Science',
    issuer: 'IBM / Credly',
    tag: 'Data Science & AI',
    credentialUrl: 'https://www.credly.com/badges/2f472ce4-b255-4840-95ae-76685e65ca76/linked_in_profile',
    status: 'Verificada',
    featured: true,
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing (IBM Journey to Cloud)',
    issuer: 'IBM Cloud',
    tag: 'Cloud & Arquitectura',
    credentialUrl: 'https://drive.google.com/file/d/1oZ8gMlHrZmEc_n2Owv_aODn7RXtQ_3C7/view',
    status: 'Verificada',
  },
  {
    id: 'english-b2',
    title: 'Certificación de Inglés Nivel B2',
    issuer: 'Acreditación Oficial',
    tag: 'Idiomas',
    status: 'Pendiente',
    notes: 'Certificación en proceso de carga',
  },
  {
    id: 'scrum-fundamentals',
    title: 'Scrum Fundamentals Certified (SFPC)',
    issuer: 'CertiProf / Scrum',
    tag: 'Metodologías Ágiles',
    status: 'Verificada',
  },
];

export const EDUCATION_DATA = [
  {
    degree: 'Licenciatura en Informática',
    institution: 'Universidad Nacional Autónoma de México (UNAM)',
    status: 'Titulado con Cédula Profesional',
  },
  {
    degree: 'Diplomado en Automatización de Pruebas',
    institution: 'Lite Thinking Institute of Technology',
    status: 'Graduado & Certificado',
  },
  {
    degree: 'Diplomado en E-Commerce',
    institution: 'UNAM (Facultad de Contaduría y Administración)',
    status: 'Completado',
  },
];

export const SKILLS_LIST = [
  {
    category: 'Automatización & Testing E2E',
    items: ['Playwright (TypeScript)', 'Selenium WebDriver (Java/Python)', 'Appium (Android & iOS)', 'Karate Framework', 'TestNG']
  },
  {
    category: 'Lenguajes de Programación & BD',
    items: ['TypeScript', 'Java', 'Python', 'JavaScript (ES6+)', 'SQL Avanzado (MySQL, Oracle DB)']
  },
  {
    category: 'Backend, APIs & Móvil',
    items: ['Pruebas REST & SOAP/XML', 'Postman & Automatización de Colecciones', 'Validación de Payloads', 'Análisis de Logs (Logcat Android)', 'Inspección de UI Elements']
  },
  {
    category: 'Metodologías & Gestión de Calidad',
    items: ['ISTQB Standards', 'STLC & SDLC', 'Scrum / Agile Framework', 'Jira & Zephyr', 'CI/CD Pipelines (GitHub Actions)', 'Lean & Six Sigma (Causa Raíz)']
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'playwright-framework',
    title: 'Framework E2E con Playwright & TypeScript',
    description: 'Arquitectura de automatización de pruebas web con Page Object Model (POM), ejecución paralela, generación automática de reportes HTML e integración CI/CD.',
    category: 'QA Automation',
    tags: ['Playwright', 'TypeScript', 'POM', 'CI/CD', 'GitHub Actions'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'appium-mobile',
    title: 'Framework de Automatización Móvil con Appium',
    description: 'Suite de pruebas automatizadas para aplicaciones móviles Android e iOS. Inspección de elementos dinámicos, control de emuladores y captura de trazas Logcat.',
    category: 'Mobile Testing',
    tags: ['Appium', 'Android/iOS', 'Java', 'Logcat', 'Mobile E2E'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'api-rest-karate',
    title: 'Suite de Validación de APIs REST & Backend',
    description: 'Validación automatizada de endpoints RESTful: esquemas JSON, status codes, tiempos de respuesta, autenticación por tokens y aserciones de base de datos SQL.',
    category: 'API & Backend',
    tags: ['Postman', 'Karate Framework', 'REST APIs', 'SQL', 'JSON Schema'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'selenium-testng',
    title: 'Framework de Pruebas Web con Selenium & Java',
    description: 'Suite de regresión automatizada implementando Selenium WebDriver y TestNG, con parametrización de datos y aserciones robustas para flujos críticos.',
    category: 'QA Automation',
    tags: ['Selenium WebDriver', 'Java', 'TestNG', 'Data-Driven'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: false,
    status: 'Completado',
  },
  {
    id: 'unam-ecommerce-qa',
    title: 'Plataforma E-Commerce UNAM & Control de Calidad',
    description: 'Desarrollo de módulos interactivos web y ejecución de matrices de pruebas funcionales para el sistema de comercio electrónico de librerías UNAM.',
    category: 'Desarrollo Web',
    tags: ['JavaScript', 'MySQL', 'Pruebas Funcionales', 'UNAM'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: false,
    status: 'Completado',
  },
];

export interface InterestItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  iconType: 'cat' | 'scifi' | 'gaming' | 'coffee';
  image?: string;
  imageAlt?: string;
  badge?: string;
  isSpecial?: boolean;
}

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: 'cat-qa',
    title: 'Michi Elegante (QA & Chief Officer)',
    tag: 'Compañero Dev',
    description: 'Mi supervisor felino de código en traje de gala. Encargado oficial de vigilar los despliegues a producción con cero tolerancia a los errores y máxima elegancia.',
    iconType: 'cat',
    image: './meme-cat.png',
    imageAlt: 'Gatito formal con traje y corbata',
    badge: '100% Sin Bugs',
    isSpecial: true,
  },
  {
    id: 'scifi-anime',
    title: 'Estética Evangelion & Sci-Fi',
    tag: 'Diseño & Inspiración',
    description: 'Apasionado por el anime de mechas, el cyberpunk y las interfaces retro-futuristas. La paleta de este sitio está directamente inspirada en el EVA-01.',
    iconType: 'scifi',
    badge: 'EVA-01 Vibe',
  },
  {
    id: 'gaming-logic',
    title: 'Gaming & Estrategia',
    tag: 'Lógica & Desafíos',
    description: 'Entusiasta de los juegos de táctica, acertijos y resolución de problemas interactivos que ejercitan el pensamiento lateral y la concentración.',
    iconType: 'gaming',
    badge: 'Pensamiento Lateral',
  },
  {
    id: 'setup-coffee',
    title: 'Setup Minimalista & Café',
    tag: 'Productividad',
    description: 'Cuidar cada detalle del entorno de trabajo: atajos de teclado, automatización, código legible y un café recién preparado para mantener el foco.',
    iconType: 'coffee',
    badge: 'Flujo Limpio',
  },
];
