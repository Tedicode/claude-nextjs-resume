'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Skill } from '@/data/skills'
import BackToResumeButton from '@/components/BackToResumeButton'

type Props = {
  skill: Skill | null
  onCloseSkill: () => void
}

export default function SkillOverlay({ skill, onCloseSkill }: Props) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          key={skill.id}
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
          <BackToResumeButton onClick={onCloseSkill} style={{ marginBottom: '1.5rem' }} />

          <h1>Skill Name: {skill.name}</h1>
          <p>Description: {skill.description}</p>
          <p>Associations: {skill.associations?.map(a => a.type).join(', ')}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
