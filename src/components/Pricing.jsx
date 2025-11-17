export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$1,900",
      period: "/ project",
      features: [
        "1 landing page",
        "Basic animations",
        "CMS setup",
        "1 week delivery",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      price: "$4,900",
      period: "/ project",
      features: [
        "Multi-page site",
        "3D hero + motion",
        "Integrations",
        "2 week delivery",
      ],
      highlight: true,
    },
    {
      name: "Partner",
      price: "$3,000",
      period: "/ month",
      features: [
        "Unlimited requests",
        "Ongoing iterations",
        "A/B testing",
        "Priority support",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(800px 400px at 0% 10%, rgba(14,165,233,0.12), transparent), radial-gradient(800px 400px at 100% 10%, rgba(99,102,241,0.12), transparent)' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Clear pricing, real outcomes</h2>
          <p className="mt-2 text-slate-300">Pick the model that fits your needs. We keep scope tight and deliver fast.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative overflow-hidden rounded-2xl border ${t.highlight ? 'border-sky-400/30 bg-sky-400/10' : 'border-white/10 bg-slate-900/60'}`}>
              {t.highlight && (
                <div className="absolute right-3 top-3 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-200">Most popular</div>
              )}
              <div className="p-6">
                <h3 className="text-white font-semibold">{t.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-3xl font-bold text-white">{t.price}</span>
                  <span className="text-slate-400">{t.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium text-white transition-colors ${t.highlight ? 'bg-sky-500 hover:bg-sky-400' : 'bg-white/10 hover:bg-white/20'}`}>Get started</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
