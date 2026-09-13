export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-16 lg:px-8 lg:pt-24">
      {/* soft ambient glow, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Pick your tools.
            <br />
            <span className="text-brand-gradient">Build your stack.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
            Browse a library of frontend, backend, and database technologies,
            compare them at a glance, and collect the ones you'd actually
            reach for on your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-sm font-semibold text-white">
                Your Stack
              </span>
              <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                3 Selected
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {["React", "PostgreSQL", "Tailwind CSS"].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-lg bg-ink-700/60 px-3 py-2 text-sm text-white/80"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
