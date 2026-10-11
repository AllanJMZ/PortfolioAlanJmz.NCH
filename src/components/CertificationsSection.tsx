import React from 'react';
import { Award, ExternalLink, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/projects';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certificaciones" className="section-padding certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-emerald section-tag">
            <Award size={14} /> Credenciales &amp; Certificaciones
          </span>
          <h2>Certificaciones Oficiales</h2>
          <p>
            Acreditaciones internacionales y certificaciones técnicas que validan mis competencias en QA Automation, Cloud y metodologías ágiles.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {CERTIFICATIONS_DATA.map((cert) => {
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
                        <CheckCircle2 size={12} /> Verificada
                      </>
                    ) : (
                      <>
                        <Clock size={12} /> Pendiente de carga
                      </>
                    )}
                  </span>
                </div>

                <div className="cert-card-body">
                  <span className="cert-tag">{cert.tag}</span>
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
                      <span>Ver Credencial Oficial</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="cert-pending-tag">
                      <Clock size={13} />
                      <span>{cert.notes || 'En proceso de carga'}</span>
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
