
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-semibold flex items-center gap-2 transition hover:opacity-80"
        >
          <span className="bg-primary text-white w-8 h-8 rounded-md flex items-center justify-center text-lg">Q</span>
          <span>QuizMaster</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/features" label="Features" />
            <NavLink to="/about" label="About" />
            <NavLink to="/contact" label="Contact" />
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Log In
            </Link>
            <Link 
              to="/register" 
              className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-full transition-all hover:bg-primary/90 active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-lg">
          <NavLink to="/" label="Home" isMobile />
          <NavLink to="/features" label="Features" isMobile />
          <NavLink to="/about" label="About" isMobile />
          <NavLink to="/contact" label="Contact" isMobile />
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <Link 
            to="/login" 
            className="w-full py-3 text-center font-medium border border-gray-200 rounded-full transition-colors hover:bg-gray-50"
          >
            Log In
          </Link>
          <Link 
            to="/register" 
            className="w-full py-3 text-center text-white font-medium bg-primary rounded-full transition-all hover:bg-primary/90 active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isMobile?: boolean;
}

const NavLink = ({ to, label, isMobile = false }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "relative transition-colors",
        isActive 
          ? "text-primary font-medium" 
          : "text-foreground/80 hover:text-primary",
        isMobile && "py-2 text-xl"
      )}
    >
      {label}
      {isActive && (
        <span 
          className={cn(
            "absolute bg-primary",
            isMobile 
              ? "-right-6 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full" 
              : "bottom-0 left-0 w-full h-[2px]"
          )} 
        />
      )}
    </Link>
  );
};

export default Navbar;
