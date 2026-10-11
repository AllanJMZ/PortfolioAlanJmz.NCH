import { ArrowDown, Mail, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>Portafolio de Proyectos Web • En línea</span>
        </div>

        {/* Name and Title */}
        <h1 className="hero-title">
          Hola, soy <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="hero-role">{PERSONAL_INFO.title}</p>

        {/* Bio */}
        <p className="hero-description">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#proyectos" className="btn btn-primary">
            <FolderGit2 size={18} />
            <span>Ver Mis Proyectos</span>
          </a>

          <a href="#contacto" className="btn btn-secondary">
            <Mail size={18} />
            <span>Contactar</span>
          </a>

          <a 
            href={PERSONAL_INFO.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            <GithubIcon size={18} />
            <span>Mi GitHub</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="hero-quick-stats">
          <div className="quick-stat-item">
            <Sparkles size={18} className="stat-accent-icon" />
            <span>Sitio preparado para <strong>GitHub Pages</strong></span>
          </div>
          <div className="quick-stat-item">
            <Sparkles size={18} className="stat-accent-icon" />
            <span>Diseño 100% responsivo y modo oscuro</span>
          </div>
        </div>

        <a href="#proyectos" className="scroll-hint" aria-label="Desplazarse a proyectos">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};
