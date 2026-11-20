import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/content'
import { Logo } from './Logo'

function toHash(href: string) {
  if (!href.includes('#')) return href
  return `#${href.split('#')[1]}`
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const reduce = useReducedMotion()
  const servicesId = useId()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const onServicePage = location.pathname.startsWith('/services/')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      if (onServicePage) {
        setActive('services')
        return
      }
      const ids = ['home', 'services', 'about', 'why-nexvanta', 'blog', 'contact', 'technology']
      let current = '#home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = `#${id}`
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onServicePage])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  const isActive = (href: string) => {
    if (href === '/#services' || href.startsWith('/services/')) {
      return active === '#services' || active === 'services'
    }
    return active === toHash(href)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div
        className={`nav-shell container-nx flex h-[3.6rem] items-center justify-between gap-3 rounded-[1.35rem] px-3 transition-all duration-300 md:h-[3.9rem] md:px-4 ${
          scrolled ? 'shadow-[0_14px_36px_rgba(24,52,64,0.12)]' : ''
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            if ('children' in link && link.children) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className={`relative inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[0.82rem] font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'text-[var(--brand-teal)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--brand-teal)]'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-controls={servicesId}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-orange)]"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id={servicesId}
                        role="menu"
                        initial={{ opacity: 0, y: reduce ? 0 : 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: reduce ? 0 : 4, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-white/95 p-1.5 shadow-[0_18px_40px_rgba(24,52,64,0.12)] backdrop-blur-xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            role="menuitem"
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[rgba(0,72,88,0.06)] hover:text-[var(--brand-teal)]"
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative rounded-full px-3 py-1.5 text-[0.82rem] font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'text-[var(--brand-teal)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--brand-teal)]'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-orange)]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/#contact" className="btn-primary !px-4 !py-2 text-[0.8rem]">
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white/80 text-[var(--brand-teal)] lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0.01 : 0.22 }}
            className="nav-shell container-nx mt-2 overflow-hidden rounded-[1.25rem] lg:hidden"
          >
            <nav className="flex flex-col gap-0.5 p-3" aria-label="Mobile">
              {navLinks.map((link) => {
                if ('children' in link && link.children) {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[var(--brand-teal)]"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-[var(--text-secondary)]"
                                onClick={closeMobile}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--brand-teal)]"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link to="/#contact" className="btn-primary mt-2 w-full text-sm" onClick={closeMobile}>
                Start Free Trial
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
