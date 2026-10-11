import { useState } from 'react';
import type { Project } from '../data/projects';
import { PERSONAL_INFO } from '../data/projects';

import { X, ThumbsUp, Share2, ExternalLink, CheckCircle2, Play, Pause, Volume2, Maximize, MessageSquare, Check } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface VideoPlayerModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [likes, setLikes] = useState(project?.likes || 120);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Lead Frontend Engineer', time: 'hace 2 días', text: 'Excelente arquitectura y velocidad de carga instantánea. El diseño responsivo está impecable.' },
    { id: 2, author: 'Tech Recruiter', time: 'hace 5 días', text: 'Muy buen portafolio, me encanta la presentación en formato video y el acceso directo al repo.' },
    { id: 3, author: 'Comunidad Open Source', time: 'hace 1 semana', text: 'Código ordenado y buenas prácticas con TypeScript y componentes reutilizables.' },
  ]);

  if (!project) return null;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(project.demoUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;
    setComments([
      { id: Date.now(), author: 'Visitante (Tú)', time: 'hace un momento', text: userComment },
      ...comments,
    ]);
    setUserComment('');
  };

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className="yt-player-modal" onClick={(e) => e.stopPropagation()}>
        {/* Top close button */}
        <button onClick={onClose} className="yt-modal-close" title="Cerrar reproductor">
          <X size={22} />
        </button>

        {/* Video Player Mockup */}
        <div className="yt-video-screen-container" style={{ background: project.thumbnailGradient }}>
          <div className="yt-player-center-content">
            <div className="yt-player-icon-pulse">
              {isPlaying ? <Play size={44} fill="#ffffff" color="#ffffff" /> : <Pause size={44} fill="#ffffff" color="#ffffff" />}
            </div>
            <div className="yt-player-live-badge">{project.badgeTag}</div>
            <h3 className="yt-player-overlay-title">{project.title}</h3>
            <p className="yt-player-overlay-sub">Demostración interactiva • {project.category}</p>
          </div>

          {/* Player Bottom Control Bar */}
          <div className="yt-player-controls">
            <div className="yt-scrub-bar">
              <div className="yt-scrub-progress" style={{ width: '48%' }}>
                <div className="yt-scrub-handle"></div>
              </div>
            </div>
            <div className="yt-controls-row">
              <div className="yt-controls-left">
                <button onClick={() => setIsPlaying(!isPlaying)} className="yt-ctrl-btn">
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button className="yt-ctrl-btn">
                  <Volume2 size={18} />
                </button>
                <span className="yt-time-display">02:14 / {project.duration}</span>
              </div>
              <div className="yt-controls-right">
                <span className="yt-quality-badge">1080p 60fps</span>
                <button className="yt-ctrl-btn">
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Details Content */}
        <div className="yt-player-body">
          <h2 className="yt-player-title">{project.title}</h2>

          {/* Action Row */}
          <div className="yt-player-actions-row">
            {/* Channel info */}
            <div className="yt-player-channel">
              <div className="yt-channel-avatar-sm">AJ</div>
              <div>
                <div className="yt-channel-name-sm">
                  <span>{PERSONAL_INFO.name}</span>
                  <CheckCircle2 size={14} fill="#aaaaaa" color="#0f0f0f" />
                </div>
                <span className="yt-channel-subs-sm">{PERSONAL_INFO.subscribers}</span>
              </div>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="yt-subscribe-btn yt-sm-sub"
              >
                Contactar
              </a>
            </div>

            {/* Like, Share, External Demo and GitHub */}
            <div className="yt-player-btn-group">
              <button 
                onClick={handleLike} 
                className={`yt-action-pill ${hasLiked ? 'active-like' : ''}`}
                title="Me gusta"
              >
                <ThumbsUp size={16} fill={hasLiked ? '#3ea6ff' : 'none'} color={hasLiked ? '#3ea6ff' : 'currentColor'} />
                <span>{likes}</span>
              </button>

              <button onClick={handleShare} className="yt-action-pill" title="Compartir">
                {copied ? <Check size={16} className="text-emerald" /> : <Share2 size={16} />}
                <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
              </button>

              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yt-action-pill yt-pill-primary"
                >
                  <ExternalLink size={16} />
                  <span>Abrir Demo en Vivo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yt-action-pill"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Description Box */}
          <div className="yt-description-box">
            <div className="yt-desc-meta">
              <strong>{project.views}</strong>
              <span>•</span>
              <strong>{project.uploadedTime}</strong>
              <span>•</span>
              <span className="yt-desc-status">{project.status}</span>
            </div>
            <p className="yt-desc-text">{project.description}</p>

            <div className="yt-desc-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="yt-desc-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="yt-comments-section">
            <div className="yt-comments-header">
              <MessageSquare size={18} />
              <h3>{comments.length} Comentarios</h3>
            </div>

            <form onSubmit={handleAddComment} className="yt-add-comment-form">
              <div className="yt-comment-avatar">Tú</div>
              <div className="yt-comment-input-wrap">
                <input
                  type="text"
                  placeholder="Añade un comentario sobre este proyecto..."
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  className="yt-comment-input"
                />
                {userComment && (
                  <button type="submit" className="yt-comment-submit-btn">
                    Comentar
                  </button>
                )}
              </div>
            </form>

            <div className="yt-comments-list">
              {comments.map((c) => (
                <div key={c.id} className="yt-comment-item">
                  <div className="yt-comment-item-avatar">{c.author.slice(0, 2).toUpperCase()}</div>
                  <div className="yt-comment-content">
                    <div className="yt-comment-meta">
                      <span className="yt-comment-author">{c.author}</span>
                      <span className="yt-comment-time">{c.time}</span>
                    </div>
                    <p className="yt-comment-text">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
