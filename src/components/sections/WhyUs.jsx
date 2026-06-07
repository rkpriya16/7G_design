import { motion } from 'framer-motion'
import { Shield, Palette, Zap, HeadphonesIcon, Star, TrendingUp } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../utils/animations'

const pillars = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description: 'We use premium materials and state-of-the-art printing technology. Every print goes through a 12-point quality check before delivery.',
    metric: '99.8%', metricLabel: 'Quality Rate',
    color: 'text-accent', bg: 'from-accent/20 to-accent/5', border: 'border-accent/20',
  },
  {
    icon: Palette,
    title: 'Creative Excellence',
    description: 'Our in-house design team brings fresh ideas to every project. We don\'t just print — we create visual experiences that connect.',
    metric: '500+', metricLabel: 'Unique Designs',
    color: 'text-indigo-400', bg: 'from-indigo-500/20 to-indigo-500/5', border: 'border-indigo-500/20',
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: 'Need it fast? Our express production line handles urgent orders without compromising quality. Same-day delivery available.',
    metric: '24hr', metricLabel: 'Express Turnaround',
    color: 'text-emerald-400', bg: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/20',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'From first consultation to final delivery, your dedicated account manager ensures everything is perfect. We\'re always a message away.',
    metric: '24/7', metricLabel: 'Support Available',
    color: 'text-rose-400', bg: 'from-rose-500/20 to-rose-500/5', border: 'border-rose-500/20',
  },
]

const stats = [
  { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'text-yellow-400' },
  { icon: TrendingUp, value: '98%', label: 'Repeat Clients', color: 'text-emerald-400' },
  { icon: Shield, value: '100%', label: 'Satisfaction Guaranteed', color: 'text-blue-400' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="orb w-[500px] h-[500px] bg-accent top-1/4 right-0 translate-x-1/2 opacity-5" />
        <div className="orb w-[400px] h-[400px] bg-indigo-500 bottom-0 left-0 -translate-x-1/2 opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label">
            <Star size={14} />
            Why 7G Design
          </span>
          <h2 className="section-title text-white mb-6">
            The Standard Others{' '}
            <span className="gradient-text">Aspire To</span>
          </h2>
          <p className="section-subtitle mx-auto text-text-secondary">
            We don't just deliver prints — we deliver confidence. Every interaction with 7G Design is built on trust, craft, and care.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`group relative glass border ${pillar.border} rounded-2xl p-8 overflow-hidden premium-glow`}
            >
              {/* Background hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative flex gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${pillar.bg} border ${pillar.border} rounded-2xl flex items-center justify-center`}>
                  <pillar.icon size={24} className={pillar.color} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold text-xl leading-tight">{pillar.title}</h3>
                    <div className="text-right ml-4">
                      <div className={`text-2xl font-black ${pillar.color}`}>{pillar.metric}</div>
                      <div className="text-text-muted text-xs">{pillar.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] shimmer-line opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass border border-border-light rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <div key={i} className="flex items-center gap-5 text-center md:text-left md:justify-start justify-center">
                <div className={`w-12 h-12 glass-amber rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <div className={`text-3xl font-black ${color}`}>{value}</div>
                  <div className="text-text-secondary text-sm">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-block glass-amber border border-accent/20 rounded-2xl px-8 py-6 max-w-2xl">
            <div className="text-accent text-4xl mb-4">"</div>
            <p className="text-white text-lg font-medium italic leading-relaxed">
              7G Design transformed our brand's visual presence. The quality of their work is leagues ahead of anyone else we've worked with.
            </p>
            <div className="mt-4 text-text-secondary text-sm">
              — Rajesh K., <span className="text-accent">CEO, TechSpace Coimbatore</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
