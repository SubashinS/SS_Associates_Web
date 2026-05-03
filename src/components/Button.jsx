import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const variantClasses = {
  primary:
    'bg-[linear-gradient(135deg,#0f9f7b,#1587a8)] text-white shadow-[0_18px_42px_rgba(15,127,129,0.28)] hover:shadow-[0_22px_58px_rgba(15,127,129,0.38)]',
  secondary:
    'border border-white/70 bg-white/70 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_18px_40px_rgba(8,66,72,0.1)] hover:bg-white/90',
  dark:
    'bg-slate-950 text-white shadow-[0_18px_48px_rgba(6,14,20,0.24)] hover:bg-slate-900',
}

const baseClasses =
  'btn-ripple inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 sm:px-6'

export function ButtonLink({
  to,
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = clsx(baseClasses, variantClasses[variant], className)
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" strokeWidth={2.4} /> : null}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        data-cursor="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
      <Link to={to} data-cursor="button" className={classes} {...props}>
        {content}
      </Link>
    </motion.div>
  )
}

export function IconButton({ children, className = '', label, ...props }) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      data-cursor="button"
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.94 }}
      className={clsx(
        'btn-ripple inline-grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/75 text-slate-900 shadow-[0_12px_30px_rgba(8,66,72,0.12)] backdrop-blur-xl transition hover:bg-white',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
