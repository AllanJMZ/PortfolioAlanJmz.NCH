import { useState, useMemo } from 'react';
import type { ProjectItemI18n } from '../data/translations';
import { I18N_PROJECTS, TRANSLATIONS } from '../data/translations';
import { Search, ExternalLink, FolderGit2, X, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = [
    { key: 'Todos', label: t.categoryAll },
    { key: 'QA Automation', label: 'QA Automation' },
    { key: 'Mobile Testing', label: 'Mobile Testing' },
    { key: 'API & Backend', label: 'API & Backend' },
    { key: 'Desarrollo Web', label: t.categoryWebDev },
  ];

  const filteredProjects = useMemo(() => {
    return I18N_PROJECTS.filter((project) => {
      const title = project.title[language].toLowerCase();
      const desc = project.description[language].toLowerCase();
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        title.includes(query) ||
        desc.includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesCategory =
        activeCategory === 'Todos' ||
        project.category === activeCategory ||
        project.tags.includes(activeCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, language]);

  const getStatusBadge = (status: ProjectItemI18n['status']) => {
    switch (status) {
      case 'Completado':
        return <span className="badge badge-emerald">{t.statusCompleted}</span>;
      case 'En Desarrollo':
        return <span className="badge badge-cyan"><span className="pulse-dot"></span> {t.statusInDev}</span>;
      case 'Próximamente':
        return <span className="badge badge-purple">{t.statusUpcoming}</span>;
    }
  };

  return (
    <section id="proyectos" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan section-tag">
            <FolderGit2 size={14} /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        {/* Search and Filters */}
        <div className="filter-bar-container">
          <div className="filter-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                title={t.clear}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="filter-pills-row">
            <div className="filter-label-group">
              <Filter size={15} />
              <span>{language === 'es' ? 'Categoría:' : 'Category:'}</span>
            </div>
            <div className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`filter-pill ${activeCategory === cat.key ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-state glass-card">
            <p>
              {t.emptyTitle} "<strong>{searchQuery}</strong>". {t.emptySubtitle}
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }} 
              className="btn btn-secondary btn-sm"
            >
              {t.clear}
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass-card project-card">
                <div className="card-top-bar">
                  <span className="project-category-tag">{project.category}</span>
                  {getStatusBadge(project.status)}
                </div>

                <h3 className="project-card-title">{project.title[language]}</h3>
                <p className="project-card-desc">{project.description[language]}</p>

                {/* Tags */}
                <div className="tech-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card-actions">
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm flex-1"
                    >
                      <span>{t.btnDemo}</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <button className="btn btn-secondary btn-sm flex-1 btn-disabled" disabled>
                      <span>{t.statusUpcoming}</span>
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm icon-only"
                      title={t.btnCode}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tip for editing */}
        <div className="projects-tip-card glass-card">
          <Sparkles size={20} className="tip-icon" />
          <div className="tip-content">
            <h4>{language === 'es' ? '¿Cómo agregar o modificar tus proyectos?' : 'How to add or modify your projects?'}</h4>
            <p>
              {language === 'es'
                ? 'Tus proyectos están organizados en el archivo src/data/translations.ts y src/data/projects.ts. Solo tienes que editar los títulos, descripciones y enlaces a tu gusto.'
                : 'Your projects are organized in src/data/translations.ts and src/data/projects.ts. Simply customize titles, descriptions, and links as needed.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

