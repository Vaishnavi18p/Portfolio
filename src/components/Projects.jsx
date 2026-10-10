import React from 'react';
import { ExternalLink, FolderGit2, Clock, ShoppingBag, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const projects = [
    {
      id: 'productivity-dashboard',
      title: 'Productivity Dashboard',
      description:
        'Developed a responsive productivity dashboard featuring task management, a Pomodoro timer, analytics charts, dark/light mode, task filtering, and localStorage persistence.',
      technologies: ['React.js', 'Tailwind CSS', 'Recharts', 'Vite'],
      githubUrl: 'https://github.com/Vaishnavi18p/Productivity-Dashboard',
      liveUrl: 'https://productivity-dashboard-two-lake.vercel.app',
      mockType: 'dashboard',
    },
    {
      id: 'vishal-vibe-cafe',
      title: 'Vishal Vibe Café – Café Booking System',
      description:
        'Built a café booking system with dynamic cart handling, backend validation, MySQL integration, and a UPI deep-link payment flow.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubUrl: 'https://github.com/Vaishnavi18p/vishal-vibe-cafe-booking-system',
      liveUrl: null, // No live demo verified
      mockType: 'cafe',
    },
    {
      id: 'local-eco',
      title: 'LocalEco – Web-Based Waste Management System',
      description:
        'Collaborated on authentication, role-based access control, form validation, and CRUD operations.',
      technologies: ['PHP', 'JavaScript', 'MySQL'],
      githubUrl: null, // No public repo link available
      liveUrl: null,
      mockType: 'waste',
    },
  ];

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            Featured Work
          </div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Practical web applications focusing on clean frontend components, robust backend architectures, and database persistence.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden',
              }}
            >
              {/* Tasteful CSS Mock Interface Preview */}
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '1.25rem',
                  position: 'relative',
                  minHeight: '190px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
                }}
              >
                {/* Browser-style Top Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      padding: '0.15rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    UI Simulation Preview
                  </span>
                </div>

                {/* Specific Mock Content Based on Project */}
                {project.mockType === 'dashboard' && (
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.9rem',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={13} color="var(--royal-blue)" /> Pomodoro Session
                      </span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--royal-blue)' }}>
                        25:00
                      </span>
                    </div>
                    <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                      <div style={{ width: '70%', height: '100%', backgroundColor: 'var(--royal-blue)', borderRadius: '3px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      <span>Tasks: 8 completed</span>
                      <span style={{ color: '#16A34A', fontWeight: 600 }}>Active Analytics</span>
                    </div>
                  </div>
                )}

                {project.mockType === 'cafe' && (
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.9rem',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <ShoppingBag size={13} color="var(--royal-blue)" /> Order Cart & Booking
                      </span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#16A34A', backgroundColor: '#DCFCE7', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                        UPI Ready
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--navy-secondary)', padding: '0.2rem 0', borderBottom: '1px dashed var(--border-subtle)' }}>
                      <span>Table Reservation + Cart</span>
                      <span style={{ fontWeight: 600 }}>Validated</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      MySQL Schema • Deep-link Payment Gateway Flow
                    </div>
                  </div>
                )}

                {project.mockType === 'waste' && (
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.9rem',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--navy-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <ShieldCheck size={13} color="var(--royal-blue)" /> RBAC System
                      </span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--royal-blue)', backgroundColor: 'var(--royal-blue-light)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                        Auth Active
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--navy-secondary)', padding: '0.2rem 0', borderBottom: '1px dashed var(--border-subtle)' }}>
                      <span>Role: Admin / Citizen / Collector</span>
                      <span style={{ fontWeight: 600 }}>CRUD</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      Form Validation & Waste Schedule Records
                    </div>
                  </div>
                )}
              </div>

              {/* Project Card Content */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--navy-primary)',
                      marginBottom: '0.65rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links / Buttons */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    alignItems: 'center',
                  }}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ flex: project.liveUrl ? '1' : 'auto' }}
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <GithubIcon size={15} />
                      GitHub Repository
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ flex: '1' }}
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}

                  {!project.githubUrl && !project.liveUrl && (
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                      }}
                    >
                      Academic & collaborative project details listed above.
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
