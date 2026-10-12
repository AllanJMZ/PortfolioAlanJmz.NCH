import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

export function App() {
  return (
    <LanguageProvider>
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <InterestsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;
