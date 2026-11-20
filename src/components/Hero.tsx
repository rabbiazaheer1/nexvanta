import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroRobot from '../assets/sections/hero-robot.jpg'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden bg-[var(--gradient-hero)] pt-[5.2rem]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-20 h-52 w-52 rounded-full bg-[rgba(0,88,104,0.07)] blur-[90px]" />
        <div className="absolute right-[-6%] top-16 h-56 w-56 rounded-full bg-[rgba(248,88,16,0.06)] blur-[90px]" />
      </div>

      <div className="container-nx relative z-[2] grid items-center gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-10">
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-eyebrow mb-4"
          >
            Innovation Meets Digital Excellence
          </motion.div>

          <h1 className="display-tight text-[clamp(2rem,4.4vw,3.2rem)] text-[var(--brand-slate)]">
            {[
              { key: 'ideas', node: <>Big Ideas,</> },
              {
                key: 'tech',
                node: (
                  <>
                    <span className="text-teal">Intelligent</span> Technology.
                  </>
                ),
              },
              {
                key: 'tomorrow',
                node: (
                  <>
                    A Better <span className="text-orange">Tomorrow.</span>
                  </>
                ),
              },
            ].map((line, i) => (
              <span key={line.key} className="mask-line overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: reduce ? 0 : '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line.node}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-4 text-[0.95rem] leading-relaxed text-[var(--text-secondary)]"
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From intelligent AI solutions to powerful web and mobile experiences, we help businesses
            turn ambitious ideas into digital impact.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/#services" className="btn-primary">
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#contact" className="btn-secondary">
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
          initial={{ opacity: 0, x: reduce ? 0 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          <div className="nx-panel relative overflow-hidden p-3 md:p-4">
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={heroRobot}
                alt="Friendly Nexvanta tech robot"
                className="mx-auto h-auto max-h-[340px] w-full object-contain mix-blend-multiply"
                decoding="async"
              />
            </motion.div>
            <span className="nx-chip absolute left-4 top-4">AI buddy online</span>
            <span className="absolute bottom-4 right-4 rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[0.68rem] font-bold text-white shadow-md">
              Ready to build
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mb-3 flex w-fit flex-col items-center gap-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]"
        animate={reduce ? undefined : { y: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Link to="/#about" className="flex flex-col items-center gap-1">
          Scroll
          <ArrowDown className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
        </Link>
      </motion.div>
    </section>
  )
}
