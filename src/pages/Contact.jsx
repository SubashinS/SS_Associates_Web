import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react'
import { business, contactCards } from '../data/siteData'
import { ButtonLink } from '../components/Button'
import ContactForm from '../components/ContactForm'
import GlowCard from '../components/GlowCard'
import PageShell from '../components/PageShell'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

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
              help you identify the right documentation, approval, loan, real
              estate, or construction path.
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
                  data-cursor="button"
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
              copy="The form validates the essentials immediately. During deployment, it can be connected to email, CRM, WhatsApp automation, or a serverless endpoint."
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
                  src="https://maps.google.com/maps?q=Coimbatore&t=&z=12&ie=UTF8&iwloc=&output=embed"
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
