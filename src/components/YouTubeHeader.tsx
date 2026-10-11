import React, { useState } from 'react';
import { Menu, Search, Bell, Sun, Moon, Mic, Plus } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';


interface YouTubeHeaderProps {
  onToggleSidebar: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const YouTubeHeader: React.FC<YouTubeHeaderProps> = ({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  theme,
  onToggleTheme,
}) => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <header className="yt-header">
      {/* Left: Hamburger + YouTube Logo */}
      <div className="yt-header-left">
        <button 
          onClick={onToggleSidebar} 
          className="yt-icon-btn yt-hamburger"
          title="Menú de navegación"
          aria-label="Menú principal"
        >
          <Menu size={22} />
        </button>

        <a href="#inicio" className="yt-logo-link">
          <div className="yt-logo-play">
            <svg viewBox="0 0 24 24" className="yt-play-svg">
              <path d="M10 15l5.19-3L10 9v6z" fill="#ffffff" />
            </svg>
          </div>
          <span className="yt-logo-title">
            Alan<span className="yt-logo-bold">Tube</span>
          </span>
          <span className="yt-logo-country">NCH</span>
        </a>
      </div>

      {/* Center: YouTube Search Bar */}
      <div className="yt-header-center">
        <div className="yt-search-container">
          <div className="yt-search-input-wrap">
            <input
              type="text"
              placeholder="Buscar proyectos, tecnologías o palabras clave..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="yt-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')} 
                className="yt-search-clear"
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
          <button className="yt-search-btn" title="Buscar">
            <Search size={19} />
          </button>
        </div>

        <button 
          className="yt-icon-btn yt-mic-btn" 
          title="Filtro interactivo"
          onClick={() => onSearchChange(searchQuery ? '' : 'React')}
        >
          <Mic size={18} />
        </button>
      </div>

      {/* Right: Actions, Theme, Notifications, Avatar */}
      <div className="yt-header-right">
        <a 
          href={PERSONAL_INFO.githubRepoUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="yt-create-btn"
          title="Ver Repositorio en GitHub"
        >
          <Plus size={18} />
          <span>Repositorio</span>
        </a>

        <button 
          onClick={onToggleTheme} 
          className="yt-icon-btn"
          title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          aria-label="Cambiar tema visual"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="yt-notification-wrapper">
          <button 
            onClick={() => setShowNotification(!showNotification)} 
            className="yt-icon-btn"
            title="Notificaciones"
          >
            <Bell size={20} />
            <span className="yt-badge-dot">1</span>
          </button>

          {showNotification && (
            <div className="yt-notification-dropdown">
              <div className="yt-notification-header">
                <strong>Notificaciones</strong>
              </div>
              <div className="yt-notification-item">
                <div className="yt-notif-avatar">AJ</div>
                <div className="yt-notif-text">
                  <p><strong>¡Nuevo portafolio estilo YouTube publicado!</strong></p>
                  <span>Alojado en GitHub Pages • {PERSONAL_INFO.handle}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <a 
          href={PERSONAL_INFO.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="yt-avatar-btn"
          title={`Canal de ${PERSONAL_INFO.name} (${PERSONAL_INFO.handle})`}
        >
          <span className="yt-avatar-initials">AJ</span>
        </a>
      </div>
    </header>
  );
};
