import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_OFFSET = 92

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return false
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  return true
}

export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    let attempts = 0

    const tryScroll = () => {
      if (scrollToId(id) || attempts >= 12) return
      attempts += 1
      window.setTimeout(tryScroll, 50)
    }

    const timer = window.setTimeout(tryScroll, 40)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
