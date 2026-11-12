export type ProjectCategory =
  | 'QA Automation'
  | 'Mobile Testing'
  | 'API & Backend'
  | 'Desarrollo Web';

export interface ProjectArchitecture {
  summary: { es: string; en: string };
  layers: { es: string[]; en: string[] };
  validationFocus: { es: string[]; en: string[] };
  sampleCommand: string;
}

export interface ProjectItemI18n {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  category: ProjectCategory;
  focusKind?: 'qa' | 'web';
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  repoStatus: 'in_prep' | 'published';
  featured?: boolean;
  status: 'Completado' | 'En Desarrollo' | 'Próximamente';
  architecture: ProjectArchitecture;
}

export interface InterestItemI18n {
  id: string;
  title: { es: string; en: string };
  tag: { es: string; en: string };
  description: { es: string; en: string };
  iconType: 'cat' | 'scifi' | 'gaming' | 'coffee' | 'cinema' | 'tcg' | 'mindset';
  image?: string;
  imageAlt?: { es: string; en: string };
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
    repoStatus: 'in_prep',
    featured: true,
    status: 'Completado',
    architecture: {
      summary: {
        es: 'Suite modular E2E diseñada para desacoplar selectores, flujos de negocio y aserciones, con trazas y capturas automáticas ante fallos en CI.',
        en: 'Modular E2E suite designed to decouple selectors, business flows, and assertions, with automatic traces and failure screenshots in CI.',
      },
      layers: {
        es: [
          'pages/ — Page Objects tipados con localizadores resilientes por rol y data-testid',
          'fixtures/ — Sesiones autenticadas reutilizables y aislamiento por worker',
          'tests/ — Suites de humo y regresión paralelizables por etiqueta',
          '.github/workflows/ — Pipeline CI con publicación de reporte HTML y trace viewer',
        ],
        en: [
          'pages/ — Typed Page Objects with resilient role-based and data-testid locators',
          'fixtures/ — Reusable authenticated sessions and per-worker state isolation',
          'tests/ — Tag-driven smoke and regression suites running in parallel',
          '.github/workflows/ — CI pipeline publishing HTML reports and trace artifacts',
        ],
      },
      validationFocus: {
        es: [
          'Auto-esperas sin sleeps fijos para reducir falsos positivos (flaky tests)',
          'Cobertura cross-browser (Chromium, Firefox, WebKit) y viewport móvil',
          'Interceptación de red y validación de respuestas HTTP críticas durante flujos UI',
        ],
        en: [
          'Auto-waiting assertions without fixed sleeps to prevent flaky tests',
          'Cross-browser coverage (Chromium, Firefox, WebKit) and mobile viewports',
          'Network interception and critical HTTP status assertions during UI flows',
        ],
      },
      sampleCommand: 'npx playwright test --project=chromium --workers=4',
    },
  },
  {
    id: 'magic-alexa-ecommerce',
    title: {
      es: 'Tienda E-Commerce Full-Stack — MagicCalexa BoliShop',
      en: 'Full-Stack E-Commerce Platform — MagicCalexa BoliShop',
    },
    description: {
      es: 'Proyecto de desarrollo web end-to-end en producción con React 19, TypeScript, Tailwind CSS v4 y Supabase. Incluye catálogo responsive con buscador y filtros, modal con zoom multifoto, panel administrativo (/admin) con carga masiva y cierre de pedido por WhatsApp.',
      en: 'End-to-end web development project in production powered by React 19, TypeScript, Tailwind CSS v4, and Supabase. Includes responsive catalog search & filters, zoomable multi-photo modal, bulk import /admin dashboard, and direct WhatsApp checkout.',
    },
    category: 'Desarrollo Web',
    focusKind: 'web',
    tags: ['React 19', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite', 'Vercel'],
    repoUrl: 'https://github.com/AllanJMZ/MagicAlexa',
    liveUrl: 'https://magic-alexa.vercel.app',
    repoStatus: 'published',
    featured: true,
    status: 'Completado',
    architecture: {
      summary: {
        es: 'Aplicación web full-stack enfocada en experiencia de compra, diseño modular por hooks/páginas y backend BaaS con Supabase (PostgreSQL, Auth JWT y Storage), desplegada en producción en Vercel.',
        en: 'Full-stack web application focused on storefront UX, modular page/hook architecture, and Supabase BaaS (PostgreSQL, JWT Auth, and Storage), deployed live on Vercel.',
      },
      layers: {
        es: [
          'src/pages/ — Rutas públicas (Home, Catalog, Shipping) y panel protegido /admin con React Router',
          'src/components/ — ProductCard multifoto, ProductDetailModal con zoom, BulkImportAdmin y BulkPhotosAdmin',
          'src/hooks/ — Estado y lógica de dominio (useSupabase, useProductViews, useFeaturedProducts, useSiteBackground)',
          'src/lib/ — Cliente Supabase (PostgreSQL + Storage), traducción i18next (ES/EN) y checkout vía WhatsApp',
        ],
        en: [
          'src/pages/ — Public storefront routes (Home, Catalog, Shipping) and JWT-protected /admin via React Router',
          'src/components/ — Multi-photo ProductCard, zoom ProductDetailModal, BulkImportAdmin, and BulkPhotosAdmin',
          'src/hooks/ — Domain hooks & state (useSupabase, useProductViews, useFeaturedProducts, useSiteBackground)',
          'src/lib/ — Supabase client (PostgreSQL + Storage), i18next (ES/EN), and WhatsApp checkout builders',
        ],
      },
      validationFocus: {
        es: [
          'Interfaz responsive en React 19 + Tailwind CSS v4 con tema claro/oscuro, bilingüismo i18next y fondo optimizado a 60 FPS',
          'Catálogo dinámico con ordenamiento por vistas/precio, ranking Top 5 en vivo y fallback reactivo en localStorage',
          'Panel /admin autenticado con CRUD completo de catálogo, métodos de envío y carga masiva de productos/fotos',
        ],
        en: [
          'Responsive UI in React 19 + Tailwind CSS v4 supporting light/dark themes, ES/EN i18next, and 60 FPS backgrounds',
          'Dynamic storefront featuring price/view sorting, live Top-5 ranking, and reactive localStorage fallback persistence',
          'JWT-authenticated /admin panel with catalog & shipping CRUD plus bulk CSV and multi-image uploads',
        ],
      },
      sampleCommand: 'npm run build  # tsc -b && vite build -> Vercel',
    },
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
    repoStatus: 'in_prep',
    featured: true,
    status: 'Completado',
    architecture: {
      summary: {
        es: 'Framework móvil multiplataforma orientado a pruebas funcionales en dispositivos reales y emuladores Android/iOS con diagnóstico de logs.',
        en: 'Cross-platform mobile framework for functional verification on Android/iOS emulators and real devices with structured log diagnostics.',
      },
      layers: {
        es: [
          'drivers/ — Factory de capabilities para UiAutomator2 (Android) y XCUITest (iOS)',
          'screens/ — Screen Object Model con gestos táctiles, scroll y manejo de permisos nativos',
          'utils/ — Captura de trazas ADB Logcat y screenshots al fallar un caso',
          'testng.xml — Orquestación de suites por plataforma y dispositivo objetivo',
        ],
        en: [
          'drivers/ — Capability factory for UiAutomator2 (Android) and XCUITest (iOS)',
          'screens/ — Screen Object Model covering touch gestures, scrolling, and native permissions',
          'utils/ — ADB Logcat trace capture and failure screenshot hooks',
          'testng.xml — Suite orchestration per target platform and device profile',
        ],
      },
      validationFocus: {
        es: [
          'Inspección de jerarquías nativas e híbridas (WebView / context switching)',
          'Verificación de estados de red, rotación de pantalla e interrupciones',
          'Correlación de fallos visuales con excepciones registradas en Logcat',
        ],
        en: [
          'Native and hybrid UI hierarchy inspection (WebView / context switching)',
          'Network state transitions, orientation changes, and interruption resilience',
          'Correlating UI failures with exceptions captured in ADB Logcat',
        ],
      },
      sampleCommand: 'mvn test -DsuiteXmlFile=testng-android.xml -Dplatform=Android',
    },
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
    repoStatus: 'in_prep',
    featured: true,
    status: 'Completado',
    architecture: {
      summary: {
        es: 'Estrategia de pruebas de contrato, negocio y persistencia en capa API utilizando escenarios BDD en Karate, colecciones Postman y verificación SQL.',
        en: 'Contract, business-logic, and persistence testing strategy at the API layer combining Karate BDD scenarios, Postman collections, and SQL checks.',
      },
      layers: {
        es: [
          'features/ — Escenarios Gherkin reutilizables con autenticación Bearer/OAuth encapsulada',
          'schemas/ — Contratos JSON Schema para validar tipos, campos obligatorios y nulos',
          'data/ — Payloads dinámicos para casos positivos, límites y negativos (400/401/404/422)',
          'db/ — Validación cruzada contra MySQL / Oracle DB para confirmar integridad de registros',
        ],
        en: [
          'features/ — Reusable Gherkin scenarios with encapsulated Bearer/OAuth auth',
          'schemas/ — JSON Schema contracts enforcing types, required keys, and nullability',
          'data/ — Dynamic payloads covering happy paths, boundaries, and negative cases (4xx)',
          'db/ — Cross-checks against MySQL / Oracle DB to confirm persisted state integrity',
        ],
      },
      validationFocus: {
        es: [
          'Validación estricta de estructura JSON, headers y códigos HTTP esperados',
          'Pruebas encadenadas (POST -> GET -> PATCH -> DELETE) con limpieza de datos',
          'Verificación de tiempos de respuesta (SLA) y consistencia directa en base de datos',
        ],
        en: [
          'Strict validation of JSON shape, headers, and expected HTTP status codes',
          'Chained CRUD flows (POST -> GET -> PATCH -> DELETE) with test-data cleanup',
          'Response-time threshold checks (SLA) and direct SQL persistence verification',
        ],
      },
      sampleCommand: 'mvn test -Dtest=ApiRegressionRunner -Dkarate.env=qa',
    },
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
    repoStatus: 'in_prep',
    featured: false,
    status: 'Completado',
    architecture: {
      summary: {
        es: 'Framework clásico enterprise en Java + Selenium 4 orientado a regresión determinista con separación estricta entre datos de prueba, páginas y runners.',
        en: 'Classic enterprise Java + Selenium 4 framework focused on deterministic regression with clean separation between test data, page objects, and runners.',
      },
      layers: {
        es: [
          'base/ — Gestión thread-safe de WebDriver (ThreadLocal) y esperas explícitas FluentWait',
          'pages/ — Page Objects desacoplados con métodos de acción encadenables',
          'providers/ — DataProviders de TestNG alimentados por matrices CSV/JSON',
          'listeners/ — Listeners de TestNG para reportes, reintentos controlados y evidencias',
        ],
        en: [
          'base/ — Thread-safe WebDriver lifecycle (ThreadLocal) and explicit FluentWait helpers',
          'pages/ — Decoupled Page Objects exposing composable user-journey actions',
          'providers/ — TestNG DataProviders fed by external CSV/JSON test matrices',
          'listeners/ — TestNG listeners for reporting, controlled retries, and failure captures',
        ],
      },
      validationFocus: {
        es: [
          'Flujos críticos data-driven con combinaciones válidas, bordes y mensajes de error',
          'Aislamiento de sesiones para ejecución paralela segura en TestNG',
          'Trazabilidad clara por caso de prueba para auditoría de regresión',
        ],
        en: [
          'Data-driven critical paths covering valid inputs, boundaries, and error handling',
          'Session isolation enabling safe parallel execution in TestNG',
          'Clear per-case traceability for regression sign-off',
        ],
      },
      sampleCommand: 'mvn clean test -DsuiteXmlFile=regression-testng.xml',
    },
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
    repoStatus: 'in_prep',
    featured: false,
    status: 'Completado',
    architecture: {
      summary: {
        es: 'Combinación de implementación web transaccional y aseguramiento de calidad funcional sobre catálogo, carrito, checkout y consistencia en MySQL.',
        en: 'Combined transactional web implementation and functional QA coverage across catalog search, cart state, checkout rules, and MySQL integrity.',
      },
      layers: {
        es: [
          'frontend/ — Módulos interactivos en JavaScript para búsqueda, filtros y carrito',
          'database/ — Consultas y validaciones de stock, precios y órdenes en MySQL',
          'qa-matrices/ — Casos de prueba funcionales (STLC), criterios de aceptación y evidencia',
          'bug-tracking/ — Registro de defectos con pasos reproducibles, severidad y causa raíz',
        ],
        en: [
          'frontend/ — Interactive JavaScript modules for catalog search, filters, and cart',
          'database/ — MySQL queries validating stock levels, pricing, and order persistence',
          'qa-matrices/ — Functional STLC test matrices, acceptance criteria, and test evidence',
          'bug-tracking/ — Defect reports with reproducible steps, severity, and root-cause notes',
        ],
      },
      validationFocus: {
        es: [
          'Cálculo correcto de subtotales, descuentos y disponibilidad de inventario en compra',
          'Pruebas de regresión tras cambios en módulos de catálogo y flujo de pedido',
          'Validación de entradas de usuario y consistencia relacional en MySQL',
        ],
        en: [
          'Accurate subtotal, discount, and inventory checks throughout checkout',
          'Regression verification after catalog and order-flow updates',
          'User-input validation and relational consistency checks in MySQL',
        ],
      },
      sampleCommand: 'STLC: Diseño de matriz funcional + validación SQL en MySQL',
    },
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
    imageAlt: {
      es: 'Gatito formal con traje y corbata',
      en: 'Formal tuxedo cat wearing a suit and tie',
    },
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
      es: 'Persona dedicada, persistente y motivada en encontrar siempre la forma de lograr las metas. Siempre al día con las nuevas tecnologías y lo más actual.',
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
    notes: {
      es: 'Acreditación completada • Validación disponible a solicitud',
      en: 'Completed credential • Verification available upon request',
    },
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
      es: 'Desarrollo Web & Frontend',
      en: 'Web Development & Frontend',
    },
    items: ['React 19 & TypeScript', 'JavaScript (ES6+), HTML5 & CSS3', 'Tailwind CSS & Diseño Responsivo', 'Vite, React Router & i18n (ES/EN)', 'Accesibilidad UI & Flujos E-Commerce'],
  },
  {
    category: {
      es: 'Backend, APIs, Lenguajes & BD',
      en: 'Backend, APIs & Databases',
    },
    items: ['Java, Python & TypeScript', 'APIs REST / SOAP & Postman', 'SQL (MySQL, Oracle DB) & Supabase', 'Validación de Payloads & JSON Schema', 'Análisis Móvil & Logs (Android Logcat)'],
  },
  {
    category: {
      es: 'Metodologías & Gestión de Calidad',
      en: 'Methodologies & Quality Engineering',
    },
    items: ['ISTQB Standards (CTFL)', 'STLC, SDLC & Scrum / Agile', 'Jira, Zephyr & Gestión de Defectos', 'CI/CD (GitHub Actions, Vercel)', 'Lean & Six Sigma (Causa Raíz)'],
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
      themeAria: 'Cambiar tema visual',
      langToggle: 'Cambiar idioma (Switch to English)',
      langAria: 'Seleccionar idioma',
      githubTitle: 'Ver perfil en GitHub',
      menuOpen: 'Abrir menú de navegación',
      menuClose: 'Cerrar menú de navegación',
    },
    hero: {
      badge: 'Disponible • QA Automation, SDET & Desarrollo Web',
      role: 'Ingeniero de QA Automation, SDET & Desarrollador Web',
      shortRole: 'QA Automation & Web Dev',
      coreTag: 'UNAM • ISTQB CTFL',
      coreCaption: 'Cédula Prof. • QA & Desarrollo Web',
      aboutTag: 'Sobre Mí',
      bio: 'Ingeniero en Informática (UNAM, título y cédula profesional) con experiencia en QA Automation, liderazgo técnico QA Jr / SDET y Desarrollo Web Full-Stack. Construyo aplicaciones web funcionales con React, TypeScript, Tailwind y Supabase/SQL junto con frameworks escalables de automatización E2E, móvil y APIs.',
      educationLabel: 'Título & Cédula Profesional',
      educationValue: 'Lic. en Informática / Computación (UNAM)',
      emailLabel: 'Correo directo',
      githubLabel: 'GitHub',
      locationLabel: 'Ubicación',
      locationValue: 'CDMX, México • Remoto / Híbrido',
      btnProjects: 'Ver Proyectos',
      btnCertifications: 'Certificaciones',
      btnContact: 'Contactar',
      scrollAria: 'Desplazarse a proyectos web y frameworks QA',
      dossierStack: 'React & TypeScript · Web E2E · Mobile · REST API · Supabase',
    },
    projects: {
      tag: 'Catálogo de Proyectos',
      title: 'Proyectos Web & Frameworks QA',
      subtitle: 'Aplicaciones web full-stack en producción, arquitecturas de automatización E2E/móvil y suites de validación de APIs.',
      searchLabel: 'Buscar proyectos por tecnología o nombre',
      searchPlaceholder: 'Buscar por tecnología (React, Playwright, Supabase, Appium, SQL...)',
      categoryAll: 'Todos',
      categoryLabels: {
        'QA Automation': 'QA Automation',
        'Mobile Testing': 'Mobile Testing',
        'API & Backend': 'API & Backend',
        'Desarrollo Web': 'Desarrollo Web',
      } as Record<ProjectCategory, string>,
      showing: 'Mostrando',
      of: 'de',
      countWord: 'proyectos',
      clear: 'Limpiar filtros',
      emptyTitle: 'No se encontraron proyectos',
      emptySubtitle: 'Intenta buscar con otros términos o selecciona otra categoría.',
      btnArchitecture: 'Arquitectura técnica',
      btnLiveDemo: 'Abrir sitio en vivo',
      btnRepoPublished: 'Repositorio público en GitHub',
      btnCodeInPrep: 'Repositorio dedicado en preparación (abrir perfil de GitHub)',
      repoInPrepBadge: 'Repo en preparación',
      repoPublishedBadge: 'Repo público • Sitio en vivo',
      statusCompleted: '✓ Completado',
      statusInDev: 'En Desarrollo',
      statusUpcoming: '⏳ Próximamente',
      modalTitleLabel: 'Inspección de arquitectura',
      modalWebTitleLabel: 'Arquitectura de desarrollo web',
      modalLayersTitle: 'Estructura y capas clave',
      modalValidationTitle: 'Cobertura y criterios QA',
      modalWebFocusTitle: 'Funcionalidades y arquitectura web',
      modalCommandTitle: 'Ejecución representativa',
      modalWebCommandTitle: 'Build & despliegue',
      modalRepoStatusInPrep: 'Repositorio público individual en preparación; puedes explorar el perfil general en GitHub mientras se publica.',
      modalRepoStatusPublished: 'Código fuente público disponible en GitHub y despliegue funcional activo en producción.',
      modalGithubProfile: 'Explorar GitHub de Allan',
      modalRepoOpen: 'Abrir repositorio en GitHub',
      modalLiveDemoOpen: 'Ver sitio en vivo',
      modalClose: 'Cerrar vista de arquitectura',
    },
    skills: {
      tag: 'Tecnologías & Habilidades',
      title: 'Habilidades y Herramientas',
      subtitle: 'Stack de desarrollo web moderno, frameworks de automatización, bases de datos y metodologías que aplico para construir software confiable.',
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
      verifiedNoLink: 'Validación disponible a solicitud',
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
      tagline: 'QA Automation, SDET & Desarrollo Web • CDMX, México',
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
      themeAria: 'Toggle visual theme',
      langToggle: 'Switch language (Cambiar a Español)',
      langAria: 'Select language',
      githubTitle: 'View GitHub profile',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    hero: {
      badge: 'Available • QA Automation, SDET & Web Dev',
      role: 'QA Automation Engineer, SDET & Web Developer',
      shortRole: 'QA Automation & Web Dev',
      coreTag: 'UNAM • ISTQB CTFL',
      coreCaption: 'Licensed B.S. • QA & Web Dev',
      aboutTag: 'About Me',
      bio: 'Computer Science graduate (UNAM, licensed B.S.) experienced in QA Automation, QA Lead Jr / SDET, and Full-Stack Web Development. I build functional production web apps using React, TypeScript, Tailwind, and Supabase/SQL alongside scalable E2E, mobile, and API automation frameworks.',
      educationLabel: 'Degree & Professional License',
      educationValue: 'B.S. in Computer Science / IT (UNAM) • Licensed Degree',
      emailLabel: 'Direct Email',
      githubLabel: 'GitHub',
      locationLabel: 'Location',
      locationValue: 'Mexico City • Remote / Hybrid',
      btnProjects: 'View Projects',
      btnCertifications: 'Certifications',
      btnContact: 'Contact Me',
      scrollAria: 'Scroll to web projects and QA frameworks',
      dossierStack: 'React & TypeScript · Web E2E · Mobile · REST API · Supabase',
    },
    projects: {
      tag: 'Project Catalog',
      title: 'Web Projects & QA Frameworks',
      subtitle: 'Production full-stack web applications, E2E/mobile test automation architectures, and REST API validation suites.',
      searchLabel: 'Search projects by technology or name',
      searchPlaceholder: 'Search by tech (React, Playwright, Supabase, Appium, SQL...)',
      categoryAll: 'All',
      categoryLabels: {
        'QA Automation': 'QA Automation',
        'Mobile Testing': 'Mobile Testing',
        'API & Backend': 'API & Backend',
        'Desarrollo Web': 'Web Development',
      } as Record<ProjectCategory, string>,
      showing: 'Showing',
      of: 'of',
      countWord: 'projects',
      clear: 'Clear filters',
      emptyTitle: 'No projects found',
      emptySubtitle: 'Try searching with different terms or selecting another category.',
      btnArchitecture: 'Technical architecture',
      btnLiveDemo: 'Open live site',
      btnRepoPublished: 'Public GitHub repository',
      btnCodeInPrep: 'Dedicated repository in preparation (open GitHub profile)',
      repoInPrepBadge: 'Repo in prep',
      repoPublishedBadge: 'Public repo • Live site',
      statusCompleted: '✓ Completed',
      statusInDev: 'In Development',
      statusUpcoming: '⏳ Coming Soon',
      modalTitleLabel: 'Architecture inspection',
      modalWebTitleLabel: 'Web architecture & product',
      modalLayersTitle: 'Key structure & layers',
      modalValidationTitle: 'QA coverage & assertions',
      modalWebFocusTitle: 'Key web engineering features',
      modalCommandTitle: 'Representative execution',
      modalWebCommandTitle: 'Build & deployment',
      modalRepoStatusInPrep: 'Standalone public repository is in preparation; explore the general GitHub profile in the meantime.',
      modalRepoStatusPublished: 'Public source code available on GitHub along with an active production deployment.',
      modalGithubProfile: "Explore Allan's GitHub",
      modalRepoOpen: 'Open repository on GitHub',
      modalLiveDemoOpen: 'Open live site',
      modalClose: 'Close architecture view',
    },
    skills: {
      tag: 'Tech Stack & Skills',
      title: 'Skills & Toolset',
      subtitle: 'Modern web development stack, test automation frameworks, databases, and engineering practices I use to ship reliable software.',
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
      verifiedNoLink: 'Verification available upon request',
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
      tagline: 'QA Automation, SDET & Web Development • Mexico City',
      rights: 'All rights reserved.',
    },
    scroll: {
      title: 'Back to top',
    },
  },
};
