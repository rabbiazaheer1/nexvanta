import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Mode = 'up' | 'left' | 'right' | 'scale' | 'blur'

const modeHidden = (mode: Mode, reduce: boolean | null) => {
  if (reduce) return { opacity: 0 }
  switch (mode) {
    case 'left':
      return { opacity: 0, x: -28 }
    case 'right':
      return { opacity: 0, x: 28 }
    case 'scale':
      return { opacity: 0, scale: 0.9 }
    case 'blur':
      return { opacity: 0, filter: 'blur(8px)', y: 12 }
    default:
      return { opacity: 0, y: 22 }
  }
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  mode = 'up',
  once = true,
}: {
  children: ReactNode
  className?: string
  delay?: number
  mode?: Mode
  once?: boolean
}) {
  const reduce = useReducedMotion()
  const variants: Variants = {
    hidden: modeHidden(mode, reduce),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0.01 : 0.55, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className = '',
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduce ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  mode = 'up',
}: {
  children: ReactNode
  className?: string
  mode?: Mode
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={{
        hidden: modeHidden(mode, reduce),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration: reduce ? 0.01 : 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
