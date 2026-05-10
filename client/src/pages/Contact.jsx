import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Sparkles, Star } from 'lucide-react'
import { business, contactCards } from '../data/siteData'
import { ButtonLink } from '../components/Button'
import ContactForm from '../components/ContactForm'
import GlowCard from '../components/GlowCard'
import PageShell from '../components/PageShell'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { apiRequest } from '../lib/api'

export default function Contact() {
  return (
    <PageShell className="mesh-bg overflow-hidden">
      <section className="relative pb-16 pt-[calc(var(--nav-h)+48px)]">
        <div className="noise-overlay" />
        <div className="site-container text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-700/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-teal-800 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Contact SS Associates
            </div>
            <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-tight text-slate-950 sm:text-6xl">
              Start your property work with a clear next step.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Call, email, WhatsApp, or send a short enquiry. SS Associates will
              help you identify the right documentation, legal, approval, tax,
              transfer, loan, or property service path.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={business.phoneHref} icon={Phone}>
                Call {business.phone}
              </ButtonLink>
              <ButtonLink href={business.whatsappHref} icon={MessageCircle} variant="secondary">
                WhatsApp enquiry
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <GlowCard key={card.label} delay={index * 0.05} className="rounded-[26px] p-5">
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group block"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-700 text-white shadow-[0_14px_34px_rgba(15,127,129,0.24)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-teal-700" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
                    {card.label}
                  </p>
                  <p className="mt-2 break-words font-display text-xl font-extrabold text-slate-950">
                    {card.value}
                  </p>
                </a>
              </GlowCard>
            )
          })}
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Enquiry form"
              icon={Mail}
              title="Tell us what you want to complete."
              copy="The form validates the essentials and opens WhatsApp directly with your enquiry message ready for SS Associates."
              align="left"
            />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <Reveal direction="left" className="lg:pt-[88px]">
            <div className="premium-surface overflow-hidden rounded-[34px] p-3">
              <div className="map-frame h-[420px] overflow-hidden rounded-[28px]">
                <iframe
                  title="SS Associates location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=567%2C%201st%20Floor%2C%201st%20Street%2C%20Gandhipuram%2C%20Coimbatore%20-%20641012&t=&z=17&ie=UTF8&iwloc=&output=embed"
                />
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <InfoLine icon={MapPin} label="Location" value={business.location} />
                <InfoLine icon={Phone} label="Direct call" value={business.phone} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Customer Feedback"
            icon={Star}
            title="Share your experience with SS Associates."
            copy="Feedback is stored through the backend and displayed instantly as polished client cards."
          />
          <div className="mt-12">
            <CustomerFeedback />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function InfoLine({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-white/60 p-4">
      <div className="mb-3 inline-grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-800">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
        {label}
      </p>
      <p className="mt-1 font-bold text-slate-950">{value}</p>
    </div>
  )
}

function CustomerFeedback() {
  const [feedbackList, setFeedbackList] = useState([])
  const [draft, setDraft] = useState({ name: '', rating: 5, feedback: '' })
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    let active = true

    const loadFeedback = async () => {
      try {
        const data = await apiRequest('/feedback')
        if (active) {
          setFeedbackList(data.feedback ?? [])
        }
      } catch (requestError) {
        if (active) setError(requestError.message)
      } finally {
        if (active) setInitialLoading(false)
      }
    }

    loadFeedback()

    return () => {
      active = false
    }
  }, [])

  const submitFeedback = async (event) => {
    event.preventDefault()

    if (!draft.name.trim() || draft.feedback.trim().length < 8) {
      setError('Please add your name and a short feedback note.')
      return
    }

    try {
      setLoading(true)
      const data = await apiRequest('/feedback', {
        method: 'POST',
        body: JSON.stringify(draft),
      })

      setFeedbackList((current) => [data.feedback, ...current])
      setDraft({ name: '', rating: 5, feedback: '' })
      setError('')
      setStatus('Feedback submitted successfully.')
    } catch (requestError) {
      setStatus('')
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.form
        onSubmit={submitFeedback}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="premium-surface rounded-[34px] p-5 sm:p-7"
      >
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-slate-800">Name</span>
          <input
            value={draft.name}
            onChange={(event) => {
              setDraft((current) => ({ ...current, name: event.target.value }))
              setError('')
            }}
            placeholder="Your name"
            className="form-input"
          />
        </label>

        <div className="mt-5">
          <span className="mb-2 block text-sm font-bold text-slate-800">Rating</span>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => {
              const rating = index + 1
              const active = rating <= draft.rating
              return (
                <motion.button
                  key={rating}
                  type="button"
                  aria-label={`${rating} star rating`}
                  whileHover={{ y: -2, scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setDraft((current) => ({ ...current, rating }))}
                  className={`grid h-11 w-11 place-items-center rounded-full border transition ${
                    active
                      ? 'border-amber-400 bg-amber-50 text-amber-500'
                      : 'border-slate-200 bg-white/70 text-slate-300'
                  }`}
                >
                  <Star className={active ? 'h-5 w-5 fill-current' : 'h-5 w-5'} />
                </motion.button>
              )
            })}
          </div>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm font-bold text-slate-800">Feedback</span>
          <textarea
            value={draft.feedback}
            onChange={(event) => {
              setDraft((current) => ({ ...current, feedback: event.target.value }))
              setError('')
            }}
            rows={5}
            placeholder="How was your documentation or property service experience?"
            className="form-input resize-none"
          />
        </label>

        {error ? <p className="mt-3 text-xs font-bold text-rose-600">{error}</p> : null}
        {status ? <p className="mt-3 text-xs font-bold text-teal-700">{status}</p> : null}

        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          disabled={loading}
          className="btn-ripple mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#0f9f7b,#1587a8)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_42px_rgba(15,127,129,0.28)] transition"
        >
          {loading ? 'Submitting...' : 'Submit feedback'}
          <Star className="h-4 w-4 fill-current" />
        </motion.button>
      </motion.form>

      <div className="grid gap-4">
        {initialLoading ? (
          <GlowCard className="rounded-[28px]">
            <p className="font-display text-xl font-extrabold text-slate-950">
              Loading feedback...
            </p>
          </GlowCard>
        ) : feedbackList.length === 0 ? (
          <GlowCard className="rounded-[28px]">
            <p className="font-display text-xl font-extrabold text-slate-950">
              No feedback submitted yet.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              New customer feedback will appear here instantly after submission.
            </p>
          </GlowCard>
        ) : (
          feedbackList.map((item, index) => (
            <GlowCard key={item.id} delay={index * 0.04} className="rounded-[28px]">
              <div className="mb-4 flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={
                      starIndex < item.rating
                        ? 'h-5 w-5 fill-current'
                        : 'h-5 w-5 text-slate-300'
                    }
                  />
                ))}
              </div>
              <p className="font-display text-xl font-extrabold text-slate-950">
                {item.name}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.feedback}</p>
            </GlowCard>
          ))
        )}
      </div>
    </div>
  )
}
