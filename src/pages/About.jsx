import { Award, BriefcaseBusiness, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { business, heroImages, stats, whyChoose } from '../data/siteData'
import { ButtonLink } from '../components/Button'
import GlowCard from '../components/GlowCard'
import PageShell from '../components/PageShell'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'

const values = [
  'Document clarity before transaction speed',
  'Respectful communication with families and first-time buyers',
  'Local field knowledge backed by organized process',
  'Practical guidance from approval to construction',
]

export default function About() {
  return (
    <PageShell className="mesh-bg overflow-hidden">
      <section className="relative pb-16 pt-[calc(var(--nav-h)+48px)]">
        <div className="noise-overlay" />
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-700/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-teal-800 shadow-sm">
              <Sparkles className="h-4 w-4" />
              About SS Associates
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-950 sm:text-6xl">
              Built for trust in moments where details matter.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              SS Associates is led by {business.owner}, serving clients across
              Coimbatore with real estate, house construction, legal documentation,
              approval, transfer, tax, and loan processing support.
            </p>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="primary">
                Meet the team
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal direction="zoom" delay={0.12}>
            <div className="relative">
              <div className="premium-surface overflow-hidden rounded-[38px] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]">
                  <img
                    src={heroImages.architecture}
                    alt="Architecture and construction planning"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,31,36,0.02),rgba(6,31,36,0.58))]" />
                  <div className="absolute bottom-5 left-5 max-w-sm rounded-[24px] border border-white/30 bg-white/20 p-5 text-white backdrop-blur-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-50">
                      Owner
                    </p>
                    <p className="mt-2 font-display text-2xl font-extrabold">
                      {business.owner}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/70">
                      Documentation, real estate, and construction coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Trust indicators"
            icon={Award}
            title="A field-tested partner for property work."
            copy="The numbers communicate the operating mindset: careful checks, strong follow-through, and reliable client guidance."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Working philosophy"
            icon={BriefcaseBusiness}
            title="Premium service, grounded in practical execution."
            copy="Clients rarely need more complexity. They need the right sequence, transparent follow-ups, and documents that are ready when needed."
            align="left"
          />
          <Reveal direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <GlowCard key={value} delay={index * 0.06} className="rounded-[26px]">
                  <CheckCircle2 className="mb-5 h-6 w-6 text-teal-700" />
                  <p className="font-display text-lg font-extrabold leading-snug text-slate-950">
                    {value}
                  </p>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Service standards"
            icon={ShieldCheck}
            title="The experience is designed around confidence."
            copy="A premium website should match a premium operating style: clear categories, status awareness, and polished guidance."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <GlowCard key={item.title} delay={index * 0.06}>
                  <Icon className="mb-6 h-7 w-7 text-teal-700" />
                  <h3 className="font-display text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </GlowCard>
              )
            })}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
