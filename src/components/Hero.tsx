import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Smartphone, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroRobot from '../assets/sections/hero-robot.jpg'

const heroPillars = [
  {
    id: '01',
    title: 'AI & Automation',
    metric: '4x Faster Workflows',
    slug: 'ai-technology',
    icon: BrainCircuit,
  },
  {
    id: '02',
    title: 'Web Platforms',
    metric: 'Sub-second Speed',
    slug: 'web-development',
    icon: Code2,
  },
  {
    id: '03',
    title: 'Mobile Apps',
    metric: 'iOS & Android',
    slug: 'mobile-applications',
    icon: Smartphone,
  },
  {
    id: '04',
    title: 'Digital Growth',
    metric: 'Data-Backed ROI',
    slug: 'digital-marketing',
    icon: TrendingUp,
  },
] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--gradient-hero)] pt-[5.2rem] pb-7 md:pt-[5.8rem] md:pb-9">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-20 h-60 w-60 rounded-full bg-[rgba(0,88,104,0.08)] blur-[100px]" />
        <div className="absolute right-[6%] top-16 h-72 w-72 rounded-full bg-[rgba(248,88,16,0.09)] blur-[110px]" />
      </div>

      <div className="container-nx relative z-[2]">
        <div className="grid items-center gap-8 py-4 sm:py-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-8">
          {/* Left: Editorial Copy & CTAs */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-eyebrow mb-4"
            >
              Innovation Meets Digital Excellence
            </motion.div>

            <h1 className="display-tight text-[clamp(2.1rem,4.6vw,3.45rem)] text-[var(--brand-slate)]">
              {[
                { key: 'ideas', node: <>Big Ideas,</> },
                {
                  key: 'tech',
                  node: (
                    <>
                      <span className="text-teal">Intelligent</span> Technology.
                    </>
                  ),
                },
                {
                  key: 'tomorrow',
                  node: (
                    <>
                      A Better <span className="text-orange">Tomorrow.</span>
                    </>
                  ),
                },
              ].map((line, i) => (
                <span key={line.key} className="mask-line overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: reduce ? 0 : '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.62, delay: 0.06 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line.node}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-4 max-w-lg text-[0.96rem] leading-relaxed text-[var(--text-secondary)] sm:text-base"
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
            >
              From intelligent AI solutions to powerful web and mobile experiences, we help businesses
              turn ambitious ideas into digital impact.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
            >
              <Link to="/#services" className="btn-primary">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/#contact" className="btn-secondary">
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>

          {/* Right: Seamless Robot Visual + Floating Glass Metrics */}
          <motion.div
            className="relative mx-auto flex w-full max-w-[440px] items-center justify-center lg:max-w-none"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.16 }}
          >
            {/* Soft architectural ring & aura behind the robot */}
            <div
              className="pointer-events-none absolute h-[260px] w-[260px] rounded-full border border-dashed border-[rgba(0,72,88,0.16)] sm:h-[330px] sm:w-[330px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(0,88,104,0.14)_0%,rgba(248,88,16,0.08)_55%,transparent_75%)] blur-xl sm:h-[250px] sm:w-[250px]"
              aria-hidden="true"
            />

            <motion.div
              className="relative z-[1] w-full"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={heroRobot}
                alt="Nexvanta intelligent AI technology robot"
                className="mx-auto h-auto max-h-[270px] w-full object-contain mix-blend-multiply sm:max-h-[330px] lg:max-h-[370px]"
                decoding="async"
              />
            </motion.div>

            {/* Floating Top-Left Pill */}
            <div className="nx-chip absolute left-1 top-3 z-[2] !bg-[var(--background-elevated)]/95 backdrop-blur sm:left-3 sm:top-5">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
              AI-First Studio
            </div>

            {/* Floating Bottom-Right Deep Teal Stat Pill */}
            <div className="absolute bottom-2 right-1 z-[2] rounded-2xl border border-white/15 bg-[var(--background-deep)] px-3.5 py-2.5 text-white shadow-[var(--shadow-teal)] sm:bottom-4 sm:right-3">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#ffb08a]">
                Full-Cycle Delivery
              </p>
              <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">AI · Web · Mobile · Growth</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4-Pillar Interactive Capability Dock */}
        <motion.div
          className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4"
          initial={{ opacity: 0, y: reduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
        >
          {heroPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Link
                key={pillar.id}
                to={`/services/${pillar.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--background-elevated)]/92 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--brand-teal)] hover:bg-[var(--background-elevated)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--background-secondary)] text-[var(--brand-teal)] transition group-hover:bg-[var(--brand-teal)] group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--brand-slate)]">{pillar.title}</p>
                    <p className="text-xs font-medium text-[var(--text-muted)]">{pillar.metric}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--brand-orange)]" />
              </Link>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-5 flex w-fit flex-col items-center gap-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]"
        animate={reduce ? undefined : { y: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Link to="/#about" className="flex flex-col items-center gap-1">
          Scroll
          <ArrowDown className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
        </Link>
      </motion.div>
    </section>
  )
}
