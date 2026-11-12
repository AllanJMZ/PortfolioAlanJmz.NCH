import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ContactSection = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  return (
    <section id="contacto" className="section-padding section-band-alt contact-section">
      <div className="container">
        <div className="surface-card contact-band">
          <div className="contact-band-copy">
            <span className="section-eyebrow">05 / {t.tag}</span>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>

          <div className="contact-links-list">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="contact-link-row"
            >
              <div className="contact-icon-box">
                <Mail size={20} className="contact-icon green" aria-hidden="true" />
              </div>
              <div className="contact-text">
                <span className="contact-label">{t.emailLabel}</span>
                <span className="contact-value">{PERSONAL_INFO.email}</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" aria-hidden="true" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
            >
              <div className="contact-icon-box">
                <GithubIcon size={20} className="contact-icon violet" />
              </div>
              <div className="contact-text">
                <span className="contact-label">{t.githubLabel}</span>
                <span className="contact-value">github.com/{PERSONAL_INFO.githubUser}</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" aria-hidden="true" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
            >
              <div className="contact-icon-box">
                <LinkedinIcon size={20} className="contact-icon linkedin" />
              </div>
              <div className="contact-text">
                <span className="contact-label">{t.linkedinLabel}</span>
                <span className="contact-value">allan-jimenez</span>
              </div>
              <ArrowUpRight size={18} className="contact-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
