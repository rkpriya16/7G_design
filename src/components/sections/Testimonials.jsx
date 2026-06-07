import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Chandrasekaran',
    role: 'Wedding Planner',
    company: 'Bliss Events, Chennai',
    avatar: 'PC',
    rating: 5,
    text: 'Our clients are speechless when they see the wedding invitations from 7G Design. The quality and elegance is simply unmatched. We now exclusively use 7G for all our premium wedding events.',
    project: 'Wedding Invitation Suite',
    gradient: 'from-pink-500/20 to-rose-500/10',
    color: 'text-pink-400',
  },
  {
    id: 2,
    name: 'Suresh Babu',
    role: 'Managing Director',
    company: 'Sri Mahalakshmi Traders',
    avatar: 'SB',
    rating: 5,
    text: 'Our store banners and promotional flyers completely transformed our business visibility. Sales increased 40% after our rebrand with 7G Design. Professional, fast, and incredibly detailed.',
    project: 'Brand Refresh & Banners',
    gradient: 'from-blue-500/20 to-indigo-500/10',
    color: 'text-blue-400',
  },
  {
    id: 3,
    name: 'Dr. Kavitha Ramesh',
    role: 'Principal',
    company: 'Bright Future Academy',
    avatar: 'KR',
    rating: 5,
    text: 'Every year we order our annual day materials from 7G Design. The team understands exactly what an educational institution needs — professional, colorful, and within budget. Exceptional work!',
    project: 'Annual Day Materials',
    gradient: 'from-green-500/20 to-emerald-500/10',
    color: 'text-emerald-400',
  },
  {
    id: 4,
    name: 'Arjun Krishnamurthy',
    role: 'Co-Founder',
    company: 'TechLaunch Studio',
    avatar: 'AK',
    rating: 5,
    text: 'The business cards they designed for our startup launch were a massive hit. Multiple clients specifically commented on the quality. We\'ve been using 7G for all our corporate materials since.',
    project: 'Corporate Identity Print Kit',
    gradient: 'from-violet-500/20 to-purple-500/10',
    color: 'text-violet-400',
  },
  {
    id: 5,
    name: 'Meena Sundareswaran',
    role: 'Owner',
    company: 'Café Aromas, Coimbatore',
    avatar: 'MS',
    rating: 5,
    text: 'Our café menu boards, loyalty cards, and promotional banners are all from 7G. The premium look elevated our entire customer experience. Worth every rupee — our customers love it.',
    project: 'Café Branding Suite',
    gradient: 'from-orange-500/20 to-amber-500/10',
    color: 'text-amber-400',
  },
  {
    id: 6,
    name: 'Vikram Nair',
    role: 'Event Organizer',
    company: 'Grand Celebrations, Madurai',
    avatar: 'VN',
    rating: 5,
    text: 'I\'ve worked with printing vendors all over TN. 7G Design is in a different league. Their turnaround time is incredible and the quality never drops. For corporate events, they are our go-to partner.',
    project: 'Corporate Gala Materials',
    gradient: 'from-teal-500/20 to-cyan-500/10',
    color: 'text-teal-400',
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const total = testimonials.length

  const paginate = (dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + total) % total)
  }

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-dot-bg opacity-10" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Star size={14} />
            Client Stories
          </span>
          <h2 className="section-title text-white mb-6">
            Trusted by the{' '}
            <span className="gradient-text">Best Businesses</span>
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className={`glass border border-border-light rounded-3xl p-8 md:p-12 bg-gradient-to-br ${t.gradient} premium-glow`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Avatar side */}
                <div className="flex flex-col items-center md:items-start gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-br ${t.gradient} border border-border-light rounded-2xl flex items-center justify-center`}>
                      <span className={`text-2xl font-black ${t.color}`}>{t.avatar}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 fill-background" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-white text-lg">{t.name}</div>
                    <div className={`text-sm font-medium ${t.color}`}>{t.role}</div>
                    <div className="text-text-muted text-xs mt-0.5">{t.company}</div>
                  </div>

                  <StarRating count={t.rating} />

                  <div className="px-3 py-1.5 glass-amber border border-accent/20 rounded-lg">
                    <span className="text-xs text-accent font-medium">Project: </span>
                    <span className="text-xs text-text-secondary">{t.project}</span>
                  </div>
                </div>

                {/* Quote content */}
                <div className="md:col-span-2">
                  <Quote size={40} className="text-accent/20 mb-4" />
                  <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed italic">
                    "{t.text}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation + dots */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 glass border border-border-light rounded-full flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all duration-200 text-text-secondary"
          >
            <ChevronLeft size={18} />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-border-light'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 glass border border-border-light rounded-full flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all duration-200 text-text-secondary"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>

        {/* Mini cards row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10"
        >
          {testimonials.map((t2, i) => (
            <motion.button
              key={t2.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              whileHover={{ y: -4 }}
              className={`glass border rounded-xl p-3 text-center transition-all duration-300 ${
                i === current ? 'border-accent/40 shadow-glow' : 'border-border-light'
              }`}
            >
              <div className={`text-xs font-bold ${t2.color} mb-0.5`}>{t2.avatar}</div>
              <div className="text-[10px] text-text-muted truncate">{t2.name.split(' ')[0]}</div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
