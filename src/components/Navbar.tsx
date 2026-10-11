import { useState, useEffect } from 'react';
import { Moon, Sun, Code2, FolderGit2, Sparkles, Mail, Briefcase, Award } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';

export const Navbar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#inicio" className="navbar-logo">
          <div className="logo-icon-box">
            <img src="./logo.png" alt="Logo" className="nav-logo-img" />
          </div>
          <span className="logo-text">{PERSONAL_INFO.name}</span>
        </a>

        <nav className="navbar-links">
          <a href="#proyectos" className="nav-link">
            <FolderGit2 size={16} />
            <span>Proyectos</span>
          </a>
          <a href="#experiencia" className="nav-link">
            <Briefcase size={16} />
            <span>Experiencia</span>
          </a>
          <a href="#habilidades" className="nav-link">
            <Code2 size={16} />
            <span>Habilidades</span>
          </a>
          <a href="#certificaciones" className="nav-link">
            <Award size={16} />
            <span>Certificaciones</span>
          </a>
          <a href="#intereses" className="nav-link">
            <Sparkles size={16} />
            <span>Intereses</span>
          </a>
          <a href="#contacto" className="nav-link">
            <Mail size={16} />
            <span>Contacto</span>
          </a>
        </nav>

        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            aria-label="Cambiar tema visual"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm nav-gh-btn"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
