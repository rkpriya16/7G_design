import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight, Zap } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations'

const services = ['Banner Printing', 'Wedding Invitations', 'Birthday Cards', 'Visiting Cards', 'Flyers & Brochures', 'Photo Frames', 'Canvas Prints', 'Custom Solutions']
const quickLinks = ['About Us', 'Portfolio', 'Process', 'Testimonials', 'Contact']

export default function Footer() {
  const { ref, inView } = useScrollAnimation(0.1)

  return (
    <footer className="relative bg-background pt-24 pb-8 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="orb w-96 h-96 bg-accent top-0 left-1/4 opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
                <img src="/logo.webp" alt="7G Design Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">7G Design</span>
                <span className="block text-text-muted text-[10px] tracking-widest uppercase -mt-1">Premium Printing</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Transforming your ideas into stunning print experiences. Premium quality, creative excellence, delivered on time.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/Jeeva_Daniel_7g' },
                { icon: Facebook, href: 'https://www.facebook.com/Jeeva.Daniel' },
                { icon: Youtube, href: 'https://www.youtube.com/@7G_KING' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 glass border border-border-light rounded-xl flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="line-accent" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-text-secondary hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-text-muted rounded-full group-hover:bg-accent transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="line-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-text-secondary hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="line-accent" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+91 8939 007 006', href: 'tel:+918939007006' },
                { icon: Mail, text: 'jeevadaniel007@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=jeevadaniel007@gmail.com' },
                { icon: MapPin, text: 'No.1/116, Poonthamalli High Road, Vanagaram, Chennai - 600095', href: '#contact' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 glass-amber rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={13} className="text-accent" />
                  </div>
                  <span className="text-text-secondary group-hover:text-white text-sm transition-colors duration-200 leading-relaxed">
                    {text}
                  </span>
                </a>
              ))}
            </div>
            <motion.a
              href="https://wa.me/918939007006"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex items-center gap-2 justify-center w-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm py-3 rounded-xl hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} 7G Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#" className="text-text-muted hover:text-accent text-sm transition-colors">{t}</a>
            ))}
          </div>
          <p className="text-text-muted text-sm">
            Crafted with <span className="text-accent">♥</span> for excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
