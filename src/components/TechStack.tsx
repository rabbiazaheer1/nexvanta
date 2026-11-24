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
    <section id="technology" className="section-pad relative overflow-hidden bg-[var(--background-deep)] text-[var(--text-on-dark)]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-[rgba(10,107,124,0.28)] blur-[110px]" />
        <div className="absolute -right-24 bottom-12 h-64 w-64 rounded-full bg-[rgba(248,88,16,0.16)] blur-[110px]" />
      </div>

      <div className="container-nx relative">
        <div className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-end md:justify-between md:gap-6">
          <Reveal mode="left">
            <p className="section-eyebrow !border-white/20 !bg-white/10 !text-white">Technology</p>
            <h2 className="section-title max-w-xl !text-white">
              Tools of <span className="text-[#ff8a54]">Tomorrow</span>
            </h2>
          </Reveal>
          <Reveal mode="right" delay={0.06}>
            <p className="section-lead !text-white/75 md:max-w-sm md:text-right">
              A flexible stack selected for product goals — scalable, fast, and built to last.
            </p>
          </Reveal>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.06] backdrop-blur-md">
          <div className="relative grid items-center gap-6 p-5 sm:p-6 md:grid-cols-[1fr_1fr] md:p-8">
            <div className="pointer-events-none absolute inset-0 opacity-15">
              <img src={techBg} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(5,46,56,0.95)_75%)]" />
            </div>

            <Reveal mode="scale" className="relative mx-auto h-[250px] w-full max-w-[300px] sm:h-[290px] sm:max-w-[330px]">
              <div
                className="absolute inset-[8%] rounded-full border border-dashed border-white/25"
                style={{ animation: reduce ? undefined : 'orbit-spin 36s linear infinite' }}
              />
              <div
                className="absolute inset-[20%] rounded-full border border-[rgba(248,88,16,0.4)]"
                style={{ animation: reduce ? undefined : 'orbit-spin-rev 24s linear infinite' }}
              />
              <div className="absolute left-1/2 top-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white/25 shadow-[0_14px_30px_rgba(0,0,0,0.3)] sm:h-28 sm:w-28">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white shadow-md">
                      {Icon && <Icon className="h-4 w-4 text-[var(--brand-teal)]" />}
                    </div>
                    <span className="rounded-full bg-[var(--background-deep)]/90 px-1.5 py-0.5 text-[0.55rem] font-bold text-white shadow-sm ring-1 ring-white/15">
                      {tech.name}
                    </span>
                  </motion.div>
                )
              })}
            </Reveal>

            <Reveal mode="right" delay={0.06}>
              <div className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {technologies.map((tech) => {
                  const Icon = iconMap[tech.icon]
                  return (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-2.5 rounded-[16px] border border-white/15 bg-white/[0.08] px-3.5 py-3 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.14]"
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 shrink-0 text-[#ffb08a] transition-colors group-hover:text-white" />
                      )}
                      <span className="truncate text-xs font-semibold text-white/90 group-hover:text-white">
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
