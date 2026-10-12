import React, { useState } from 'react';
import { Mail, MapPin, FolderGit2, Sparkles, Award, GraduationCap, ArrowDown } from 'lucide-react';
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
      <div className="container hero-container">

        {/* Status Pill Badge */}
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>{t.badge} • {language === 'es' ? 'En línea' : 'Online'}</span>
        </div>

        {/* Widescreen Digital Business Card (Aprovechando el ancho completo) */}
        <div className="profile-card-wide-frame">
          <div className="profile-card-glass wide">

            {/* Left Side: Avatar & Identity Column */}
            <div className="profile-card-left-col">
              <div className="profile-avatar-container">
                <div className="profile-avatar-ring">
                  {!imgError ? (
                    <img
                      src="./credencial.jpg"
                      alt={PERSONAL_INFO.name}
                      className="profile-avatar-img"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="profile-avatar-fallback">
                      <span>AJ</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="profile-identity">
                <h1 className="profile-name">{PERSONAL_INFO.name}</h1>
                <p className="profile-role">{t.role}</p>
              </div>

              {/* Bottom Emblem Logo */}
              <div className="profile-card-footer-logo">
                <div className="eva-logo-symbol">
                  <span className="eva-logo-bracket">&lt;</span>
                  <span className="eva-logo-core">{t.coreTag}</span>
                  <span className="eva-logo-bracket">/&gt;</span>
                </div>
                <span className="eva-logo-caption">{t.coreCaption}</span>
              </div>
            </div>

            {/* Right Side: Bio, Contact Grid & Actions Column */}
            <div className="profile-card-right-col">
              {/* Bio Description */}
              <div className="profile-bio-box">
                <div className="bio-tag-row">
                  <Sparkles size={16} className="text-eva-green" />
                  <span>{t.aboutTag}</span>
                </div>
                <p className="profile-bio-text">
                  {t.bio}
                </p>
              </div>

              {/* Contact & Info Details (Grid de 2 columnas con Título & Cédula) */}
              <div className="profile-info-grid">
                <div className="profile-info-row static">
                  <div className="profile-info-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="profile-info-content">
                    <span className="profile-info-label">{t.educationLabel}</span>
                    <span className="profile-info-text">{t.educationValue}</span>
                  </div>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="profile-info-row"
                >
                  <div className="profile-info-icon">
                    <Mail size={18} />
                  </div>
                  <div className="profile-info-content">
                    <span className="profile-info-label">{t.emailLabel}</span>
                    <span className="profile-info-text">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-info-row"
                >
                  <div className="profile-info-icon">
                    <GithubIcon size={18} />
                  </div>
                  <div className="profile-info-content">
                    <span className="profile-info-label">{t.githubLabel}</span>
                    <span className="profile-info-text">github.com/{PERSONAL_INFO.githubUser}</span>
                  </div>
                </a>

                <div className="profile-info-row static">
                  <div className="profile-info-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="profile-info-content">
                    <span className="profile-info-label">{t.locationLabel}</span>
                    <span className="profile-info-text">{t.locationValue}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Estilo cápsula de YouTube con acentos Evangelion) */}
              <div className="hero-actions-wide">
                <a href="#proyectos" className="btn btn-primary">
                  <FolderGit2 size={18} />
                  <span>{t.btnProjects}</span>
                </a>

                <a href="#certificaciones" className="btn btn-secondary">
                  <Award size={18} />
                  <span>{t.btnCertifications}</span>
                </a>

                <a href="#contacto" className="btn btn-secondary">
                  <Mail size={18} />
                  <span>{t.btnContact}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint indicator */}
        <a href="#proyectos" className="scroll-hint" aria-label="Desplazarse a proyectos">
          <ArrowDown size={20} />
        </a>

      </div>
    </section>
  );
};
