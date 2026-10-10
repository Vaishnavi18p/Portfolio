import React from 'react';
import { Briefcase, Calendar, Building, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Development Intern',
      company: 'Demerg Systems India',
      duration: 'August 2026 – October 2026',
      type: 'Internship',
      points: [
        'Contributed to the development of a Ticket Helpdesk Management System using PHP, CodeIgniter 4, and MySQL.',
        'Developed Admin module pages for account creation and account listing, integrating frontend interfaces with backend functionality.',
        'Worked with MVC architecture, database migrations, and database-driven role and department data.',
      ],
      skills: ['PHP', 'CodeIgniter 4', 'MySQL', 'MVC Architecture', 'Database Migrations'],
    },
    {
      role: 'AI Intern',
      company: 'Lenovo Leap – NextGen Scholar Program',
      duration: '8-week program',
      type: 'Scholarship Program',
      points: [
        'Gained exposure to Artificial Intelligence and Machine Learning fundamentals through structured coursework and project modules.',
      ],
      skills: ['Artificial Intelligence', 'Machine Learning Fundamentals'],
    },
  ];

  return (
    <section id="experience" className="section-wrapper alt-bg">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            Work History
          </div>
          <h2 className="section-title">Internship Experience</h2>
          <p className="section-subtitle">
            Hands-on professional experience applying engineering concepts to software development and AI programs.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline" style={{ maxWidth: '860px' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />

              <div
                className="card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Header: Role & Organization */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--navy-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--royal-blue)',
                      }}
                    >
                      <Building size={16} />
                      {exp.company}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--navy-secondary)',
                      backgroundColor: 'var(--bg-secondary)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Calendar size={14} color="var(--royal-blue)" />
                    {exp.duration}
                  </div>
                </div>

                {/* Contribution Bullet Points */}
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {exp.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color="var(--royal-blue)"
                        style={{ flexShrink: 0, marginTop: '0.2rem' }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
