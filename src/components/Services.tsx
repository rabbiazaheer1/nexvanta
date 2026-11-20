import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BrainCircuit, Code2, Smartphone, TrendingUp } from 'lucide-react'
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
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="nx-media-overlay" />

          <div className="relative z-[1] flex min-h-[480px] flex-col justify-end gap-5 p-5 md:min-h-[520px] md:p-7">
            <p className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-white md:text-3xl">
              Our Features
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = icons[index]
                return (
                  <Reveal key={service.id} mode="up" delay={index * 0.05}>
                    <motion.article
                      id={`service-${service.id}`}
                      className="nx-glass group h-full p-4 text-white md:p-5"
                      whileHover={reduce ? undefined : { y: -4 }}
                    >
                      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#ffb08a]">
                        {service.id}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-extrabold">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/80">{service.tagline}</p>
                      <a
                        href="#contact"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white"
                      >
                        Learn more <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </motion.article>
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
