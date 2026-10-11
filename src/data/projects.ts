export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'React' | 'JavaScript' | 'Herramientas' | 'En Proceso';
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: 'Completado' | 'En Desarrollo' | 'Próximamente';
  // Metadatos estilo YouTube
  views: string;
  uploadedTime: string;
  duration: string;
  badgeTag: string;
  thumbnailGradient: string;
  likes: number;
}

export const PERSONAL_INFO = {
  name: 'Alan Jmz',
  handle: '@AllanJMZ',
  title: 'Desarrollador Web & Creador de Software',
  bio: 'Creo aplicaciones web modernas, interactivas y funcionales. Especializado en JavaScript, TypeScript, React y experiencias de usuario fluidas.',
  subscribers: '1.4k suscriptores • 15 proyectos',
  location: 'Remoto / Disponible',
  githubUser: 'AllanJMZ',
  githubRepo: 'PortfolioAlanJmz.NCH',
  githubUrl: 'https://github.com/AllanJMZ',
  githubRepoUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
  pagesUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
  linkedinUrl: 'https://linkedin.com/in/allanjmz',
  email: 'contacto@alanjmz.dev',
};

// 💡 Aquí puedes agregar, editar o quitar tus propios proyectos fácilmente:
export const PROJECTS_DATA: Project[] = [
  {
    id: 'proyecto-1',
    title: 'Mi Primer Proyecto Web - Aplicación Interactiva y Responsiva',
    description: 'Una aplicación web interactiva desarrollada para resolver una necesidad específica. Con interfaz fluida, navegación intuitiva y persistencia de datos.',
    category: 'Frontend',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: true,
    status: 'Completado',
    views: '14.2k vistas',
    uploadedTime: 'hace 3 días',
    duration: '04:20',
    badgeTag: 'LIVE DEMO',
    thumbnailGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)',
    likes: 342,
  },
  {
    id: 'proyecto-2',
    title: 'Dashboard de Control & Telemetría en Tiempo Real con React',
    description: 'Tablero analítico con visualización de métricas clave, filtros dinámicos y gráficas vectoriales interactivas para análisis de datos.',
    category: 'React',
    tags: ['React', 'TypeScript', 'CSS Moderno', 'Vite'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: true,
    status: 'En Desarrollo',
    views: '8.9k vistas',
    uploadedTime: 'hace 1 semana',
    duration: '08:45',
    badgeTag: 'REACT 19',
    thumbnailGradient: 'linear-gradient(135deg, #312e81 0%, #6366f1 50%, #8b5cf6 100%)',
    likes: 218,
  },
  {
    id: 'proyecto-3',
    title: 'Gestor de Tareas & CRUD Inteligente con Almacenamiento Local',
    description: 'Herramienta de productividad para organizar flujos de trabajo con persistencia local en el navegador, ordenamiento dinámico y búsqueda instantánea.',
    category: 'Herramientas',
    tags: ['JavaScript', 'LocalStorage', 'CSS Grid', 'DOM API'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: false,
    status: 'Completado',
    views: '5.1k vistas',
    uploadedTime: 'hace 2 semanas',
    duration: '05:12',
    badgeTag: 'TOOL',
    thumbnailGradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 50%, #14b8a6 100%)',
    likes: 184,
  },
  {
    id: 'proyecto-4',
    title: 'Catálogo de Productos con Filtros Multidimensionales',
    description: 'E-commerce interactivo con carrito de compras reactivo, validación de formulario de checkout y cálculo dinámico de subtotales.',
    category: 'JavaScript',
    tags: ['JavaScript', 'ES6+', 'CSS Flexbox', 'Web APIs'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: false,
    status: 'Completado',
    views: '11.5k vistas',
    uploadedTime: 'hace 3 semanas',
    duration: '06:30',
    badgeTag: 'VANILLA JS',
    thumbnailGradient: 'linear-gradient(135deg, #78350f 0%, #f59e0b 50%, #d97706 100%)',
    likes: 295,
  },
  {
    id: 'proyecto-5',
    title: 'Próxima Gran Aplicación Web - Arquitectura Modular en Camino',
    description: 'Nuevo proyecto en etapa de diseño conceptual y prototipado. Próximamente disponible con demostración en vivo y código abierto.',
    category: 'En Proceso',
    tags: ['TypeScript', 'API REST', 'Node.js'],
    demoUrl: '#',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: false,
    status: 'Próximamente',
    views: 'Próximamente',
    uploadedTime: 'estreno pronto',
    duration: 'PREVIEW',
    badgeTag: 'EN PROCESO',
    thumbnailGradient: 'linear-gradient(135deg, #831843 0%, #ec4899 50%, #f43f5e 100%)',
    likes: 92,
  },
];

export const SKILLS_LIST = [
  { category: 'Desarrollo Web & Frontend', items: ['HTML5 Semántico', 'CSS3 Moderno & Flexbox/Grid', 'JavaScript Moderno (ES6+)', 'TypeScript', 'React'] },
  { category: 'Diseño & Experiencia de Usuario', items: ['Estilo YouTube UI/UX', 'Diseño 100% Responsivo', 'Modo Oscuro / Claro', 'Componentes Modulares'] },
  { category: 'Herramientas & Despliegue', items: ['Git & GitHub', 'GitHub Pages (Automático)', 'Vite', 'Terminal & npm'] },
];
