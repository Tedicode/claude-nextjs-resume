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
  { id: 'javascript', name: 'JavaScript', description: 'Core language for building interactive web applications on both client and server', associations: [{ type: 'school', school: 'Fullstack Academy' }] },
  { id: 'react', name: 'React', description: 'A JavaScript library for building user interfaces', associations: [{ type: 'work', company: 'New York Life' }, { type: 'school', school: 'Fullstack Academy' }] },
  { id: 'redux', name: 'Redux', description: 'Predictable state container for managing complex application state', associations: [{ type: 'work', company: 'New York Life' }] },
  { id: 'node', name: 'Node', description: 'JavaScript runtime for building server-side applications and APIs', associations: [{ type: 'school', school: 'Fullstack Academy' }] },
  { id: 'rest', name: 'REST', description: 'Architectural style for designing and consuming HTTP-based APIs', associations: [{ type: 'work', company: 'New York Life' }] },
  { id: 'express', name: 'Express', description: 'Minimal Node.js web framework for building REST APIs and middleware', associations: [{ type: 'school', school: 'Fullstack Academy' }] },
  { id: 'sequelize', name: 'Sequelize', description: 'Promise-based ORM for Node.js supporting PostgreSQL and other SQL databases', associations: [{ type: 'school', school: 'Fullstack Academy' }] },
  { id: 'postgresql', name: 'PostgreSQL', description: 'Relational database used for structured data storage and querying', associations: [{ type: 'school', school: 'Fullstack Academy' }] },
  { id: 'html-css', name: 'HTML/CSS', description: 'Foundational web markup and styling for semantic, accessible layouts' },
  { id: 'mui', name: 'MUI', description: 'Material UI component library for building consistent React interfaces', associations: [{ type: 'work', company: 'New York Life' }] },
  { id: 'emotion', name: 'emotion', description: 'CSS-in-JS library for scoped, composable component styling in React', associations: [{ type: 'work', company: 'New York Life' }] },
  { id: 'wcag-2.0', name: 'WCAG 2.0', description: 'Web accessibility guidelines for building inclusive user experiences' },
  { id: 'cursor-ide', name: 'Cursor IDE', description: 'AI-native code editor used for development workflows and agent-assisted coding' },
  { id: 'mcp-servers', name: 'MCP Servers', description: 'Model Context Protocol servers for extending AI tools with external integrations' },
  { id: 'storyblok', name: 'Storyblok', description: 'Headless CMS for managing and delivering structured content to React apps', associations: [{ type: 'work', company: 'New York Life' }] },
  { id: 'storybook', name: 'Storybook', description: 'Component development environment for building and documenting UI in isolation' },
  { id: 'webpack', name: 'Webpack', description: 'Module bundler for compiling and optimizing frontend assets' },
  { id: 'babel', name: 'Babel', description: 'JavaScript compiler for transpiling modern syntax to browser-compatible code' },
  { id: 'git', name: 'Git', description: 'Distributed version control for tracking code changes and collaborating' },
  { id: 'github', name: 'GitHub', description: 'Platform for hosting repositories, code review, and CI/CD workflows' },
  { id: 'figma', name: 'Figma', description: 'Collaborative design tool for UI mockups, prototypes, and design handoff' },
  { id: 'jira', name: 'Jira', description: 'Project management tool for tracking sprints, tickets, and agile workflows', associations: [{ type: 'work', company: 'New York Life' }] },
  { id: 'nextjs', name: 'Next.js', description: 'A React framework for building server-side rendered applications', associations: [{ type: 'project', name: 'Interactive Resume with Claude', url: 'https://claude-nextjs-resume.vercel.app' }] },
  { id: 'typescript', name: 'TypeScript', description: 'A superset of JavaScript that adds static typing', associations: [{ type: 'project', name: 'Interactive Resume with Claude', url: 'https://claude-nextjs-resume.vercel.app' }] },
  { id: 'motion', name: 'Motion', description: 'A library for creating animations and transitions', skillLevel: 'beginner', associations: [{ type: 'project', name: 'Interactive Resume with Motion', url: 'https://motion-nextjs-resume.vercel.app' }] },
]

export const resumeSkillIds = [
  'javascript', 'react', 'redux', 'node', 'rest', 'express', 'sequelize',
  'postgresql', 'html-css', 'mui', 'emotion', 'wcag-2.0',
] as const

export const resumeToolIds = [
  'cursor-ide', 'mcp-servers', 'storyblok', 'storybook', 'webpack', 'babel',
  'git', 'github', 'figma', 'jira',
] as const

const skillMap = Object.fromEntries(skills.map(s => [s.id, s]))

export function getResumeSkills(): Skill[] {
  return resumeSkillIds.map(id => skillMap[id]).filter(Boolean)
}

export function getResumeTools(): Skill[] {
  return resumeToolIds.map(id => skillMap[id]).filter(Boolean)
}
