import GlowCard from './GlowCard'

export default function StatCard({ stat, delay = 0 }) {
  const Icon = stat.icon

  return (
    <GlowCard className="rounded-[24px] p-5" delay={delay}>
      <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl bg-teal-700 text-white shadow-[0_14px_30px_rgba(15,127,129,0.24)]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="font-display text-3xl font-extrabold text-slate-950">
        {stat.value}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
    </GlowCard>
  )
}
