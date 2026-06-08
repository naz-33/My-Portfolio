'use client';

import { personalInfo } from '@/data/portfolio';

interface HeroProps {
  theme: 'light' | 'dark';
  roleIndex: number;
}

export default function Hero({ theme, roleIndex }: HeroProps) {
  return (
    <section id="home" style={{ minHeight: 'auto', padding: '8rem 2rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)'}}>
      <div style={{ maxWidth: '1100px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="grid-cols-1 md:grid-cols-2 hero-container">
        <div style={{ order: 1, textAlign: 'left' }} className="hero-content">
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }} className="hero-greeting">
            {personalInfo.greeting}
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.1', color: theme === 'light' ? '#111827' : '#f1f5f9' }} className="hero-name">
            {personalInfo.name}
          </h1>
          <div style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', marginBottom: '2rem', height: '2.5rem' }} className="hero-role">
            <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
              {personalInfo.roles[roleIndex]}
            </span>
          </div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', maxWidth: '600px' }} className="hero-description">
            {personalInfo.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }} className="hero-buttons">
            <a
              href="#contact"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: 'var(--accent)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: theme === 'light' ? '#fdf4fc' : 'transparent',  // Light pink bg
                color: theme === 'light' ? '#f472d0' : 'var(--text-primary)',
                border: `2px solid ${theme === 'light' ? '#f63bc4' : 'var(--border)'}`,  // Thicker border
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#f63bc4';
                e.currentTarget.style.backgroundColor = '#f63bc4';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = theme === 'light' ? '#f63bc4' : 'var(--border)';
                e.currentTarget.style.backgroundColor = theme === 'light' ? '#fdf4fc' : 'transparent';
                e.currentTarget.style.color = theme === 'light' ? '#f472d0' : 'var(--text-primary)';
              }}
            >
              View My Work
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', order: 2, marginBottom: '2rem' }} className="flex hero-photo-container">
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', height: 'auto', aspectRatio: '1/1' }}>
            {/* Animated Glowing Circle - Behind */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(246, 59, 196, 0.6) 0%, rgba(246, 59, 196, 0.3) 40%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0,
              }}
              className="animate-pulse-glow"
            />
            
            {/* Profile Photo Container */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '380px',
              height: 'auto',
              aspectRatio: '1/1',
              margin: '20px auto',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #f63bc4',
              boxShadow: '0 20px 60px rgba(246, 59, 196, 0.5), 0 0 40px rgba(246, 59, 196, 0.3)',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
              }}>
                <img 
                  src="/profile.jpg" 
                  alt="Harsh Profile" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
