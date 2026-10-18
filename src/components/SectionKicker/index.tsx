import React from 'react'

type SectionKickerProps = {
    number: string
    label: string
}

const SectionKicker: React.FC<SectionKickerProps> = ({ number, label }) => (
    <div className="mx-auto mb-4 flex w-fit max-w-full items-center justify-center gap-[clamp(0.375rem,2vw,0.75rem)] text-[clamp(0.625rem,2.5vw,0.75rem)] font-semibold uppercase tracking-[clamp(0.08em,0.7vw,0.2em)] text-cyan-400">
        <span className="shrink-0 font-mono text-slate-500">{number}</span>
        <span aria-hidden="true" className="h-px w-[clamp(1rem,8vw,2rem)] shrink-0 bg-gradient-to-r from-cyan-500/80 to-purple-500/80" />
        <span className="min-w-0 text-center">{label}</span>
    </div>
)

export default SectionKicker
