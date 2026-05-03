import clsx from 'clsx'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  icon: Icon,
  align = 'center',
  className = '',
}) {
  return (
    <Reveal
      className={clsx(
        'mx-auto max-w-3xl',
        align === 'left' ? 'mx-0 text-left' : 'text-center',
        className,
      )}
    >
      <div
        className={clsx(
          'mb-4 inline-flex items-center gap-2 rounded-full border border-teal-700/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-teal-800 shadow-sm',
          align === 'center' && 'justify-center',
        )}
      >
        {Icon ? <Icon className="h-4 w-4" /> : null}
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{copy}</p>
      ) : null}
    </Reveal>
  )
}
