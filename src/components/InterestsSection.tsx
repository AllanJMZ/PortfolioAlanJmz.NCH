import React from 'react';
import { Sparkles, Gamepad2, Coffee, Heart, Award } from 'lucide-react';
import { INTERESTS_DATA } from '../data/projects';
import type { InterestItem } from '../data/projects';

export const InterestsSection: React.FC = () => {
  const renderIcon = (type: InterestItem['iconType']) => {
    switch (type) {
      case 'scifi':
        return <Sparkles size={22} className="interest-icon scifi" />;
      case 'gaming':
        return <Gamepad2 size={22} className="interest-icon gaming" />;
      case 'coffee':
        return <Coffee size={22} className="interest-icon coffee" />;
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
            <Heart size={14} /> Más Allá del Código
          </span>
          <h2>Intereses &amp; Pasatiempos</h2>
          <p>
            No todo es programar: un vistazo a las cosas que me apasionan, mi inspiración visual y mi leal supervisor felino.
          </p>
        </div>

        <div className="interests-grid">
          {INTERESTS_DATA.map((item) => (
            <div
              key={item.id}
              className={`glass-card interest-card ${item.isSpecial ? 'interest-card-special' : ''}`}
            >
              <div className="interest-card-top">
                {item.image ? (
                  <div className="interest-avatar-wrapper">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
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
                  <span className="interest-tag">{item.tag}</span>
                  {item.badge && (
                    <span className="interest-badge-pill">
                      {item.isSpecial && <Award size={12} />}
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="interest-card-body">
                <h3 className="interest-title">{item.title}</h3>
                <p className="interest-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
