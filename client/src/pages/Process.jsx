import { ArrowRight, ClipboardCheck, FileText, Route, Sparkles } from 'lucide-react'
import { business, processSteps } from '../data/siteData'
import { ButtonLink } from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import GlowCard from '../components/GlowCard'
import JourneyMap from '../components/JourneyMap'
import PageShell from '../components/PageShell'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'

const checklist = [
  'Existing property documents',
  'Owner and purchaser identity details',
  'Tax receipts and utility references',
  'Patta, TSLR, approval, or bank records when available',
  'Clear note on the intended outcome and timeline',
]

export default function Process() {
  return (
    <PageShell className="mesh-bg overflow-hidden">
      <section className="relative pb-16 pt-[calc(var(--nav-h)+48px)]">
        <div className="noise-overlay" />
        <div className="site-container text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-700/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-teal-800 shadow-sm">
              <Sparkles className="h-4 w-4" />
              The SS Associates process
            </div>
            <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-tight text-slate-950 sm:text-6xl">
              A structured path for property work that usually feels messy.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              From first call to handover, the process is designed to make
              documentation, legal paperwork, approvals, taxes, transfers, and loan
              tasks easier to understand and act on.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink to="/contact" icon={ArrowRight}>
                Start step one
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Timeline"
            icon={Route}
            title="Five steps from uncertainty to handover."
            copy="Each step is intentionally small enough to track and strong enough to prevent expensive confusion later."
          />
          <div className="mt-14">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Journey visualization"
            title="The client journey stays visible."
            copy="A good property process should show where you are, what is pending, and what comes next."
          />
          <div className="mt-12">
            <JourneyMap />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Before we begin"
            icon={ClipboardCheck}
            title="A better first review starts with the right records."
            copy="You do not need everything perfectly arranged. Bring what you have, and the missing pieces can be mapped."
            align="left"
          />
          <Reveal direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <GlowCard key={item} delay={index * 0.05} className="rounded-[24px] p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-700 text-white">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
                      Item 0{index + 1}
                    </span>
                  </div>
                  <p className="font-display text-lg font-extrabold leading-snug text-slate-950">
                    {item}
                  </p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] bg-[#071b1f] p-7 text-white shadow-[0_28px_90px_rgba(6,31,36,0.24)] sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(15,159,123,0.28),transparent_34%),radial-gradient(circle_at_82%_15%,rgba(30,167,198,0.18),transparent_28%)]" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-100">
                    Process-first support
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
                    Call {business.owner} before the paperwork becomes urgent.
                  </h2>
                </div>
                <ButtonLink href={business.phoneHref} variant="secondary">
                  {business.phone}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Common process questions."
            copy="A quick overview before you start the first call."
          />
          <div className="mt-12">
            <FAQAccordion
              items={[
                {
                  question: 'Can the process start without all documents?',
                  answer:
                    'Yes. The first review can identify missing documents and map how to collect them.',
                },
                {
                  question: 'How are approvals and registrations tracked?',
                  answer:
                    'The task is broken into sequence: document audit, application, authority coordination, payment or appointment, and final verification.',
                },
                ...processSteps.slice(0, 2).map((step) => ({
                  question: `What happens during ${step.title.toLowerCase()}?`,
                  answer: step.description,
                })),
              ]}
            />
          </div>
        </div>
      </section>
    </PageShell>
  )
}
