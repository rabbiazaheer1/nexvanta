import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import blogArt from '../assets/sections/blog-art.jpg'
import processPlayground from '../assets/sections/process-playground.png'
import servicesCity from '../assets/sections/services-city.jpg'
import techBg from '../assets/sections/tech-bg.png'
import { AiCore, GrowthChart, MiniLaptop, MiniPhone } from '../components/objects/TechObjects'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal'
import { getServiceBySlug, services, type Service } from '../data/content'

const sceneBySlug: Record<string, string> = {
  'ai-technology': techBg,
  'web-development': servicesCity,
  'mobile-applications': processPlayground,
  'digital-marketing': blogArt,
}

function ServiceVisual({ slug, className = '' }: { slug: string; className?: string }) {
  if (slug === 'ai-technology') return <AiCore className={className} />
  if (slug === 'web-development') return <MiniLaptop className={className} />
  if (slug === 'mobile-applications') return <MiniPhone className={className} />
  return <GrowthChart className={className} />
}

function MarqueeStrip({ items }: { items: readonly string[] }) {
  const reduce = useReducedMotion()
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/15 bg-[rgba(24,52,64,0.55)] py-3 backdrop-blur-md">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-white/85"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function ServiceHero({ service }: { service: Service }) {
  const reduce = useReducedMotion()
  const scene = sceneBySlug[service.slug]

  return (
    <section className="relative overflow-hidden pt-[4.8rem]">
      <div className="absolute inset-0">
        <img src={scene} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,40,50,0.92)_0%,rgba(0,72,88,0.78)_45%,rgba(24,52,64,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(248,88,16,0.28),transparent_45%)]" />
      </div>

      <div
        className="pointer-events-none absolute -left-10 top-24 font-[family-name:var(--font-display)] text-[clamp(8rem,22vw,16rem)] font-extrabold leading-none text-white/[0.07]"
        aria-hidden="true"
      >
        {service.id}
      </div>

      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute right-[8%] top-[22%] h-40 w-40 rounded-full bg-[rgba(248,88,16,0.2)] blur-3xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute bottom-[18%] left-[12%] h-48 w-48 rounded-full bg-[rgba(10,107,124,0.35)] blur-3xl"
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="container-nx relative z-[2] py-7 md:py-10">
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          All services
        </Link>

        <div className="mt-6 grid items-end gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <div>
            <motion.p
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#ffb08a]"
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Capability {service.id} · Nexvanta
            </motion.p>

            <motion.h1
              className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[0.92] tracking-tight text-white"
              initial={{ opacity: 0, y: reduce ? 0 : 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {service.title.split(' ').map((word, i) => (
                <span key={word + i} className="mr-[0.28em] inline-block">
                  {i === service.title.split(' ').length - 1 ? (
                    <span className="text-[#ffb08a]">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-xl font-semibold text-white/95 md:text-2xl"
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
            >
              {service.tagline}
            </motion.p>

            <motion.p
              className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-white/75"
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
            >
              {service.overview}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
            >
              <Link to="/#contact" className="btn-primary">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/#contact"
                className="btn-secondary !border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Book a conversation
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto flex min-h-[280px] w-full max-w-[340px] items-center justify-center"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-sm" />
            <div className="absolute inset-4 -rotate-3 rounded-[2rem] border border-[rgba(248,88,16,0.35)] bg-[linear-gradient(160deg,rgba(248,88,16,0.18),rgba(0,72,88,0.25))]" />
            <motion.div
              className="relative z-[1]"
              animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ServiceVisual slug={service.slug} className="scale-[1.65]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <MarqueeStrip items={service.capabilities} />
    </section>
  )
}

function OfferingsLayout({ service }: { service: Service }) {
  const slug = service.slug

  if (slug === 'ai-technology') {
    return (
      <div className="relative mt-10">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(0,72,88,0.18)] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(248,88,16,0.2)] lg:block"
          aria-hidden="true"
        />
        <div className="relative z-[1] mx-auto mb-8 hidden h-28 w-28 items-center justify-center lg:flex">
          <ServiceVisual slug={slug} className="scale-110" />
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2" stagger={0.08}>
          {service.offerings.map((item, i) => (
            <StaggerItem key={item.title}>
              <article
                className={`relative overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-white p-6 shadow-[var(--shadow-card)] md:p-7 ${
                  i % 2 === 1 ? 'md:translate-y-8' : ''
                }`}
              >
                <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-[rgba(0,72,88,0.08)]">
                  0{i + 1}
                </span>
                <h3 className="-mt-2 font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--brand-slate)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{item.detail}</p>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(248,88,16,0.14),transparent_70%)]" />
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    )
  }

  if (slug === 'web-development') {
    return (
      <Stagger className="mt-10 space-y-4" stagger={0.1}>
        {service.offerings.map((item, i) => (
          <StaggerItem key={item.title}>
            <article className="group grid overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-white shadow-[var(--shadow-card)] md:grid-cols-[140px_1fr]">
              <div className="flex items-center justify-center bg-[var(--gradient-brand)] p-6 text-white md:min-h-[160px]">
                <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold opacity-90">
                  0{i + 1}
                </span>
              </div>
              <div className="relative p-6 md:p-8">
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(232,242,244,0.9))]"
                  aria-hidden="true"
                />
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-[var(--brand-slate)] transition group-hover:text-[var(--brand-teal)]">
                  {item.title}
                </h3>
                <p className="relative mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    )
  }

  if (slug === 'mobile-applications') {
    return (
      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal mode="left" className="relative mx-auto w-full max-w-[280px]">
          <div className="absolute -inset-4 rounded-[2.8rem] bg-[linear-gradient(160deg,rgba(0,72,88,0.12),rgba(248,88,16,0.12))] blur-xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--border-color)] bg-[var(--brand-slate)] p-5 shadow-[var(--shadow-teal)]">
            <div className="mx-auto mb-4 h-2 w-16 rounded-full bg-white/25" />
            <div className="flex min-h-[320px] items-center justify-center rounded-[1.6rem] bg-[linear-gradient(165deg,#0a6b7c,#004858)]">
              <ServiceVisual slug={slug} className="scale-[1.7]" />
            </div>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              Designed for every screen
            </p>
          </div>
        </Reveal>
        <Stagger className="space-y-3" stagger={0.08}>
          {service.offerings.map((item, i) => (
            <StaggerItem key={item.title}>
              <article
                className={`rounded-[24px] border border-[var(--border-color)] bg-white p-5 shadow-[var(--shadow-card)] md:p-6 ${
                  i % 2 === 0 ? 'lg:ml-0' : 'lg:ml-10'
                }`}
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                  Flow 0{i + 1}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--brand-slate)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    )
  }

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {service.offerings.map((item, i) => (
        <Reveal key={item.title} mode="up" delay={i * 0.06}>
          <article
            className={`relative min-h-[220px] overflow-hidden rounded-[28px] p-6 text-white md:p-7 ${
              i === 0
                ? 'bg-[var(--gradient-brand)] md:col-span-2 md:min-h-[200px]'
                : i === 1
                  ? 'bg-[linear-gradient(145deg,#f85810,#ff6b2c)]'
                  : 'bg-[linear-gradient(145deg,#183440,#004858)]'
            }`}
          >
            <span className="absolute -right-2 -top-4 font-[family-name:var(--font-display)] text-[7rem] font-extrabold leading-none text-white/10">
              {i + 1}
            </span>
            <h3 className="relative font-[family-name:var(--font-display)] text-2xl font-extrabold">{item.title}</h3>
            <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-white/85">{item.detail}</p>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams()
  const reduce = useReducedMotion()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/#services" replace />
  }

  const others = services.filter((item) => item.slug !== service.slug)

  return (
    <main>
      <ServiceHero service={service} />

      <section className="relative overflow-hidden section-pad bg-[var(--background-primary)]">
        <div
          className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[rgba(0,72,88,0.06)] blur-3xl"
          aria-hidden="true"
        />
        <div className="container-nx relative">
          <Reveal mode="left">
            <p className="section-eyebrow">What we provide</p>
            <h2 className="section-title max-w-2xl">
              Built differently for{' '}
              <span className="text-orange">{service.title.toLowerCase()}</span>
            </h2>
            <p className="section-lead">
              A bold look at what happens inside this engagement — from strategy to shipped outcomes.
            </p>
          </Reveal>
          <OfferingsLayout service={service} />
        </div>
      </section>

      <section className="relative overflow-hidden section-pad !py-8 md:!py-10 bg-[var(--brand-slate)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(248,88,16,0.25), transparent 35%), radial-gradient(circle at 80% 70%, rgba(10,107,124,0.35), transparent 40%)',
          }}
        />
        <div className="container-nx relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal mode="left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#ffb08a]">
              Deliverables
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              What you walk away with
            </h2>
            <ul className="mt-7 space-y-3">
              {service.deliverables.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 backdrop-blur-sm"
                  initial={{ opacity: 0, x: reduce ? 0 : -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-orange)] text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal mode="right" delay={0.08}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[linear-gradient(160deg,#f85810,#ff7a3d_55%,#004858)] p-7 text-white md:p-9">
              <motion.div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
                animate={reduce ? undefined : { scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/80">
                Ideal for
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold">
                Who thrives with this
              </h2>
              <ul className="mt-6 space-y-3">
                {service.idealFor.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="btn-primary mt-8 !bg-white !text-[var(--brand-teal)] hover:!bg-[#fff4ee]">
                Discuss this service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad !pt-4 !pb-10 bg-[var(--background-primary)]">
        <div className="container-nx">
          <Reveal mode="left">
            <p className="section-eyebrow">Keep exploring</p>
            <h2 className="section-title">
              More ways we <span className="text-orange">build</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((item, i) => (
              <Reveal key={item.slug} mode="up" delay={i * 0.06}>
                <Link
                  to={`/services/${item.slug}`}
                  className="group relative block overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={sceneBySlug[item.slug]}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(24,52,64,0.75))]" />
                    <span className="absolute bottom-3 left-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/90">
                      {item.id}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-extrabold text-[var(--brand-slate)] group-hover:text-[var(--brand-teal)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-orange)]">
                      Open page
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
