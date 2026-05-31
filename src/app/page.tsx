'use client'

import { useState } from 'react'
import Resume from '@/components/Resume'
import StoryOverlay from '@/components/StoryOverlay'
import { Story } from '@/data/stories'
import { Skill } from '@/data/skills'
import SkillOverlay from '@/components/SkillOverlay'

export default function Home() {
  const [activeStory, setActiveStory] = useState<Story | null>(null)
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f0ede6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '3rem 1rem 4rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '680px',
        background: 'var(--paper)',
        border: '0.5px solid var(--paper-border)',
        padding: 'clamp(1.5rem, 5vw, 2.5rem) clamp(1.25rem, 6vw, 3rem)',
        position: 'relative',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        overflow: 'hidden',
      }}>
        <Resume
          activeStory={activeStory}
          activeSkill={activeSkill}
          onBulletClick={(story) => setActiveStory(story)}
          onSkillClick={(skill) => setActiveSkill(skill)}
        />
        <StoryOverlay
          story={activeStory}
          onCloseStory={() => setActiveStory(null)} />

        <SkillOverlay
          skill={activeSkill}
          onCloseSkill={() => setActiveSkill(null)} />
      </div>
    </main>
  )
}
