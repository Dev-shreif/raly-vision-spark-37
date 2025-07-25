import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import ConsultationDropdown from './ConsultationDropdown';
import ProgramsDropdown from './ProgramsDropdown';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const {
    theme,
    setTheme
  } = useTheme();
  const {
    language,
    setLanguage,
    t
  } = useLanguage();

  // Scroll detection for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: t('home'),
    path: '/'
  }, {
    name: t('solutions'),
    path: '/solutions'
  }, {
    name: t('courses'),
    path: '/courses'
  }, {
    name: t('contact'),
    path: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="container mx-auto px-[10px] py-0">
        <div className="flex items-center justify-between h-14">
          {/* Enhanced Logo - Integrated with "Printed" Effect */}
          <Link to="/" className="flex items-center gap-4 group cursor-pointer transition-all duration-300 px-0 mx-0 my-0 py-0">
            <div className="relative">
              <img src="/lovable-uploads/ef59bb60-e2e6-4b16-b7bc-2a223b297c6a.png" alt="RALY - IT Consulting, Training & Solutions" className={`raly-logo-navbar transition-all duration-300 ${isScrolled ? 'w-16 h-16 logo-printed-light dark:logo-printed-dark' : 'w-20 h-20 logo-printed-transparent'}`} />
            </div>
            <span className={`font-bold text-3xl transition-colors duration-300 group-hover:text-brand-teal ${isScrolled ? 'text-brand-blue dark:text-white' : 'text-white'}`}>𝙍𝘼𝙇𝙔</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium py-2 transition-all duration-300 ${isActive(item.path) ? 'nav-link-active' : isScrolled ? 'nav-link-hover' : 'text-white/90 hover:text-white'}`}>
                {item.name}
              </Link>)}
            {/* Programs Dropdown */}
            <div className={isScrolled ? 'nav-link-hover' : 'text-white/90 hover:text-white'}>
              <ProgramsDropdown />
            </div>
            
            {/* Consultations Dropdown */}
            <div className={isScrolled ? 'nav-link-hover' : 'text-white/90 hover:text-white'}>
              <ConsultationDropdown />
            </div>
          </div>

          {/* Direct Icons & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className={`p-2 rounded-lg transition-colors duration-300 hover-lift ${isScrolled ? 'hover:bg-muted text-brand-blue dark:text-white' : 'hover:bg-white/20 text-white'}`} aria-label="Toggle Language">
              <Globe className="w-5 h-5" />
            </button>
            
            {/* Theme Toggle */}
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2 rounded-lg transition-colors duration-300 hover-lift ${isScrolled ? 'hover:bg-muted text-brand-blue dark:text-white' : 'hover:bg-white/20 text-white'}`} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'hover:bg-muted text-brand-blue dark:text-white' : 'hover:bg-white/20 text-white'}`}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className={`md:hidden py-4 ${isScrolled ? 'border-t border-border' : 'border-t border-white/20'}`}>
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`font-medium py-2 transition-colors duration-300 ${isActive(item.path) ? 'text-brand-teal' : isScrolled ? 'text-brand-blue dark:text-white hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
                  {item.name}
                </Link>)}
              {/* Mobile Programs Links */}
              <Link to="/programs/activities" onClick={() => setIsOpen(false)} className={`font-medium py-2 transition-colors duration-300 ${isActive('/programs/activities') ? 'text-brand-teal' : isScrolled ? 'text-brand-blue dark:text-white hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
                {t('activities')}
              </Link>
              <Link to="/programs/recent-events" onClick={() => setIsOpen(false)} className={`font-medium py-2 transition-colors duration-300 ${isActive('/programs/recent-events') ? 'text-brand-teal' : isScrolled ? 'text-brand-blue dark:text-white hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
                {t('recentEvents')}
              </Link>
              
              {/* Mobile Consultations Link */}
              <Link to="/consultations" onClick={() => setIsOpen(false)} className={`font-medium py-2 transition-colors duration-300 ${isActive('/consultations') ? 'text-brand-teal' : isScrolled ? 'text-brand-blue dark:text-white hover:text-brand-teal' : 'text-white/90 hover:text-white'}`}>
                {t('consultations')}
              </Link>
              <div className="mt-4 space-y-3">
                {/* Mobile Direct Icons */}
                <div className="flex items-center gap-4">
                  {/* Language Toggle */}
                  <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className={`p-2 rounded-lg transition-colors duration-300 flex items-center gap-2 ${isScrolled ? 'hover:bg-muted text-brand-blue dark:text-white' : 'hover:bg-white/20 text-white/90'}`} aria-label="Toggle Language">
                    <Globe className="w-5 h-5" />
                    <span className="text-sm">{language === 'ar' ? 'EN' : 'عربي'}</span>
                  </button>
                  
                  {/* Theme Toggle */}
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`p-2 rounded-lg transition-colors duration-300 flex items-center gap-2 ${isScrolled ? 'hover:bg-muted text-brand-blue dark:text-white' : 'hover:bg-white/20 text-white/90'}`} aria-label="Toggle Theme">
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span className="text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </button>
                </div>
                
                <Button className="cta-button w-full">
                  {t('getStarted')}
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;