import { BrainCircuit, Code2, Smartphone, TrendingUp, type LucideIcon } from 'lucide-react'

const map = {
  cpu: BrainCircuit,
  code: Code2,
  smartphone: Smartphone,
  chart: TrendingUp,
} as const

type IconKey = keyof typeof map

export function ServiceIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: IconKey
  className?: string
}) {
  const Icon: LucideIcon = map[name]
  return <Icon className={className} strokeWidth={1.75} aria-hidden="true" />
}
