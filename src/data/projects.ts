export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'JavaScript' | 'React' | 'Herramientas' | 'En Proceso';
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status: 'Completado' | 'En Desarrollo' | 'Próximamente';
}

export const PERSONAL_INFO = {
  name: 'Alan Jmz',
  title: 'Desarrollador Web & Creador de Software',
  bio: 'Creo aplicaciones web modernas, rápidas y funcionales. Apasionado por la buena experiencia de usuario, código limpio y soluciones prácticas.',
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
    title: 'Mi Primer Proyecto Web',
    description: 'Una aplicación web interactiva desarrollada para resolver una necesidad específica. Con interfaz fluida, navegación intuitiva y persistencia de datos.',
    category: 'Frontend',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: true,
    status: 'Completado',
  },
  {
    id: 'proyecto-2',
    title: 'Panel de Control / Dashboard en Tiempo Real',
    description: 'Tablero interactivo con visualización de métricas clave, filtros dinámicos y gráficas vectoriales para análisis de datos.',
    category: 'React',
    tags: ['React', 'TypeScript', 'CSS Moderno', 'Vite'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: true,
    status: 'En Desarrollo',
  },
  {
    id: 'proyecto-3',
    title: 'Gestor de Tareas & CRUD Inteligente',
    description: 'Herramienta de productividad para organizar flujos de trabajo con persistencia local en el navegador, ordenamiento dinámico y búsqueda instantánea.',
    category: 'Herramientas',
    tags: ['JavaScript', 'LocalStorage', 'CSS Grid'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: false,
    status: 'Completado',
  },
  {
    id: 'proyecto-4',
    title: 'Catálogo de Productos Interactivo',
    description: 'E-commerce responsivo con filtrado multidimensional, validación de formulario y cálculo dinámico de subtotales.',
    category: 'JavaScript',
    tags: ['JavaScript', 'ES6+', 'CSS Flexbox'],
    demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
    githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
    featured: false,
    status: 'Completado',
  },
  {
    id: 'proyecto-5',
    title: 'Próxima Aplicación Web Modular',
    description: 'Nuevo proyecto en etapa de diseño conceptual y prototipado. Próximamente disponible con demostración en vivo.',
    category: 'En Proceso',
    tags: ['TypeScript', 'API REST'],
    demoUrl: '#',
    githubUrl: 'https://github.com/AllanJMZ',
    featured: false,
    status: 'Próximamente',
  },
];

export const SKILLS_LIST = [
  { category: 'Desarrollo Web & Frontend', items: ['HTML5 Semántico', 'CSS3 Moderno (Flexbox & Grid)', 'JavaScript (ES6+)', 'TypeScript', 'React'] },
  { category: 'Diseño & Experiencia de Usuario', items: ['Diseño 100% Responsivo', 'Botones & Estilos Modernos', 'Modo Oscuro & Claro', 'Componentes Modulares'] },
  { category: 'Herramientas & Flujo de Trabajo', items: ['Git & GitHub', 'GitHub Pages (Automático)', 'Vite', 'Terminal & npm'] },
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

