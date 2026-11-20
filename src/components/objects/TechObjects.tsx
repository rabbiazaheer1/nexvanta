import { motion, useReducedMotion } from 'framer-motion'

type SizeProps = { className?: string; animate?: boolean }

export function AiCore({ className = '', animate = true }: SizeProps) {
  const reduce = useReducedMotion()
  const move = animate && !reduce

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      animate={move ? { y: [0, -8, 0], rotateY: [0, 8, 0] } : undefined}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="relative mx-auto h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#0a6b7c,#004858_55%,#183440)] shadow-[0_18px_40px_rgba(0,72,88,0.4),inset_0_2px_12px_rgba(255,255,255,0.25)]" />
        <div className="absolute inset-[18%] rounded-full border border-white/25 bg-white/10 backdrop-blur-[2px]" />
        <div className="absolute inset-[38%] rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffb08a,#f85810)] shadow-[0_0_18px_rgba(248,88,16,0.65)]" />
        {[0, 60, 120].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 h-[2px] w-10 origin-left rounded-full bg-white/35"
            style={{ transform: `rotate(${deg}deg) translateY(-50%)` }}
          />
        ))}
        <span className="absolute -right-1 top-2 h-2.5 w-2.5 rounded-full bg-[var(--brand-orange)] shadow-[0_0_10px_rgba(248,88,16,0.8)]" />
      </div>
    </motion.div>
  )
}

export function MiniLaptop({ className = '', animate = true }: SizeProps) {
  const reduce = useReducedMotion()
  const move = animate && !reduce

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d', perspective: 600 }}
      animate={move ? { y: [0, -6, 0], rotateZ: [0, 2, 0] } : undefined}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="relative w-[120px]" style={{ transform: 'rotateX(12deg) rotateY(-18deg)' }}>
        <div className="rounded-t-lg border border-[#2a4a56] bg-[linear-gradient(160deg,#183440,#004858)] p-1.5 shadow-[0_16px_30px_rgba(24,52,64,0.3)]">
          <div className="overflow-hidden rounded-md bg-[#e8f2f4] p-1.5">
            <div className="mb-1 flex gap-0.5">
              <span className="h-1 w-1 rounded-full bg-[var(--brand-orange)]" />
              <span className="h-1 w-1 rounded-full bg-[var(--brand-teal)]/40" />
              <span className="h-1 w-1 rounded-full bg-[var(--brand-teal)]/25" />
            </div>
            <div className="grid grid-cols-3 gap-1">
              <span className="col-span-2 h-6 rounded bg-white" />
              <span className="h-6 rounded bg-[var(--brand-teal)]/20" />
              <span className="col-span-3 h-2 rounded bg-[var(--brand-orange)]/30" />
            </div>
          </div>
        </div>
        <div className="mx-auto h-1.5 w-[128%] -translate-x-[11%] rounded-b-lg bg-[linear-gradient(180deg,#3a5a66,#183440)] shadow-[0_10px_18px_rgba(24,52,64,0.25)]" />
        <div className="mx-auto mt-px h-0.5 w-[40%] rounded-full bg-[#2a4a56]" />
      </div>
    </motion.div>
  )
}

export function MiniPhone({ className = '', animate = true }: SizeProps) {
  const reduce = useReducedMotion()
  const move = animate && !reduce

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      animate={move ? { y: [0, -10, 0], rotateY: [0, -10, 0] } : undefined}
      transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      aria-hidden="true"
    >
      <div
        className="relative h-[118px] w-[62px] rounded-[14px] border border-white/20 bg-[linear-gradient(160deg,#183440,#004858)] p-1 shadow-[0_20px_36px_rgba(24,52,64,0.35)]"
        style={{ transform: 'rotateY(-16deg) rotateX(8deg)' }}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[10px] bg-[#f8f6f2]">
          <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-[var(--brand-slate)]/20" />
          <div className="mt-2 space-y-1.5 px-1.5">
            <div className="h-8 rounded-lg bg-[var(--brand-teal)]" />
            <div className="h-2 rounded bg-[var(--brand-slate)]/10" />
            <div className="h-2 w-2/3 rounded bg-[var(--brand-slate)]/10" />
            <div className="mt-2 grid grid-cols-2 gap-1">
              <span className="h-7 rounded-md bg-[var(--brand-orange)]/85" />
              <span className="h-7 rounded-md bg-[var(--background-tint)]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function GrowthChart({ className = '', animate = true }: SizeProps) {
  const reduce = useReducedMotion()
  const move = animate && !reduce
  const bars = [28, 44, 36, 62, 50, 78]

  return (
    <motion.div
      className={`relative ${className}`}
      animate={move ? { y: [0, -7, 0] } : undefined}
      transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      aria-hidden="true"
    >
      <div
        className="relative flex h-[88px] w-[110px] items-end gap-1.5 rounded-2xl border border-white/40 bg-white/80 p-3 shadow-[0_16px_34px_rgba(24,52,64,0.16)] backdrop-blur-md"
        style={{ transform: 'rotateX(18deg) rotateY(12deg)' }}
      >
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#ff6b2c,#f85810)]"
            initial={{ height: '18%' }}
            animate={move ? { height: [`${h * 0.7}%`, `${h}%`, `${h * 0.85}%`] } : { height: `${h}%` }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
          />
        ))}
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[var(--brand-teal)] shadow-[0_0_10px_rgba(0,72,88,0.45)]" />
      </div>
    </motion.div>
  )
}

