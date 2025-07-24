import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const quickLinks = [{
    name: 'About Us',
    path: '/about'
  }, {
    name: 'IT Solutions',
    path: '/solutions'
  }, {
    name: 'Courses',
    path: '/courses'
  }, {
    name: 'Programs',
    path: '/programs/activities'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const services = ['Database Administration', 'Cloud Computing', 'Cybersecurity', 'Web Development', 'Network Management', 'IT Consulting'];
  const socialLinks = [{
    icon: <Facebook className="w-5 h-5" />,
    href: '#',
    name: 'Facebook'
  }, {
    icon: <Twitter className="w-5 h-5" />,
    href: '#',
    name: 'Twitter'
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    href: '#',
    name: 'LinkedIn'
  }, {
    icon: <Instagram className="w-5 h-5" />,
    href: '#',
    name: 'Instagram'
  }];
  return <footer className="bg-muted text-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Logo as Stamp */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <img src="/lovable-uploads/ef59bb60-e2e6-4b16-b7bc-2a223b297c6a.png" alt="RALY - IT Consulting, Training & Solutions" className="raly-logo-footer w-36 h-36 logo-printed-footer transition-all duration-300" />
              <span className="font-bold text-3xl text-foreground tracking-wider">𝙍𝘼𝙇𝙔</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">Empowering Growth Through Expert IT Consulting, Training, and Tailored Solutions</p>
            <div className="space-y-3">
              
              <div className="flex items-center gap-3">
                
                
              </div>
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-brand-teal transition-colors hover:translate-x-1 transform duration-200 inline-block">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map(service => <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates and tech insights.
            </p>
            <div className="flex gap-2 mb-6">
              <Input placeholder="Enter your email" className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
              <Button variant="secondary" size="sm" className="hover-lift group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map(social => <a key={social.name} href={social.href} className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all hover:scale-110" aria-label={social.name}>
                    {social.icon}
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 RALY - IT Consulting, Training & Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-brand-teal transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-brand-teal transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-brand-teal transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;