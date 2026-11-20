import { FaLinkedinIn } from 'react-icons/fa6'
import { company, navLinks, services } from '../data/content'
import { Logo } from './Logo'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--brand-teal)] text-[var(--text-on-dark)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(248,88,16,0.55),transparent)]" />

      <div className="container-nx grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr]">
        <div>
          <div className="inline-flex rounded-xl bg-[var(--background-primary)] px-2 py-1.5">
            <Logo />
          </div>
          <p className="mt-4 font-[family-name:var(--font-display)] text-sm font-bold text-[#ffb08a]">
            {company.tagline}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{company.description}</p>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
            aria-label="Nexvanta on LinkedIn"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">Navigation</h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/70 transition hover:text-[var(--brand-orange)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">Services</h3>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#service-${service.id}`}
                  className="text-sm text-white/70 transition hover:text-[var(--brand-orange)]"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-nx flex flex-col gap-1 py-4 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>© {COPYRIGHT_YEAR} Nexvanta. All rights reserved.</p>
          <p className="text-[#ffb08a]">Innovate. Automate. Elevate.</p>
        </div>
      </div>
    </footer>
  )
}
