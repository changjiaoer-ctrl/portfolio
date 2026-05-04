export default function About() {
  const skills = [
    'UX 设计',
    '品牌设计',
    '产品设计',
    '游戏设计',
  ]

  const experience = [
    { year: '2025—Now', role: '独立设计师', company: 'CHANGE STUDIO' },
  ]

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <section className="mb-20 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-6">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            Designing the
            <br />
            <span className="opacity-30 font-light">space between</span>
            <br />
            idea & form.
          </h1>
        </div>

        <div className="space-y-5 pt-16">
          <p className="text-base opacity-60 leading-relaxed">
            我是一名用户体验设计师，拥有 10 年以上经验，擅长产品设计和游戏设计。
          </p>
          <p className="text-base opacity-60 leading-relaxed">
            我相信好的设计来自对人的深度理解——每一个交互决策背后，都是对用户真实需求的回应。
          </p>
        </div>
      </section>

      {/* Avatar placeholder */}
      <div className="mb-20 rounded-4xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[16/7] flex items-center justify-center">
        <span className="text-8xl font-light opacity-10 tracking-tighter">
          Portrait
        </span>
      </div>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-xs font-medium tracking-widest uppercase opacity-40 mb-8">
          Expertise
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-5 py-2.5 rounded-full border border-black/15 dark:border-white/15 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xs font-medium tracking-widest uppercase opacity-40 mb-8">
          Experience
        </h2>
        <div className="space-y-0 divide-y divide-black/10 dark:divide-white/10">
          {experience.map((e) => (
            <div
              key={e.company}
              className="py-6 flex items-center justify-between"
            >
              <div>
                <p className="font-semibold tracking-tight">{e.role}</p>
                <p className="text-sm opacity-40 mt-0.5">{e.company}</p>
              </div>
              <span className="text-sm opacity-30 font-mono">{e.year}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
