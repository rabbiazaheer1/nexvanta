import { motion, useReducedMotion } from 'framer-motion'
import whyBg from '../assets/sections/why-bg.png'
import { whyChoose } from '../data/content'
import { Stagger, StaggerItem } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function WhyChoose() {
  const reduce = useReducedMotion()

  return (
    <section id="why-nexvanta" className="section-pad relative overflow-hidden bg-[var(--background-primary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Why Nexvanta"
          title={
            <>
              Good ideas deserve <span className="text-teal">great execution</span>
            </>
          }
          lead="Playful craft with serious delivery — four reasons teams partner with us."
          align="split"
        />

        <div className="nx-panel overflow-hidden">
          <div className="relative h-32 overflow-hidden sm:h-36 md:h-40">
            <img
              src={whyBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,242,0.2)_0%,rgba(248,246,242,0.72)_70%,#fff_100%)]" />

            <div className="relative z-[1] flex h-full flex-wrap items-end gap-2 p-4 md:p-5">
              {['Tailored', 'Innovation', 'Scale', 'Partnership'].map((label, i) => (
                <motion.span
                  key={label}
                  className="nx-chip"
                  animate={reduce ? undefined : { y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 3.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--brand-orange)] text-[0.55rem] text-white">
                    +
                  </span>
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          <Stagger className="grid gap-3 p-3.5 sm:grid-cols-2 sm:p-4 lg:grid-cols-4 md:p-5" stagger={0.07}>
            {whyChoose.map((item, index) => (
              <StaggerItem key={item.title} mode="up">
                <article className="nx-card h-full p-3.5 sm:p-4">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[rgba(0,72,88,0.12)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-base font-bold text-[var(--brand-slate)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
