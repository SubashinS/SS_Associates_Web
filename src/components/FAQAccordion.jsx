import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import { faqs } from '../data/siteData'

export default function FAQAccordion({ items = faqs }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {items.map((item, index) => {
        const active = open === index
        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06 }}
            className="overflow-hidden rounded-[24px] border border-white/70 bg-white/70 shadow-[0_18px_46px_rgba(8,66,72,0.09)] backdrop-blur-xl"
          >
            <button
              type="button"
              data-cursor="button"
              onClick={() => setOpen(active ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="font-display text-base font-bold text-slate-950 sm:text-lg">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: active ? 180 : 0 }}
                className={clsx(
                  'grid h-9 w-9 shrink-0 place-items-center rounded-full transition',
                  active ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-800',
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-5 pt-0 text-sm leading-7 text-slate-600 sm:px-6">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
