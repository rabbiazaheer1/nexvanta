import { motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'
import testimonialsArt from '../assets/sections/module-testimonials.jpg'
import { testimonials } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-[var(--background-primary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Trusted by teams who want <span className="text-teal">real results</span>
            </>
          }
          lead="A few words from people who partnered with Nexvanta to grow with smarter digital systems."
          align="split"
        />

        <div className="nx-media overflow-hidden">
          <motion.img
            src={testimonialsArt}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.01 : 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(233,229,223,0.55)_0%,rgba(233,229,223,0.72)_40%,rgba(233,229,223,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(241,238,233,0.55),transparent_55%)]" />

          <div className="relative z-[1] p-4 sm:p-5 md:p-7">
            <Reveal mode="left" className="mb-5 max-w-xl md:mb-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-orange)]">
                Client voices
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.4rem,2.8vw,1.9rem)] font-extrabold text-[var(--brand-slate)]">
                Clarity, craft, and partnership that feels easy.
              </h3>
            </Reveal>

            <Stagger className="grid gap-3 md:grid-cols-3" stagger={0.08}>
              {testimonials.map((item) => (
                <StaggerItem key={item.name}>
                  <article className="flex h-full flex-col rounded-[22px] border border-[var(--border-color)] bg-[var(--background-elevated)]/92 p-5 shadow-[var(--shadow-card)] backdrop-blur-md md:p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(0,72,88,0.08)] text-[var(--brand-teal)]">
                      <Quote className="h-4 w-4" />
                    </span>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                      “{item.quote}”
                    </p>
                    <div className="mt-5 border-t border-[var(--border-color)] pt-4">
                      <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--brand-slate)]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs font-semibold text-[var(--text-muted)]">{item.role}</p>
                    </div>
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
