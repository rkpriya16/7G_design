import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Grid, Eye } from 'lucide-react'

const categories = ['All', 'Invitations', 'Banners', 'Business Cards', 'Flyers', 'Photo Frames']

const portfolioItems = [
  {
    id: 1, category: 'Invitations', title: 'Wedding Invitation Card',
    description: 'Custom-designed wedding invite with vibrant print quality',
    image: '/portfolio-1.jpg', accent: '#F43F5E', tag: 'Wedding',
  },
  {
    id: 2, category: 'Banners', title: 'Outdoor Billboard Banner',
    description: 'Large-format outdoor flex banner installed and ready',
    image: '/portfolio-2.jpg', accent: '#3B82F6', tag: 'Outdoor',
  },
  {
    id: 3, category: 'Business Cards', title: 'Premium Visiting Card',
    description: 'Full-colour business card with gloss UV finish',
    image: '/portfolio-3.jpg', accent: '#F59E0B', tag: 'Corporate',
  },
  {
    id: 4, category: 'Flyers', title: 'Bulk Flyer Print',
    description: 'High-volume flyer batch with sharp colour accuracy',
    image: '/portfolio-4.jpg', accent: '#10B981', tag: 'Bulk Print',
  },
  {
    id: 5, category: 'Invitations', title: 'Colorful Birthday Card',
    description: 'Vibrant rainbow-themed birthday invitation card',
    image: '/portfolio-5.jpg', accent: '#EAB308', tag: 'Birthday',
  },
  {
    id: 6, category: 'Photo Frames', title: 'Premium Kids Portrait',
    description: 'Artistic framed print with custom background editing',
    image: '/portfolio-6.jpg', accent: '#14B8A6', tag: 'Portrait',
  },
  {
    id: 7, category: 'Banners', title: 'Shop Frontage Banner',
    description: 'Illuminated banner board installed at business frontage',
    image: '/portfolio-7.jpg', accent: '#F97316', tag: 'Retail',
  },
  {
    id: 8, category: 'Business Cards', title: 'Luxury Business Cards',
    description: 'Premium business cards with metallic gold finish',
    image: '/portfolio-8.jpg', accent: '#6366F1', tag: 'Luxury',
  },
  {
    id: 9, category: 'Flyers', title: 'Greeting Card Collection',
    description: 'Multi-design greeting cards printed in bulk batches',
    image: '/portfolio-9.jpg', accent: '#0EA5E9', tag: 'Greeting Cards',
  },
  {
    id: 10, category: 'Photo Frames', title: 'Oil Painting Canvas',
    description: 'Photo-realistic oil painting style canvas with gold frame',
    image: '/portfolio-10.jpg', accent: '#8B5CF6', tag: 'Canvas Art',
  },
  {
    id: 11, category: 'Invitations', title: 'Manjal Ceremony Invite',
    description: 'Traditional Tamil ceremony invitation with artistic design',
    image: '/portfolio-11.jpg', accent: '#EC4899', tag: 'Ceremony',
  },
  {
    id: 12, category: 'Banners', title: 'Round Sticker Prints',
    description: 'Custom die-cut circular stickers in bulk with vivid print',
    image: '/portfolio-12.jpg', accent: '#EF4444', tag: 'Stickers',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary to-background" />
      <div className="absolute inset-0 grid-dot-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label">
            <Grid size={14} />
            Our Work
          </span>
          <h2 className="section-title text-white mb-6">
            A Portfolio of{' '}
            <span className="gradient-text">Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto text-text-secondary">
            Every project tells a story. Browse our curated selection of premium print work.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-background shadow-glow'
                  : 'glass border border-border-light text-text-secondary hover:text-white hover:border-accent/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.34, 1.56, 0.64, 1] }}
                onClick={() => setLightboxItem(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
              >
                {/* Real photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Base gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-center px-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <ZoomIn size={20} className="text-background" />
                    </div>
                    <h4 className="text-white font-bold text-base">{item.title}</h4>
                    <p className="text-white/70 text-xs">{item.description}</p>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${item.accent}30`, color: item.accent, border: `1px solid ${item.accent}50` }}
                  >
                    {item.tag}
                  </span>
                  <h4 className="text-white font-semibold text-sm mt-1 truncate">{item.title}</h4>
                </div>

                {/* View icon */}
                <div className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={14} className="text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://wa.me/918939007006?text=Hi!%20I%20saw%20your%20portfolio%20and%20want%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex"
          >
            Start Your Project
            <ZoomIn size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass border border-border-light rounded-3xl overflow-hidden max-w-lg w-full mx-4"
            >
              {/* Close */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 glass border border-border-light rounded-full flex items-center justify-center hover:border-accent/30 transition-colors"
              >
                <X size={16} className="text-white" />
              </button>

              {/* Image area */}
              <div className="h-72 relative overflow-hidden">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${lightboxItem.accent}30`, color: lightboxItem.accent, border: `1px solid ${lightboxItem.accent}50` }}
                >
                  {lightboxItem.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">{lightboxItem.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{lightboxItem.description}</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://wa.me/918939007006?text=Hi!%20I%20want%20a%20similar%20print%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    className="flex-1 bg-accent text-background font-semibold py-3 rounded-xl text-center text-sm hover:bg-accent-light transition-colors"
                  >
                    Order Similar
                  </motion.a>
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="px-5 glass border border-border-light text-text-secondary hover:text-white text-sm rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
