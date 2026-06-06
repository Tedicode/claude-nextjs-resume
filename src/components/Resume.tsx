'use client'

import { motion } from 'framer-motion'
import { Story, stories, bulletStoryMap } from '@/data/stories'
import { Skill, resumePrimarySkills, resumeTools, resolveResumeSkillEntries } from '@/data/skills'

type Bullet = {
  text: string
  storyId?: string
}

const nylBullets: Bullet[] = [
  { text: 'Develop and maintain UI (React/Redux/MUI) and API contracts of internal agent-facing app (12,000 users)', storyId: 'scale' },
  // { text: 'Collaborate closely with business, QA, design and backend teams to deliver features in AGILE fashion' },
  { text: 'Implemented role-based architecture leveraging entitlements for differential access and experience', storyId: 'rbac' },
  { text: 'Led the research and development for our platform integration of Storyblok CMS', storyId: 'storyblok' },
  { text: 'Performed architectural cleanups and major refactor of frontend foundation for the maturing app', storyId: 'refactor' },
  { text: 'Owned and led the creation of the application\'s companion window and a new session-driven mode', storyId: 'companion' },
  // { text: 'Present demos at high level for business stakeholders and at technical level for internal teams' },
]

type Props = {
  activeStory: Story | null
  activeSkill: Skill | null
  onBulletClick: (story: Story) => void
  onSkillClick: (skill: Skill) => void
}

export default function Resume({ activeStory, activeSkill, onBulletClick, onSkillClick }: Props) {
  const isActiveStoryOrSkill = activeStory !== null || activeSkill !== null
  
  const storyMap = Object.fromEntries(stories.map(s => [s.id, s]))
  const primarySkills = resolveResumeSkillEntries(resumePrimarySkills)
  const toolSkills = resolveResumeSkillEntries(resumeTools)

  return (
    <motion.div
      animate={{ opacity: isActiveStoryOrSkill ? 0.07 : 1, filter: isActiveStoryOrSkill ? 'blur(1px)' : 'blur(0px)' }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      style={{ pointerEvents: isActiveStoryOrSkill ? 'none' : 'auto' }}
    >
      {/* Header */}
      <div style={{ marginBottom: '0.5rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '28px',
          fontWeight: 400,
          letterSpacing: '0.04em',
          color: 'var(--ink)',
          marginBottom: '2px',
        }}>
          Tedi Lowney
        </h1>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: '#555',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>
          Software Engineer
        </p>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11.5px',
          color: '#777',
          letterSpacing: '0.04em',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <a href="https://linkedin.com/in/tedilowney" style={{ color: '#555', textDecoration: 'none' }}>
            linkedin.com/in/tedilowney
          </a>
          <span>tmlowney1@gmail.com</span>
          <a href="https://github.com/Tedicode" style={{ color: '#555', textDecoration: 'none' }}>
            github.com/Tedicode
          </a>
        </div>
      </div>

      <Divider />

      {/* Experience */}
      <SectionLabel>Experience</SectionLabel>

      <JobBlock
        title="Frontend Software Engineer"
        date="Jan 2023 – Present"
        company="New York Life Insurance Company — New York, NY / Remote"
        bullets={nylBullets}
        onBulletClick={(storyId) => {
          const s = storyMap[storyId]
          if (s) onBulletClick(s)
        }}
      />

      <JobBlock
        title="Information Systems Support Analyst"
        date="Jul 2019 – Sep 2021"
        company="Penn Medicine, University of Pennsylvania Health System — Philadelphia, PA"
        bullets={[{ text: 'Provided technical support for IS, hardware, software and network issues across domain of six hospitals' }]}
        onBulletClick={() => {}}
        style={{ marginTop: '1.1rem' }}
      />

      <JobBlock
        title="Computer Support Specialist"
        date="Aug 2016 – Jun 2019"
        company="Philadelphia School District — Philadelphia, PA"
        bullets={[{ text: 'Managed all technology operations at a K-8 school, including installs, updates, maintenance and repairs' }]}
        onBulletClick={() => {}}
        style={{ marginTop: '1.1rem' }}
      />

      <Divider style={{ marginTop: '1.2rem' }} />

      {/* Education */}
      <SectionLabel>Education</SectionLabel>

      <EduRow school="Fullstack Academy — New York, NY" date="Oct 2021 – Apr 2022" sub="Immersive program, full-stack JavaScript development" />
      <EduRow school="Community College of Philadelphia" date="Aug 2017 – May 2019" sub="Additional Coursework, Computer Information Systems" />
      <EduRow school="Temple University — Philadelphia, PA" date="Graduated May 2014" sub="B.A., Media Studies: Media Analysis" />

      <Divider style={{ marginTop: '1.2rem' }} />

      {/* Skills */}
      <SectionLabel>Skills</SectionLabel>
      <SkillBlock entries={primarySkills} onSkillClick={onSkillClick} />
      <SkillBlock entries={toolSkills} label="Tools:" onSkillClick={onSkillClick} />

      <Divider style={{ marginTop: '1.2rem' }} />

      {/* Awards */}
      <SectionLabel>Awards</SectionLabel>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '12.5px', color: '#555', fontStyle: 'italic' }}>
        2019 Department Award and Scholarship — Computer Information Systems, Community College of Philadelphia
      </p>
    </motion.div>
  )
}

