import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Palette, CheckCircle, Printer, Truck, ArrowRight } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'Consultation',
    subtitle: 'Tell Us Your Vision',
    description: 'We start with a detailed conversation about your requirements, goals, and vision. Whether it\'s via WhatsApp, call, or visit — we listen first.',
    details: ['Understand your requirements', 'Discuss budget & timeline', 'Recommend best materials', 'Free design consultation'],
    color: 'text-accent',
    bg: 'from-accent/20 to-accent/5',
    border: 'border-accent/30',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]',
    duration: 'Day 1',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Design',
    subtitle: 'Creating the Vision',
    description: 'Our creative team develops stunning designs tailored to your brand. We provide multiple concepts and revisions until you\'re completely satisfied.',
    details: ['Multiple design concepts', 'Unlimited revisions', 'Brand guideline adherence', '4-hour design turnaround'],
    color: 'text-indigo-400',
    bg: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/30',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    duration: 'Day 1-2',
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Approval',
    subtitle: 'Your Green Light',
    description: 'Review digital proofs in full detail before we go to print. We don\'t start production until you\'re 100% happy with the design.',
    details: ['Digital proof preview', 'Color accuracy check', 'Bleed & crop verification', 'Final approval sign-off'],
    color: 'text-emerald-400',
    bg: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/30',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    duration: 'Day 2',
  },
  {
    id: 4,
    icon: Printer,
    title: 'Printing',
    subtitle: 'Precision Production',
    description: 'State-of-the-art printing equipment and premium materials ensure every print meets our exacting quality standards.',
    details: ['HD printing technology', 'Premium material selection', 'Quality spot-checks', 'Color calibration'],
    color: 'text-blue-400',
    bg: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/30',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    duration: 'Day 2-3',
  },
  {
    id: 5,
    icon: Truck,
    title: 'Delivery',
    subtitle: 'Right To Your Door',
    description: 'Careful packaging and prompt delivery ensure your prints arrive in perfect condition, exactly when you need them.',
    details: ['Secure packaging', 'Tracked delivery', 'Same-city same-day option', 'Satisfaction guarantee'],
    color: 'text-rose-400',
    bg: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/30',
    glow: 'shadow-[0_0_30px_rgba(244,63,94,0.15)]',
    duration: 'Day 3-4',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(1)

  const active = steps.find(s => s.id === activeStep)

  return (
    <section id="process" className="relative py-28 overflow-hidden bg-primary">
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
          className="text-center mb-16"
        >
          <span className="section-label">
            <ArrowRight size={14} />
            How It Works
          </span>
          <h2 className="section-title text-white mb-6">
            Your Journey From Idea{' '}
            <span className="gradient-text">To Print</span>
          </h2>
          <p className="section-subtitle mx-auto text-text-secondary">
            A streamlined process designed for your convenience. Simple, transparent, and always on time.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block mb-12">
          <div className="flex items-center justify-between relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-border-light" />

            {steps.map((step, i) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center gap-3 group z-10"
              >
                {/* Step circle */}
                <motion.div
                  animate={{
                    scale: activeStep === step.id ? 1.15 : 1,
                  }}
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === step.id
                      ? `bg-gradient-to-br ${step.bg} border-2 ${step.border} ${step.glow}`
                      : 'glass border border-border-light'
                  }`}
                >
                  <step.icon
                    size={22}
                    className={activeStep === step.id ? step.color : 'text-text-muted'}
                  />
                  {/* Progress indicator */}
                  {activeStep === step.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center"
                    >
                      <span className="text-background text-[10px] font-black">{step.id}</span>
                    </motion.div>
                  )}
                </motion.div>

                <span className={`text-xs font-semibold transition-colors duration-300 ${
                  activeStep === step.id ? 'text-white' : 'text-text-muted'
                }`}>
                  {step.title}
                </span>
                <span className={`text-[10px] transition-colors duration-300 ${
                  activeStep === step.id ? step.color : 'text-text-muted opacity-50'
                }`}>
                  {step.duration}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className={`glass border ${active.border} rounded-3xl p-8 md:p-10 ${active.glow}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${active.bg} border ${active.border} rounded-2xl flex items-center justify-center`}>
                      <active.icon size={28} className={active.color} />
                    </div>
                    <div>
                      <div className="text-text-muted text-xs tracking-widest uppercase mb-1">Step {active.id} of 5</div>
                      <h3 className="text-white font-bold text-2xl">{active.title}</h3>
                      <div className={`text-sm font-medium ${active.color}`}>{active.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-base mb-6">
                    {active.description}
                  </p>
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <span>Timeline:</span>
                    <span className={`font-semibold ${active.color}`}>{active.duration}</span>
                  </div>
                </div>

                {/* Right details */}
                <div>
                  <h4 className="text-text-muted text-xs tracking-widest uppercase mb-4">What We Do</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {active.details.map((detail, i) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3 glass-amber border border-accent/10 rounded-xl px-4 py-3"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full" />
                        </motion.div>
                        <span className="text-white text-sm font-medium">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile step selector */}
        <div className="flex lg:hidden flex-wrap justify-center gap-2 mt-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStep === step.id
                  ? `bg-accent text-background`
                  : 'glass border border-border-light text-text-secondary'
              }`}
            >
              <step.icon size={14} />
              {step.title}
            </button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-text-secondary mb-6">
            Ready to start?{' '}
            <span className="text-white">The entire process takes as little as 24 hours.</span>
          </p>
          <motion.a
            href="https://wa.me/918939007006?text=Hi!%20I%27d%20like%20to%20start%20a%20project%20with%207G%20Design."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex"
          >
            <MessageCircle size={16} />
            Start Step 1 Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
