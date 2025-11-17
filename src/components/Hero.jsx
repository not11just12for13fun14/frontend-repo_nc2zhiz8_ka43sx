import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.25), transparent), radial-gradient(1000px 500px at 90% -20%, rgba(99,102,241,0.25), transparent)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Tech-forward web agency
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Playful, modern websites that convert
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-xl">
              We craft interactive experiences with 3D, motion, and clean design. From portfolios to SaaS, we build sites your users will love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors">
                Book a free discovery call
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 transition-colors">
                See our work
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-300/80">
              <span>Trusted by 70+ founders</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>2-week average turnaround</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/0 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
