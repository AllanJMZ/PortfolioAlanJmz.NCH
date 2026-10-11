import type { Project } from '../data/projects';
import { PERSONAL_INFO } from '../data/projects';

import { Play, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface VideoGridProps {
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ projects, onSelectProject }) => {
  return (
    <div className="yt-video-grid">
      {projects.map((project) => (
        <article
          key={project.id}
          className="yt-video-card"
          onClick={() => onSelectProject(project)}
        >
          {/* 16:9 Thumbnail Box */}
          <div className="yt-thumbnail-wrapper" style={{ background: project.thumbnailGradient }}>
            <div className="yt-thumb-overlay">
              <div className="yt-thumb-play-circle">
                <Play size={24} fill="#ffffff" color="#ffffff" />
              </div>
            </div>

            <div className="yt-thumb-badge-top">{project.badgeTag}</div>
            <div className="yt-thumb-duration">{project.duration}</div>

            <div className="yt-thumb-preview-title">
              <span>{project.title.slice(0, 38)}...</span>
            </div>
          </div>

          {/* Video Metadata */}
          <div className="yt-card-meta-row">
            <div className="yt-card-avatar" title={PERSONAL_INFO.name}>
              AJ
            </div>

            <div className="yt-card-info">
              <h3 className="yt-card-title">{project.title}</h3>

              <div className="yt-card-channel-name">
                <span>{PERSONAL_INFO.name}</span>
                <CheckCircle2 size={13} fill="#aaaaaa" color="#0f0f0f" />
              </div>

              <div className="yt-card-stats-line">
                <span>{project.views}</span>
                <span className="yt-meta-dot">•</span>
                <span>{project.uploadedTime}</span>
              </div>

              {/* Status and Tags pills */}
              <div className="yt-card-tags-row">
                <span className={`yt-status-tag ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
                {project.tags.slice(0, 2).map((t) => (
                  <span key={t} className="yt-tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Quick direct buttons */}
              <div className="yt-card-quick-actions" onClick={(e) => e.stopPropagation()}>
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yt-quick-btn primary"
                    title="Abrir demo en vivo"
                  >
                    <span>Ver Demo</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yt-quick-btn"
                    title="Ver repositorio"
                  >
                    <GithubIcon size={14} />
                    <span>Código</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
