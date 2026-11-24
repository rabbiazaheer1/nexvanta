import { motion, useReducedMotion } from 'framer-motion'
import partnersArt from '../assets/sections/module-partners.png'
import { industries } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Industries() {
  const reduce = useReducedMotion()

  return (
    <section id="industries" className="section-pad relative overflow-hidden bg-[var(--background-primary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Who we serve"
          title={
            <>
              Built for teams that want to <span className="text-teal">move faster</span>
            </>
          }
          lead="From founders to established brands — we partner with people ready to grow in the digital world."
          align="split"
        />

        <div className="nx-media overflow-hidden">
          <motion.img
            src={partnersArt}
            alt="Creative professionals collaborating in a modern studio setting"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.01 : 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,52,64,0.15)_0%,rgba(24,52,64,0.35)_40%,rgba(24,52,64,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(248,88,16,0.14),transparent_40%)]" />

          <div className="relative z-[1] grid gap-5 p-5 sm:p-6 md:grid-cols-[0.95fr_1.05fr] md:items-end md:p-8">
            <Reveal mode="left">
              <p className="section-eyebrow !border-white/25 !bg-white/15 !text-white before:!bg-[var(--brand-orange)]">
                Partnership focus
              </p>
              <h3 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold leading-tight text-white">
                Ideas in motion. Technology with purpose.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                Whether you are launching, scaling, or refining — Nexvanta helps you turn ambitious digital goals into
                clear, workable systems.
              </p>
            </Reveal>

            <Stagger className="grid gap-3 sm:grid-cols-2" stagger={0.07}>
              {industries.map((item) => (
                <StaggerItem key={item.title}>
                  <article className="rounded-[20px] border border-white/20 bg-white/12 p-4 backdrop-blur-md sm:p-5">
                    <h4 className="text-base font-bold tracking-tight text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/78">{item.detail}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
