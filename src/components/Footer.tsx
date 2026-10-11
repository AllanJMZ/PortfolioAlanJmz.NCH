import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';

export const Footer = () => {
  const year = new Date().getFullYear();

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
            QA Automation Lead &amp; SDET • Portafolio Profesional • Preparado para GitHub Pages
          </p>
        </div>

        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#certificaciones">Certificaciones</a>
          <a href="#intereses">Intereses</a>
          <a href="#contacto">Contacto</a>
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
          <span className="footer-copy">© {year} Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
