import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BrainCircuit, Code2, Smartphone, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import servicesCity from '../assets/sections/services-city.jpg'
import { services } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const icons = [BrainCircuit, Code2, Smartphone, TrendingUp] as const

export function Services() {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="section-pad relative overflow-hidden bg-[var(--background-secondary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Services playground"
          title={
            <>
              Capabilities that <span className="text-orange">actually ship</span>
            </>
          }
          lead="Four focused practices — presented as one clear Nexvanta experience."
          align="split"
        />

        <div className="nx-media min-h-[480px] md:min-h-[520px]">
          <img
            src={servicesCity}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,242,0.15)_0%,rgba(248,246,242,0.35)_45%,rgba(248,246,242,0.88)_100%)]" />

          <div className="relative z-[1] flex min-h-[480px] flex-col justify-end gap-5 p-5 md:min-h-[520px] md:p-7">
            <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--brand-slate)] md:text-3xl">
              Our Features
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = icons[index]
                return (
                  <Reveal key={service.id} mode="up" delay={index * 0.05}>
                    <Link to={`/services/${service.slug}`} className="block h-full">
                      <motion.article
                        id={`service-${service.id}`}
                        className="group h-full rounded-[22px] border border-white/60 bg-white/85 p-4 shadow-[0_14px_34px_rgba(24,52,64,0.1)] backdrop-blur-xl transition md:p-5"
                        whileHover={reduce ? undefined : { y: -4 }}
                      >
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[rgba(0,72,88,0.07)] text-[var(--brand-teal)]">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--brand-orange)]">
                          {service.id}
                        </p>
                        <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-extrabold text-[var(--brand-slate)]">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--text-secondary)]">{service.tagline}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]">
                          Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </motion.article>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
