import {
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si'
import { BrainCircuit, Smartphone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentType } from 'react'
import techBg from '../assets/sections/tech-bg.png'
import { technologies } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  react: SiReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  node: SiNodedotjs,
  python: SiPython,
  php: SiPhp,
  mysql: SiMysql,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  flutter: SiFlutter,
  rn: Smartphone,
  wordpress: SiWordpress,
  ai: BrainCircuit,
}

export function TechStack() {
  const reduce = useReducedMotion()
  const orbitTechs = technologies.slice(0, 10)

  return (
    <section id="technology" className="section-pad relative overflow-hidden bg-[var(--background-primary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Technology"
          title={
            <>
              Tools of <span className="text-teal">Tomorrow</span>
            </>
          }
          lead="A flexible stack selected for product goals — readable, playful, and on-brand."
          align="split"
        />

        <div className="nx-panel overflow-hidden">
          <div className="relative grid items-center gap-6 p-5 md:grid-cols-[1fr_1fr] md:p-7">
            <div className="pointer-events-none absolute inset-0 opacity-25">
              <img src={techBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f8f6f2_20%,rgba(248,246,242,0.92)_70%)]" />
            </div>

            <Reveal mode="scale" className="relative mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px]">
              <div
                className="absolute inset-[8%] rounded-full border border-dashed border-[rgba(0,72,88,0.16)]"
                style={{ animation: reduce ? undefined : 'orbit-spin 36s linear infinite' }}
              />
              <div
                className="absolute inset-[20%] rounded-full border border-[rgba(248,88,16,0.2)]"
                style={{ animation: reduce ? undefined : 'orbit-spin-rev 24s linear infinite' }}
              />
              <div className="absolute left-1/2 top-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-[0_14px_30px_rgba(24,52,64,0.16)] sm:h-28 sm:w-28">
                <img src={techBg} alt="Technology hub" className="h-full w-full object-cover" />
              </div>

              {orbitTechs.map((tech, i) => {
                const Icon = iconMap[tech.icon]
                const angle = (i / orbitTechs.length) * Math.PI * 2 - Math.PI / 2
                const x = 50 + Math.cos(angle) * 40
                const y = 50 + Math.sin(angle) * 40
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={reduce ? undefined : { y: [0, -4, 0] }}
                    transition={{ duration: 2.8 + (i % 3) * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white shadow-md">
                      {Icon && <Icon className="h-4 w-4 text-[var(--brand-teal)]" />}
                    </div>
                    <span className="rounded-full bg-white px-1.5 py-0.5 text-[0.55rem] font-bold text-[var(--brand-slate)] shadow-sm">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              })}
            </Reveal>

            <Reveal mode="right" delay={0.06}>
              <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3">
                {technologies.map((tech) => {
                  const Icon = iconMap[tech.icon]
                  return (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-2 rounded-[16px] border border-[var(--border-color)] bg-white px-3 py-3 transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(24,52,64,0.08)]"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 shrink-0 text-[var(--brand-teal)] group-hover:text-[var(--brand-orange)]" />
                      )}
                      <span className="truncate text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--brand-slate)]">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
