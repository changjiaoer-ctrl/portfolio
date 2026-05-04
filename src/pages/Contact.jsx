import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="max-w-xl">
        <p className="text-xs font-medium tracking-widest uppercase opacity-40 mb-6">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
          Let's make
          <br />
          something
          <br />
          <span className="opacity-30 font-light">together.</span>
        </h1>
        <p className="text-base opacity-50 leading-relaxed mb-14">
          Whether you have a brief or just an idea—reach out.
          Typical response within 24 hours.
        </p>

        {sent ? (
          <div className="rounded-4xl bg-black dark:bg-white text-white dark:text-black p-10 text-center">
            <p className="text-2xl font-semibold tracking-tight mb-2">Message sent.</p>
            <p className="text-sm opacity-60">I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase opacity-40 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-2xl border border-black/15 dark:border-white/15 bg-transparent text-sm placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase opacity-40 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-5 py-4 rounded-2xl border border-black/15 dark:border-white/15 bg-transparent text-sm placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase opacity-40 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 rounded-2xl border border-black/15 dark:border-white/15 bg-transparent text-sm placeholder:opacity-30 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity active:scale-[0.99]"
            >
              Send message →
            </button>
          </form>
        )}

        <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 space-y-2">
          <p className="text-xs opacity-30 tracking-widest uppercase font-medium mb-4">Or find me at</p>
          {[
            { label: 'changjiao4690@163.com', href: 'mailto:changjiao4690@163.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
