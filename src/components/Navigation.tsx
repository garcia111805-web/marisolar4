import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
            <Sun className="w-6 h-6 text-primary-foreground group-hover:animate-spin transition-transform" style={{ animationDuration: '3s' }} />
          </div>
          <span className={`font-display font-bold text-xl transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            Mari<span className="gradient-text">solar</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm transition-colors duration-300 ${isActive(link.path)
                  ? 'text-primary'
                  : isScrolled
                    ? 'text-foreground/70 hover:text-foreground'
                    : 'text-white/90 hover:text-white drop-shadow-sm'
                }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book Free Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 font-medium transition-colors ${isActive(link.path) ? 'text-primary' : 'text-foreground/70'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="default" className="mt-2" asChild>
              <Link to="/contact">Book Free Call</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
