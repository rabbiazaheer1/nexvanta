import logoAsset from '../assets/nexvanta-logo.png'

type LogoProps = {
  className?: string
  markOnly?: boolean
}

export function Logo({ className = '', markOnly = false }: LogoProps) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center ${className}`}
      aria-label="Nexvanta home"
    >
      <img
        src={logoAsset}
        alt="Nexvanta"
        width={markOnly ? 40 : 168}
        height={markOnly ? 40 : 40}
        className={
          markOnly
            ? 'h-10 w-10 object-contain object-left'
            : 'h-8 w-auto max-w-[150px] object-contain object-left sm:h-9 sm:max-w-[168px]'
        }
        decoding="async"
      />
    </a>
  )
}
