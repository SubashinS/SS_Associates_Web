import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-120)
  const mouseY = useMotionValue(-120)
  const trailX = useSpring(mouseX, { stiffness: 150, damping: 22, mass: 0.35 })
  const trailY = useSpring(mouseY, { stiffness: 150, damping: 22, mass: 0.35 })
  const [mode, setMode] = useState('default')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
      setVisible(true)

      const target = event.target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="button"]',
      )
      const textTarget = event.target.closest('input, textarea')
      setMode(textTarget ? 'text' : target ? 'active' : 'default')
    }

    const leave = () => setVisible(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', leave)
    }
  }, [mouseX, mouseY])

  const coreSize = mode === 'active' ? 18 : mode === 'text' ? 10 : 9
  const trailSize = mode === 'active' ? 58 : mode === 'text' ? 42 : 34
  const trailColor =
    mode === 'active'
      ? 'rgba(15,159,123,0.2)'
      : mode === 'text'
        ? 'rgba(199,155,70,0.18)'
        : 'rgba(30,167,198,0.16)'

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: visible ? 1 : 0,
          width: trailSize,
          height: trailSize,
          backgroundColor: trailColor,
          borderColor:
            mode === 'active'
              ? 'rgba(15,159,123,0.62)'
              : mode === 'text'
                ? 'rgba(199,155,70,0.5)'
                : 'rgba(30,167,198,0.48)',
        }}
        transition={{ duration: 0.18 }}
        style={{ left: trailX, top: trailY }}
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-[0_0_36px_rgba(30,167,198,0.24)] backdrop-blur-sm"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: visible ? 1 : 0,
          width: coreSize,
          height: coreSize,
          backgroundColor:
            mode === 'active' ? '#0f9f7b' : mode === 'text' ? '#c79b46' : '#137c90',
        }}
        transition={{ duration: 0.12 }}
        style={{ left: mouseX, top: mouseY }}
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_22px_rgba(15,159,123,0.45)]"
      />
    </div>
  )
}
