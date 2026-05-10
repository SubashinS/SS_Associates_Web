import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import clsx from 'clsx'
import { testimonials } from '../data/siteData'
import Reveal from './Reveal'

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <Reveal className="mx-auto max-w-4xl">
      <div className="premium-surface relative overflow-hidden rounded-[32px] p-6 sm:p-9">
        <div className="absolute right-7 top-7 text-teal-700/10">
          <Quote className="h-24 w-24" strokeWidth={1.4} />
        </div>

        <div className="mb-7 flex gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-current" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: 26, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -24, filter: 'blur(8px)' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="relative max-w-3xl font-display text-2xl font-bold leading-snug text-slate-950 sm:text-3xl">
              “{testimonial.quote}”
            </p>
            <div className="mt-8">
              <p className="font-bold text-slate-950">{testimonial.name}</p>
              <p className="mt-1 text-sm font-semibold text-teal-800">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActive(index)}
              className={clsx(
                'h-2.5 rounded-full transition-all',
                active === index ? 'w-10 bg-teal-700' : 'w-2.5 bg-slate-300',
              )}
            />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
