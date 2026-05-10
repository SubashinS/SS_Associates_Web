import { motion } from 'framer-motion'
import { processSteps } from '../data/siteData'
import Reveal from './Reveal'

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-teal-700/0 via-teal-700/30 to-teal-700/0 md:left-1/2 md:block" />
      <div className="grid gap-6">
        {processSteps.map((step, index) => {
          const Icon = step.icon
          const left = index % 2 === 0

          return (
            <Reveal key={step.title} delay={index * 0.06}>
              <div
                className={`relative grid gap-5 md:grid-cols-2 md:items-center ${
                  left ? '' : 'md:[&>*:first-child]:col-start-2'
                }`}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="premium-surface rounded-[30px] p-6"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[linear-gradient(135deg,#0f9f7b,#1ea7c6)] text-white shadow-[0_14px_34px_rgba(15,127,129,0.24)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-800">
                      {step.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
                <div className="hidden md:block" />
                <span className="absolute left-5 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-teal-700 shadow-[0_0_0_8px_rgba(15,159,123,0.12)] md:left-1/2 md:block" />
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
