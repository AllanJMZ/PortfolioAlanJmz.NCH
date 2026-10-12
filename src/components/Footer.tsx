import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer = () => {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const nav = TRANSLATIONS[language].nav;

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon-box footer-logo-box">
              <img src="./logo.png" alt="Logo" className="nav-logo-img" />
            </div>
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <p className="footer-tagline">
            {t.tagline}
          </p>
        </div>

        <div className="footer-links">
          <a href="#inicio">{nav.home}</a>
          <a href="#proyectos">{nav.projects}</a>
          <a href="#habilidades">{nav.skills}</a>
          <a href="#certificaciones">{nav.certifications}</a>
          <a href="#intereses">{nav.interests}</a>
          <a href="#contacto">{nav.contact}</a>
        </div>

        <div className="footer-right">
          <a 
            href={PERSONAL_INFO.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-gh-link"
            title="Ver GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <span className="footer-copy">© {year} {t.rights}</span>
        </div>
      </div>
    </footer>
  );
};

