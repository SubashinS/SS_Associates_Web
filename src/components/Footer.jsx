import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, navItems, services } from '../data/siteData'
import { ButtonLink } from './Button'

const featuredServices = services.slice(0, 7)

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-teal-950/10 bg-[#071b1f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(15,159,123,0.22),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(30,167,198,0.2),transparent_30%)]" />
      <div className="site-container relative py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" data-cursor="button" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white font-display text-sm font-extrabold text-teal-900">
                SS
              </span>
              <span>
                <span className="block font-display text-xl font-extrabold">
                  {business.name}
                </span>
                <span className="block text-sm font-semibold text-teal-100/80">
                  {business.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Premium real estate, house construction, legal documentation, and
              government property service support in Coimbatore.
            </p>
            <ButtonLink to="/contact" icon={ArrowRight} className="mt-7" variant="primary">
              Start a consultation
            </ButtonLink>
          </div>

          <FooterColumn title="Pages">
            {navItems.map((item) => (
              <FooterLink key={item.href} to={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {featuredServices.map((service) => (
              <FooterLink key={service.title} to="/services">
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <ContactLine href={business.phoneHref} icon={Phone}>
              {business.phone}
            </ContactLine>
            <ContactLine href={business.emailHref} icon={Mail}>
              {business.email}
            </ContactLine>
            <ContactLine
              href="https://www.google.com/maps/search/?api=1&query=Coimbatore"
              icon={MapPin}
            >
              {business.location}
            </ContactLine>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <p>Designed for trust, clarity, and faster property decisions.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
        {title}
      </h3>
      <div className="grid gap-3">{children}</div>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      data-cursor="button"
      className="text-sm font-medium text-white/60 transition hover:text-white"
    >
      {children}
    </Link>
  )
}

function ContactLine({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      data-cursor="button"
      className="group flex items-start gap-3 text-sm font-medium text-white/70 transition hover:text-white"
    >
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-teal-100 transition group-hover:bg-teal-400/20">
        <Icon className="h-4 w-4" />
      </span>
      <span className="leading-7">{children}</span>
    </a>
  )
}
