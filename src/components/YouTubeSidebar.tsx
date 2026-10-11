import React from 'react';
import { Home, Flame, Code2, Mail, FolderGit2, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';


interface YouTubeSidebarProps {
  isExpanded: boolean;
  activeSection: string;
  onSelectSection: (section: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const YouTubeSidebar: React.FC<YouTubeSidebarProps> = ({
  isExpanded,
  activeSection,
  onSelectSection,
  selectedCategory,
  onSelectCategory,
}) => {
  const mainNav = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'proyectos', label: 'Proyectos', icon: Flame },
    { id: 'habilidades', label: 'Habilidades', icon: Code2 },
    { id: 'contacto', label: 'Contacto', icon: Mail },
  ];

  const categories = [
    { id: 'Todos', label: 'Todos los videos' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'React', label: 'React & TS' },
    { id: 'JavaScript', label: 'JavaScript' },
    { id: 'Herramientas', label: 'Herramientas' },
    { id: 'En Proceso', label: 'En Proceso' },
  ];

  if (!isExpanded) {
    return (
      <aside className="yt-sidebar-mini">
        {mainNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`yt-mini-item ${activeSection === item.id ? 'active' : ''}`}
              title={item.label}
            >
              <Icon size={20} />
              <span className="yt-mini-text">{item.label}</span>
            </button>
          );
        })}
      </aside>
    );
  }

  return (
    <aside className="yt-sidebar-expanded">
      {/* Main Section */}
      <div className="yt-sidebar-group">
        {mainNav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`yt-nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="yt-sidebar-divider" />

      {/* "Tú" / Mi Canal */}
      <div className="yt-sidebar-group">
        <div className="yt-sidebar-heading">
          <span>Tú ({PERSONAL_INFO.handle})</span>
        </div>
        <a 
          href={PERSONAL_INFO.githubRepoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="yt-nav-item"
        >
          <FolderGit2 size={20} />
          <span>Repositorio Principal</span>
          <ExternalLink size={14} className="yt-nav-ext" />
        </a>
        <a 
          href={PERSONAL_INFO.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="yt-nav-item"
        >
          <GithubIcon size={20} />
          <span>Perfil de GitHub</span>
          <ExternalLink size={14} className="yt-nav-ext" />
        </a>
        <a 
          href={PERSONAL_INFO.pagesUrl} 
          className="yt-nav-item"
        >
          <Sparkles size={20} />
          <span>GitHub Pages Demo</span>
        </a>
      </div>

      <div className="yt-sidebar-divider" />

      {/* Categorías / Listas */}
      <div className="yt-sidebar-group">
        <div className="yt-sidebar-heading">
          <span>Categorías</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              onSelectCategory(cat.id);
              onSelectSection('proyectos');
            }}
            className={`yt-nav-item ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            <span className="yt-category-dot"></span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="yt-sidebar-divider" />

      {/* Redes y Contacto */}
      <div className="yt-sidebar-group">
        <div className="yt-sidebar-heading">
          <span>Conectar</span>
        </div>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="yt-nav-item"
        >
          <Mail size={18} />
          <span>Correo</span>
        </a>
        <a 
          href={PERSONAL_INFO.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="yt-nav-item"
        >
          <LinkedinIcon size={18} />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Footer Info */}
      <div className="yt-sidebar-footer">
        <p>© 2026 {PERSONAL_INFO.name}</p>
        <p>Alojado en GitHub Pages</p>
        <p>Repositorio: PortfolioAlanJmz.NCH</p>
      </div>
    </aside>
  );
};
