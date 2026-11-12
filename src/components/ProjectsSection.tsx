import { useState, useMemo, useEffect, useRef } from 'react';
import type { ProjectItemI18n, ProjectCategory } from '../data/translations';
import { I18N_PROJECTS, TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/projects';
import {
  Search,
  ExternalLink,
  X,
  Filter,
  Layers,
  CheckCircle2,
  Code2,
  Terminal,
  GitBranch,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

const MAX_VISIBLE_CARD_TAGS = 4;

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'Todos' | ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItemI18n | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const categories: { key: 'Todos' | ProjectCategory; label: string }[] = [
    { key: 'Todos', label: t.categoryAll },
    { key: 'QA Automation', label: t.categoryLabels['QA Automation'] },
    { key: 'Mobile Testing', label: t.categoryLabels['Mobile Testing'] },
    { key: 'API & Backend', label: t.categoryLabels['API & Backend'] },
    { key: 'Desarrollo Web', label: t.categoryLabels['Desarrollo Web'] },
  ];

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return I18N_PROJECTS.filter((project) => {
      const title = project.title[language].toLowerCase();
      const desc = project.description[language].toLowerCase();
      const categoryLabel = t.categoryLabels[project.category].toLowerCase();

      const matchesSearch =
        query === '' ||
        title.includes(query) ||
        desc.includes(query) ||
        categoryLabel.includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        activeCategory === 'Todos' ||
        project.category === activeCategory ||
        project.tags.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, language, t.categoryLabels]);

  const openModal = (project: ProjectItemI18n, triggerEl: HTMLButtonElement) => {
    lastTriggerRef.current = triggerEl;
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  };

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const getStatusBadge = (status: ProjectItemI18n['status']) => {
    switch (status) {
      case 'Completado':
        return <span className="status-tag status-emerald">{t.statusCompleted}</span>;
      case 'En Desarrollo':
        return <span className="status-tag status-emerald">{t.statusInDev}</span>;
      case 'Próximamente':
        return <span className="status-tag status-violet">{t.statusUpcoming}</span>;
    }
  };

  const renderLayerItem = (layer: string, idx: number) => {
    const separator = ' — ';
    const sepIndex = layer.indexOf(separator);
    if (sepIndex === -1) {
      return <li key={idx}>{layer}</li>;
    }
    const prefix = layer.slice(0, sepIndex);
    const detail = layer.slice(sepIndex + separator.length);
    return (
      <li key={idx}>
        <code className="arch-layer-path">{prefix}</code>
        <span> — {detail}</span>
      </li>
    );
  };

  const hasActiveFilter = searchQuery.trim() !== '' || activeCategory !== 'Todos';

  return (
    <section id="proyectos" className="section-padding section-band-alt projects-section">
      <div className="container">
        {/* Encabezado editorial */}
        <div className="editorial-header">
          <div className="editorial-header-main">
            <span className="section-eyebrow">01 / {t.tag}</span>
            <h2>{t.title}</h2>
          </div>
          <p className="editorial-header-desc">{t.subtitle}</p>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="filter-bar-container">
          <div className="filter-controls-top">
            <div className="filter-search-box">
              <label htmlFor="projects-search-input" className="sr-only">
                {t.searchLabel}
              </label>
              <Search size={18} className="search-icon" aria-hidden="true" />
              <input
                id="projects-search-input"
                type="text"
                placeholder={t.searchPlaceholder}
                aria-label={t.searchLabel}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                  aria-label={t.clear}
                  title={t.clear}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="projects-results-bar" aria-live="polite">
              <span className="projects-results-count">
                {t.showing} <strong>{filteredProjects.length}</strong> {t.of} {I18N_PROJECTS.length} {t.countWord}
              </span>
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('Todos');
                  }}
                  className="projects-reset-inline"
                >
                  {t.clear}
                </button>
              )}
            </div>
          </div>

          <div className="filter-pills-row">
            <div className="filter-label-group">
              <Filter size={15} aria-hidden="true" />
              <span>{language === 'es' ? 'Categoría' : 'Category'}</span>
            </div>
            <div
              className="filter-pills"
              role="group"
              aria-label={language === 'es' ? 'Filtrar por categoría' : 'Filter by category'}
            >
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`filter-pill ${activeCategory === cat.key ? 'active' : ''}`}
                  aria-pressed={activeCategory === cat.key}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cuadrícula editorial balanceada */}
        {filteredProjects.length === 0 ? (
          <div className="empty-state surface-card">
            <p>
              {t.emptyTitle}
              {searchQuery.trim() ? (
                <>
                  {' '}
                  &quot;<strong>{searchQuery.trim()}</strong>&quot;
                </>
              ) : null}
              . {t.emptySubtitle}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Todos');
              }}
              className="btn btn-secondary btn-sm"
            >
              {t.clear}
            </button>
          </div>
        ) : (
          <div
            className={`projects-editorial-grid ${
              filteredProjects.length === 1
                ? 'cols-1'
                : filteredProjects.length === 2 || filteredProjects.length === 4
                  ? 'cols-2'
                  : 'cols-3'
            }`}
          >
            {filteredProjects.map((project, index) => {
              const totalFiltered = filteredProjects.length;
              const useTwoCols = totalFiltered === 2 || totalFiltered === 4;
              const desktopSpanFull = !useTwoCols && totalFiltered % 3 === 1 && index === 0;
              const desktopSpanTwo = !useTwoCols && totalFiltered % 3 === 2 && index === 0;
              const tabletSpanFull = totalFiltered % 2 === 1 && index === 0;
              const isWideLead = desktopSpanFull || desktopSpanTwo || totalFiltered === 1;

              const visibleTags = project.tags.slice(0, MAX_VISIBLE_CARD_TAGS);
              const hiddenTagsCount = Math.max(0, project.tags.length - MAX_VISIBLE_CARD_TAGS);
              const isPublishedRepo = project.repoStatus === 'published' && Boolean(project.repoUrl);
              const repoHref = isPublishedRepo ? project.repoUrl! : PERSONAL_INFO.githubUrl;
              const repoTitle = isPublishedRepo ? t.btnRepoPublished : t.btnCodeInPrep;
              const indexLabel = String(index + 1).padStart(2, '0');

              const cardClasses = [
                'surface-card',
                'project-card',
                isPublishedRepo ? 'project-card-live' : project.featured ? 'project-card-featured' : '',
                isWideLead ? 'project-card-lead' : '',
                desktopSpanTwo ? 'project-card-span-2' : '',
                desktopSpanFull ? 'project-card-span-full' : '',
                tabletSpanFull ? 'project-card-tablet-lead' : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <article key={project.id} className={cardClasses}>
                  <div className="project-card-main">
                    <div className="card-top-bar">
                      <div className="project-meta-left">
                        <span className="project-index">{indexLabel}</span>
                        <span className="project-category-tag">
                          {t.categoryLabels[project.category]}
                        </span>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>

                    <h3 className="project-card-title">{project.title[language]}</h3>
                    <p className="project-card-desc">{project.description[language]}</p>

                    <div className="tech-tags-list">
                      {visibleTags.map((tag) => (
                        <span key={tag} className="tech-chip">
                          {tag}
                        </span>
                      ))}
                      {hiddenTagsCount > 0 && (
                        <span className="tech-chip tech-chip-more">+{hiddenTagsCount}</span>
                      )}
                    </div>
                  </div>

                  <div className={`project-card-aside ${isWideLead ? 'is-lead-aside' : ''}`}>
                    {isWideLead && (
                      <div className="project-lead-preview">
                        <span className="project-lead-caption">
                          {project.focusKind === 'web' ? t.modalWebCommandTitle : t.modalCommandTitle}
                        </span>
                        <code className="project-lead-command">
                          {project.architecture.sampleCommand}
                        </code>
                      </div>
                    )}

                    <div className="project-card-footer">
                      <div className={`project-repo-note ${isPublishedRepo ? 'is-published' : ''}`}>
                        <GitBranch size={13} aria-hidden="true" />
                        <span>
                          {project.liveUrl && isPublishedRepo
                            ? t.repoPublishedBadge
                            : isPublishedRepo
                              ? t.btnRepoPublished
                              : t.repoInPrepBadge}
                        </span>
                      </div>

                      <div className="project-card-actions">
                        <button
                          type="button"
                          onClick={(e) => openModal(project, e.currentTarget)}
                          className="btn btn-primary btn-sm flex-1"
                        >
                          <Layers size={15} aria-hidden="true" />
                          <span>{t.btnArchitecture}</span>
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm icon-only"
                            title={t.btnLiveDemo}
                            aria-label={`${t.btnLiveDemo}: ${project.title[language]}`}
                          >
                            <ExternalLink size={16} aria-hidden="true" />
                          </a>
                        )}

                        <a
                          href={repoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm icon-only"
                          title={repoTitle}
                          aria-label={`${repoTitle}: ${project.title[language]}`}
                        >
                          <GithubIcon size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal de inspección de arquitectura técnica */}
      {selectedProject && (
        <div className="arch-modal-backdrop" onClick={closeModal}>
          <div
            ref={modalRef}
            className="arch-modal surface-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="arch-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="arch-modal-header">
              <div className="arch-modal-title-group">
                <div className="arch-modal-meta">
                  <span className="project-category-tag">
                    {t.categoryLabels[selectedProject.category]}
                  </span>
                  {getStatusBadge(selectedProject.status)}
                </div>
                <span className="arch-modal-eyebrow">
                  {selectedProject.focusKind === 'web' ? t.modalWebTitleLabel : t.modalTitleLabel}
                </span>
                <h3 id="arch-modal-title" className="arch-modal-title">
                  {selectedProject.title[language]}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="arch-modal-close"
                aria-label={t.modalClose}
                title={t.modalClose}
              >
                <X size={20} />
              </button>
            </div>

            <div className="arch-modal-body">
              <p className="arch-modal-summary">
                {selectedProject.architecture.summary[language]}
              </p>

              <div className="tech-tags-list arch-modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="arch-modal-section">
                <h4 className="arch-modal-section-title">
                  <Layers size={16} aria-hidden="true" />
                  <span>{t.modalLayersTitle}</span>
                </h4>
                <ul className="arch-layers-list">
                  {selectedProject.architecture.layers[language].map(renderLayerItem)}
                </ul>
              </div>

              <div className="arch-modal-section">
                <h4 className="arch-modal-section-title">
                  {selectedProject.focusKind === 'web' ? (
                    <Code2 size={16} aria-hidden="true" />
                  ) : (
                    <CheckCircle2 size={16} aria-hidden="true" />
                  )}
                  <span>
                    {selectedProject.focusKind === 'web'
                      ? t.modalWebFocusTitle
                      : t.modalValidationTitle}
                  </span>
                </h4>
                <ul className="arch-validation-list">
                  {selectedProject.architecture.validationFocus[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="arch-modal-section">
                <h4 className="arch-modal-section-title">
                  <Terminal size={16} aria-hidden="true" />
                  <span>
                    {selectedProject.focusKind === 'web'
                      ? t.modalWebCommandTitle
                      : t.modalCommandTitle}
                  </span>
                </h4>
                <pre className="arch-code-block">
                  <code>{selectedProject.architecture.sampleCommand}</code>
                </pre>
              </div>

              <div className="arch-repo-status">
                <GitBranch size={16} aria-hidden="true" className="arch-repo-status-icon" />
                <p>
                  {selectedProject.repoStatus === 'published' && selectedProject.repoUrl
                    ? t.modalRepoStatusPublished
                    : t.modalRepoStatusInPrep}
                </p>
              </div>
            </div>

            <div className="arch-modal-footer">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>{t.modalLiveDemoOpen}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}

              <a
                href={
                  selectedProject.repoStatus === 'published' && selectedProject.repoUrl
                    ? selectedProject.repoUrl
                    : PERSONAL_INFO.githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>
                  {selectedProject.repoStatus === 'published' && selectedProject.repoUrl
                    ? t.modalRepoOpen
                    : t.modalGithubProfile}
                </span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>

              <button type="button" onClick={closeModal} className="btn btn-primary btn-sm">
                {t.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
