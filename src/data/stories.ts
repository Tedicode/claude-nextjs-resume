export type StoryVisualStat = {
  type: 'stat'
  stats: { num: string; label: string }[]
}

export type StoryVisualFlow = {
  type: 'flow'
  label: string
  steps: string[]
}

export type StoryVisual = StoryVisualStat | StoryVisualFlow

export type Story = {
  id: string
  chapter: string
  headline: string
  body: string
  visual: StoryVisual
  tags: string[]
  media: {
    title: string
    description: string
  }
}

export const stories: Story[] = [
  {
    id: 'scale',
    chapter: 'Scale & Impact',
    headline: 'Building the UI for 12,000 agents — every day.',
    body: "The agent-facing app at New York Life isn't a side project — it's the primary tool for over 12,000 insurance agents nationwide. Built on React, Redux, and Material UI, the frontend handles everything from policy lookups to complex onboarding flows. Maintaining that at scale means thinking carefully about performance, consistency, and the cost of a bad deploy.",
    visual: {
      type: 'stat',
      stats: [
        { num: '12K+', label: 'Daily active users' },
        { num: '2.5yr', label: 'Tenure & ownership' },
        { num: 'React', label: 'Core stack' },
      ],
    },
    tags: ['React', 'Redux', 'MUI', 'Scale'],
    media: {
      title: 'Internal tooling at enterprise scale',
      description:
        'Shipping UI changes that affect thousands of agents in real time means every PR matters. Feature flags, staged rollouts, and tight QA collaboration are part of the daily rhythm.',
    },
  },
  {
    id: 'rbac',
    chapter: 'Architecture',
    headline: 'Not all agents see the same app.',
    body: "New York Life has a complex hierarchy — agents, managers, trainers, admins, and more. Rather than building separate apps, the team built a single UI with a role-based entitlement system that controls what each user sees and can do. I designed and implemented the frontend architecture for this system: a clean entitlements layer that gates components, routes, and API calls based on the user's role set.",
    visual: {
      type: 'flow',
      label: 'Entitlement resolution at login',
      steps: ['User logs in', 'Auth token', 'Entitlements API', 'Role resolver', 'Conditional UI render'],
    },
    tags: ['RBAC', 'Architecture', 'Auth', 'React'],
    media: {
      title: 'Differential access without duplication',
      description:
        'The key insight: encode access rules in data, not in conditionals scattered across components. A centralized entitlements hook made the whole app easier to audit and extend.',
    },
  },
  {
    id: 'storyblok',
    chapter: 'CMS Integration',
    headline: 'Giving the business team control of their own content.',
    body: 'Before Storyblok, any copy or content change in the app required a developer, a PR, and a deploy. I led the end-to-end research and integration of Storyblok as the platform CMS — evaluating headless CMS options, prototyping the integration, and building the rendering layer that maps Storyblok components to our React component library. The result: the business team can now push content changes independently.',
    visual: {
      type: 'flow',
      label: 'Content delivery pipeline',
      steps: ['Business editor', 'Storyblok CMS', 'Content API', 'React renderer', 'Live in app'],
    },
    tags: ['Storyblok', 'CMS', 'Headless', 'Integration'],
    media: {
      title: 'Decoupling content from code',
      description:
        'The research phase involved evaluating Contentful, Sanity, and Storyblok side by side. Storyblok won on its Visual Editor and React SDK quality. The integration became one of the most-used features by non-technical stakeholders.',
    },
  },
  {
    id: 'refactor',
    chapter: 'Refactor',
    headline: 'Every mature app carries ghosts. I cleaned them out.',
    body: 'As the NYL app grew from an MVP into a production system used by tens of thousands, the codebase accumulated technical debt — inconsistent patterns, legacy state management, duplicated logic, and a component structure that had outgrown its original design. I led the architectural refactor: identifying the highest-leverage cleanup targets, building the new patterns, and migrating legacy code without disrupting active feature development.',
    visual: {
      type: 'flow',
      label: 'Refactor approach',
      steps: ['Audit debt', 'Define new patterns', 'Parallel migration', 'Deprecate legacy', 'Stable foundation'],
    },
    tags: ['Refactor', 'Architecture', 'Tech Debt', 'React'],
    media: {
      title: 'Refactoring without stopping the clock',
      description:
        'The challenge with big refactors: the business doesn\'t pause for cleanup. The solution was a strangler fig approach — introduce new patterns alongside old ones, migrate incrementally, and retire legacy code in phases.',
    },
  },
  {
    id: 'companion',
    chapter: 'Product Ownership',
    headline: 'A second window. A new mode. Both mine from zero.',
    body: "Two of the most complex features I've shipped at NYL were ones I owned entirely from concept to production: a companion window that lets agents run a parallel context alongside the main app, and a session-driven mode that restructures the entire UX around a time-boxed agent session. Both required deep collaboration with design and product, non-trivial state architecture, and careful attention to edge cases in a live enterprise environment.",
    visual: {
      type: 'flow',
      label: 'Session-driven mode lifecycle',
      steps: ['Session start', 'Context loads', 'Agent workflow', 'Session close', 'State cleanup'],
    },
    tags: ['Product', 'State Management', 'UX', 'Ownership'],
    media: {
      title: 'Owning a feature end to end',
      description:
        'The companion window required solving a hard problem: two synchronized contexts in the same app, without duplicating state or creating race conditions. The session-driven mode added a layer of time-awareness to an app that was previously stateless between visits.',
    },
  },
]

// Map bullet index to story id
export const bulletStoryMap: Record<number, string> = {
  0: 'scale',
  2: 'rbac',
  3: 'storyblok',
  4: 'refactor',
  5: 'companion',
}
