'use client';

import { education } from '@/data/portfolio';

export default function Education() {
  return (
        <section id="education" style={{ 
            minHeight: 'auto',
            padding: '3rem 2rem',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'var(--bg-secondary)' 
            }}>
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--accent)' }}>
                    Education & Certifications
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M12 2 1 7l11 5 9-4.09V17a1 1 0 0 1-1 1h-3v2h3a3 3 0 0 0 3-3V6.91L12 2z" opacity=".9"/>
                        <path d="M11 13.06V22h2v-8.94l-1 .45-1-.45z"/>
                    </svg>
                    My academic journey and professional qualifications that validate my expertise.
                </p>
                </div>

                {/* Education Section */}
                <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true" style={{ flex: '0 0 auto' }}>
                        <path d="M12 2 1 7l11 5 9-4.09V17a1 1 0 0 1-1 1h-3v2h3a3 3 0 0 0 3-3V6.91L12 2z" opacity=".9"/>
                        <path d="M11 13.06V22h2v-8.94l-1 .45-1-.45z"/>
                    </svg>
                    Education
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {education.filter(item => item.type === 'education').map((item) => (
                    <div
                        key={item.id}
                        style={{
                        backgroundColor: 'var(--card-bg)',
                        padding: '2.5rem',
                        borderRadius: '16px',
                        border: '1px solid var(--border)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        width: '100%',
                        }}
                        className="education-card"
                    >
                        <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                            {item.degree}
                        </h4>
                        <div style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '0.5rem' }}>
                            {item.institution}
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginTop: '1rem' }}>
                            {item.description}
                        </p>
                        </div>
                        <div style={{ 
                        color: 'var(--accent)', 
                        fontWeight: '600', 
                        fontSize: '0.95rem',
                        minWidth: '120px',
                        textAlign: 'right',
                        }}>
                        {item.duration}
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Certifications Section */}
                {education.filter(item => item.type === 'certification').length > 0 && (
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true" style={{ flex: '0 0 auto' }}>
                        <path d="M17 3H7a2 2 0 0 0-2 2v3.59A5 5 0 0 0 7.6 13 4.98 4.98 0 0 0 12 15a4.98 4.98 0 0 0 4.4-2 5 5 0 0 0 2.6-4.41V5a2 2 0 0 0-2-2zM7 5h10v1.59a3 3 0 0 1-1.56 2.64A2 2 0 0 1 12 11a2 2 0 0 1-3.44-1.77A3 3 0 0 1 7 6.59V5z"/>
                        <path d="M8 18v3h8v-3a4 4 0 0 0-8 0z"/>
                    </svg>
                    Certifications
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%' }} className="certifications-grid">
                    {education.filter(item => item.type === 'certification').map((item) => (
                        <div
                        key={item.id}
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid var(--border)',
                            transition: 'all 0.3s ease',
                            width: '100%',
                        }}
                        className="certification-card"
                        >
                        {item.image && (
                            <img
                            src={item.image}
                            alt={`${item.degree} certificate`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                marginBottom: '1rem',
                                objectFit: 'cover',
                            }}
                            />
                        )}
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                            {item.degree}
                        </h4>
                        <div style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            {item.institution}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            {item.duration}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
        </section>

  ); 
}