import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import clsx from 'clsx'
import { serviceCategories, services } from '../data/siteData'
import GlowCard from './GlowCard'

export default function ServiceTabs({ compact = false }) {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return compact ? services.slice(0, 9) : services
    const items = services.filter((service) => service.category === active)
    return compact ? items.slice(0, 6) : items
  }, [active, compact])

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {serviceCategories.map((category) => (
          <motion.button
            key={category}
            type="button"
            data-cursor="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActive(category)}
            className={clsx(
              'btn-ripple inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition',
              active === category
                ? 'border-teal-700 bg-teal-700 text-white shadow-[0_16px_34px_rgba(15,127,129,0.24)]'
                : 'border-white/70 bg-white/70 text-slate-600 shadow-sm hover:text-teal-800',
            )}
          >
            <Filter className="h-4 w-4" />
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 0.035} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export function ServiceCard({ service, delay = 0 }) {
  const Icon = service.icon

  return (
    <GlowCard
      delay={delay}
      className="group min-h-[248px] rounded-[26px] p-5 sm:p-6"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            whileHover={{ rotate: -6, scale: 1.08 }}
            className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[linear-gradient(135deg,#0f9f7b,#1ea7c6)] text-white shadow-[0_14px_34px_rgba(15,127,129,0.25)]"
          >
            <Icon className="h-6 w-6" />
          </motion.div>
          <span className="rounded-full border border-teal-800/10 bg-teal-50/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-800">
            {service.category}
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl font-extrabold text-slate-950">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {service.description}
        </p>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-teal-700/20 via-cyan-600/20 to-transparent" />
        <p className="mt-4 text-sm font-bold text-teal-800 transition group-hover:translate-x-1">
          Detailed guidance available
        </p>
      </div>
    </GlowCard>
  )
}
