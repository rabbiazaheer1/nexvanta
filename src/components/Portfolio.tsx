import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef, type MouseEvent, type ReactNode } from 'react'
import { portfolioProjects } from '../data/content'
import { MiniLaptop, MiniPhone } from './objects/TechObjects'
import { Reveal } from './Reveal'

function TiltCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-60, 60], [6, -6]), { stiffness: 160, damping: 18 })
  const ry = useSpring(useTransform(mx, [-60, 60], [-7, 7]), { stiffness: 160, damping: 18 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformStyle: 'preserve-3d' }}
      onMouseMove={(e: MouseEvent) => {
        if (reduce || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        mx.set(e.clientX - rect.left - rect.width / 2)
        my.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export function Portfolio() {
  const [featured, second, third] = portfolioProjects

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden">
      <div className="container-nx relative">
        <Reveal mode="left">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">
            Small details. <span className="text-orange">Big digital impact.</span>
          </h2>
          <p className="section-lead">Illustrative placeholders — ready for real Nexvanta case studies.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal mode="scale">
            <TiltCard className="overflow-hidden rounded-[26px] border border-[var(--border-color)] bg-white">
              <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#004858,#183440)] p-6 md:min-h-[280px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(248,88,16,0.25),transparent_55%)]" />
                <MiniLaptop animate className="relative z-[1] scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
                  Illustrative placeholder
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-orange)]">
                  {featured.category}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--brand-slate)]">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{featured.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]">
                  View concept <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </TiltCard>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal mode="right" delay={0.06}>
              <TiltCard className="overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-white">
                <div className="relative flex h-[120px] items-center justify-center bg-[linear-gradient(145deg,#f85810,#ff6b2c)]">
                  <div className="scale-90">
                    <MiniPhone animate={false} />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase text-white">
                    Placeholder
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                    {second.category}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-base font-bold text-[var(--brand-slate)]">
                    {second.title}
                  </h3>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal mode="right" delay={0.12}>
              <TiltCard className="overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[linear-gradient(150deg,#183440,#004858)] text-white">
                <div className="p-5">
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[#ffb08a]">
                    Placeholder
                  </span>
                  <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-wider text-white/60">
                    {third.category}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold">
                    {third.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{third.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
