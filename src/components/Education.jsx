import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.E. Computer Engineering',
      institution: 'Agnel Institute of Engineering and Management',
      location: 'Assagao, Goa',
      duration: 'July 2023 – Present',
      scoreLabel: 'CGPA',
      scoreValue: '8.87 (Semester VI)',
      status: 'Current Program',
      isCurrent: true,
      details:
        'Focused on computer engineering fundamentals, data structures, algorithms, database management systems, and web application development.',
    },
    {
      degree: 'Higher Secondary Education (HSSC)',
      institution: 'Harmal Panchakroshi Higher Secondary School',
      location: 'Goa',
      duration: 'June 2021 – March 2023',
      scoreLabel: 'Percentage',
      scoreValue: '79.33%',
      status: 'Completed',
      isCurrent: false,
      details:
        'Completed higher secondary curriculum with a strong mathematical and science foundation.',
    },
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            Academic Background
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic qualifications and performance milestones supporting my engineering career.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                position: 'relative',
              }}
            >
              <div>
                {/* Header Badge & Date */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: edu.isCurrent ? 'var(--royal-blue)' : 'var(--navy-secondary)',
                      backgroundColor: edu.isCurrent ? 'var(--royal-blue-light)' : 'var(--bg-tertiary)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {edu.status}
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500,
                    }}
                  >
                    <Calendar size={14} color="var(--royal-blue)" />
                    {edu.duration}
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--navy-primary)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {edu.degree}
                </h3>

                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--royal-blue)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {edu.institution}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  <MapPin size={14} />
                  {edu.location}
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {edu.details}
                </p>
              </div>

              {/* Performance Score Chip */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Academic Result:
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--navy-primary)',
                    backgroundColor: 'var(--royal-blue-light)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--royal-blue-border)',
                  }}
                >
                  <Award size={16} color="var(--royal-blue)" />
                  {edu.scoreLabel}: {edu.scoreValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
