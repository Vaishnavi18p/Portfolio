import React from 'react';
import { Trophy, Award, Zap, CheckCircle2, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'ET Gen AI Hackathon 2026',
      status: 'Semi-Finalist',
      description: 'Qualified for the semi-final round of ET Gen AI Hackathon 2026.',
      icon: Trophy,
      badgeColor: '#1D4ED8',
      badgeBg: '#EFF6FF',
    },
    {
      title: 'Unstop Playstorm',
      status: 'Round 2 Qualifier',
      description: 'Qualified for the second round of Unstop Playstorm competition.',
      icon: Star,
      badgeColor: '#0F172A',
      badgeBg: '#F1F5F9',
    },
    {
      title: 'AWS AI & ML Scholar 2025',
      status: 'Completed Challenge',
      description: 'Completed the AWS AI & ML Scholar 2025 challenge competition.',
      icon: Award,
      badgeColor: '#1D4ED8',
      badgeBg: '#EFF6FF',
    },
    {
      title: 'SAWIT.AI Learnathon',
      status: 'Participant',
      description: 'Participated in the SAWIT.AI Learnathon conducted by GUVI.',
      icon: Zap,
      badgeColor: '#0F172A',
      badgeBg: '#F1F5F9',
    },
  ];

  return (
    <section id="achievements" className="section-wrapper alt-bg">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            Recognitions
          </div>
          <h2 className="section-title">Achievements & Competitions</h2>
          <p className="section-subtitle">
            Hackathons, competitive challenges, and continuous skill-building initiatives.
          </p>
        </div>

        {/* Compact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: item.badgeBg,
                      color: item.badgeColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: item.badgeColor,
                      backgroundColor: item.badgeBg,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--navy-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
