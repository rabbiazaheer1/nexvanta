import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'split'
}) {
  if (align === 'split') {
    return (
      <div className="mb-5 flex flex-col gap-2 md:mb-6 md:flex-row md:items-end md:justify-between md:gap-6">
        <Reveal mode="left">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title max-w-xl">{title}</h2>
        </Reveal>
        {lead && (
          <Reveal mode="right" delay={0.06}>
            <div className="section-lead md:max-w-sm md:text-right">{lead}</div>
          </Reveal>
        )}
      </div>
    )
  }

  return (
    <Reveal mode="left" className="mb-5 md:mb-6">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  )
}
