export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
  },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
  },
}

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  },
}

export const slideInFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
  },
}

export const textReveal = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const glowPulse = {
  initial: { boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' },
  animate: {
    boxShadow: ['0 0 20px rgba(245, 158, 11, 0.2)', '0 0 50px rgba(245, 158, 11, 0.5)', '0 0 20px rgba(245, 158, 11, 0.2)'],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
  },
}
