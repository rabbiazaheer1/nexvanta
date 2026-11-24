import { Clock3, Mail, MapPin } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { company, footerNavLinks, services } from '../data/content'
import { Logo } from './Logo'

const COPYRIGHT_YEAR = 2026

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--background-deep)] text-[var(--text-on-dark)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(248,88,16,0.6),transparent)]" />

      <div className="container-nx grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_0.9fr_1.05fr] lg:gap-8 lg:py-12">
        <div>
          <div className="inline-flex">
            <Logo className="brightness-0 invert" />
          </div>
          <p className="mt-4 font-[family-name:var(--font-display)] text-sm font-bold text-[#ffb08a]">
            {company.tagline}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{company.description}</p>
          <div className="mt-4 flex gap-2">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
              aria-label="Nexvanta on LinkedIn"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href={company.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
              aria-label="Nexvanta on Facebook"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">Explore</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {footerNavLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="text-sm text-white/75 transition hover:text-[var(--brand-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">Services</h3>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-sm text-white/70 transition hover:text-[var(--brand-orange)]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffb08a]" />
              <span>
                {company.location}
                <br />
                {company.country}
              </span>
            </li>
            <li>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 transition hover:text-[var(--brand-orange)]"
              >
                <FaWhatsapp className="h-4 w-4 shrink-0 text-[#25D366]" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2.5 transition hover:text-[var(--brand-orange)]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#ffb08a]" />
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock3 className="h-4 w-4 shrink-0 text-[#ffb08a]" />
              {company.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-nx flex flex-col gap-1 py-4 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>© {COPYRIGHT_YEAR} Nexvanta. All rights reserved.</p>
          <p className="text-[#ffb08a]">London · United Kingdom</p>
        </div>
      </div>
    </footer>
  )
}
