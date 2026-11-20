import { motion, useReducedMotion } from 'framer-motion'
import aboutBg from '../assets/sections/about-bg.jpg'
import { company } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[var(--background-primary)]">
      <div className="container-nx relative">
        <div className="nx-media overflow-hidden">
          <img
            src={aboutBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="nx-media-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(248,88,16,0.16),transparent_40%)]" />

          <div className="relative z-[1] grid gap-6 p-5 sm:p-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:p-8 lg:p-9">
            <Reveal mode="left">
              <p className="section-eyebrow !border-white/25 !bg-white/15 !text-white before:!bg-[var(--brand-orange)]">
                Meet Nexvanta
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.65rem,3.4vw,2.45rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                We make technology feel <span className="text-[var(--brand-orange)]">extraordinary</span>.
              </h2>
              <div className="mt-3 max-w-xl space-y-2.5 text-[0.92rem] leading-relaxed text-white/80">
                {company.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['AI', 'Web', 'Mobile', 'Marketing'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border border-white/25 bg-white/12 px-3 py-1 text-xs font-bold text-white"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: reduce ? 0 : 0.1 + i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </Reveal>

            <div className="hidden justify-end md:flex">
              <div className="rounded-2xl border border-white/20 bg-white/12 px-4 py-3 text-sm font-bold text-white backdrop-blur">
                {company.tagline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
