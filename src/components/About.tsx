import { motion, useReducedMotion } from 'framer-motion'
import aboutBg from '../assets/sections/about-bg.jpg'
import { company } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  const reduce = useReducedMotion()

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[var(--background-primary)]">
      <div className="container-nx relative">
        <div className="nx-media min-h-[420px] md:min-h-[460px]">
          <img
            src={aboutBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="nx-media-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(248,88,16,0.16),transparent_40%)]" />

          <div className="relative z-[1] flex min-h-[420px] flex-col justify-end p-6 md:min-h-[460px] md:max-w-[58%] md:justify-center md:p-9">
            <Reveal mode="left">
              <p className="section-eyebrow !border-white/25 !bg-white/15 !text-white before:!bg-[var(--brand-orange)]">
                Meet Nexvanta
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.6vw,2.7rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                We make technology feel <span className="text-[var(--brand-orange)]">extraordinary</span>.
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/80">
                {company.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
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
          </div>

          <div className="absolute bottom-5 right-5 hidden rounded-2xl border border-white/20 bg-white/12 px-4 py-3 text-sm font-bold text-white backdrop-blur md:block">
            {company.tagline}
          </div>
        </div>
      </div>
    </section>
  )
}
