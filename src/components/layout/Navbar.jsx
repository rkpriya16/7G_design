import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastY = { current: 0 }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
    setHidden(latest > lastY.current && latest > 200)
    lastY.current = latest
  })

  const handleNavClick = (href) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass border border-border-light shadow-premium px-6 py-3'
              : 'bg-transparent px-0 py-0'
          }`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden group-hover:shadow-glow transition-shadow duration-300 flex-shrink-0">
                <img src="/logo.webp" alt="7G Design Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">7G Design</span>
                <span className="block text-text-muted text-[10px] tracking-widest uppercase -mt-1">Premium Printing</span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.2 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="relative px-4 py-2 text-text-secondary hover:text-white text-sm font-medium transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="https://wa.me/918939007006?text=Hi!%20I%27m%20interested%20in%20your%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-background font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-glow"
              >
                <Zap size={14} className="fill-current" />
                Get Quote
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-white glass border border-border-light"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="fixed top-20 left-4 right-4 z-[99] glass border border-border-light rounded-2xl overflow-hidden shadow-premium"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="flex items-center gap-3 py-3 px-4 text-text-secondary hover:text-white hover:bg-surface rounded-xl transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="https://wa.me/918939007006?text=Hi!%20I%27m%20interested%20in%20your%20printing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-background font-semibold py-3 rounded-xl hover:bg-accent-light transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Zap size={16} className="fill-current" />
                  Get a Quote on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
