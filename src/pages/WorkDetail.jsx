import { useParams, Link, Navigate } from 'react-router-dom'
import { works } from '../data/works'

export default function WorkDetail() {
  const { id } = useParams()
  const work = works.find((w) => w.id === id)

  if (!work) return <Navigate to="/" replace />

  const currentIndex = works.indexOf(work)
  const next = works[(currentIndex + 1) % works.length]

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm opacity-40 hover:opacity-100 transition-opacity mb-16"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        All work
      </Link>

      {/* Header */}
      <header className="mb-16 grid md:grid-cols-2 gap-10 items-end">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-4">
            {work.category} · {work.year}
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none">
            {work.title}
          </h1>
        </div>
        <p className="text-base opacity-50 leading-relaxed">
          {work.description}
        </p>
      </header>

      {/* Hero image */}
      <div className={`${work.color} rounded-4xl aspect-[16/9] flex items-center justify-center mb-6`}>
        <span className="text-9xl font-light opacity-10 select-none">01</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-20">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full border border-black/15 dark:border-white/15 text-xs font-medium opacity-60"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Body */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-20">
        <div>
          <h2 className="text-xs font-medium tracking-widest uppercase opacity-40 mb-4">
            Overview
          </h2>
        </div>
        <div className="space-y-5">
          {work.fullDescription.split('\n\n').map((para, i) => (
            <p key={i} className={`leading-relaxed ${i === 0 ? 'text-lg font-medium' : 'text-base opacity-60'}`}>
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Secondary images */}
      <div className="grid md:grid-cols-2 gap-5 mb-20">
        {[1, 2].map((n) => (
          <div key={n} className={`${work.color} rounded-3xl aspect-square flex items-center justify-center`}>
            <span className="text-5xl font-light opacity-10 select-none">0{n + 1}</span>
          </div>
        ))}
      </div>

      {/* Next project */}
      <div className="border-t border-black/10 dark:border-white/10 pt-12">
        <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-6">
          Next Project
        </p>
        <Link
          to={`/work/${next.id}`}
          className="group flex items-center justify-between hover:opacity-60 transition-opacity"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {next.title}
          </h2>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
            <path d="M8 20h24M24 12l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </main>
  )
}
