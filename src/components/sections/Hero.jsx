import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Play, ChevronDown } from 'lucide-react'

const floatingShapes = [
  { w: 300, h: 300, top: '10%', left: '5%', delay: 0, duration: 6, color: 'from-accent/20 to-transparent' },
  { w: 200, h: 200, top: '60%', right: '5%', delay: 1, duration: 8, color: 'from-indigo-500/15 to-transparent' },
  { w: 150, h: 150, top: '30%', right: '20%', delay: 2, duration: 5, color: 'from-accent/10 to-transparent' },
  { w: 100, h: 100, top: '70%', left: '15%', delay: 0.5, duration: 7, color: 'from-indigo-400/10 to-transparent' },
]

const words = ['Banners', 'Invitations', 'Business Cards', 'Flyers', 'Canvas Prints']

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const handleScrollDown = () => {
    document.querySelector('#trust')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-background" />
        {/* Radial gradient accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-dot-bg opacity-30" />
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-radial ${shape.color} pointer-events-none`}
          style={{
            width: shape.w,
            height: shape.h,
            top: shape.top,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating design elements */}
      <motion.div
        className="absolute top-[15%] right-[8%] hidden xl:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-20 h-20 glass border border-accent/20 rounded-2xl flex items-center justify-center shadow-glow">
          <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 48 48">
            <rect x="4" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="rgba(245,158,11,0.15)"/>
            <rect x="26" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="rgba(245,158,11,0.1)"/>
            <rect x="4" y="26" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2.5" fill="rgba(245,158,11,0.1)"/>
            <circle cx="35" cy="35" r="9" stroke="currentColor" strokeWidth="2.5" fill="rgba(245,158,11,0.15)"/>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[6%] hidden xl:block"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-16 h-16 glass border border-indigo-500/20 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 32 32">
            <path d="M16 2L30 28H2L16 2Z" stroke="currentColor" strokeWidth="2" fill="rgba(99,102,241,0.15)"/>
          </svg>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[35%] left-[3%] hidden xl:block"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-12 h-12 glass border border-accent/15 rounded-full flex items-center justify-center">
          <Sparkles size={18} className="text-accent" />
        </div>
      </motion.div>

      {/* Main content — split layout */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="inline-flex items-center gap-2 glass border border-accent/20 rounded-full px-5 py-2 mb-10"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-accent rounded-full"
              />
              <span className="text-accent text-sm font-semibold tracking-wide">Premium Print Studio</span>
              <span className="text-text-muted text-xs">— Vanagaram, Chennai</span>
            </motion.div>

            {/* Main headline */}
            <div className="mb-6 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                <span className="text-white">Printing</span>
                <br />
                <span className="gradient-text">Ideas</span>
                <span className="text-white"> Into</span>
                <br />
                <span className="text-white">Reality</span>
              </motion.h1>
            </div>

            {/* Dynamic word */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8"
            >
              <span className="text-text-secondary text-lg md:text-xl font-light">Specializing in</span>
              <div className="relative overflow-hidden h-7 w-44">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute inset-0 text-accent font-semibold text-lg md:text-xl"
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-12 mx-auto lg:mx-0"
            >
              Premium printing solutions crafted for businesses, events, and special occasions.
              Quality that speaks before you do.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="https://wa.me/918939007006?text=Hi!%20I%20want%20to%20get%20a%20quote%20for%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-accent text-background font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group glass border border-border-light hover:border-accent/30 text-white font-semibold px-8 py-4 rounded-full text-base flex items-center gap-3 transition-all duration-300"
              >
                <div className="w-7 h-7 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Play size={12} className="text-accent fill-accent ml-0.5" />
                </div>
                View Our Work
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8"
            >
              {[
                { label: '1000+', sublabel: 'Projects' },
                { label: '500+', sublabel: 'Clients' },
                { label: '5+ Yrs', sublabel: 'Experience' },
                { label: '24hr', sublabel: 'Delivery' },
              ].map(({ label, sublabel }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.07 }}
                  className="text-center"
                >
                  <div className="text-white font-bold text-lg md:text-xl">{label}</div>
                  <div className="text-text-muted text-xs tracking-widest uppercase">{sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Studio photo card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden border border-accent/20 shadow-2xl">
                <img
                  src="/studio.jpg"
                  alt="7G Design Studio — Vanagaram, Chennai"
                  className="w-full h-[420px] lg:h-[500px] object-cover"
                />
                {/* Subtle bottom gradient so the badge below reads clean */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Studio label on image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="glass border border-white/10 rounded-2xl px-4 py-2">
                    <p className="text-white font-semibold text-sm">Our Studio</p>
                    <p className="text-text-muted text-xs">Vanagaram, Chennai</p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="glass border border-accent/30 rounded-2xl px-4 py-2 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-white text-xs font-medium">Open Now</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating stat card — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass border border-accent/20 rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-accent font-bold text-xl">4.9 ★</p>
                <p className="text-text-muted text-xs">Google Rating</p>
              </motion.div>

              {/* Floating stat card — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass border border-border-light rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-white font-bold text-xl">1000+</p>
                <p className="text-text-muted text-xs">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border border-text-muted group-hover:border-accent rounded-full flex justify-center pt-2 transition-colors"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
