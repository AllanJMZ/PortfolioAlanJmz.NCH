# 🌐 Portafolio Web Profesional • Alan Jmz (PortfolioAlanJmz.NCH)

Página web de portafolio moderna, limpia y responsive para mostrar tus proyectos personales en **GitHub Pages**. Cuenta con un diseño minimalista de alto contraste y **botones estilo cápsula (estilo YouTube)**.

Repositorio de GitHub:
👉 **`https://github.com/AllanJMZ/PortfolioAlanJmz.NCH.git`**

---

## 🧭 Índice
1. [Características del Diseño](#1-características-del-diseño)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Cómo probar la página en tu computadora](#3-cómo-probar-la-página-en-tu-computadora)
4. [Cómo agregar o modificar tus proyectos](#4-cómo-agregar-o-modificar-tus-proyectos)
5. [Cómo subirlo a tu repositorio y publicarlo en GitHub Pages](#5-cómo-subirlo-a-tu-repositorio-y-publicarlo-en-github-pages)

---

## 1. Características del Diseño

- **Diseño Limpio & Profesional:** Presentación clara de tu perfil como desarrollador, sin elementos innecesarios ni interfaces sobrecargadas.
- **Botones Estilo Cápsula (YouTube):**
  - Botones primarios en forma de píldora de alto contraste (*"Ver Mis Proyectos"*, *"Ver Demo"*).
  - Botones secundarios traslúcidos con bordes sutiles (*"Contactar"*, *"Mi GitHub"*).
  - Botón circular para el acceso al repositorio en cada tarjeta.
  - Píldoras de filtrado por categoría (*"Todos"*, *"Frontend"*, *"React"*, *"JavaScript"*, etc.).
- **Buscador y Filtros en tiempo real:** Encuentra cualquier proyecto escribiendo su nombre o tecnología.
- **Modo Oscuro y Modo Claro:** Alterna entre temas visuales con el botón superior.
- **100% Responsivo:** Adaptado a teléfonos móviles, tablets y computadoras.

---

## 2. Estructura del Proyecto

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatización para publicar en GitHub Pages
├── public/
│   └── favicon.svg             # Ícono de pestaña del navegador
├── src/
│   ├── components/
│   │   ├── BrandIcons.tsx            # Íconos de GitHub y LinkedIn
│   │   ├── CertificationsSection.tsx # Sección de certificaciones oficiales
│   │   ├── ContactSection.tsx        # Sección de contacto
│   │   ├── Footer.tsx                # Pie de página
│   │   ├── Hero.tsx                  # Tarjeta de presentación digital
│   │   ├── InterestsSection.tsx      # Sección de intereses personales y mascota
│   │   ├── Navbar.tsx                # Barra de navegación superior
│   │   ├── ProjectsSection.tsx       # Tarjetas y buscador de proyectos
│   │   ├── ScrollToTop.tsx           # Botón flotante para volver arriba
│   │   └── SkillsSection.tsx         # Panel de habilidades técnicas
│   ├── data/
│   │   └── projects.ts         # ⭐ AQUÍ AGREGAS Y MODIFICAS TUS PROYECTOS
│   ├── App.css                 # Estilos específicos de cada sección
│   ├── App.tsx                 # Conector principal de todas las secciones
│   └── index.css               # Diseño global, variables y botones estilo YouTube
├── index.html                  # Encabezado HTML y fuentes tipográficas
├── vite.config.ts              # Configuración con rutas relativas para GitHub Pages
└── README.md                   # Esta guía paso a paso
```

---

## 3. Cómo probar la página en tu computadora

1. Abre tu terminal en la carpeta `portfolio`.
2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre tu navegador en:
   👉 **`http://localhost:5173/`**
4. Para detener el servidor cuando termines, presiona `Ctrl + C` en la terminal.

---

## 4. Cómo agregar o modificar tus proyectos

Abre el archivo:
📁 **`src/data/projects.ts`**

### Modificar tus datos personales:
```typescript
export const PERSONAL_INFO = {
  name: 'Alan Jmz',
  title: 'Desarrollador Web & Creador de Software',
  bio: 'Creo aplicaciones web modernas, rápidas y funcionales...',
  githubUser: 'AllanJMZ',
  githubRepo: 'PortfolioAlanJmz.NCH',
  githubUrl: 'https://github.com/AllanJMZ',
  githubRepoUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH',
  pagesUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/',
  linkedinUrl: 'https://linkedin.com/in/allanjmz',
  email: 'contacto@alanjmz.dev',
};
```

### Agregar un nuevo proyecto:
En la lista `PROJECTS_DATA`, agrega o modifica un bloque como este:
```typescript
{
  id: 'mi-proyecto',
  title: 'Nombre de tu Proyecto',
  description: 'Descripción breve de lo que hace tu aplicación...',
  category: 'Frontend', // 'Frontend' | 'JavaScript' | 'React' | 'Herramientas' | 'En Proceso'
  tags: ['React', 'CSS', 'Vite'],
  demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/', // Link de la demo
  githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH', // Link al repositorio
  status: 'Completado', // 'Completado' | 'En Desarrollo' | 'Próximamente'
},
```

---

## 5. Cómo subirlo a tu repositorio y publicarlo en GitHub Pages

El repositorio local ya está conectado a tu repositorio remoto:
`https://github.com/AllanJMZ/PortfolioAlanJmz.NCH.git`

### Paso 1: Subir los cambios a GitHub
En tu terminal dentro de la carpeta `portfolio`, ejecuta:

```bash
git add .
git commit -m "Portafolio web limpio con botones estilo YouTube"
git branch -M main
git push -u origin main
```

---

### Paso 2: Activar GitHub Pages en GitHub (Solo 1 clic)
1. Entra a tu repositorio: [github.com/AllanJMZ/PortfolioAlanJmz.NCH](https://github.com/AllanJMZ/PortfolioAlanJmz.NCH)
2. Ve a **Settings** ➔ **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment** ➔ **Source**, selecciona:
   👉 **GitHub Actions**
4. ¡Listo! Tu página se publicará automáticamente en:
   🌐 **`https://allanjmz.github.io/PortfolioAlanJmz.NCH/`**
