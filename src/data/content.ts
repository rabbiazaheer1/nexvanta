export const company = {
  name: 'Nexvanta',
  tagline: 'Innovate. Automate. Elevate.',
  email: 'info@nexvanta.uk',
  phone: '+44 7343 064274',
  phoneHref: 'tel:+447343064274',
  location: 'London, United Kingdom',
  country: 'United Kingdom',
  hours: 'Always open',
  description:
    'Nexvanta helps businesses grow in the digital world with smart AI technology, custom web and mobile applications, and digital marketing strategies focused on real outcomes.',
  linkedin: 'https://www.linkedin.com/company/nexvanta',
  facebook: 'https://www.facebook.com/people/Nexvanta/61578207356921/',
} as const

export const navLinks = [
  { label: 'Home', href: '/#home' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'AI & Technology', href: '/services/ai-technology' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Applications', href: '/services/mobile-applications' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
    ],
  },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
] as const

export const services = [
  {
    id: '01',
    slug: 'ai-technology',
    title: 'AI & Technology',
    tagline: 'Make intelligence work for you.',
    description:
      'Intelligent AI-powered solutions and automation that help businesses work smarter.',
    overview:
      'We help organisations bring practical AI into everyday operations — from chatbots and workflow automation to intelligent systems that support better decisions without unnecessary complexity.',
    accent: 'teal' as const,
    capabilities: [
      'AI Integration',
      'Business Automation',
      'AI Chatbots',
      'Intelligent Digital Solutions',
    ],
    offerings: [
      {
        title: 'AI Integration',
        detail:
          'Connect AI capabilities into your existing products, tools, and business processes with clear use cases and measurable value.',
      },
      {
        title: 'Business Automation',
        detail:
          'Remove repetitive work through smart workflows that save time, reduce errors, and free teams for higher-value tasks.',
      },
      {
        title: 'AI Chatbots & Assistants',
        detail:
          'Build conversational experiences that answer questions, guide customers, and support internal teams around the clock.',
      },
      {
        title: 'Intelligent Digital Solutions',
        detail:
          'Design tailored AI-enabled experiences that improve operations, customer journeys, and product intelligence.',
      },
    ],
    deliverables: [
      'Use-case discovery and AI readiness mapping',
      'Solution architecture and model/API integration',
      'Chatbot or assistant experience design',
      'Automation flows and operational handoff',
      'Testing, monitoring guidance, and iteration plan',
    ],
    idealFor: [
      'Teams ready to automate repetitive support or operations work',
      'Products that need smarter search, recommendations, or assistants',
      'Businesses exploring AI without overbuilding',
    ],
    icon: 'cpu' as const,
  },
  {
    id: '02',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Digital experiences built to perform.',
    description:
      'Modern, scalable, responsive websites and web applications built around business requirements.',
    overview:
      'From polished marketing sites to custom web applications, we craft fast, accessible, and conversion-minded experiences that represent your brand and support real business goals.',
    accent: 'cream' as const,
    capabilities: [
      'Custom Web Development',
      'Frontend Development',
      'Backend Development',
      'Web Applications',
      'E-commerce Solutions',
    ],
    offerings: [
      {
        title: 'Custom Websites',
        detail:
          'Distinctive, responsive websites designed around your brand story, services, and conversion journeys.',
      },
      {
        title: 'Frontend Development',
        detail:
          'Clean, modern interfaces built for performance, accessibility, and smooth interaction across devices.',
      },
      {
        title: 'Backend & Web Applications',
        detail:
          'Secure, scalable application foundations for dashboards, portals, and business-critical workflows.',
      },
      {
        title: 'E-commerce Solutions',
        detail:
          'Online storefront experiences that make browsing, checkout, and product discovery feel effortless.',
      },
    ],
    deliverables: [
      'Information architecture and UX planning',
      'Responsive UI implementation',
      'Backend/API integration where required',
      'Performance, SEO, and accessibility foundations',
      'Launch support and handover documentation',
    ],
    idealFor: [
      'Brands needing a premium online presence',
      'Teams launching product or service platforms',
      'Businesses improving conversion and digital credibility',
    ],
    icon: 'code' as const,
  },
  {
    id: '03',
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    tagline: 'Ideas that fit right in your hands.',
    description:
      'User-friendly mobile experiences designed to connect businesses with their customers.',
    overview:
      'We design and build mobile applications that feel intuitive, reliable, and brand-true — helping customers engage with your business anytime, anywhere.',
    accent: 'deep' as const,
    capabilities: [
      'Android Applications',
      'iOS Applications',
      'Cross-platform Development',
      'Mobile UI/UX',
    ],
    offerings: [
      {
        title: 'Android & iOS Apps',
        detail:
          'Native-feeling applications tailored for platform conventions while staying true to your product vision.',
      },
      {
        title: 'Cross-platform Development',
        detail:
          'Efficient builds that reach more users without sacrificing quality, consistency, or maintainability.',
      },
      {
        title: 'Mobile UI/UX',
        detail:
          'Thoughtful mobile interfaces focused on clarity, gesture-friendly flows, and delightful micro-interactions.',
      },
      {
        title: 'Product Iteration Support',
        detail:
          'Post-launch improvements that refine usability, retention, and feature value based on real usage.',
      },
    ],
    deliverables: [
      'Mobile UX wireflows and interaction planning',
      'UI design aligned to your brand system',
      'App development and API connectivity',
      'QA across key devices and journeys',
      'Store-ready packaging guidance and release support',
    ],
    idealFor: [
      'Businesses bringing services closer to customers',
      'Startups validating product experiences on mobile',
      'Teams needing polished apps across platforms',
    ],
    icon: 'smartphone' as const,
  },
  {
    id: '04',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Turn attention into opportunity.',
    description:
      'Strategic digital experiences designed to strengthen online visibility and business growth.',
    overview:
      'We help brands become discoverable and memorable through focused SEO, social presence, and digital campaigns that support sustainable growth.',
    accent: 'orange' as const,
    capabilities: [
      'SEO',
      'Social Media Marketing',
      'Digital Campaigns',
      'Online Brand Growth',
    ],
    offerings: [
      {
        title: 'SEO Foundations',
        detail:
          'Improve visibility with practical search strategy, content structure, and technical clarity that compounds over time.',
      },
      {
        title: 'Social Media Marketing',
        detail:
          'Build presence and engagement with content systems that feel on-brand and conversation-ready.',
      },
      {
        title: 'Digital Campaigns',
        detail:
          'Plan and execute campaigns that connect the right message to the right audience at the right moment.',
      },
      {
        title: 'Online Brand Growth',
        detail:
          'Strengthen brand consistency across digital touchpoints so every interaction builds trust and recognition.',
      },
    ],
    deliverables: [
      'Channel and audience strategy overview',
      'SEO and content recommendations',
      'Campaign concepts and messaging direction',
      'Social/content frameworks for consistency',
      'Performance review checkpoints and next actions',
    ],
    idealFor: [
      'Brands ready to grow discoverability and demand',
      'Teams needing clearer digital messaging systems',
      'Businesses pairing product launches with visibility',
    ],
    icon: 'chart' as const,
  },
] as const

export type Service = (typeof services)[number]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

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
