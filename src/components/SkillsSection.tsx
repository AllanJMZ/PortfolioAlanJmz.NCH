import React from 'react';
import { Code2, CheckCircle2 } from 'lucide-react';
import { SKILLS_LIST } from '../data/projects';

export const SkillsSection: React.FC = () => {
  return (
    <section id="habilidades" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-indigo section-tag">
            <Code2 size={14} /> Tecnologías &amp; Habilidades
          </span>
          <h2>Habilidades y Herramientas</h2>
          <p>
            Frameworks de automatización, lenguajes, herramientas de pruebas y metodologías que utilizo para garantizar la máxima calidad de software.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_LIST.map((group, index) => (
            <div key={index} className="glass-card skill-card">
              <h3 className="skill-group-title">{group.category}</h3>
              <ul className="skill-items-list">
                {group.items.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <CheckCircle2 size={16} className="skill-check-icon" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
