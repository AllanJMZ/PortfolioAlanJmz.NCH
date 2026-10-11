import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';

export const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-header">
            <span className="badge badge-emerald section-tag">
              <MessageSquare size={14} /> ¿Hablamos?
            </span>
            <h2>Conectemos</h2>
            <p>
              ¿Tienes una propuesta, un proyecto en mente o te gustaría colaborar? 
              Puedes encontrarme a través de estos canales:
            </p>
          </div>

          <div className="contact-links-grid">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="contact-link-item glass-card"
            >
              <div className="contact-icon-box">
                <Mail size={22} className="contact-icon email" />
              </div>
              <div className="contact-text">
                <span className="contact-label">Correo Electrónico</span>
                <span className="contact-value">{PERSONAL_INFO.email}</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" />
            </a>

            <a 
              href={PERSONAL_INFO.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-item glass-card"
            >
              <div className="contact-icon-box">
                <GithubIcon size={22} className="contact-icon github" />
              </div>
              <div className="contact-text">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/{PERSONAL_INFO.githubUser}</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" />
            </a>

            <a 
              href={PERSONAL_INFO.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link-item glass-card"
            >
              <div className="contact-icon-box">
                <LinkedinIcon size={22} className="contact-icon linkedin" />
              </div>
              <div className="contact-text">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Ver Perfil</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
