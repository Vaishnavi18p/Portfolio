import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'naikvaishnavi830@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper alt-bg">
      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          {/* Section Header */}
          <div className="section-tag" style={{ margin: '0 auto 1rem auto' }}>
            <MessageSquare size={14} />
            Get In Touch
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--navy-primary)',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Let's Connect
          </h2>

          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.7,
            }}
          >
            I'm open to connecting with recruiters, developers, and opportunities where I can learn and contribute.
          </p>

          {/* Contact Card */}
          <div
            className="card"
            style={{
              padding: '2.5rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              backgroundColor: 'var(--bg-primary)',
            }}
          >
            {/* Direct Email Action */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
                padding: '1.5rem',
                backgroundColor: 'var(--royal-blue-light)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--royal-blue-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--royal-blue)',
                    color: 'var(--text-inverse)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--royal-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Email Address
                  </span>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--navy-primary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {emailAddress}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-primary btn-sm"
                  id="contact-send-email-btn"
                >
                  <Send size={15} />
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  id="contact-copy-email-btn"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={15} color="#16A34A" />
                      <span style={{ color: '#16A34A' }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Links and Location Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {/* GitHub Link Card */}
              <a
                href="https://github.com/Vaishnavi18p"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all var(--transition-normal)',
                }}
                className="contact-sublink"
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--navy-dark)',
                    color: 'var(--text-inverse)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GithubIcon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                    GitHub Profile
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    github.com/Vaishnavi18p
                  </div>
                </div>
              </a>

              {/* LinkedIn Link Card */}
              <a
                href="https://www.linkedin.com/in/vaishnavi-naik1834bb2aa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all var(--transition-normal)',
                }}
                className="contact-sublink"
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--royal-blue)',
                    color: 'var(--text-inverse)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                    LinkedIn Profile
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    vaishnavi-naik1834bb2aa
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--royal-blue-light)',
                    color: 'var(--royal-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--navy-primary)' }}>
                    Location
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Goa, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-sublink:hover {
          border-color: var(--royal-blue-border) !important;
          background-color: var(--royal-blue-light) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
