import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#portfolio' },
  { label: 'Процесс', href: '#process' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-7xl">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.44, 0, 0, 1] }}
        className={`rounded-full transition-all duration-500 bg-black/70 backdrop-blur-xl border border-white/10 ${
          scrolled ? 'shadow-lg shadow-white/5' : ''
        }`}
      >
        <div className="flex h-12 md:h-14 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-2.5 group">
            <svg
              viewBox="0 0 32 32"
              className="h-6 w-6 md:h-7 md:w-7 text-white transition-transform duration-500 group-hover:rotate-90"
              fill="currentColor"
            >
              <path d="M16 2L20.5 11.5L30 16L20.5 20.5L16 30L11.5 20.5L2 16L11.5 11.5L16 2Z" />
            </svg>
            <span className="text-sm md:text-base font-semibold tracking-wide text-white">
              ASTERA
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#000000] transition-all duration-300 hover:bg-white/90 active:scale-95"
            >
              Связаться
            </a>
          </nav>

          <a
            href="#cta"
            className="md:hidden rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#000000] active:scale-95"
          >
            Связаться
          </a>
        </div>
      </motion.div>
    </header>
  )
}
