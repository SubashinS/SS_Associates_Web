import { motion } from 'framer-motion'

const directions = {
  up: { y: 32, x: 0, scale: 1 },
  down: { y: -24, x: 0, scale: 1 },
  left: { y: 0, x: 32, scale: 1 },
  right: { y: 0, x: -32, scale: 1 },
  zoom: { y: 18, x: 0, scale: 0.96 },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const hidden = directions[direction] ?? directions.up

  return (
    <motion.div
      initial={{ opacity: 0, ...hidden }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount: 0.22, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.64, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
