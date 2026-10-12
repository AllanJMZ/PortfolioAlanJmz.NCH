
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
- **Botones Estilo Cápsula 
  - Botones primarios en forma de píldora de alto contraste 
  - Botones secundarios traslúcidos con bordes sutiles
  - Botón circular para el acceso al repositorio en cada tarjeta.
  - Píldoras de filtrado por categoría
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
│   │   └── projects.ts         # PROYECTOS
│   ├── App.css                 # Estilos específicos de cada sección
│   ├── App.tsx                 # Conector principal de todas las secciones
│   └── index.css               # Diseño global, variables y botones estilo YouTube
├── index.html                  # Encabezado HTML y fuentes tipográficas
├── vite.config.ts              # Configuración con rutas relativas para GitHub Pages
└── README.md                   # Esta guía paso a paso
```

---



