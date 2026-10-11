# 📺 AlanTube • Portafolio Web Estilo YouTube (PortfolioAlanJmz.NCH)

¡Bienvenido a tu nuevo portafolio web interactivo con diseño idéntico a la interfaz de **YouTube**!

Este proyecto está personalizado para ti: **Alan Jmz** (`@AllanJMZ`), listo para alojarse en tu repositorio de GitHub:
👉 **`https://github.com/AllanJMZ/PortfolioAlanJmz.NCH.git`**

---

## 🧭 Índice
1. [¿Cómo funciona el diseño estilo YouTube?](#1-cómo-funciona-el-diseño-estilo-youtube)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Cómo probar la página en tu computadora](#3-cómo-probar-la-página-en-tu-computadora)
4. [Cómo agregar o modificar tus proyectos](#4-cómo-agregar-o-modificar-tus-proyectos)
5. [Paso a Paso: Cómo subirlo a tu repositorio y publicarlo en GitHub Pages](#5-paso-a-paso-cómo-subirlo-a-tu-repositorio-y-publicarlo-en-github-pages)

---

## 1. ¿Cómo funciona el diseño estilo YouTube?

Tu portafolio toma todos los elementos icónicos de la plataforma de YouTube y los transforma en tu vitrina de desarrollo:

- **Barra Superior (YouTube Header):**
  - Logotipo rojo **AlanTube** con distintivo regional `NCH`.
  - Barra de búsqueda central con botón de lupa y micrófono para filtrar proyectos al instante.
  - Botón rápido "+ Repositorio" conectado directamente a tu repo en GitHub.
  - Campana de notificaciones con insignia de aviso.
  - Selector de **Modo Oscuro / Modo Claro** (ícono de sol y luna).
  - Avatar de perfil personal (`AJ`).
- **Barra Lateral (YouTube Sidebar):**
  - Menú desplegable y colapsable (con el botón de hamburguesa ☰).
  - Secciones: *Inicio*, *Proyectos*, *Habilidades*, *Contacto*, y accesos directos a tus repositorios.
- **Cabecera de Canal (Channel Banner):**
  - Banner gráfico con tu nombre **Alan Jmz**, insignia de verificación (`✓`), handle `@AllanJMZ`, cantidad de proyectos y enlace a tu repo.
  - Botón de **Suscribirse / Contactar** interactivo.
- **Barra de Píldoras / Filtros (Chips):**
  - Filtros horizontales estilo YouTube: *Todos*, *Frontend*, *React*, *JavaScript*, *Herramientas*, *En Proceso*.
- **Tarjetas de Proyecto (Miniaturas de Video 16:9):**
  - Cada proyecto se muestra como un video de YouTube con su miniatura, duración estimada, título, vistas simuladas, etiquetas y fecha.
- **Reproductor de Video Interactivo (Modal):**
  - Al hacer clic en cualquier proyecto, se abre un reproductor de video de YouTube con barra de reproducción roja, contador de **Me gusta** interactivo (¡los visitantes pueden darle Like!), botón de **Compartir**, botón de **Abrir Demo en Vivo** y sección de comentarios.

---

## 2. Estructura del Proyecto

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automatización para publicar en GitHub Pages
├── public/
│   └── favicon.svg               # Ícono de pestaña del navegador
├── src/
│   ├── components/               # Bloques visuales estilo YouTube
│   │   ├── BrandIcons.tsx        # Íconos de GitHub y LinkedIn
│   │   ├── CategoryChips.tsx     # Barra de filtros en píldora
│   │   ├── ChannelBanner.tsx     # Cabecera de canal y foto de perfil
│   │   ├── ContactSection.tsx    # Sección de contacto
│   │   ├── SkillsSection.tsx     # Sección de habilidades
│   │   ├── VideoGrid.tsx         # Cuadrícula de miniaturas de proyectos
│   │   ├── VideoPlayerModal.tsx  # Reproductor de video interactivo al dar clic
│   │   ├── YouTubeHeader.tsx     # Barra superior con buscador y logo
│   │   └── YouTubeSidebar.tsx    # Menú lateral colapsable
│   ├── data/
│   │   └── projects.ts           # ⭐ AQUÍ AGREGAS Y EDITAS TUS PROYECTOS
│   ├── App.css                   # Estilos YouTube (colores, cards, reproductor)
│   ├── App.tsx                   # Ensamblador principal de la aplicación
│   └── index.css                 # Variables base
├── vite.config.ts                # Configuración con rutas relativas (base: './')
└── README.md                     # Esta guía explicativa
```

---

## 3. Cómo probar la página en tu computadora

1. Abre tu terminal de PowerShell en la carpeta `portfolio`.
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

Ahí verás la lista de proyectos con todos sus datos estilo YouTube:
```typescript
{
  id: 'mi-proyecto',
  title: 'Título de tu proyecto',
  description: 'Descripción detallada de qué hace la aplicación...',
  category: 'Frontend', // 'Frontend' | 'React' | 'JavaScript' | 'Herramientas' | 'En Proceso'
  tags: ['React', 'CSS', 'Vite'],
  demoUrl: 'https://allanjmz.github.io/PortfolioAlanJmz.NCH/', // Link de la demo
  githubUrl: 'https://github.com/AllanJMZ/PortfolioAlanJmz.NCH', // Link de tu repo
  status: 'Completado', // 'Completado' | 'En Desarrollo' | 'Próximamente'
  views: '14.2k vistas',
  uploadedTime: 'hace 3 días',
  duration: '04:20',
  badgeTag: 'LIVE DEMO',
  thumbnailGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
  likes: 342,
}
```
Solo guarda los cambios y la página se actualizará automáticamente.

---

## 5. Paso a Paso: Cómo subirlo a tu repositorio y publicarlo en GitHub Pages

El repositorio ya está enlazado a tu URL:
`https://github.com/AllanJMZ/PortfolioAlanJmz.NCH.git`

### Paso 1: Guardar y subir los cambios con Git
Abre la terminal en la carpeta `portfolio` y ejecuta estos comandos:

```bash
git add .
git commit -m "Portafolio web estilo YouTube para Alan Jmz"
git branch -M main
git push -u origin main
```

*(Si GitHub te pide iniciar sesión, autoriza con tu cuenta `AllanJMZ`).*

---

### Paso 2: Activar GitHub Pages en tu Repositorio (Solo 1 clic)

1. Entra a tu repositorio en el navegador:
   👉 **`https://github.com/AllanJMZ/PortfolioAlanJmz.NCH`**
2. Haz clic en la pestaña **Settings** (Configuración) arriba a la derecha.
3. En la barra lateral izquierda, busca y haz clic en **Pages**.
4. En el apartado **Build and deployment**:
   - En el menú desplegable **Source**, selecciona:
     👉 **GitHub Actions**
5. ¡Listo! El archivo `.github/workflows/deploy.yml` que ya dejamos configurado se ejecutará automáticamente.
6. En un par de minutos, tu portafolio estará visible para todo el mundo en:
   🌐 **`https://allanjmz.github.io/PortfolioAlanJmz.NCH/`**

---

✨ **¡Disfruta de tu nuevo portafolio estilo YouTube!**
