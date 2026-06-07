import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { Award, Users, Clock, Zap } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../utils/animations'

const metrics = [
  {
    icon: Award,
    value: 1000,
    suffix: '+',
    label: 'Projects Completed',
    sublabel: 'From banners to canvas — flawlessly executed',
    color: 'text-accent',
    bg: 'from-accent/20 to-accent/5',
    border: 'border-accent/20',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    sublabel: 'Businesses and individuals who trust us',
    color: 'text-indigo-400',
    bg: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/20',
  },
  {
    icon: Clock,
    value: 5,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Crafting premium print experiences',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: Zap,
    value: 24,
    suffix: 'hr',
    label: 'Delivery Support',
    sublabel: 'Fast turnaround for urgent orders',
    color: 'text-rose-400',
    bg: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/20',
  },
]

export default function TrustMetrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="trust" className="relative py-24 overflow-hidden bg-background">
      {/* Separator line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-light to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Award size={14} />
            Our Track Record
          </span>
          <h2 className="section-title text-white">
            Numbers That Speak{' '}
            <span className="gradient-text">For Themselves</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map(({ icon: Icon, value, suffix, label, sublabel, color, bg, border }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`relative glass border ${border} rounded-2xl p-8 overflow-hidden group premium-glow`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-12 h-12 bg-gradient-to-br ${bg} border ${border} rounded-xl flex items-center justify-center mb-6`}>
                <Icon size={22} className={color} />
              </div>

              {/* Counter */}
              <div className="relative">
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-black ${color} leading-none tracking-tight`}>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={value}
                        duration={2.5}
                        delay={i * 0.15}
                        separator=","
                        useEasing
                        easingFn={(t, b, c, d) => c * (1 - Math.pow(2, -10 * t / d)) + b}
                      />
                    ) : '0'}
                  </span>
                  <span className={`text-3xl font-bold ${color} mb-1`}>{suffix}</span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-1">{label}</h3>
                <p className="text-text-muted text-sm leading-snug">{sublabel}</p>
              </div>

              {/* Bottom shimmer on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] shimmer-line opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary">
            Trusted by businesses across Tamil Nadu •{' '}
            <span className="text-accent font-semibold">ISO Quality Standards</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
