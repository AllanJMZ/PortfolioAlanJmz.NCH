import { useState, useMemo } from 'react';
import type { Project } from '../data/projects';
import { PROJECTS_DATA } from '../data/projects';
import { Search, ExternalLink, FolderGit2, X, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export const ProjectsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Frontend', 'Herramientas', 'En Proceso'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        activeCategory === 'Todos' || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completado':
        return <span className="badge badge-emerald">✓ Completado</span>;
      case 'En Desarrollo':
        return <span className="badge badge-cyan"><span className="pulse-dot"></span> En Desarrollo</span>;
      case 'Próximamente':
        return <span className="badge badge-purple">⏳ Próximamente</span>;
    }
  };

  return (
    <section id="proyectos" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-cyan section-tag">
            <FolderGit2 size={14} /> Catálogo de Proyectos
          </span>
          <h2>Mis Proyectos</h2>
          <p>
            Aquí puedes ver los proyectos que he desarrollado. Cada uno cuenta con demostración en vivo y acceso al código fuente en GitHub.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="filter-bar-container">
          <div className="filter-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar proyecto por nombre, tecnología (React, JS...) o descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                title="Limpiar búsqueda"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="filter-pills-row">
            <div className="filter-label-group">
              <Filter size={15} />
              <span>Categoría:</span>
            </div>
            <div className="filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="empty-state glass-card">
            <p>No se encontraron proyectos con el término "<strong>{searchQuery}</strong>".</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }} 
              className="btn btn-secondary btn-sm"
            >
              Restablecer filtros
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

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

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
                      <span>Ver Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <button className="btn btn-secondary btn-sm flex-1 btn-disabled" disabled>
                      <span>Demo Próximamente</span>
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm icon-only"
                      title="Ver Repositorio en GitHub"
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
            <h4>¿Cómo agregar o modificar tus proyectos?</h4>
            <p>
              Tus proyectos están organizados en el archivo <code>src/data/projects.ts</code>. Solo tienes que abrir ese archivo y editar los títulos, descripciones y enlaces a tu gusto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
