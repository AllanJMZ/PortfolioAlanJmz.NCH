import { useState } from 'react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const year = CURRENT_YEAR;
  const [logoError, setLogoError] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const nav = TRANSLATIONS[language].nav;

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon-box footer-logo-box">
              {!logoError ? (
                <img
                  src="./logo.png"
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                  className="nav-logo-img"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="logo-monogram" aria-hidden="true">AJ</span>
              )}
            </div>
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <p className="footer-tagline">
            {t.tagline}
          </p>
        </div>

        <nav className="footer-links" aria-label={language === 'es' ? 'Enlaces del pie de página' : 'Footer links'}>
          <a href="#inicio">{nav.home}</a>
          <a href="#proyectos">{nav.projects}</a>
          <a href="#habilidades">{nav.skills}</a>
          <a href="#certificaciones">{nav.certifications}</a>
          <a href="#intereses">{nav.interests}</a>
          <a href="#contacto">{nav.contact}</a>
        </nav>

        <div className="footer-right">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-gh-link"
            title={nav.githubTitle}
            aria-label={nav.githubTitle}
          >
            <GithubIcon size={18} />
          </a>
          <span className="footer-copy">© {year} {t.rights}</span>
        </div>
      </div>
    </footer>
  );
};
