import React from 'react';
import { FolderGit2, Mail, Code2, MapPin, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.05) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Small Introductory Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--royal-blue)',
                backgroundColor: 'var(--royal-blue-light)',
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.25rem',
                border: '1px solid var(--royal-blue-border)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--royal-blue)',
                  display: 'inline-block',
                }}
              />
              COMPUTER ENGINEERING STUDENT
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--navy-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Hi, I'm <span style={{ color: 'var(--royal-blue)' }}>Vaishnavi Naik.</span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2rem',
              }}
            >
              I'm a Computer Engineering student and aspiring software developer who enjoys building practical web applications and exploring new technologies.
            </p>

            {/* Quick Context Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.25rem',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--royal-blue)" />
                Goa, India
              </span>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <GraduationCap size={16} color="var(--royal-blue)" />
                Agnel Institute of Engg. & Mgmt
              </span>
              <span style={{ color: 'var(--border-medium)' }}>•</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: 600,
                  color: 'var(--navy-primary)',
                }}
              >
                CGPA: 8.87
              </span>
            </div>

            {/* Two Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary"
                id="hero-view-projects-btn"
              >
                <FolderGit2 size={18} />
                View My Projects
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="btn btn-outline-navy"
                id="hero-contact-btn"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </div>

            {/* Social Links Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Connect With Me:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href="https://github.com/Vaishnavi18p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="Vaishnavi's GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-naik1834bb2aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="Vaishnavi's LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="mailto:naikvaishnavi830@gmail.com"
                  className="icon-btn"
                  aria-label="Send Email to Vaishnavi"
                  title="naikvaishnavi830@gmail.com"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code-inspired IDE / Graphic */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--navy-dark)',
                color: '#E2E8F0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px -15px rgba(10, 25, 47, 0.25)',
                overflow: 'hidden',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {/* Window Title Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.15rem',
                  backgroundColor: '#0F172A',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Code2 size={13} color="#60A5FA" />
                  vaishnavi-profile.ts
                </div>
                <div style={{ width: '38px' }} />
              </div>

              {/* Code Snippet */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                  backgroundColor: '#0A192F',
                }}
              >
                <div>
                  <span style={{ color: '#F472B6' }}>interface</span>{' '}
                  <span style={{ color: '#FDE047' }}>Engineer</span> {'{'}
                </div>
                <div style={{ paddingLeft: '1.25rem', color: '#94A3B8' }}>
                  name: <span style={{ color: '#60A5FA' }}>string</span>;
                  <br />
                  degree: <span style={{ color: '#60A5FA' }}>string</span>;
                  <br />
                  cgpa: <span style={{ color: '#34D399' }}>number</span>;
                  <br />
                  coreSkills: <span style={{ color: '#60A5FA' }}>string[]</span>;
                </div>
                <div>{'}'}</div>
                <div style={{ height: '0.5rem' }} />
                <div>
                  <span style={{ color: '#F472B6' }}>const</span>{' '}
                  <span style={{ color: '#60A5FA' }}>candidate</span>: <span style={{ color: '#FDE047' }}>Engineer</span> = {'{'}
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>name:</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"Vaishnavi Vijay Naik"</span>,
                  <br />
                  <span style={{ color: '#94A3B8' }}>education:</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"B.E. Computer Engineering"</span>,
                  <br />
                  <span style={{ color: '#94A3B8' }}>location:</span>{' '}
                  <span style={{ color: '#86EFAC' }}>"Goa, India"</span>,
                  <br />
                  <span style={{ color: '#94A3B8' }}>cgpa:</span>{' '}
                  <span style={{ color: '#F59E0B', fontWeight: 600 }}>8.87</span>,
                  <br />
                  <span style={{ color: '#94A3B8' }}>coreSkills:</span> [
                  <br />
                  <span style={{ paddingLeft: '1.25rem', color: '#86EFAC' }}>
                    "React.js", "PHP", "CodeIgniter 4", "MySQL"
                  </span>
                  <br />
                  ],
                  <br />
                  <span style={{ color: '#94A3B8' }}>openForPlacements:</span>{' '}
                  <span style={{ color: '#60A5FA' }}>true</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Status Footer */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1.15rem',
                  backgroundColor: '#0F172A',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.74rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34D399' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      display: 'inline-block',
                      boxShadow: '0 0 6px #10B981',
                    }}
                  />
                  <span>Ready for Campus Placements</span>
                </div>
                <div style={{ color: '#64748B' }}>UTF-8 • TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
