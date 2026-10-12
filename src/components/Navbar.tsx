import { useState, useEffect } from 'react';
import { Moon, Sun, Code2, FolderGit2, Sparkles, Mail, Award, Languages } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Navbar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].nav;

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
            <span>{t.projects}</span>
          </a>
          <a href="#habilidades" className="nav-link">
            <Code2 size={16} />
            <span>{t.skills}</span>
          </a>
          <a href="#certificaciones" className="nav-link">
            <Award size={16} />
            <span>{t.certifications}</span>
          </a>
          <a href="#intereses" className="nav-link">
            <Sparkles size={16} />
            <span>{t.interests}</span>
          </a>
          <a href="#contacto" className="nav-link">
            <Mail size={16} />
            <span>{t.contact}</span>
          </a>
        </nav>

        <div className="navbar-actions">
          {/* Botón de selección de idioma con ícono resaltado */}
          <button
            onClick={toggleLanguage}
            className={`lang-toggle-btn ${language === 'en' ? 'active-en' : 'active-es'}`}
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label="Seleccionar idioma"
          >
            <Languages size={18} className="lang-icon" />
            <span className="lang-code-pill">{language.toUpperCase()}</span>
          </button>

          {/* Botón de cambio de tema */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={theme === 'dark' ? t.themeDark : t.themeLight}
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

