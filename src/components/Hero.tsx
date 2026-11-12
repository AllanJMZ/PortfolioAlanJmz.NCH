import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  FolderGit2,
  Award,
  GraduationCap,
  ArrowDown,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-grid">
        {/* Columna editorial principal */}
        <div className="hero-main">
          <div className="hero-status-line">
            <span className="status-indicator" aria-hidden="true" />
            <span>{t.badge}</span>
          </div>

          <h1 className="hero-title">{PERSONAL_INFO.name}</h1>
          <p className="hero-subtitle">{t.role}</p>

          <p className="hero-bio">{t.bio}</p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              <FolderGit2 size={18} aria-hidden="true" />
              <span>{t.btnProjects}</span>
            </a>

            <a href="#certificaciones" className="btn btn-secondary">
              <Award size={18} aria-hidden="true" />
              <span>{t.btnCertifications}</span>
            </a>

            <a href="#contacto" className="btn btn-ghost">
              <Mail size={18} aria-hidden="true" />
              <span>{t.btnContact}</span>
            </a>
          </div>

          <div className="hero-scroll-row">
            <a href="#proyectos" className="hero-scroll-link" aria-label={t.scrollAria}>
              <ArrowDown size={16} aria-hidden="true" />
              <span>{t.scrollAria}</span>
            </a>
          </div>
        </div>

        {/* Ficha técnica de perfil profesional */}
        <aside className="hero-dossier surface-card" aria-label={t.aboutTag}>
          <div className="dossier-header">
            <div className="dossier-avatar-frame">
              {!imgError ? (
                <img
                  src="./credencial-portrait.jpg"
                  alt={PERSONAL_INFO.fullName}
                  width={112}
                  height={132}
                  className="dossier-avatar-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="dossier-avatar-fallback" aria-hidden="true">
                  <span>AJ</span>
                </div>
              )}
            </div>

            <div className="dossier-identity">
              <span className="dossier-fullname">{PERSONAL_INFO.fullName}</span>
              <span className="dossier-cred-code">{t.coreTag}</span>
              <span className="dossier-cred-caption">{t.coreCaption}</span>
            </div>
          </div>

          <dl className="dossier-specs">
            <div className="dossier-spec-item static">
              <dt className="dossier-spec-term">
                <GraduationCap size={15} aria-hidden="true" />
                <span>{t.educationLabel}</span>
              </dt>
              <dd className="dossier-spec-value">{t.educationValue}</dd>
            </div>

            <div className="dossier-spec-item static">
              <dt className="dossier-spec-term">
                <MapPin size={15} aria-hidden="true" />
                <span>{t.locationLabel}</span>
              </dt>
              <dd className="dossier-spec-value">{t.locationValue}</dd>
            </div>

            <div className="dossier-spec-item interactive">
              <dt className="dossier-spec-term">
                <Mail size={15} aria-hidden="true" />
                <span>{t.emailLabel}</span>
              </dt>
              <dd className="dossier-spec-value">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="dossier-spec-link">
                  <span>{PERSONAL_INFO.email}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </dd>
            </div>

            <div className="dossier-spec-item interactive">
              <dt className="dossier-spec-term">
                <GithubIcon size={15} />
                <span>{t.githubLabel}</span>
              </dt>
              <dd className="dossier-spec-value">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-spec-link"
                >
                  <span>github.com/{PERSONAL_INFO.githubUser}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </dd>
            </div>
          </dl>

          <div className="dossier-footer">
            <span>{t.dossierStack}</span>
          </div>
        </aside>
      </div>
    </section>
  );
};
