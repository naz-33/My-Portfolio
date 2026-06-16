'use client';

import { BrainCircuit, BriefcaseBusiness, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      label: 'Computer Science Undergraduate',
      icon: GraduationCap,
      accent: 'rgba(59, 130, 246, 0.22)',
    },
    {
      label: 'Software Development + AI/ML',
      icon: BrainCircuit,
      accent: 'rgba(246, 59, 196, 0.22)',
    },
    {
      label: 'Seeking SWE / ML Internship',
      icon: BriefcaseBusiness,
      accent: 'rgba(34, 197, 94, 0.2)',
    },
  ];

  return (
    <section
      id="about"
      style={{
        minHeight: 'auto',
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(circle at 12% 18%, rgba(246, 59, 196, 0.16), transparent 38%), radial-gradient(circle at 85% 82%, rgba(59, 130, 246, 0.12), transparent 42%), linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0)), var(--bg-secondary)',
      }}
    >
      <div style={{ maxWidth: '980px', width: '100%' }}>
        <div
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            border: '1px solid var(--border)',
            borderRadius: '28px',
            background:
              'linear-gradient(140deg, rgba(246, 59, 196, 0.09), rgba(59, 130, 246, 0.06) 45%, rgba(255, 255, 255, 0.01) 100%)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.transform = 'translateY(-4px)';
            event.currentTarget.style.borderColor = 'rgba(246, 59, 196, 0.42)';
            event.currentTarget.style.boxShadow = '0 30px 72px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.transform = 'translateY(0)';
            event.currentTarget.style.borderColor = 'var(--border)';
            event.currentTarget.style.boxShadow = '0 24px 60px rgba(0, 0, 0, 0.12)';
          }}
        >
          <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <p
              style={{
                fontSize: '0.76rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.6rem',
                fontWeight: 700,
              }}
            >
              About Me
            </p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                marginBottom: '0.7rem',
                fontWeight: 850,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
              }}
            >
              I Build Things That
              <br />
              Actually Work
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                marginBottom: '1rem',
                maxWidth: '650px',
              }}
            >
              Turning messy real-world problems into software that runs outside the classroom.
            </p>
            <div
              style={{
                fontSize: '1.01rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '680px',
              }}
            >
              <p style={{ marginBottom: '0.9rem' }}>
                I’m a Computer Science undergraduate focused on software development, AI, and intelligent systems. I enjoy building applications that combine modern technologies, machine learning, and AI agents to automate workflows and improve user experiences.
              </p>
              <p>
                Through hands-on projects, I develop practical solutions, write clean and maintainable code, and continuously expand my skills in designing scalable and secure software systems.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '1rem',
            }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
              <div
                key={item.label}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '18px',
                  padding: '1rem 1.1rem 1.05rem',
                  background:
                    'linear-gradient(180deg, rgba(246, 59, 196, 0.08), rgba(59, 130, 246, 0.05) 70%, rgba(255, 255, 255, 0.01))',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                  color: 'var(--text-primary)',
                  fontSize: '0.98rem',
                  lineHeight: 1.5,
                  fontWeight: 650,
                  transition:
                    'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = 'translateY(-4px)';
                  event.currentTarget.style.borderColor = 'rgba(246, 59, 196, 0.5)';
                  event.currentTarget.style.boxShadow = '0 18px 40px rgba(246, 59, 196, 0.16)';
                  event.currentTarget.style.background =
                    'linear-gradient(180deg, rgba(246, 59, 196, 0.14), rgba(59, 130, 246, 0.09))';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = 'translateY(0)';
                  event.currentTarget.style.borderColor = 'var(--border)';
                  event.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
                  event.currentTarget.style.background =
                    'linear-gradient(180deg, rgba(246, 59, 196, 0.08), rgba(59, 130, 246, 0.05) 70%, rgba(255, 255, 255, 0.01))';
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1.85rem',
                    height: '1.85rem',
                    borderRadius: '12px',
                    backgroundColor: item.accent,
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    color: 'var(--text-primary)',
                    marginRight: '0.78rem',
                    verticalAlign: 'middle',
                  }}
                >
                  <Icon size={16} strokeWidth={2.2} />
                </span>
                {item.label}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}