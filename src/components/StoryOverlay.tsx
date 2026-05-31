'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Story } from '@/data/stories'

type Props = {
  story: Story | null
  onClose: () => void
}

export default function StoryOverlay({ story, onClose }: Props) {
  return (
    <AnimatePresence>
      {story && (
        <motion.div
          key={story.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--paper)',
            padding: '2.5rem 3rem',
            zIndex: 10,
            minHeight: '100%',
          }}
        >
          {/* Chapter label */}
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
            marginBottom: '1rem',
          }}>
            {story.chapter}
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: 400,
            lineHeight: 1.3,
            color: 'var(--ink)',
            marginBottom: '1.2rem',
            maxWidth: '520px',
          }}>
            {story.headline}
          </h2>

          <hr style={{ border: 'none', borderTop: '0.5px solid #ccc', margin: '1.2rem 0' }} />

          {/* Body */}
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '14px',
            lineHeight: 1.8,
            color: '#333',
            maxWidth: '540px',
            marginBottom: '1.5rem',
          }}>
            {story.body}
          </p>

          {/* Visual */}
          {story.visual.type === 'stat' && (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0' }}>
              {story.visual.stats.map((s) => (
                <div key={s.label} style={{
                  flex: '1',
                  minWidth: '90px',
                  padding: '0.75rem 1rem',
                  background: '#f0ede6',
                  border: '0.5px solid #ccc',
                  borderRadius: '3px',
                  textAlign: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#222', display: 'block' }}>
                    {s.num}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: '#888',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginTop: '2px',
                    display: 'block',
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {story.visual.type === 'flow' && (
            <div style={{
              background: '#f7f5f0',
              border: '0.5px solid #d5d2cc',
              borderRadius: '3px',
              padding: '1rem 1.25rem',
              margin: '1rem 0',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#666',
            }}>
              <div style={{
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '8px',
              }}>
                {story.visual.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                {story.visual.steps.map((step, i) => (
                  <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      padding: '5px 10px',
                      border: '0.5px solid #bbb',
                      borderRadius: '2px',
                      fontSize: '10.5px',
                      color: '#444',
                      background: 'var(--paper)',
                    }}>
                      {step}
                    </span>
                    {i < story.visual.steps.length - 1 && (
                      <span style={{ color: '#aaa', fontSize: '12px' }}>→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Media card */}
          <div style={{
            background: '#f0ede6',
            border: '0.5px solid #ccc',
            borderRadius: '4px',
            padding: '1.25rem',
            margin: '1.2rem 0',
            fontFamily: 'var(--font-mono)',
            fontSize: '11.5px',
            color: '#555',
          }}>
            <div style={{ fontSize: '12px', color: '#333', marginBottom: '4px' }}>
              {story.media.title}
            </div>
            <div>{story.media.description}</div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '1rem 0' }}>
            {story.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                padding: '3px 9px',
                border: '0.5px solid #bbb',
                borderRadius: '2px',
                color: '#666',
                textTransform: 'uppercase',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#777',
              background: 'none',
              border: '0.5px solid #bbb',
              padding: '6px 14px',
              cursor: 'pointer',
              borderRadius: '2px',
              marginTop: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.color = '#111'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#888'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.color = '#777'
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#bbb'
            }}
          >
            ← Back to resume
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
