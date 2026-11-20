import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ctaBg from '../assets/sections/cta-bg.png'
import { Reveal } from './Reveal'

export function FinalCTA() {
  const reduce = useReducedMotion()

  return (
    <section className="section-pad !py-8 md:!py-10">
      <div className="container-nx">
        <div className="nx-media relative min-h-[320px] overflow-hidden md:min-h-[380px]">
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

          {/* Soft brand wash so text stays readable over busy 3D art */}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(248,246,242,0.92)_0%,rgba(248,246,242,0.78)_42%,rgba(0,72,88,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(248,88,16,0.12),transparent_40%)]" />

          <div className="relative z-[1] flex min-h-[320px] items-center px-6 py-10 md:min-h-[380px] md:px-10 md:py-12">
            <Reveal mode="left" className="max-w-xl">
              <p className="section-eyebrow">Let&apos;s collaborate</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.4vw,2.55rem)] font-extrabold leading-tight tracking-tight text-[var(--brand-slate)]">
                Have an idea? Let&apos;s make it{' '}
                <span className="text-orange">happen</span>.
              </h2>
              <p className="mt-3 max-w-md text-[var(--text-secondary)]">
                Let&apos;s build something meaningful together.
              </p>
              <a href="#contact" className="btn-primary mt-6">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
