import React from 'react';
import { Code2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, I18N_SKILLS } from '../data/translations';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;

  return (
    <section id="habilidades" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-indigo section-tag">
            <Code2 size={14} /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="skills-grid">
          {I18N_SKILLS.map((group, index) => (
            <div key={index} className="glass-card skill-card">
              <h3 className="skill-group-title">{group.category[language]}</h3>
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