function Divider({ style }: { style?: React.CSSProperties }) {
  return <hr style={{ border: 'none', borderTop: '0.5px solid #bbb', margin: '0.85rem 0', ...style }} />
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#999',
      marginBottom: '0.6rem',
      marginTop: '1.2rem',
    }}>
      {children}
    </p>
  )
}

function JobBlock({
  title, date, company, bullets, onBulletClick, style,
}: {
  title: string
  date: string
  company: string
  bullets: Bullet[]
  onBulletClick: (storyId: string) => void
  style?: React.CSSProperties
}) {
  return (
    <div style={style}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '14px', fontStyle: 'italic', color: 'var(--ink)' }}>
          {title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#999' }}>{date}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#666', marginBottom: '6px' }}>
        {company}
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bullets.map((b, i) => (
          <BulletItem key={i} bullet={b} onClick={b.storyId ? () => onBulletClick(b.storyId!) : undefined} />
        ))}
      </ul>
    </div>
  )
}

function BulletItem({ bullet, onClick }: { bullet: Bullet; onClick?: () => void }) {
  const isClickable = !!onClick

  return (
    <motion.li
      onClick={onClick}
      whileHover={isClickable ? { scale: 1.06, color: '#111', zIndex: 1 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '12.5px',
        color: '#333',
        padding: '3px 0 3px 14px',
        lineHeight: 1.55,
        position: 'relative',
        cursor: isClickable ? 'pointer' : 'default',
        display: 'flex',
        alignItems: 'baseline',
        gap: '4px',
        transformOrigin: 'left center',
      }}
    >
      <span style={{
        position: 'absolute',
        left: '2px',
        color: isClickable ? '#888' : '#aaa',
        fontSize: '16px',
        lineHeight: 1,
        top: '3px',
      }}>·</span>
      <span style={{ flex: 1 }}>{bullet.text}</span>
      {isClickable && (
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          color: '#999',
          letterSpacing: '0.05em',
          flexShrink: 0,
          marginLeft: '4px',
          alignSelf: 'center',
        }}>↗</span>
      )}
    </motion.li>
  )
}

function SkillBlock({
  entries, label, onSkillClick,
}: {
  entries: { skill: Skill; clickable: boolean }[]
  label?: string
  onSkillClick: (skill: Skill) => void
}) {
  return (
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#555', lineHeight: 1.7, margin: 0 }}>
      {label && <span style={{ color: '#888' }}>{label} </span>}
      {entries.map(({ skill, clickable }, i) => (
        <span key={skill.id}>
          {i > 0 && ' · '}
          <SkillItem
            skill={skill}
            onClick={clickable ? () => onSkillClick(skill) : undefined}
          />
        </span>
      ))}
    </p>
  )
}

function SkillItem({ skill, onClick }: { skill: Skill; onClick?: () => void }) {
  const isClickable = !!onClick

  return (
    <span
      onClick={onClick}
      style={{ cursor: isClickable ? 'pointer' : 'default' }}
      onMouseEnter={e => {
        if (isClickable) (e.currentTarget as HTMLSpanElement).style.color = '#111'
      }}
      onMouseLeave={e => {
        if (isClickable) (e.currentTarget as HTMLSpanElement).style.color = 'inherit'
      }}
    >
      {skill.name}
      {isClickable && (
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          color: '#999',
          letterSpacing: '0.05em',
          marginLeft: '2px',
        }}>↗</span>
      )}
    </span>
  )
}

function EduRow({ school, date, sub }: { school: string; date: string; sub: string }) {
  return (
    <div style={{ marginBottom: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '12.5px', padding: '2px 0', color: '#333' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{school}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#999' }}>{date}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#777', marginBottom: '6px' }}>{sub}</p>
    </div>
  )
}
