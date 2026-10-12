import React from 'react';
import { Award, ExternalLink, CheckCircle2, Clock, ShieldCheck, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, I18N_CERTIFICATIONS } from '../data/translations';

export const CertificationsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].certifications;

  return (
    <section id="certificaciones" className="section-padding certifications-section">
      <div className="container">
        {/* Encabezado de la sección */}
        <div className="section-header">
          <span className="badge badge-emerald section-tag">
            <Award size={14} /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        {/* Cuadrícula de certificaciones y grados académicos */}
        <div className="certifications-grid">
          {/* Acreditación de grado académico y cédula profesional */}
          <div className="glass-card cert-card cert-card-featured cert-degree-card">
            <div className="cert-card-top">
              <div className="cert-icon-wrapper degree-icon">
                <GraduationCap size={24} className="cert-icon verified" />
              </div>

              <span className="badge badge-emerald cert-status-badge">
                <CheckCircle2 size={12} /> {t.degreeCard.status}
              </span>
            </div>

            <div className="cert-card-body">
              <span className="cert-tag">{t.degreeCard.tag}</span>
              <h3 className="cert-title">{t.degreeCard.title}</h3>
              <p className="cert-issuer">{t.degreeCard.institution}</p>
              <p className="cert-degree-desc">{t.degreeCard.description}</p>
            </div>

            <div className="cert-card-footer">
              <div className="cert-verified-pill">
                <ShieldCheck size={14} className="text-eva-green" />
                <span>{language === 'es' ? 'Cédula Profesional Registrada' : 'Registered Professional License'}</span>
              </div>
            </div>
          </div>

          {/* Certificaciones técnicas y profesionales */}
          {I18N_CERTIFICATIONS.map((cert) => {
            const isVerified = cert.status === 'Verificada';

            return (
              <div
                key={cert.id}
                className={`glass-card cert-card ${cert.featured ? 'cert-card-featured' : ''} ${!isVerified ? 'cert-card-pending' : ''}`}
              >
                <div className="cert-card-top">
                  <div className="cert-icon-wrapper">
                    {isVerified ? (
                      <ShieldCheck size={24} className="cert-icon verified" />
                    ) : (
                      <Clock size={24} className="cert-icon pending" />
                    )}
                  </div>

                  <span className={`badge ${isVerified ? 'badge-emerald' : 'badge-purple'} cert-status-badge`}>
                    {isVerified ? (
                      <>
                        <CheckCircle2 size={12} /> {t.verified}
                      </>
                    ) : (
                      <>
                        <Clock size={12} /> {t.pending}
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
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="cert-pending-tag">
                      <Clock size={13} />
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

