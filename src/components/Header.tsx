import React, { useState, useEffect, useRef } from 'react';
import { BrandMark } from './BrandMark';
import { Link, useRouter } from '../context/RouterContext';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/content';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll to slightly adjust header contrast while keeping video visible
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Research', path: '/research' },
    { name: 'Fellowship', path: '/fellowship' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-black/55 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-black/25 backdrop-blur-sm border-white/10'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] rounded-sm py-1.5"
          aria-label="HackCartel Research home"
        >
          <BrandMark size={26} className="transition-transform group-hover:scale-105 duration-200" />
          <div className="flex flex-col">
            <span className="font-medium text-[16px] tracking-tight text-[#F5F5F3] group-hover:text-white transition-colors text-shadow-sm">
              HackCartel Research
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-medium tracking-wide transition-all py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7] rounded-sm text-shadow-sm ${
                  isActive
                    ? 'text-[#F5F5F3] font-semibold'
                    : 'text-[#BCC5D0] hover:text-[#F5F5F3]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-[-18px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#67D8E7] to-[#B6A4E8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/fellowship"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[14px] font-medium tracking-tight rounded-md bg-[#F5F5F3] text-[#0A0D12] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#67D8E7] transition-all shadow-sm"
          >
            <span>Explore Fellowship</span>
            <ArrowRight size={14} className="text-[#0A0D12]" />
          </Link>

          {/* Mobile menu button */}
          <button
            ref={toggleButtonRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#F5F5F3] bg-black/40 hover:bg-black/60 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D8E7]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Sufficiently opaque for easy reading) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileNavRef}
          className="md:hidden fixed inset-x-0 top-18 bottom-0 z-50 bg-[#07090E] border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
          style={{ height: 'calc(100vh - 4.5rem)' }}
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[19px] font-medium py-3.5 border-b border-white/10 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#67D8E7] font-semibold' : 'text-[#BCC5D0] hover:text-[#F5F5F3]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#67D8E7] shadow-sm shadow-[#67D8E7]" />
                  ) : (
                    <ArrowRight size={16} className="text-[#BCC5D0]/40" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4 mt-auto">
            <Link
              to="/fellowship"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-[15px] font-medium text-center rounded-md bg-[#F5F5F3] text-[#0A0D12] hover:bg-white shadow-lg"
            >
              <span>Explore Fellowship</span>
              <ArrowRight size={15} />
            </Link>
            <p className="text-[12px] font-mono text-[#BCC5D0]/70 text-center pt-1">
              “{siteConfig.tagline}”
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
