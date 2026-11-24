import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import processPlayground from '../assets/sections/process-playground.png'
import { processSteps } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function Process() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 40%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })
  const fill = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="section-pad relative overflow-hidden bg-[var(--background-secondary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Our process"
          title={
            <>
              From Idea to <span className="text-orange">Reality</span>
            </>
          }
          lead="A clear journey through discovery, design, build, and launch."
          align="split"
        />

        <div ref={ref} className="nx-panel overflow-hidden">
          <div className="relative h-32 overflow-hidden sm:h-36 md:h-40">
            <img
              src={processPlayground}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(209,217,216,0.25)_0%,rgba(209,217,216,0.8)_65%,var(--background-elevated)_100%)]" />
            <div className="relative z-[1] flex h-full items-end p-4 md:p-5">
              <div className="nx-chip !bg-[var(--background-elevated)]/95">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                Nexvanta workflow · step by step
              </div>
            </div>
          </div>

          <div className="bg-[var(--background-elevated)] px-4 pb-5 pt-3 sm:px-5 md:px-6 md:pb-6">
            <div className="relative mb-4 hidden h-1.5 overflow-hidden rounded-full bg-[rgba(0,72,88,0.1)] lg:block">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#004858,#f85810)]"
                style={{ width: reduce ? '100%' : fill }}
              />
            </div>

            <ol className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.id} mode="up" delay={index * 0.05}>
                  <li>
                    <article className="nx-card h-full bg-[var(--background-primary)] p-4">
                      <div className="mb-2 flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-teal)] text-xs font-extrabold text-white">
                          {step.id}
                        </span>
                        <h3 className="text-base font-bold tracking-tight text-[var(--brand-slate)]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
