import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import GlowCard from './GlowCard'

export default function StatCard({ stat, delay = 0 }) {
  const Icon = stat.icon
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.45 })
  const [displayValue, setDisplayValue] = useState('0')
  const statParts = useMemo(() => {
    const match = String(stat.value).match(/^(\d+)(.*)$/)
    return {
      target: match ? Number(match[1]) : 0,
      suffix: match ? match[2] : '',
    }
  }, [stat.value])

  useEffect(() => {
    if (!isInView) return undefined

    let frame = 0
    const duration = 1200
    const start = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.round(statParts.target * eased)

      setDisplayValue(`${value}${statParts.suffix}`)

      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame)
  }, [isInView, statParts])

  return (
    <GlowCard className="rounded-[24px] p-5" delay={delay}>
      <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl bg-teal-700 text-white shadow-[0_14px_30px_rgba(15,127,129,0.24)]">
        <Icon className="h-5 w-5" />
      </div>
      <div ref={ref} className="font-display text-3xl font-extrabold text-slate-950">
        {displayValue}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
    </GlowCard>
  )
}
