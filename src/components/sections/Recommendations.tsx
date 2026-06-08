'use client';

import React from 'react';

export default function Recommendations() {
  return (
    <section id="recommendations" style={{ minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)'}}>
      <div style={{ maxWidth: '900px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--accent)' }}>Recommendations</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>No recommendations added yet.</p>
      </div>
    </section>
  );
}
