'use client';

import { useEffect, useState } from 'react';

import { projects } from '@/data/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const previewImages = selectedProject?.galleryImages?.length ? selectedProject.galleryImages : selectedProject ? [selectedProject.image] : [];
  const activeImageIndex = previewImages.length ? currentImageIndex % previewImages.length : 0;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }

      if (event.key === 'ArrowLeft' && previewImages.length > 1) {
        setCurrentImageIndex((index) => (index - 1 + previewImages.length) % previewImages.length);
      }

      if (event.key === 'ArrowRight' && previewImages.length > 1) {
        setCurrentImageIndex((index) => (index + 1) % previewImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <>
    <section id="projects" style={{ minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)'}}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--accent)' }}>Featured Projects</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Some things I've built</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', width: '100%' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                width: '100%',
                maxWidth: '100%',
                cursor: 'pointer',
              }}
              className="project-card"
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} preview`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                height: '240px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      border: '1px solid var(--border)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
                      onClick={(event) => event.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent)';
                      }}
                    >
                      🔗 GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
                      onClick={(event) => event.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent)';
                      }}
                    >
                      🌐 Live Demo
                    </a>
                  )}
                  {project.links.screenshots && (
                    <a 
                      href={project.links.screenshots} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
                      onClick={(event) => event.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent)';
                      }}
                    >
                      📁 Screenshots
                    </a>
                  )}
                  {project.links.publication && (
                    <a 
                      href={project.links.publication} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
                      onClick={(event) => event.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--accent)';
                      }}
                    >
                      📄 Publication
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {selectedProject && (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${selectedProject.title} preview`}
        onClick={() => setSelectedProject(null)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(4, 9, 20, 0.82)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          style={{
            position: 'relative',
            width: 'min(96vw, 1100px)',
            maxHeight: '92vh',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 1,
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '999px',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              backgroundColor: 'rgba(8, 12, 22, 0.7)',
              color: 'white',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          {previewImages.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => setCurrentImageIndex((index) => (index - 1 + previewImages.length) % previewImages.length)}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  backgroundColor: 'rgba(8, 12, 22, 0.78)',
                  color: 'white',
                  fontSize: '1.6rem',
                  cursor: 'pointer',
                }}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => setCurrentImageIndex((index) => (index + 1) % previewImages.length)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  backgroundColor: 'rgba(8, 12, 22, 0.78)',
                  color: 'white',
                  fontSize: '1.6rem',
                  cursor: 'pointer',
                }}
              >
                ›
              </button>
            </>
          )}
          <div style={{ padding: '1.25rem', display: 'grid', gap: '1rem' }}>
            <div
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundColor: 'black',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <img
                src={previewImages[activeImageIndex]}
                alt={`${selectedProject.title} preview ${activeImageIndex + 1}`}
                style={{
                  display: 'block',
                  width: '100%',
                  maxHeight: '62vh',
                  objectFit: 'contain',
                }}
              />
            </div>
            {previewImages.length > 1 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                {previewImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    style={{
                      borderRadius: '14px',
                      overflow: 'hidden',
                      backgroundColor: 'black',
                      border: index === activeImageIndex ? '2px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.08)',
                      minHeight: '120px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            <div style={{ color: 'white' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{selectedProject.title}</h3>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.82)' }}>
                Click outside the preview or press Escape to close.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
