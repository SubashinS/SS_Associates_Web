import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function GlowCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.56, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={clsx('premium-surface halo rounded-[28px] p-6 transition', className)}
    >
      {children}
    </motion.div>
  )
}
