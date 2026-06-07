import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { staggerContainer, staggerItem } from '../../utils/animations'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 8939007006',
    href: 'tel:+918939007006',
    color: 'text-emerald-400',
    bg: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'jeevadaniel007@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=jeevadaniel007@gmail.com',
    color: 'text-blue-400',
    bg: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'No.1/116, Poonthamalli High Road, Sivabootham, Vanagaram, Chennai - 600095',
    href: '#',
    color: 'text-rose-400',
    bg: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/20',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Sat: 9AM – 7PM',
    href: '#',
    color: 'text-accent',
    bg: 'from-accent/20 to-accent/5',
    border: 'border-accent/20',
  },
]

const services = ['Banner Printing', 'Wedding Invitations', 'Birthday Cards', 'Visiting Cards', 'Flyers & Brochures', 'Photo Frames', 'Canvas Prints', 'Custom Solution']

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', service: '', message: '', budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((r) => setTimeout(r, 1200))

    const waMsg = `Hi! I'm ${formState.name}.\nService: ${formState.service}\nPhone: ${formState.phone}\nBudget: ${formState.budget}\n\nMessage: ${formState.message}`
    const waUrl = `https://wa.me/918939007006?text=${encodeURIComponent(waMsg)}`
    window.open(waUrl, '_blank')

    setIsSubmitting(false)
    setSubmitted(true)
    toast.success('Redirecting to WhatsApp!', {
      style: { background: '#0F172A', color: '#fff', border: '1px solid #1E293B' },
      icon: '✅',
    })
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 grid-dot-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border-light to-transparent" />

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
            <MessageCircle size={14} />
            Get In Touch
          </span>
          <h2 className="section-title text-white mb-6">
            Let's Create Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle mx-auto text-text-secondary">
            Have a project in mind? We'd love to hear about it. Fill the form or reach us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info sidebar */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ x: 6, scale: 1.01 }}
                className={`flex items-center gap-4 glass border ${item.border} rounded-2xl p-5 group hover:shadow-card transition-all duration-300 cursor-pointer`}
                onClick={() => { if (item.href !== '#') window.open(item.href, '_blank') }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.bg} border ${item.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <div className="text-text-muted text-xs uppercase tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={staggerItem} className="glass border border-border-light rounded-2xl p-5">
              <div className="text-text-muted text-xs uppercase tracking-widest mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/Jeeva_Daniel_7g', color: 'text-pink-400 hover:text-pink-300' },
                  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/Jeeva.Daniel', color: 'text-blue-400 hover:text-blue-300' },
                  {
                    icon: () => (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    ),
                    label: 'WhatsApp', href: 'https://wa.me/8939007006', color: 'text-[#25D366] hover:text-[#1ebe5a]',
                  },
                ].map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`w-10 h-10 glass border border-border-light rounded-xl flex items-center justify-center ${color} hover:border-current transition-all duration-200`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Google Maps embed */}
            <motion.div
              variants={staggerItem}
              className="glass border border-border-light rounded-2xl overflow-hidden h-52 relative"
            >
              <iframe
                title="7G Design Location"
                src="https://maps.google.com/maps?q=No+1+116+Poonthamalli+High+Road+Vanagaram+Chennai+600095&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=No.1%2F116+Poonthamalli+High+Road+Vanagaram+Chennai+600095"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 glass border border-accent/30 text-accent text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-accent/10 transition-colors"
              >
                ↗ Open in Maps
              </a>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-border-light rounded-3xl p-8 md:p-10 premium-glow">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={36} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="text-white font-bold text-2xl mb-3">Message Sent!</h3>
                  <p className="text-text-secondary mb-8">We've received your inquiry and will respond shortly via WhatsApp.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Rajesh Kumar"
                        className="w-full bg-surface border border-border-light rounded-xl px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-surface border border-border-light rounded-xl px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-text-muted text-xs uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-surface border border-border-light rounded-xl px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service */}
                    <div className="space-y-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Service Needed *</label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface border border-border-light rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-surface">{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <label className="text-text-muted text-xs uppercase tracking-widest">Budget Range</label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full bg-surface border border-border-light rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 appearance-none"
                      >
                        <option value="">Select budget</option>
                        <option value="Under ₹1,000">Under ₹1,000</option>
                        <option value="₹1,000 – ₹5,000">₹1,000 – ₹5,000</option>
                        <option value="₹5,000 – ₹20,000">₹5,000 – ₹20,000</option>
                        <option value="₹20,000+">₹20,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-text-muted text-xs uppercase tracking-widest">Project Details *</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project — size, quantity, deadline, special requirements..."
                      className="w-full bg-surface border border-border-light rounded-xl px-4 py-3 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent hover:bg-accent-light disabled:opacity-60 text-background font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-glow text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <p className="text-text-muted text-xs text-center">
                    By submitting, you agree to be contacted via WhatsApp for your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
