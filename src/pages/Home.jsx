import { Link } from 'react-router-dom'
import { works } from '../data/works'

function WorkCard({ work, index }) {
  return (
    <Link
      to={`/work/${work.id}`}
      className="group block rounded-4xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`${work.color} aspect-[4/3] flex items-center justify-center`}>
        <span className="text-7xl font-light opacity-20 select-none">
          0{index + 1}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium tracking-widest uppercase opacity-40">
            {work.category}
          </span>
          <span className="text-xs opacity-30">{work.year}</span>
        </div>
        <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:opacity-60 transition-opacity">
          {work.title}
        </h3>
        <p className="text-sm opacity-50 leading-relaxed line-clamp-2">
          {work.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          View project
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-24">
        <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-6">
          Design Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-2xl">
          Craft that
          <br />
          <em className="font-light not-italic opacity-40">speaks</em> for
          <br />
          itself.
        </h1>
        <p className="text-base md:text-lg opacity-50 max-w-md leading-relaxed">
          用户体验设计师，10+ 年经验。
          专注产品设计与游戏设计。
        </p>
      </section>

      {/* Work grid */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs font-medium tracking-widest uppercase opacity-40">
            Selected Work
          </h2>
          <span className="text-xs opacity-30">{works.length} Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </section>

      {/* Footer strip */}
      <footer className="mt-32 pt-8 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
        <span className="text-xs opacity-30">© 2026 GOOD IDEAS</span>
        <div className="flex gap-6 text-xs opacity-30">
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
          <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>
      </footer>
    </main>
  )
}
