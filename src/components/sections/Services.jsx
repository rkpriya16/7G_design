import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Layers } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../utils/animations'

const services = [
  {
    id: 1,
    title: 'Banner Printing',
    description: 'Large-format banners that command attention. Perfect for events, storefronts, and promotions with vibrant, weather-resistant prints.',
    icon: '🎌',
    image: '/service-banner.jpg',
    gradient: 'from-orange-500/30 via-accent/20 to-transparent',
    border: 'border-orange-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(249,115,22,0.2)]',
    tags: ['Vinyl Banners', 'Flex Boards', 'Roll-ups', 'Event Banners'],
    accent: '#F97316',
  },
  {
    id: 2,
    title: 'Wedding Invitations',
    description: 'Exquisite wedding cards that set the tone for your perfect day. From classic elegance to contemporary designs.',
    icon: '💍',
    image: '/service-wedding-inv.jpg',
    gradient: 'from-pink-500/30 via-rose-400/20 to-transparent',
    border: 'border-pink-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(236,72,153,0.2)]',
    tags: ['Luxury Cards', 'Digital Prints', 'Foil Finishing', 'Custom Design'],
    accent: '#EC4899',
  },
  {
    id: 3,
    title: 'Birthday Invitations',
    description: 'Vibrant, fun birthday invitation cards for all ages. From kids\' parties to milestone celebrations.',
    icon: '🎂',
    image: '/service-birthday-inv.jpg',
    gradient: 'from-yellow-500/30 via-amber-400/20 to-transparent',
    border: 'border-yellow-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(234,179,8,0.2)]',
    tags: ['Kids Birthday', 'Adult Themes', 'Custom Sizes', 'Photo Cards'],
    accent: '#EAB308',
  },
  {
    id: 4,
    title: 'Visiting Cards',
    description: 'Make your first impression unforgettable. Premium business cards with modern finishes that open doors.',
    icon: '💼',
    image: '/service-visiting-cards.jpg',
    gradient: 'from-blue-500/30 via-indigo-400/20 to-transparent',
    border: 'border-blue-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]',
    tags: ['Matte & Gloss', 'Spot UV', 'Embossed', 'Metal Cards'],
    accent: '#3B82F6',
  },
  {
    id: 5,
    title: 'Flyers & Brochures',
    description: 'Compelling marketing materials that tell your brand story. Designed to capture attention and drive action.',
    icon: '📄',
    image: '/service-flyers.jpg',
    gradient: 'from-emerald-500/30 via-green-400/20 to-transparent',
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]',
    tags: ['A4 / A5 Flyers', 'Bi-fold', 'Tri-fold', 'Booklets'],
    accent: '#10B981',
  },
  {
    id: 6,
    title: 'Photo Frames',
    description: 'Beautifully crafted photo frames that preserve your most cherished memories with premium print quality.',
    icon: '🖼️',
    image: '/service-frames.jpg',
    gradient: 'from-purple-500/30 via-violet-400/20 to-transparent',
    border: 'border-purple-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)]',
    tags: ['Custom Sizes', 'Wooden Frames', 'Acrylic', 'Collages'],
    accent: '#8B5CF6',
  },
  {
    id: 7,
    title: 'Canvas & Painting Prints',
    description: 'Transform your photos and artwork into stunning canvas prints. Premium quality that transforms any space.',
    icon: '🎨',
    image: '/service-canvas.jpg',
    gradient: 'from-teal-500/30 via-cyan-400/20 to-transparent',
    border: 'border-teal-500/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(20,184,166,0.2)]',
    tags: ['Gallery Wrap', 'Photo Canvas', 'Art Reproductions', 'Custom Art'],
    accent: '#14B8A6',
  },
  {
    id: 8,
    title: 'Custom Solutions',
    description: 'Have a unique requirement? We bring your creative vision to life with fully customized printing solutions.',
    icon: '✨',
    image: '/service-custom.jpg',
    gradient: 'from-accent/30 via-amber-400/20 to-transparent',
    border: 'border-accent/20',
    glow: 'hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)]',
    tags: ['Branded Merchandise', 'Packaging', 'Labels', 'Apparel Printing'],
    accent: '#F59E0B',
  },
]

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 grid-dot-bg opacity-20" />
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
            <Layers size={14} />
            What We Do
          </span>
          <h2 className="section-title text-white mb-6">
            Services Crafted for{' '}
            <span className="gradient-text">Perfection</span>
          </h2>
          <p className="section-subtitle mx-auto text-text-secondary">
            Every print project is handled with precision, creativity, and an obsession for quality that sets us apart.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`relative glass border ${service.border} rounded-2xl overflow-hidden group cursor-pointer ${service.glow} transition-shadow duration-500`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

              {/* Border gradient effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${service.accent}15, transparent)`, }}
              />

              {/* Photo */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Icon badge over photo */}
                <div className="absolute top-3 right-3 text-2xl bg-black/40 backdrop-blur-sm rounded-xl px-2 py-1">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5">
                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-muted border border-border-light px-2 py-0.5 rounded-full group-hover:border-current group-hover:text-white/60 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/918939007006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0"
                  style={{ color: service.accent }}
                >
                  Get Quote
                  <ArrowUpRight size={14} />
                </motion.a>
              </div>

              {/* Shimmer bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-text-secondary mb-6">
            Don't see what you need?{' '}
            <span className="text-white font-medium">We handle every custom requirement.</span>
          </p>
          <motion.a
            href="https://wa.me/918939007006?text=Hi!%20I%20have%20a%20custom%20printing%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-primary"
          >
            Discuss Your Project
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
