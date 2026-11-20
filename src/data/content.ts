export const company = {
  name: 'Nexvanta',
  tagline: 'Innovate. Automate. Elevate.',
  email: 'info@nexvanta.io',
  description:
    'Nexvanta helps businesses grow in the digital world with smart AI technology, custom web and mobile applications, and digital marketing strategies focused on real outcomes.',
  linkedin: 'https://www.linkedin.com/company/nexvanta',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'AI & Technology', href: '#service-01' },
      { label: 'Web Development', href: '#service-02' },
      { label: 'Mobile Applications', href: '#service-03' },
      { label: 'Digital Marketing', href: '#service-04' },
    ],
  },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const services = [
  {
    id: '01',
    title: 'AI & Technology',
    tagline: 'Make intelligence work for you.',
    description:
      'Intelligent AI-powered solutions and automation that help businesses work smarter.',
    capabilities: [
      'AI Integration',
      'Business Automation',
      'AI Chatbots',
      'Intelligent Digital Solutions',
    ],
    icon: 'cpu' as const,
  },
  {
    id: '02',
    title: 'Web Development',
    tagline: 'Digital experiences built to perform.',
    description:
      'Modern, scalable, responsive websites and web applications built around business requirements.',
    capabilities: [
      'Custom Web Development',
      'Frontend Development',
      'Backend Development',
      'Web Applications',
      'E-commerce Solutions',
    ],
    icon: 'code' as const,
  },
  {
    id: '03',
    title: 'Mobile Applications',
    tagline: 'Ideas that fit right in your hands.',
    description:
      'User-friendly mobile experiences designed to connect businesses with their customers.',
    capabilities: [
      'Android Applications',
      'iOS Applications',
      'Cross-platform Development',
      'Mobile UI/UX',
    ],
    icon: 'smartphone' as const,
  },
  {
    id: '04',
    title: 'Digital Marketing',
    tagline: 'Turn attention into opportunity.',
    description:
      'Strategic digital experiences designed to strengthen online visibility and business growth.',
    capabilities: [
      'SEO',
      'Social Media Marketing',
      'Digital Campaigns',
      'Online Brand Growth',
    ],
    icon: 'chart' as const,
  },
] as const

export const whyChoose = [
  {
    title: 'Tailored Solutions',
    description:
      'Every engagement starts with your goals — then we shape technology around the outcomes that matter.',
  },
  {
    title: 'Innovation-Driven Thinking',
    description:
      'We blend practical engineering with emerging AI capabilities to keep your product future-ready.',
  },
  {
    title: 'Scalable Technology',
    description:
      'Architectures designed to grow with demand, without forcing costly rebuilds later.',
  },
  {
    title: 'Collaborative Partnership',
    description:
      'Clear communication and shared ownership — we work with you, not around you.',
  },
] as const

export const processSteps = [
  {
    id: '01',
    title: 'Discover',
    description: "Understand the client's goals, challenges, and requirements.",
  },
  {
    id: '02',
    title: 'Design',
    description: 'Plan intuitive experiences and design the right solution.',
  },
  {
    id: '03',
    title: 'Develop',
    description: 'Build, integrate, and test the digital product.',
  },
  {
    id: '04',
    title: 'Launch & Grow',
    description: 'Deploy the solution and support continuous improvement.',
  },
] as const

export const portfolioProjects = [
  {
    title: 'Commerce Pulse',
    category: 'Web Application',
    description:
      'Illustrative placeholder for a conversion-focused commerce experience with realtime catalog sync.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    placeholder: true,
  },
  {
    title: 'Aether Assist',
    category: 'AI Solution',
    description:
      'Illustrative placeholder for an AI assistant concept that streamlines internal support workflows.',
    tags: ['Python', 'AI APIs', 'TypeScript'],
    placeholder: true,
  },
  {
    title: 'Waypoint Mobile',
    category: 'Mobile Application',
    description:
      'Illustrative placeholder for a cross-platform customer engagement app with polished UX.',
    tags: ['Flutter', 'Firebase', 'UI/UX'],
    placeholder: true,
  },
] as const

export const technologies = [
  { name: 'React', icon: 'react' as const },
  { name: 'Next.js', icon: 'next' as const },
  { name: 'TypeScript', icon: 'typescript' as const },
  { name: 'JavaScript', icon: 'javascript' as const },
  { name: 'Node.js', icon: 'node' as const },
  { name: 'Python', icon: 'python' as const },
  { name: 'PHP', icon: 'php' as const },
  { name: 'MySQL', icon: 'mysql' as const },
  { name: 'PostgreSQL', icon: 'postgres' as const },
  { name: 'MongoDB', icon: 'mongo' as const },
  { name: 'Flutter', icon: 'flutter' as const },
  { name: 'React Native', icon: 'rn' as const },
  { name: 'WordPress', icon: 'wordpress' as const },
  { name: 'AI APIs', icon: 'ai' as const },
] as const

export const serviceOptions = [
  'AI & Technology',
  'Web Development',
  'Mobile Applications',
  'Digital Marketing',
  'Not sure yet',
] as const

/**
 * Contact form endpoint.
 * Leave empty until a backend or form service (Formspree, Getform, custom API) is configured.
 * Example: 'https://formspree.io/f/xxxxxxx'
 */
export const CONTACT_FORM_ENDPOINT = ''
