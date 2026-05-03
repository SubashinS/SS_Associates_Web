import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import clsx from 'clsx'
import { business, navItems } from '../data/siteData'
import { ButtonLink, IconButton } from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.nav
        initial={{ y: -22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'site-container flex h-[64px] items-center justify-between rounded-full border px-3 transition duration-300 sm:h-[72px] sm:px-4',
          scrolled
            ? 'border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(8,66,72,0.14)] backdrop-blur-2xl'
            : 'border-white/60 bg-white/50 shadow-[0_10px_30px_rgba(8,66,72,0.08)] backdrop-blur-xl',
        )}
      >
        <Link to="/" data-cursor="button" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#063f46,#0f9f7b)] font-display text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(15,127,129,0.28)]">
            SS
          </span>
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block font-display text-sm font-extrabold text-slate-950 sm:text-base">
              {business.name}
            </span>
            <span className="block max-w-[170px] truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-800/75 sm:max-w-none">
              {business.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center rounded-full border border-white/70 bg-white/50 p-1 shadow-inner backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={business.phoneHref} icon={Phone} variant="secondary">
            {business.phone}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <IconButton
            label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </IconButton>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="site-container mt-3 rounded-[28px] border border-white/70 bg-white/90 p-3 shadow-[0_24px_70px_rgba(8,66,72,0.18)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  data-cursor="button"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'rounded-2xl px-4 py-3 text-sm font-bold transition',
                      isActive
                        ? 'bg-teal-700 text-white shadow-[0_14px_30px_rgba(15,127,129,0.24)]'
                        : 'text-slate-700 hover:bg-teal-50 hover:text-teal-800',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <ButtonLink
              href={business.phoneHref}
              icon={Phone}
              className="mt-3 w-full"
              variant="primary"
            >
              Call now
            </ButtonLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

function NavItem({ item }) {
  return (
    <NavLink
      to={item.href}
      data-cursor="button"
      className={({ isActive }) =>
        clsx(
          'relative rounded-full px-4 py-2 text-sm font-bold transition',
          isActive ? 'text-white' : 'text-slate-600 hover:text-slate-950',
        )
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? (
            <motion.span
              layoutId="active-nav-pill"
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#0f9f7b,#1587a8)] shadow-[0_10px_26px_rgba(15,127,129,0.24)]"
            />
          ) : null}
          <span className="relative">{item.label}</span>
        </>
      )}
    </NavLink>
  )
}
