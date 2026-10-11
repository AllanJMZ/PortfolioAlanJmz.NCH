import { useState } from 'react';
import { CheckCircle2, Bell, ExternalLink, Mail, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';



export const ChannelBanner: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="yt-channel-header">
      {/* Channel Cover Banner */}
      <div className="yt-channel-banner">
        <div className="yt-banner-overlay">
          <div className="yt-banner-text">
            <span className="yt-banner-badge">Portafolio Web</span>
            <h2>{PERSONAL_INFO.name} • {PERSONAL_INFO.githubRepo}</h2>
            <p>JavaScript • TypeScript • React • Arquitectura Web</p>
          </div>
        </div>
      </div>

      {/* Channel Meta Row */}
      <div className="yt-channel-profile-row">
        <div className="yt-channel-avatar-wrapper">
          <div className="yt-channel-avatar">AJ</div>
          <span className="yt-avatar-verified" title="Canal Verificado">
            <CheckCircle2 size={18} fill="#3ea6ff" color="#0f0f0f" />
          </span>
        </div>

        <div className="yt-channel-details">
          <div className="yt-channel-name-row">
            <h1>{PERSONAL_INFO.name}</h1>
            <span className="yt-verified-badge" title="Desarrollador Verificado">
              <CheckCircle2 size={16} fill="#aaaaaa" color="#0f0f0f" />
            </span>
          </div>

          <div className="yt-channel-meta-info">
            <span className="yt-handle">{PERSONAL_INFO.handle}</span>
            <span className="yt-meta-dot">•</span>
            <span>{PERSONAL_INFO.subscribers}</span>
            <span className="yt-meta-dot">•</span>
            <a 
              href={PERSONAL_INFO.githubRepoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="yt-repo-link"
            >
              github.com/{PERSONAL_INFO.githubUser}/{PERSONAL_INFO.githubRepo}
              <ExternalLink size={12} />
            </a>
          </div>

          <p className="yt-channel-bio">
            {PERSONAL_INFO.bio}
          </p>

          {/* YouTube Action Buttons */}
          <div className="yt-channel-actions">
            <button
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`yt-subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
            >
              {isSubscribed ? (
                <>
                  <Bell size={16} />
                  <span>Suscrito (Contacto Activo)</span>
                </>
              ) : (
                <span>Suscribirse / Contactar</span>
              )}
            </button>

            <a
              href={PERSONAL_INFO.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-secondary-btn"
            >
              <FolderGit2 size={16} />
              <span>Repositorio en GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="yt-secondary-btn"
            >
              <Mail size={16} />
              <span>Enviar Correo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
