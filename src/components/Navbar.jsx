import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'var(--bg-primary)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'all var(--transition-normal)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          aria-label="Vaishnavi Vijay Naik - Home"
        >
          <div
            style={{
              width: '2.4rem',
              height: '2.4rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--navy-dark)',
              color: 'var(--text-inverse)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.04em',
              border: '1px solid var(--royal-blue)',
            }}
          >
            VN
          </div>
          <div>
            <span
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--navy-primary)',
                letterSpacing: '-0.015em',
                display: 'block',
                lineHeight: 1.2,
              }}
            >
              Vaishnavi Naik
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--royal-blue)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              Computer Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--royal-blue)' : 'var(--text-secondary)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isActive ? 'var(--royal-blue-light)' : 'transparent',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA & Social Icons */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.75rem',
          }}
          className="desktop-nav"
        >
          <a
            href="https://github.com/Vaishnavi18p"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            style={{ width: '2.2rem', height: '2.2rem' }}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-naik1834bb2aa"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            style={{ width: '2.2rem', height: '2.2rem' }}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary btn-sm"
            style={{ marginLeft: '0.25rem' }}
          >
            <Mail size={14} />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            color: 'var(--navy-primary)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
          }}
          className="mobile-menu-btn"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-primary)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-lg)',
          }}
          className="mobile-menu-container"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--royal-blue)' : 'var(--navy-secondary)',
                  padding: '0.65rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isActive ? 'var(--royal-blue-light)' : 'transparent',
                }}
              >
                {link.name}
              </a>
            );
          })}
          <div
            style={{
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            <a
              href="https://github.com/Vaishnavi18p"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vaishnavi-naik1834bb2aa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu-container {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
