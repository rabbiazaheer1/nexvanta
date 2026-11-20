import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ctaBg from '../assets/sections/cta-bg.png'
import { Reveal } from './Reveal'

export function FinalCTA() {
  const reduce = useReducedMotion()

  return (
    <section className="section-pad !py-5 md:!py-7">
      <div className="container-nx">
        <div className="nx-media relative overflow-hidden">
          <motion.img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.01 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(248,246,242,0.92)_0%,rgba(248,246,242,0.78)_42%,rgba(0,72,88,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(248,88,16,0.12),transparent_40%)]" />

          <div className="relative z-[1] flex items-center px-5 py-8 sm:px-6 sm:py-9 md:px-9 md:py-10">
            <Reveal mode="left" className="max-w-xl">
              <p className="section-eyebrow">Let&apos;s collaborate</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.55rem,3.2vw,2.35rem)] font-extrabold leading-tight tracking-tight text-[var(--brand-slate)]">
                Have an idea? Let&apos;s make it{' '}
                <span className="text-orange">happen</span>.
              </h2>
              <p className="mt-2.5 max-w-md text-sm text-[var(--text-secondary)] sm:text-base">
                Let&apos;s build something meaningful together.
              </p>
              <Link to="/#contact" className="btn-primary mt-5">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
