import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import blogArt from '../assets/sections/blog-art.jpg'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const posts = [
  {
    title: 'Designing AI features that teams actually adopt',
    excerpt: 'Practical notes on embedding automation without overwhelming users.',
    tag: 'AI',
  },
  {
    title: 'From brief to build: keeping product scope honest',
    excerpt: 'How collaborative discovery protects timelines and craft.',
    tag: 'Process',
  },
  {
    title: 'Mobile experiences that feel native across platforms',
    excerpt: 'Patterns for cross-platform apps with platform respect.',
    tag: 'Mobile',
  },
] as const

export function Blog() {
  const reduce = useReducedMotion()
  const [featured, ...rest] = posts

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
          lead="Editorial placeholders — replace with published posts when ready."
          align="split"
        />

        <div className="nx-panel overflow-hidden">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left: properly aligned blog content */}
            <div className="flex flex-col gap-4 border-b border-[var(--border-color)] p-5 md:p-7 lg:border-b-0 lg:border-r">
              <Reveal mode="left">
                <article className="nx-card !shadow-none group overflow-hidden !p-0">
                  <div className="relative aspect-[16/8] overflow-hidden bg-[linear-gradient(145deg,#004858,#183440)] sm:aspect-[16/7]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(248,88,16,0.28),transparent_55%)]" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
                      {featured.tag} · Coming soon
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-extrabold leading-snug text-[var(--brand-slate)]">
                      {featured.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">{featured.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]">
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2">
                {rest.map((post, i) => (
                  <Reveal key={post.title} mode="up" delay={0.06 + i * 0.05}>
                    <article className="nx-card flex h-full flex-col justify-between p-4 md:p-5">
                      <div>
                        <span className="rounded-full bg-[rgba(248,88,16,0.1)] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-[var(--brand-orange)]">
                          {post.tag}
                        </span>
                        <h3 className="mt-3 font-[family-name:var(--font-display)] text-base font-bold leading-snug text-[var(--brand-slate)]">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-[var(--text-secondary)]">{post.excerpt}</p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--brand-teal)]">
                        Coming soon <ArrowRight className="h-4 w-4" />
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: new sculpture image, aligned and animated lightly */}
            <Reveal mode="right" delay={0.08} className="relative min-h-[280px] bg-[#eef1f4] lg:min-h-full">
              <motion.img
                src={blogArt}
                alt="Abstract glass sculpture artwork"
                className="absolute inset-0 h-full w-full object-contain object-center p-4 md:p-6"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#eef1f4] to-transparent" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
