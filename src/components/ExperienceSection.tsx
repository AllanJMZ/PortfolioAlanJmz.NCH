import React from 'react';
import { Briefcase, Calendar, GraduationCap, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/projects';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="section-padding experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-indigo section-tag">
            <Briefcase size={14} /> Trayectoria Profesional
          </span>
          <h2>Experiencia &amp; Liderazgo en QA</h2>
          <p>
            Trayectoria liderando estrategias de aseguramiento de calidad, creación de frameworks E2E y optimización del ciclo de entrega.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience-cards-container">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className={`glass-card exp-card ${exp.current ? 'exp-card-current' : ''}`}
            >
              <div className="exp-card-header">
                <div className="exp-company-info">
                  <div className="exp-icon-box">
                    <Briefcase size={20} className="exp-icon" />
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                </div>

                <div className="exp-meta">
                  <div className="exp-period-badge">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  {exp.current && (
                    <span className="badge badge-emerald exp-current-pill">
                      Puesto Actual
                    </span>
                  )}
                </div>
              </div>

              <ul className="exp-highlights-list">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="exp-highlight-item">
                    <CheckCircle2 size={16} className="exp-bullet-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education Highlight */}
          <div className="glass-card exp-card education-card">
            <div className="exp-card-header">
              <div className="exp-company-info">
                <div className="exp-icon-box edu-icon-box">
                  <GraduationCap size={22} className="exp-icon" />
                </div>
                <div>
                  <h3 className="exp-role">Formación Académica</h3>
                  <span className="exp-company">Educación Universitaria &amp; Especializaciones</span>
                </div>
              </div>
            </div>

            <div className="education-grid">
              {EDUCATION_DATA.map((edu, eIdx) => (
                <div key={eIdx} className="edu-item">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <span className="badge badge-emerald edu-status">{edu.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
