import React from 'react';
import { Terminal, Layers, Globe, Database, Wrench, Cpu, Check } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: ['C', 'C++', 'Python', 'JavaScript', 'PHP'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['CodeIgniter 4', 'React.js'],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'WAMP', 'XAMPP', 'Vercel'],
    },
    {
      title: 'Core Concepts',
      icon: Cpu,
      skills: ['CRUD Operations', 'Authentication', 'MVC Architecture', 'Database Integration'],
    },
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            Technical Expertise
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Languages, frameworks, database systems, and development tools I work with to build software solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  padding: '1.75rem',
                }}
              >
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--royal-blue-light)',
                      color: 'var(--royal-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--navy-primary)',
                      margin: 0,
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags List */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--royal-blue)',
                          marginRight: '0.45rem',
                          display: 'inline-block',
                        }}
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
