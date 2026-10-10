import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--navy-dark)',
        color: '#E2E8F0',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--royal-blue)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                VN
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF' }}>
                Vaishnavi Vijay Naik
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', margin: 0 }}>
              Computer Engineering Student • Aspiring Software Developer
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/Vaishnavi18p"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: '#E2E8F0',
                transition: 'all var(--transition-fast)',
              }}
              aria-label="GitHub Profile"
              className="footer-icon-link"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-naik1834bb2aa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: '#E2E8F0',
                transition: 'all var(--transition-fast)',
              }}
              aria-label="LinkedIn Profile"
              className="footer-icon-link"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="mailto:naikvaishnavi830@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: '#E2E8F0',
                transition: 'all var(--transition-fast)',
              }}
              aria-label="Send Email"
              className="footer-icon-link"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.84rem',
                fontWeight: 600,
                color: '#94A3B8',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '0.6rem 0.95rem',
                borderRadius: 'var(--radius-md)',
                marginLeft: '0.5rem',
                transition: 'all var(--transition-fast)',
              }}
              className="footer-icon-link"
              aria-label="Back to Top"
            >
              <ArrowUp size={15} />
              Top
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.84rem',
            color: '#94A3B8',
          }}
        >
          <div>
            © {currentYear} Vaishnavi Vijay Naik. All rights reserved.
          </div>
          <div>
            Built with React & Vite • Focused for Campus Placements & SDE Roles
          </div>
        </div>
      </div>

      <style>{`
        .footer-icon-link:hover {
          background-color: var(--royal-blue) !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
