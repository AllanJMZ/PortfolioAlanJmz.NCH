import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, I18N_SKILLS } from '../data/translations';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;

  return (
    <section id="habilidades" className="section-padding skills-section">
      <div className="container">
        <div className="editorial-header">
          <div className="editorial-header-main">
            <span className="section-eyebrow">02 / {t.tag}</span>
            <h2>{t.title}</h2>
          </div>
          <p className="editorial-header-desc">{t.subtitle}</p>
        </div>

        <div className="skills-matrix">
          {I18N_SKILLS.map((group, index) => (
            <div key={group.category.en} className="surface-card skill-card">
              <div className="skill-card-head">
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="skill-group-title">{group.category[language]}</h3>
              </div>

              <ul className="skill-items-list">
                {group.items.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-check-badge" aria-hidden="true">
                      <Check size={13} className="skill-check-icon" />
                    </span>
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