export function BrandCore({ className = '', animate = true, size = 'md' }: SizeProps & { size?: 'sm' | 'md' | 'lg' }) {
  const reduce = useReducedMotion()
  const move = animate && !reduce
  const dim = size === 'lg' ? 'h-28 w-28 text-3xl' : size === 'sm' ? 'h-16 w-16 text-lg' : 'h-22 w-22 text-2xl'
  const box = size === 'lg' ? 'h-28 w-28' : size === 'sm' ? 'h-16 w-16' : 'h-[5.5rem] w-[5.5rem]'

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      animate={move ? { y: [0, -10, 0], rotateY: [0, 12, -8, 0] } : undefined}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div
        className={`relative ${box} ${dim} flex items-center justify-center rounded-[28%] bg-[linear-gradient(145deg,#004858,#0a6b7c_45%,#183440)] font-[family-name:var(--font-display)] font-extrabold text-white shadow-[0_24px_50px_rgba(0,72,88,0.38)]`}
        style={{ transform: 'rotateX(12deg) rotateY(-16deg)' }}
      >
        <div className="absolute inset-[12%] rounded-[24%] border border-white/20 bg-white/10" />
        <span className="relative z-[1]">N</span>
        <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-[var(--brand-orange)] shadow-[0_0_16px_rgba(248,88,16,0.75)]" />
      </div>
    </motion.div>
  )
}

export function MiniRocket({ className = '', animate = true }: SizeProps) {
  const reduce = useReducedMotion()
  const move = animate && !reduce

  return (
    <motion.div
      className={`relative ${className}`}
      animate={move ? { y: [0, -12, 0], rotate: [0, 4, -2, 0] } : undefined}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="relative h-24 w-16" style={{ transform: 'rotate(-18deg)' }}>
        <div className="absolute left-1/2 top-0 h-16 w-10 -translate-x-1/2 rounded-t-full bg-[linear-gradient(180deg,#ffffff,#e8f2f4)] shadow-[0_12px_24px_rgba(24,52,64,0.2)]" />
        <div className="absolute left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]" />
        <div className="absolute bottom-4 left-0 h-8 w-5 rounded-bl-xl bg-[var(--brand-teal)]" />
        <div className="absolute bottom-4 right-0 h-8 w-5 rounded-br-xl bg-[var(--brand-teal)]" />
        <div className="absolute bottom-0 left-1/2 h-5 w-4 -translate-x-1/2 rounded-b-md bg-[linear-gradient(180deg,#ff6b2c,#f85810)]" />
      </div>
    </motion.div>
  )
}

export function MiniEnvelope({ className = '', animate = true }: SizeProps) {
  const reduce = useReducedMotion()
  const move = animate && !reduce

  return (
    <motion.div
      className={`relative ${className}`}
      animate={move ? { y: [0, -8, 0], rotateZ: [0, 3, 0] } : undefined}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div
        className="relative h-16 w-24 overflow-hidden rounded-xl bg-white shadow-[0_16px_30px_rgba(24,52,64,0.18)]"
        style={{ transform: 'rotateX(18deg) rotateY(-12deg)' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,rgba(0,72,88,0.12)_50%,transparent_52%)]" />
        <div className="absolute left-0 top-0 h-0 w-0 border-l-[48px] border-r-[48px] border-t-[28px] border-l-transparent border-r-transparent border-t-[var(--brand-teal)]" />
        <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
      </div>
    </motion.div>
  )
}
