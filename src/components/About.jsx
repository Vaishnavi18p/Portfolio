import React from 'react';
import { BookOpen, Code2, Database, Sparkles, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      label: 'Institution',
      value: 'Agnel Institute of Engineering and Management',
      subtext: 'Assagao, Goa',
      icon: BookOpen,
    },
    {
      label: 'Academic Performance',
      value: '8.87 CGPA (Semester VI)',
      subtext: 'Higher Secondary: 79.33%',
      icon: Award,
    },
    {
      label: 'Development Focus',
      value: 'Full-Stack Web Applications',
      subtext: 'Frontend Interfaces & Backend Integration',
      icon: Code2,
    },
    {
      label: 'Database Systems',
      value: 'MySQL & MongoDB',
      subtext: 'Schema Design & CRUD Operations',
      icon: Database,
    },
  ];

  return (
    <section id="about" className="section-wrapper alt-bg">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            About Me
          </div>
          <h2 className="section-title">Background & Engineering Focus</h2>
          <p className="section-subtitle">
            A practical, foundation-first approach to building software and web applications.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="about-grid"
        >
          {/* Main Narrative Card */}
          <div
            className="card"
            style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              I am pursuing a Bachelor of Engineering in <strong style={{ color: 'var(--navy-primary)' }}>Computer Engineering</strong> at <strong style={{ color: 'var(--navy-primary)' }}>Agnel Institute of Engineering and Management</strong> in Assagao, Goa.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Through my coursework and hands-on projects, I have developed experience in building full-stack web applications, integrating responsive frontend interfaces with backend logic, and designing reliable relational databases. My practical work includes building systems using PHP, CodeIgniter 4, React.js, and MySQL.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              I am genuinely interested in software development, modern web technologies, problem-solving, and exploring new developer tools. I focus on writing clear, structured code, understanding MVC architectures, and delivering dependable functionality.
            </p>

            <div
              style={{
                marginTop: '0.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--royal-blue)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-primary)' }}>
                  Placement Ready
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--royal-blue)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-primary)' }}>
                  Internship Experience
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--royal-blue)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-primary)' }}>
                  Strong Academic Record (8.87 CGPA)
                </span>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--royal-blue-light)',
                      color: 'var(--royal-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: 'var(--navy-primary)',
                        marginBottom: '0.15rem',
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {item.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
