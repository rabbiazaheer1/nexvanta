import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import workArt from '../assets/sections/module-work.png'
import { caseStudies } from '../data/content'
import { Stagger, StaggerItem } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function CaseStudies() {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="section-pad relative overflow-hidden bg-[var(--background-secondary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Proof in the <span className="text-orange">details</span>
            </>
          }
          lead="A glimpse of how Nexvanta turns ideas into shipped digital experiences."
          align="split"
        />

        <div className="nx-panel overflow-hidden">
          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-full">
              <motion.img
                src={workArt}
                alt="Floating digital product cards representing Nexvanta work"
                className="absolute inset-0 h-full w-full object-cover object-center"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0.01 : 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,46,56,0.1)_0%,rgba(209,217,216,0.5)_55%,rgba(225,231,230,0.96)_100%)] lg:bg-[linear-gradient(90deg,transparent_0%,rgba(225,231,230,0.32)_45%,rgba(225,231,230,0.98)_100%)]" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <p className="rounded-2xl border border-[var(--border-color)] bg-[var(--background-elevated)]/92 px-4 py-3 text-sm font-semibold text-[var(--brand-slate)] backdrop-blur">
                  Product systems · AI experiences · mobile journeys
                </p>
              </div>
            </div>

            <div className="relative z-[1] p-4 sm:p-5 md:p-6">
              <p className="hidden text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-teal-soft)] lg:block">
                Case snapshots
              </p>
              <Stagger className="mt-3 space-y-3" stagger={0.08}>
                {caseStudies.map((item) => (
                  <StaggerItem key={item.id}>
                    <article className="rounded-[20px] border border-[var(--border-color)] bg-[var(--background-primary)] p-4 transition hover:border-[var(--border-strong)] sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-teal)]">
                          {item.id} · {item.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border-color)] bg-[var(--background-elevated)] px-2 py-0.5 text-[0.62rem] font-semibold text-[var(--text-muted)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="mt-2 text-lg font-bold tracking-tight text-[var(--brand-slate)]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">{item.result}</p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>

              <Link
                to="/#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]"
              >
                Start a similar project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
