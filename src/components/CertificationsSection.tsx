import React from 'react';
import { ExternalLink, CheckCircle2, Clock, ShieldCheck, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, I18N_CERTIFICATIONS } from '../data/translations';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].certifications;

  return (
    <section id="certificaciones" className="section-padding section-band-alt certifications-section">
      <div className="container">
        {/* Encabezado editorial */}
        <div className="editorial-header">
          <div className="editorial-header-main">
            <span className="section-eyebrow">03 / {t.tag}</span>
            <h2>{t.title}</h2>
          </div>
          <p className="editorial-header-desc">{t.subtitle}</p>
        </div>

        {/* Banner académico universitario */}
        <div className="surface-card degree-banner">
          <div className="degree-banner-left">
            <div className="cert-icon-wrapper degree-icon">
              <GraduationCap size={24} className="cert-icon verified" aria-hidden="true" />
            </div>
            <div className="degree-banner-meta">
              <span className="cert-tag">{t.degreeCard.tag}</span>
              <span className="status-tag status-emerald">
                <CheckCircle2 size={12} aria-hidden="true" />
                <span>{t.degreeCard.status}</span>
              </span>
            </div>
          </div>

          <div className="degree-banner-body">
            <h3 className="degree-title">{t.degreeCard.title}</h3>
            <p className="cert-issuer">{t.degreeCard.institution}</p>
            <p className="cert-degree-desc">{t.degreeCard.description}</p>
          </div>

          <div className="degree-banner-seal">
            <ShieldCheck size={16} className="text-accent-green" aria-hidden="true" />
            <span>{language === 'es' ? 'Cédula Profesional Registrada' : 'Registered Professional License'}</span>
          </div>
        </div>

        {/* Rejilla balanceada 3×2 de certificaciones */}
        <div className="certifications-grid">
          {I18N_CERTIFICATIONS.map((cert) => {
            const isVerified = cert.status === 'Verificada';

            return (
              <div
                key={cert.id}
                className={`surface-card cert-card ${cert.featured ? 'cert-card-featured' : ''} ${!isVerified ? 'cert-card-pending' : ''}`}
              >
                <div className="cert-card-top">
                  <div className="cert-icon-wrapper">
                    {isVerified ? (
                      <ShieldCheck size={20} className="cert-icon verified" aria-hidden="true" />
                    ) : (
                      <Clock size={20} className="cert-icon pending" aria-hidden="true" />
                    )}
                  </div>

                  <span className={`status-tag ${isVerified ? 'status-emerald' : 'status-violet'}`}>
                    {isVerified ? (
                      <>
                        <CheckCircle2 size={12} aria-hidden="true" />
                        <span>{t.verified}</span>
                      </>
                    ) : (
                      <>
                        <Clock size={12} aria-hidden="true" />
                        <span>{t.pending}</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="cert-card-body">
                  <span className="cert-tag">{cert.tag[language]}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>

                <div className="cert-card-footer">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm cert-action-btn"
                    >
                      <span>{t.btnView}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ) : isVerified ? (
                    <div className="cert-verified-pill cert-verified-note">
                      <ShieldCheck size={14} className="text-accent-green" aria-hidden="true" />
                      <span>{cert.notes?.[language] || t.verifiedNoLink}</span>
                    </div>
                  ) : (
                    <div className="cert-pending-tag">
                      <Clock size={13} aria-hidden="true" />
                      <span>{cert.notes?.[language] || t.pendingNotes}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
