import { useState, useEffect } from "react";
import { Mail, Languages, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "../../imports/LogoDes_-_transparentpng.png";

interface HeaderProps {
  language: 'en' | 'pt';
  onLanguageToggle: () => void;
}

const navLinks = {
  en: {
    about: "About",
    services: "Services",
    results: "Results",
    testimonials: "Testimonials",
    contact: "Contact",
    cta: "Start a Project"
  },
  pt: {
    about: "Sobre",
    services: "Serviços",
    results: "Resultados",
    testimonials: "Depoimentos",
    contact: "Contato",
    cta: "Iniciar Projeto"
  }
};

export function Header({ language, onLanguageToggle }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = navLinks[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoImage}
                alt="CN Logo"
                className="w-10 h-10"
              />
              <span className={`font-bold text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                Christiane Nogueira
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-[#8B5CF6] ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`transition-colors hover:text-[#8B5CF6] ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}
              >
                {t.services}
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className={`transition-colors hover:text-[#8B5CF6] ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}
              >
                {t.results}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className={`transition-colors hover:text-[#8B5CF6] ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}
              >
                {t.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors hover:text-[#8B5CF6] ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}
              >
                {t.contact}
              </button>
            </nav>

            {/* CTA + Language Toggle */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onLanguageToggle}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Languages className="w-5 h-5 text-[#8B5CF6]" />
                <span className="font-semibold text-gray-900">{language === 'en' ? 'PT' : 'EN'}</span>
              </button>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] via-[#C026D3] to-[#EC4899] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                {t.cta}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-[#8B5CF6] transition-colors py-2"
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-[#8B5CF6] transition-colors py-2"
              >
                {t.services}
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-left text-gray-700 hover:text-[#8B5CF6] transition-colors py-2"
              >
                {t.results}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-[#8B5CF6] transition-colors py-2"
              >
                {t.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#8B5CF6] transition-colors py-2"
              >
                {t.contact}
              </button>
              <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
                <button
                  onClick={onLanguageToggle}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Languages className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="font-semibold text-gray-900">{language === 'en' ? 'PT' : 'EN'}</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] via-[#C026D3] to-[#EC4899] text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  {t.cta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
