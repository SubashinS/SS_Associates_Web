import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Sparkles } from 'lucide-react'
import {
  business,
  heroImages,
  serviceCategories,
  serviceCategoryMeta,
  services,
} from '../data/siteData'
import { ButtonLink } from '../components/Button'
import FAQAccordion from '../components/FAQAccordion'
import GlowCard from '../components/GlowCard'
import PageShell from '../components/PageShell'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceTabs from '../components/ServiceTabs'

export default function Services() {
  return (
    <PageShell className="mesh-bg overflow-hidden">
      <section className="relative pb-16 pt-[calc(var(--nav-h)+48px)]">
        <div className="noise-overlay" />
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-700/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-teal-800 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Complete service suite
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-950 sm:text-6xl">
              Documentation-first support for every property workflow.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Documentation and legal services come first. Property services are
              next, while real estate and construction are available as clearly
              labeled additional services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" icon={ArrowRight}>
                Request service help
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary">
                Call expert desk
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal direction="zoom" delay={0.12}>
            <div className="premium-surface relative overflow-hidden rounded-[38px] p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[30px]">
                <img
                  src={heroImages.documents}
                  alt="Legal documents and property paperwork"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,31,36,0.02),rgba(6,31,36,0.58))]" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                  {serviceCategories.slice(1).map((category) => (
                    <div
                      key={category}
                      className="rounded-2xl border border-white/30 bg-white/20 p-3 text-white backdrop-blur-xl"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal-50">
                        {serviceCategoryMeta[category]?.badge ?? 'Category'}
                      </p>
                      <p className="mt-2 text-sm font-extrabold">{category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Interactive filters"
            icon={BadgeCheck}
            title="Core documentation services stay first."
            copy="The service grid now prioritizes documentation and legal work, then property services, with real estate and construction presented as additional support."
          />
          <div className="mt-12">
            <ServiceTabs />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Grouped expertise"
            icon={Building2}
            title="Three service lanes, one accountable partner."
            copy="The hierarchy is intentionally clear: core documentation services, property services, and additional real estate or construction assistance."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceCategories.slice(1).map((category, index) => (
              <ServiceGroup key={category} category={category} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Questions"
            title="Fast answers before you call."
            copy="These cover the common first concerns. The best next step is still a direct document review."
          />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function ServiceGroup({ category, delay }) {
  const items = services.filter((service) => service.category === category)
  const meta = serviceCategoryMeta[category]
  const isCore = meta?.emphasis === 'core'

  return (
    <GlowCard
      delay={delay}
      className={`rounded-[30px] ${isCore ? 'ring-1 ring-teal-600/30' : ''}`}
    >
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-700 text-white">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <h3 className="font-display text-xl font-extrabold text-slate-950">
          {category}
        </h3>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
            isCore ? 'bg-teal-700 text-white' : 'bg-teal-50 text-teal-800'
          }`}
        >
          {meta?.badge}
        </span>
      </div>
      <div className="grid gap-3">
        {items.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-teal-900/10 bg-white/60 p-4"
          >
            <p className="font-bold text-slate-900">{service.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </GlowCard>
  )
}
