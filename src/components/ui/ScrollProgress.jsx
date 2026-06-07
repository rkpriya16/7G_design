import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #F59E0B, #FCD34D, #F59E0B)',
      }}
    />
  )
}
