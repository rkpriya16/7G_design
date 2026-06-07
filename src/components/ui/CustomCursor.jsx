import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20 })
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20 })
  const isHovering = useRef(false)

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768
    if (isMobile) return

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
      ringX.set(e.clientX - 16)
      ringY.set(e.clientY - 16)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')) {
        isHovering.current = true
        document.getElementById('cursor-ring')?.style && (document.getElementById('cursor-ring').style.width = '48px')
        document.getElementById('cursor-ring')?.style && (document.getElementById('cursor-ring').style.height = '48px')
        document.getElementById('cursor-ring')?.style && (document.getElementById('cursor-ring').style.borderColor = 'rgba(245, 158, 11, 0.9)')
      }
    }

    const handleMouseOut = (e) => {
      if (!e.target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')) {
        isHovering.current = false
        document.getElementById('cursor-ring')?.style && (document.getElementById('cursor-ring').style.width = '32px')
        document.getElementById('cursor-ring')?.style && (document.getElementById('cursor-ring').style.height = '32px')
        document.getElementById('cursor-ring')?.style && (document.getElementById('cursor-ring').style.borderColor = 'rgba(245, 158, 11, 0.6)')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        style={{ left: cursorX, top: cursorY }}
      />
      <motion.div
        id="cursor-ring"
        className="cursor-ring hidden md:block"
        style={{ left: ringX, top: ringY }}
      />
    </>
  )
}
