import { motion } from 'framer-motion'
import { ArrowRight, Zap, Clock, Shield } from 'lucide-react'

const features = [
  { icon: Zap, text: 'Instant Quote in 5 Minutes' },
  { icon: Clock, text: '24-Hour Turnaround Available' },
  { icon: Shield, text: 'Quality Guaranteed' },
]

export default function WhatsAppCTA() {
  const whatsappNumber = '918939007006'
  const message = encodeURIComponent("Hi! 👋 I found 7G Design online and I'm interested in your printing services. Can you help me?")

  return (
    <section className="relative py-28 overflow-hidden bg-primary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary to-background" />

      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-[#25D366] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" />
        <div className="orb w-80 h-80 bg-accent top-0 right-[10%] opacity-[0.06]" />
        <div className="orb w-60 h-60 bg-indigo-500 bottom-0 left-[10%] opacity-[0.05]" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 grid-dot-bg opacity-15" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 via-surface to-primary" />
          <div className="absolute inset-0 border border-[#25D366]/20 rounded-3xl" />

          {/* Shimmer top border */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#25D366]/50 to-transparent" />

          {/* Floating WhatsApp icons */}
          {[
            { size: 120, top: '-5%', right: '-3%', opacity: 0.06, delay: 0 },
            { size: 60, bottom: '10%', left: '2%', opacity: 0.04, delay: 1 },
            { size: 40, top: '20%', left: '8%', opacity: 0.05, delay: 2 },
          ].map((el, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{ top: el.top, right: el.right, bottom: el.bottom, left: el.left, opacity: el.opacity }}
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6 + i, delay: el.delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.div>
          ))}

          {/* Main content */}
          <div className="relative p-10 md:p-16 text-center">
            {/* WhatsApp icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
              className="inline-flex w-20 h-20 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl items-center justify-center mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-10 h-10 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Get Your Print Quote{' '}
              <span className="text-[#25D366]">Instantly</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Send us a quick WhatsApp message and receive a personalized quote within minutes. No forms, no waiting — just results.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {features.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 glass border border-[#25D366]/20 px-4 py-2 rounded-full">
                  <Icon size={14} className="text-[#25D366]" />
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Main CTA */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)]"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-text-muted text-sm mt-6"
            >
              Typically responds within{' '}
              <span className="text-[#25D366] font-semibold">5 minutes</span>
              {' '}during business hours
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp button (always visible) */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)] transition-shadow duration-300"
        title="Chat on WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.div>
        {/* Ping animation */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-ping" />
      </motion.a>
    </section>
  )
}
