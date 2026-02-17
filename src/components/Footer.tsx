import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                <Sun className="w-6 h-6 text-primary-foreground group-hover:animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <span className="font-display font-bold text-xl text-secondary-foreground">
                Mari<span className="text-primary">solar</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Premium solar solutions for discerning homeowners. 
              Engineering excellence meets sustainable living.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Services</h4>
            <ul className="space-y-2">
              {['Residential Solar', 'Battery Storage', 'EV Charging', 'Commercial Solar', 'Maintenance'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-secondary-foreground/60 text-sm">(888) 555-SOLAR</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-secondary-foreground/60 text-sm">hello@marisolar.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-secondary-foreground/60 text-sm">Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-secondary-foreground/40 text-xs">
            © {currentYear} Marisolar. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
