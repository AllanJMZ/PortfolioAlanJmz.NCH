import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
