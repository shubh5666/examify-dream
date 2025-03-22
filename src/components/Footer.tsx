
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, GraduationCap, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <span className="bg-primary text-white w-8 h-8 rounded-md flex items-center justify-center text-lg">Q</span>
              <span>QuizMaster</span>
            </Link>
            <p className="text-foreground/70 mb-6">
              The intelligent quiz platform designed with precision to help you master any subject through adaptive learning.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Twitter} href="#" label="Twitter" />
              <SocialLink icon={Facebook} href="#" label="Facebook" />
              <SocialLink icon={Instagram} href="#" label="Instagram" />
              <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/features" label="Features" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/login" label="Login" />
              <FooterLink href="/register" label="Sign Up" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/help" label="Help Center" />
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/terms" label="Terms of Service" />
              <FooterLink href="/blog" label="Blog" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-foreground/70">support@quizmaster.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-foreground/70">
                  123 Learning Street, Knowledge City, 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {currentYear} QuizMaster. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link 
      to={href} 
      className="text-foreground/70 hover:text-primary transition-colors"
    >
      {label}
    </Link>
  </li>
);

interface SocialLinkProps {
  icon: typeof Twitter;
  href: string;
  label: string;
}

const SocialLink = ({ icon: Icon, href, label }: SocialLinkProps) => (
  <a 
    href={href} 
    aria-label={label}
    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-primary/10"
  >
    <Icon className="w-5 h-5 text-foreground/70" />
  </a>
);

export default Footer;
