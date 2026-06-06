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
    body: "Our agent-facing app at New York Life is a primary sales tool for over 12,000 insurance agents nationwide. Built on React, Redux, and Material UI, the frontend handles extensive data capture and facilitation of complex sales flows. Maintaining this at scale means thinking carefully about UI, performance and infrastructure.",
    visual: {
      type: 'stat',
      stats: [
        { num: '12K+', label: 'Daily active users' },
        { num: '3.5yr', label: 'Tenure & ownership' },
        { num: 'React', label: 'Core stack' },
      ],
    },
    tags: ['React', 'Redux', 'MUI', 'Scale'],
    media: {
      title: 'Internal tooling at enterprise scale',
      description:
        'Shipping UI changes that affect thousands of agents in the field. Feature flags, staged rollouts, and tight collaboration with Business and QA are part of the daily rhythm.\n\nPresenting regular demos at a high level for business stakeholders, and at a technical level for internal teams, has been crucial to our iterative process.'
    },
  },
  {
    id: 'rbac',
    chapter: 'Architecture',
    headline: 'Not all users see the same app.',
    body: "New York Life has a complex hierarchy — agents, managers, trainers, admins, and more. Rather than building separate apps, the team built a single UI with a role-based entitlement system that controls what each user sees and can do. I worked on the frontend architecture for this system, coordinating with the entitlements layer from our backend to gate components, routes and API calls based on the user's role set.",
    visual: {
      type: 'flow',
      label: 'Entitlement resolution at login',
      steps: ['User logs in', 'Auth token', 'Entitlements API', 'Role resolver', 'Conditional UI render'],
    },
    tags: ['RBAC', 'Architecture', 'Auth', 'React'],
    media: {
      title: 'Differential access without duplication',
      description:
        'Backend-sourced entitlements mapped into Redux allow actions such as application submission and PDF/email delivery. SSO Roles determine the delivery of extra features or alternate paths. A new Admin oversight mode, enabling session visibility into agent activity.',
    },
  },
  {
    id: 'storyblok',
    chapter: 'CMS Integration',
    headline: 'Giving the business team control of their own content.',
    body: 'Before Storyblok, any copy or content change in the app required a developer, a PR, and a deploy. I led the early research and built a POC, creating the integration of Storyblok into our app as the platform CMS. This entailed evaluating headless CMS options, prototyping the integration, and building the rendering layer that maps Storyblok components to our React component library. The result: the business team can now push content changes independently.',
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
    headline: 'Every mature app carries ghosts.',
    body: 'As our app has grown into a production system used by thousands, the codebase accumulated technical debt — inconsistent patterns, legacy state management, duplicated logic, and a component structure that had outgrown its original design. I owned, led, and contributed to several initiatives to improve legacy code without disrupting active feature development.',
    visual: {
      type: 'flow',
      label: 'Refactor approach',
      steps: ['Audit debt', 'Define new patterns', 'Parallel migration', 'Deprecate legacy', 'Stable foundation'],
    },
    tags: ['Refactor', 'Architecture', 'Tech Debt', 'React'],
    media: {
      title: 'Refactoring without stopping the clock',
      description:
        'I owned a major architectural refactor: decoupling a tangled launch point that was our app\'s root; I built a new routing pattern for one of our main entities: our Goals Routing; I refactored and migrated our global Infocenter into a CMS-enabled component. The challenge here: the business doesn\'t pause for cleanup. The solution was to introduce a new pattern that could coexist alongside the old, migrate incrementally, and retire legacy code in phases. I participated in an early upgrade of our app to React 18 with MUI5 and emotion CSS library.',
    },
  },
  {
    id: 'companion',
    chapter: 'Product Ownership',
    headline: 'A Companion window. A Practice mode.',
    body: "Two of the most complex features I've shipped at NYL were ones I owned entirely from concept to production: a companion window that lets agents run a parallel context alongside the main app, and a session-driven mode that provides alternative content, functionality and styling. Both required collaboration with design and product team and non-trivial state architecture. I was able to ship both features in under 2 months.",
    visual: {
      type: 'flow',
      label: 'Session-driven mode lifecycle',
      steps: ['Session start', 'Context loads', 'Agent workflow', 'Session close', 'State cleanup'],
    },
    tags: ['Product', 'State Management', 'UX', 'Ownership'],
    media: {
      title: 'Owning a feature end to end',
      description:
        'The companion window required solving a hard problem: two synchronized contexts in the same app, without duplicating state or creating race conditions. Practice Mode added a layer of session-awareness to our Infocenter, which was previously stateless, and this also provided a scaleable blueprint for extending and adding additional session-driven modes in the future.',
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
