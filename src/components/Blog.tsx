import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import blogArt from '../assets/sections/blog-art.jpg'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const posts = [
  {
    tag: 'AI & Technology',
    readTime: '5 min read',
    title: 'When intelligence feels invisible',
    excerpt:
      'The best AI does not announce itself. It quietly removes friction from everyday work — answering, routing, and deciding so teams can focus on judgment, creativity, and growth.',
  },
  {
    tag: 'Web Development',
    readTime: '6 min read',
    title: 'Websites that behave like products',
    excerpt:
      'A modern website is no longer a brochure. It is a living system — fast, accessible, and designed around real journeys that turn attention into trust and trust into action.',
  },
  {
    tag: 'Mobile & Growth',
    readTime: '4 min read',
    title: 'Experiences that travel with your customers',
    excerpt:
      'Great mobile apps feel effortless in the hand. Paired with thoughtful digital marketing, they create a rhythm of discovery, engagement, and loyalty that compounds over time.',
  },
] as const

export function Blog() {
  const reduce = useReducedMotion()

  return (
    <section id="blog" className="section-pad relative overflow-hidden bg-[var(--background-secondary)]">
      <div className="container-nx relative">
        <SectionHeader
          eyebrow="Insights"
          title={
            <>
              Fresh ideas for a <span className="text-orange">changing world</span>
            </>
          }
          lead="Original studio notes from the Nexvanta team — written to spark clearer product thinking."
          align="split"
        />

        <div className="nx-media relative min-h-[480px] overflow-hidden md:min-h-[520px]">
          <img
            src={blogArt}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,246,242,0.55)_0%,rgba(248,246,242,0.35)_35%,rgba(24,52,64,0.45)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(248,88,16,0.08),transparent_45%)]" />

          <div className="relative z-[1] flex min-h-[480px] flex-col justify-end p-5 md:min-h-[520px] md:p-7">
            <div className="grid gap-4 md:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.title} mode="up" delay={i * 0.08}>
                  <motion.article
                    className="flex h-full flex-col rounded-[22px] border border-white/45 bg-white/80 p-5 shadow-[0_16px_40px_rgba(24,52,64,0.12)] backdrop-blur-xl md:p-6"
                    whileHover={reduce ? undefined : { y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[rgba(248,88,16,0.12)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                        {post.tag}
                      </span>
                      <span className="text-[0.68rem] font-semibold text-[var(--text-muted)]">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.15rem] font-extrabold leading-snug tracking-tight text-[var(--brand-slate)] md:text-[1.25rem]">
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                      {post.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]">
                      Read note
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
