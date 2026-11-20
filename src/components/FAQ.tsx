import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import immersionArt from '../assets/sections/module-immersion.jpg'
import { faqs } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function FAQ() {
  const reduce = useReducedMotion()
  const [openId, setOpenId] = useState(0)

  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-[var(--background-secondary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Clear answers before we <span className="text-orange">begin</span>
            </>
          }
          lead="A few things teams usually ask before starting a project with Nexvanta."
          align="split"
        />

        <div className="nx-panel overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[200px] overflow-hidden sm:min-h-[240px] lg:min-h-full">
              <motion.img
                src={immersionArt}
                alt="Immersive digital concept art with glowing core"
                className="absolute inset-0 h-full w-full object-cover object-center"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduce ? 0.01 : 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,52,64,0.25)_0%,rgba(0,72,88,0.55)_100%)] lg:bg-[linear-gradient(90deg,rgba(24,52,64,0.2)_0%,rgba(0,72,88,0.55)_100%)]" />
              <div className="relative z-[1] flex h-full min-h-[200px] flex-col justify-end p-5 sm:min-h-[240px] sm:p-6 lg:min-h-[420px]">
                <Reveal mode="up">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#ffb08a]">
                    Still exploring?
                  </p>
                  <h3 className="mt-2 max-w-xs font-[family-name:var(--font-display)] text-2xl font-extrabold text-white">
                    Let’s map the right path together.
                  </h3>
                  <Link to="/#contact" className="btn-primary mt-4 w-fit">
                    Talk to Nexvanta
                  </Link>
                </Reveal>
              </div>
            </div>

            <div className="space-y-2.5 p-4 sm:p-5 md:p-6">
              {faqs.map((item, index) => {
                const open = openId === index
                return (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--background-elevated)]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? -1 : index)}
                    >
                      <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--brand-slate)] sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[var(--brand-orange)] transition-transform ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0.01 : 0.22 }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-[var(--border-color)] px-4 pb-4 pt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:px-5">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
