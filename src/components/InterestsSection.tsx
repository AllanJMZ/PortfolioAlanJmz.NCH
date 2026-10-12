import React from 'react';
import { Gamepad2, Heart, Award, Film, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, I18N_INTERESTS } from '../data/translations';
import type { InterestItemI18n } from '../data/translations';

export const InterestsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].interests;

  const renderIcon = (type: InterestItemI18n['iconType']) => {
    switch (type) {
      case 'cinema':
        return <Film size={22} className="interest-icon scifi" />;
      case 'gaming':
        return <Gamepad2 size={22} className="interest-icon gaming" />;
      case 'tcg':
        return <Layers size={22} className="interest-icon scifi" />;
      case 'mindset':
        return <Zap size={22} className="interest-icon gaming" />;
      case 'cat':
      default:
        return <Heart size={22} className="interest-icon cat" />;
    }
  };

  return (
    <section id="intereses" className="section-padding interests-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-indigo section-tag">
            <Heart size={14} /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="interests-grid">
          {I18N_INTERESTS.map((item) => (
            <div
              key={item.id}
              className={`glass-card interest-card ${item.isSpecial ? 'interest-card-special' : ''}`}
            >
              <div className="interest-card-top">
                {item.image ? (
                  <div className="interest-avatar-wrapper">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title[language]}
                      className="interest-avatar-img"
                    />
                    <span className="interest-avatar-pulse" />
                  </div>
                ) : (
                  <div className="interest-icon-box">
                    {renderIcon(item.iconType)}
                  </div>
                )}

                <div className="interest-badges-row">
                  <span className="interest-tag">{item.tag[language]}</span>
                  {item.badge && (
                    <span className="interest-badge-pill">
                      {item.isSpecial && <Award size={12} />}
                      {item.badge[language]}
                    </span>
                  )}
                </div>
              </div>

              <div className="interest-card-body">
                <h3 className="interest-title">{item.title[language]}</h3>
                <p className="interest-desc">{item.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

