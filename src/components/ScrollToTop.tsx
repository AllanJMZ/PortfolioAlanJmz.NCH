import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón cuando se haya desplazado más de 250px hacia abajo
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
      aria-label={language === 'es' ? 'Volver al inicio de la página' : 'Scroll back to top'}
      title={language === 'es' ? 'Volver arriba' : 'Back to top'}
    >
      <ArrowUp size={22} className="scroll-arrow-icon" />
    </button>
  );
};

