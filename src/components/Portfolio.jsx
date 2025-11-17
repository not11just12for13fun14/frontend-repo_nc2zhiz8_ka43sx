export default function Portfolio() {
  const projects = [
    {
      title: "Nova SaaS Dashboard",
      desc: "Product-led marketing site with 3D hero and conversion-focused layout.",
      tags: ["Next.js", "Spline", "Tailwind"],
      img: "https://images.unsplash.com/photo-1551281044-8d8eec305537?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Astra Studio",
      desc: "Creative portfolio with playful motion and bold typography.",
      tags: ["Framer Motion", "React", "Vite"],
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Orbit Commerce",
      desc: "High-performance eCommerce landing page and product pages.",
      tags: ["Headless", "Analytics", "SEO"],
      img: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(800px 400px at 10% 0%, rgba(14,165,233,0.15), transparent), radial-gradient(800px 400px at 100% 10%, rgba(99,102,241,0.15), transparent)' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">A snapshot of projects where we combined speed, craft, and interactivity to drive results.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">Start a project</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
