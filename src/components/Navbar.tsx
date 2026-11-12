import { useState, useEffect, useRef } from 'react';
import {
  Moon,
  Sun,
  Code2,
  FolderGit2,
  Sparkles,
  Mail,
  Award,
  Languages,
  Menu,
  X,
  Home,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const SECTION_IDS = ['inicio', 'proyectos', 'habilidades', 'certificaciones', 'intereses', 'contacto'] as const;

export const Navbar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      return saved === 'light' || saved === 'dark' ? saved : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // Ignore storage availability errors
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = 'inicio';
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = 'contacto';
      } else {
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              current = id;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 861px)');
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMobileMenuOpen(false);
      }
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        requestAnimationFrame(() => {
          menuToggleRef.current?.focus();
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'proyectos', href: '#proyectos', label: t.projects, icon: FolderGit2 },
    { id: 'habilidades', href: '#habilidades', label: t.skills, icon: Code2 },
    { id: 'certificaciones', href: '#certificaciones', label: t.certifications, icon: Award },
    { id: 'intereses', href: '#intereses', label: t.interests, icon: Sparkles },
    { id: 'contacto', href: '#contacto', label: t.contact, icon: Mail },
  ];

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#inicio" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="logo-icon-box">
              {!logoError ? (
                <img
                  src="./logo.png"
                  alt=""
                  width={38}
                  height={38}
                  aria-hidden="true"
                  className="nav-logo-img"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="logo-monogram" aria-hidden="true">AJ</span>
              )}
            </div>
            <span className="logo-text">{PERSONAL_INFO.name}</span>
          </a>

          <nav className="navbar-links" aria-label={language === 'es' ? 'Navegación principal' : 'Primary navigation'}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <button
              type="button"
              onClick={toggleLanguage}
              className={`lang-toggle-btn ${language === 'en' ? 'active-en' : 'active-es'}`}
              title={t.langToggle}
              aria-label={t.langAria}
            >
              <Languages size={16} className="lang-icon" aria-hidden="true" />
              <span className="lang-code-pill">{language.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={theme === 'dark' ? t.themeDark : t.themeLight}
              aria-label={t.themeAria}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm nav-gh-btn"
              title={t.githubTitle}
              aria-label={t.githubTitle}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <button
              ref={menuToggleRef}
              type="button"
              className="mobile-menu-btn"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
              title={mobileMenuOpen ? t.menuClose : t.menuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-nav-drawer"
            className="mobile-nav-drawer"
            aria-label={language === 'es' ? 'Navegación móvil' : 'Mobile navigation'}
          >
            <div className="container mobile-nav-list">
              <a
                ref={firstMobileLinkRef}
                href="#inicio"
                className={`mobile-nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <Home size={18} aria-hidden="true" />
                <span>{t.home}</span>
              </a>

              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                );
              })}

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mobile-nav-gh"
                onClick={closeMobileMenu}
              >
                <GithubIcon size={18} />
                <span>{t.githubTitle}</span>
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
