export const company = {
  name: 'Nexvanta',
  tagline: 'Innovate. Automate. Elevate.',
  email: 'info@nexvanta.uk',
  phone: '+44 7343 064274',
  phoneHref: 'tel:+447343064274',
  /** Digits only — used for WhatsApp deep links */
  whatsappNumber: '447343064274',
  whatsappHref: 'https://wa.me/447343064274',
  location: 'London, United Kingdom',
  country: 'United Kingdom',
  hours: 'Always open',
  description:
    'Nexvanta helps businesses grow in the digital world with smart AI technology, custom web and mobile apps, and digital marketing strategies that really work.',
  about: [
    'Nexvanta is all about helping businesses grow and succeed in today’s digital world. We use smart AI technology, build custom web and mobile apps, and create digital marketing strategies that really work.',
    'We don’t just deliver services — we work closely with you to understand your goals and create solutions that make your business stronger and faster. Whether it’s automating tasks, building great user experiences, or growing your online presence, Nexvanta is here to help you win.',
    'Our mission is simple: to be the trusted partner that helps you navigate the digital future with confidence and achieve real, lasting results.',
  ],
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
  { label: 'Work', href: '/#work' },
  { label: 'Blog', href: '/#blog' },
  { label: 'FAQ', href: '/#faq' },
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

export const caseStudies = [
  {
    id: '01',
    title: 'Commerce Pulse',
    category: 'Web Application',
    result: 'Faster checkout journeys and a cleaner product discovery flow.',
    tags: ['React', 'Node.js', 'UX'],
  },
  {
    id: '02',
    title: 'Aether Assist',
    category: 'AI & Automation',
    result: 'Support teams answered more queries with less manual routing.',
    tags: ['AI', 'Python', 'Workflows'],
  },
  {
    id: '03',
    title: 'Waypoint Mobile',
    category: 'Mobile App',
    result: 'A polished cross-platform experience that keeps customers engaged.',
    tags: ['Flutter', 'UI/UX', 'API'],
  },
] as const

/** Legacy shape kept for unused Portfolio component compatibility */
export const portfolioProjects = caseStudies.map((item) => ({
  title: item.title,
  category: item.category,
  description: item.result,
  tags: [...item.tags],
  placeholder: true,
}))

export const industries = [
  {
    title: 'Startups & Founders',
    detail: 'Ship MVPs and brand-ready products without overbuilding.',
  },
  {
    title: 'Growing SMEs',
    detail: 'Modernise websites, apps, and operations with practical AI.',
  },
  {
    title: 'E-commerce Brands',
    detail: 'Stronger storefronts, smoother journeys, clearer growth loops.',
  },
  {
    title: 'Service Businesses',
    detail: 'Digital presence, booking flows, and marketing that compounds.',
  },
] as const

export const testimonials = [
  {
    quote:
      'Nexvanta helped us turn a rough product idea into a clear digital experience. Communication stayed sharp, and delivery felt calm and professional.',
    name: 'Amina Rahman',
    role: 'Founder, Studio North',
  },
  {
    quote:
      'They understood our goals quickly and built a website that finally matches how we want the brand to feel — modern, fast, and easy to manage.',
    name: 'James Cole',
    role: 'Marketing Lead, Brightline',
  },
  {
    quote:
      'From AI automation to polish on the frontend, the team focused on outcomes. We saw less manual work and a cleaner customer journey.',
    name: 'Sara Khan',
    role: 'Operations Director',
  },
] as const

export const faqs = [
  {
    question: 'How do projects usually start?',
    answer:
      'We begin with a short discovery call to understand goals, constraints, and success metrics — then propose a clear scope and next step.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Timelines depend on scope. Compact website builds can move quickly; custom apps and AI work usually follow a phased plan with visible milestones.',
  },
  {
    question: 'Do you work with teams outside the UK?',
    answer:
      'Yes. We are based in London and collaborate with clients internationally through clear communication and structured delivery.',
  },
  {
    question: 'Can you support after launch?',
    answer:
      'Absolutely. We can help with iteration, optimisation, content systems, and ongoing improvements once the product is live.',
  },
  {
    question: 'What if we are not sure which service we need?',
    answer:
      'That is common. Share the outcome you want — growth, automation, a better product experience — and we will recommend the right starting path.',
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
 * Sends submissions to info@nexvanta.uk via FormSubmit.
 * First submission triggers a one-time activation email to that inbox — confirm it once.
 */
export const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${company.email}`
