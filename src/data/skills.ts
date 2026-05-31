export type Skill = {
  id: string
  name: string
  description: string
  associations?: Association[]
  skillLevel?: 'beginner' | 'intermediate' | 'advanced'
}

export type Association = Work | School | Project

export type Work = {
  type: 'work'
  company: string
  description?: string
}

export type School = {
  type: 'school'
  school: string
  course?: string
  description?: string
}

export type Project = {
  type: 'project'
  name: string
  description?: string
  url?: string
}

export const skills: Skill[] = [
  { id: 'react', name: 'React', description: 'A JavaScript library for building user interfaces', associations: [{ type: 'work', company: 'New York Life' }, { type: 'school', school: 'Fullstack Academy' }] },
  { id: 'nextjs', name: 'Next.js', description: 'A React framework for building server-side rendered applications', associations: [{ type: 'project', name: 'Interactive Resume with Claude', url: 'https://claude-nextjs-resume.vercel.app' }] },
  { id: 'typescript', name: 'TypeScript', description: 'A superset of JavaScript that adds static typing', associations: [{ type: 'project', name: 'Interactive Resume with Claude', url: 'https://claude-nextjs-resume.vercel.app' }] },
  { id: 'motion', name: 'Motion', description: 'A library for creating animations and transitions', skillLevel: 'beginner', associations: [{ type: 'project', name: 'Interactive Resume with Motion', url: 'https://motion-nextjs-resume.vercel.app' }] },
]