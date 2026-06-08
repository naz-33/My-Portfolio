'use client';

import { skills } from '@/data/portfolio';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export default function Skills({ theme }: SkillsProps) {
  const filteredSkills = skills;

  return (
        <section id="skills" style={{ 
          minHeight: 'auto',
          padding: '4rem 2rem',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: 'var(--bg-secondary)'
        }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--accent)' }}>
              Technical Skills
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              My current tech stack.
            </p>
          </div>

          {/* Showing all skills */}

          {/* Skills Grid - responsive (up to 6 columns on large screens) */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            justifyContent: 'center',
            maxWidth: '1020px',
            margin: '0 auto 3rem',
            width: '100%',
          }} className="skills-grid">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  width: '100%',
                  maxWidth: '140px',
                  margin: '0 auto',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                className="skill-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#f63bc4';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(246, 59, 196, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 1rem',
                  borderRadius: '12px',
                  backgroundColor: '#f63bc410',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f63bc4';
                  e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f63bc410';
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
                >
                  <span aria-hidden="true">{skill.icon}</span>
                </div>
                <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* End of skills section */}
        </div>
      </section>
  );
}
