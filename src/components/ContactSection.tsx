import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ContactSection = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  return (
    <section id="contacto" className="section-padding contact-section">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-header">
            <span className="badge badge-emerald section-tag">
              <MessageSquare size={14} /> {t.tag}
            </span>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
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
                <span className="contact-label">{t.emailLabel}</span>
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
                <span className="contact-label">{t.githubLabel}</span>
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
                <span className="contact-label">{t.linkedinLabel}</span>
                <span className="contact-value">allan-jimenez</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

