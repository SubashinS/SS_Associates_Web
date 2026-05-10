import { motion } from 'framer-motion'
import { journey } from '../data/siteData'
import Reveal from './Reveal'

export default function JourneyMap() {
  return (
    <Reveal>
      <div className="premium-surface relative overflow-hidden rounded-[34px] p-5 sm:p-8">
        <div className="absolute left-10 right-10 top-[76px] hidden h-px bg-gradient-to-r from-transparent via-teal-700/30 to-transparent lg:block" />
        <div className="grid gap-4 lg:grid-cols-4">
          {journey.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-[24px] border border-white/70 bg-white/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: index % 2 ? 6 : -6 }}
                  className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white shadow-[0_16px_36px_rgba(8,20,28,0.22)]"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-800">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}
