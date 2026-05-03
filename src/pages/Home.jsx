import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, heroImages, stats, whyChoose } from '../data/siteData'
import { ButtonLink } from '../components/Button'
import GlowCard from '../components/GlowCard'
import JourneyMap from '../components/JourneyMap'
import PageShell from '../components/PageShell'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceTabs from '../components/ServiceTabs'
import StatCard from '../components/StatCard'
import TestimonialsSlider from '../components/TestimonialsSlider'

const headline = 'Property documentation, approvals, construction and real estate with premium clarity'

export default function Home() {
  return (
    <PageShell className="mesh-bg overflow-hidden">
      <div className="noise-overlay" />
      <Hero />

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why choose us"
            icon={ShieldCheck}
            title="A calm, expert layer over complex property decisions."
            copy="SS Associates brings legal documentation, government workflows, loan coordination, real estate, and construction guidance into one responsive experience."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <GlowCard key={item.title} delay={index * 0.06}>
                  <div className="mb-6 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-slate-950 text-white shadow-[0_14px_34px_rgba(8,20,28,0.2)]">
                    <Icon className="h-6 w-6" />
                  </div>
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

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Service command center"
            icon={Sparkles}
            title="Choose the exact property workflow you need."
            copy="Filter by category and explore a polished snapshot of the services SS Associates provides for clients in and around Coimbatore."
          />
          <div className="mt-12">
            <ServiceTabs compact />
          </div>
          <Reveal className="mt-10 text-center">
            <ButtonLink to="/services" icon={ArrowRight} variant="dark">
              View all services
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            eyebrow="Client journey"
            title="From first question to verified completion."
            copy="The experience is built around sequence, communication, and reducing uncertainty at every stage."
          />
          <div className="mt-12">
            <JourneyMap />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Client confidence"
            title="Responsive guidance that feels personal."
            copy="Premium service is not only visual. It is the feeling of knowing what is next, who is handling it, and why it matters."
          />
          <div className="mt-12">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <HomeCTA />
    </PageShell>
  )
}

function Hero() {
  return (
    <section className="relative px-0 pb-14 pt-[calc(var(--nav-h)+52px)] sm:pb-20 lg:pb-24">
      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-700/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-teal-800 shadow-sm">
              <Sparkles className="h-4 w-4" />
              {business.tagline}
            </div>
          </Reveal>

          <h1 className="font-display text-4xl font-extrabold leading-[1.04] text-slate-950 sm:text-6xl lg:text-7xl">
            {headline.split(' ').map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.05 + index * 0.028, duration: 0.52 }}
                className={
                  word === 'premium' || word === 'clarity'
                    ? 'gradient-text inline-block pr-3'
                    : 'inline-block pr-3'
                }
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              SS Associates helps homeowners, land buyers, families, and builders
              move through property paperwork, approvals, loans, construction, and
              real estate decisions with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" icon={ArrowRight}>
                Book consultation
              </ButtonLink>
              <ButtonLink href={business.phoneHref} icon={Phone} variant="secondary">
                Call {business.phone}
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} delay={0.38 + index * 0.05} />
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [34, -42])
  const cardY = useTransform(scrollYProgress, [0, 1], [-18, 28])

  return (
    <Reveal direction="zoom" delay={0.18}>
      <div ref={ref} className="relative mx-auto max-w-xl lg:max-w-none">
        <motion.div
          style={{ y: imageY }}
          className="premium-surface relative overflow-hidden rounded-[42px] p-3"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={heroImages.home}
              alt="Premium residential property"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,31,36,0.08),rgba(6,31,36,0.62))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/30 bg-white/20 p-5 text-white shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-50">
                Coimbatore property desk
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold">
                Documentation-led real estate guidance
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: cardY }}
          className="absolute -left-2 top-8 hidden rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_20px_50px_rgba(8,66,72,0.18)] backdrop-blur-xl sm:block lg:-left-7"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-700 text-white">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-950">Title checks</p>
              <p className="text-xs font-semibold text-slate-500">Before action</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-5 right-2 hidden rounded-[24px] border border-white/70 bg-white/90 p-4 shadow-[0_20px_50px_rgba(8,66,72,0.18)] backdrop-blur-xl sm:block lg:-right-5"
        >
          <Link to="/process" data-cursor="button" className="block">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">
              Client journey
            </p>
            <p className="mt-2 font-display text-xl font-extrabold text-slate-950">
              5-step process
            </p>
          </Link>
        </motion.div>
      </div>
    </Reveal>
  )
}

function HomeCTA() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-[#071b1f] p-7 text-white shadow-[0_28px_90px_rgba(6,31,36,0.24)] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(15,159,123,0.28),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(30,167,198,0.22),transparent_30%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-100">
                  Ready when you are
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
                  Start with one clear conversation.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                  Share the property goal. SS Associates will help map the right
                  documentation, approval, loan, real estate, or construction path.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink to="/contact" icon={ArrowRight}>
                  Contact SS Associates
                </ButtonLink>
                <ButtonLink href={business.whatsappHref} variant="secondary">
                  WhatsApp now
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
