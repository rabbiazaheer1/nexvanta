import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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

        <div className="nx-panel overflow-hidden">
          <div className="relative h-32 overflow-hidden sm:h-36 md:h-40">
            <img
              src={blogArt}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,46,56,0.24)_0%,rgba(209,217,216,0.75)_60%,var(--background-elevated)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(248,88,16,0.1),transparent_45%)]" />
          </div>

          <div className="grid gap-3 p-4 sm:p-5 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.title} mode="up" delay={i * 0.08}>
                <motion.article
                  className="flex h-full flex-col rounded-[20px] border border-[var(--border-color)] bg-[var(--background-elevated)] p-4 shadow-[0_10px_24px_rgba(24,52,64,0.06)] md:p-5"
                  whileHover={reduce ? undefined : { y: -4 }}
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

                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.05rem] font-extrabold leading-snug tracking-tight text-[var(--brand-slate)] md:text-[1.15rem]">
                    {post.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {post.excerpt}
                  </p>

                  <Link
                    to="/#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]"
                  >
                    Discuss this idea
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
