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

          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,46,56,0.96)_0%,rgba(5,46,56,0.88)_48%,rgba(0,72,88,0.68)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(248,88,16,0.22),transparent_42%)]" />

          <div className="relative z-[1] flex items-center px-6 py-10 sm:px-8 sm:py-12 md:px-11 md:py-14">
            <Reveal mode="left" className="max-w-xl">
              <p className="section-eyebrow !border-white/20 !bg-white/10 !text-white">Let&apos;s collaborate</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.2vw,2.45rem)] font-extrabold leading-tight tracking-tight text-white">
                Have an idea? Let&apos;s make it{' '}
                <span className="text-[#ff8a54]">happen</span>.
              </h2>
              <p className="mt-2.5 max-w-md text-sm text-white/80 sm:text-base">
                Let&apos;s build something meaningful together.
              </p>
              <Link to="/#contact" className="btn-primary mt-6">
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
