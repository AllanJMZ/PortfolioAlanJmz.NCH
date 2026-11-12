import React, { useState } from 'react';
import { Gamepad2, Heart, Award, Film, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, I18N_INTERESTS } from '../data/translations';
import type { InterestItemI18n } from '../data/translations';

export const InterestsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].interests;
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const featuredInterest = I18N_INTERESTS.find((item) => item.isSpecial);
  const secondaryInterests = I18N_INTERESTS.filter((item) => !item.isSpecial);

  const renderIcon = (type: InterestItemI18n['iconType']) => {
    switch (type) {
      case 'cinema':
        return <Film size={20} className="interest-icon violet" aria-hidden="true" />;
      case 'gaming':
        return <Gamepad2 size={20} className="interest-icon green" aria-hidden="true" />;
      case 'tcg':
        return <Layers size={20} className="interest-icon violet" aria-hidden="true" />;
      case 'mindset':
        return <Zap size={20} className="interest-icon green" aria-hidden="true" />;
      case 'cat':
      default:
        return <Heart size={20} className="interest-icon green" aria-hidden="true" />;
    }
  };

  return (
    <section id="intereses" className="section-padding interests-section">
      <div className="container">
        <div className="editorial-header">
          <div className="editorial-header-main">
            <span className="section-eyebrow">04 / {t.tag}</span>
            <h2>{t.title}</h2>
          </div>
          <p className="editorial-header-desc">{t.subtitle}</p>
        </div>

        {/* Destacado horizontal para evitar celda huérfana y mostrar el sticker */}
        {featuredInterest && (
          <div className="surface-card interest-lead-card">
            <div className="interest-lead-media">
              {featuredInterest.image && !imageErrors[featuredInterest.id] ? (
                <img
                  src={featuredInterest.image}
                  alt={featuredInterest.imageAlt?.[language] || featuredInterest.title[language]}
                  width={124}
                  height={124}
                  className="interest-sticker-img"
                  onError={() =>
                    setImageErrors((prev) => ({ ...prev, [featuredInterest.id]: true }))
                  }
                />
              ) : (
                <div className="interest-icon-box large">
                  {renderIcon(featuredInterest.iconType)}
                </div>
              )}
            </div>

            <div className="interest-lead-content">
              <div className="interest-lead-meta">
                <span className="interest-tag">{featuredInterest.tag[language]}</span>
                {featuredInterest.badge && (
                  <span className="status-tag status-emerald">
                    <Award size={12} aria-hidden="true" />
                    <span>{featuredInterest.badge[language]}</span>
                  </span>
                )}
              </div>
              <h3 className="interest-title">{featuredInterest.title[language]}</h3>
              <p className="interest-desc">{featuredInterest.description[language]}</p>
            </div>
          </div>
        )}

        {/* Cuadrícula balanceada 2×2 de intereses personales */}
        <div className="interests-grid">
          {secondaryInterests.map((item) => (
            <div key={item.id} className="surface-card interest-card">
              <div className="interest-card-top">
                <div className="interest-icon-box">
                  {renderIcon(item.iconType)}
                </div>

                <div className="interest-badges-row">
                  <span className="interest-tag">{item.tag[language]}</span>
                  {item.badge && (
                    <span className="interest-badge-pill">{item.badge[language]}</span>
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
