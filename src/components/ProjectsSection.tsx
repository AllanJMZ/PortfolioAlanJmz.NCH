import { useState, useMemo } from 'react';
import type { ProjectItemI18n } from '../data/translations';
import { I18N_PROJECTS, TRANSLATIONS } from '../data/translations';
import { Search, ExternalLink, FolderGit2, X, Filter } from 'lucide-react';
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
        {/* Encabezado de la sección */}
        <div className="section-header">
          <span className="badge badge-cyan section-tag">
            <FolderGit2 size={14} /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        {/* Barra de búsqueda y filtrado por categoría */}
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

        {/* Cuadrícula de proyectos */}
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

                {/* Tecnologías y etiquetas */}
                <div className="tech-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlaces de demostración y código fuente */}
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
      </div>
    </section>
  );
};

