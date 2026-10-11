import { useState, useMemo, useEffect } from 'react';
import type { Project } from './data/projects';
import { PROJECTS_DATA } from './data/projects';
import { YouTubeHeader } from './components/YouTubeHeader';
import { YouTubeSidebar } from './components/YouTubeSidebar';
import { ChannelBanner } from './components/ChannelBanner';
import { CategoryChips } from './components/CategoryChips';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import './App.css';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const categories = ['Todos', 'Frontend', 'React', 'JavaScript', 'Herramientas', 'En Proceso'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'Todos' ||
        project.category === selectedCategory ||
        project.tags.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className={`yt-app-layout theme-${theme}`}>
      {/* YouTube Top Navigation Bar */}
      <YouTubeHeader
        onToggleSidebar={toggleSidebar}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="yt-main-wrapper">
        {/* Left Sidebar (Mini or Expanded) */}
        <YouTubeSidebar
          isExpanded={isSidebarExpanded}
          activeSection={activeSection}
          onSelectSection={(sec) => {
            setActiveSection(sec);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setActiveSection('proyectos');
          }}
        />

        {/* Main Content Area */}
        <main className={`yt-content-area ${isSidebarExpanded ? 'sidebar-open' : 'sidebar-mini'}`}>
          {/* Channel Header Banner */}
          <ChannelBanner />

          {/* YouTube Category Chips Row */}
          <CategoryChips
            categories={categories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Section Router */}
          {activeSection === 'habilidades' ? (
            <div className="yt-page-section">
              <SkillsSection />
            </div>
          ) : activeSection === 'contacto' ? (
            <div className="yt-page-section">
              <ContactSection />
            </div>
          ) : (
            <div className="yt-page-section">
              <div className="yt-section-title-row">
                <h2>
                  {selectedCategory === 'Todos' ? 'Todos los Proyectos' : `Categoría: ${selectedCategory}`}
                </h2>
                <span className="yt-results-count">
                  {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
                </span>
              </div>

              {filteredProjects.length === 0 ? (
                <div className="yt-empty-feed">
                  <p>No se encontraron proyectos para "{searchQuery}".</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('Todos');
                    }}
                    className="yt-secondary-btn"
                  >
                    Ver todos los proyectos
                  </button>
                </div>
              ) : (
                <VideoGrid
                  projects={filteredProjects}
                  onSelectProject={(proj) => setActiveProject(proj)}
                />
              )}

              {/* Skills and Contact embedded below for quick scrolling */}
              <div className="yt-embedded-sections">
                <SkillsSection />
                <ContactSection />
              </div>
            </div>
          )}
        </main>
      </div>

      {/* YouTube Video Player Modal */}
      <VideoPlayerModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default App;
