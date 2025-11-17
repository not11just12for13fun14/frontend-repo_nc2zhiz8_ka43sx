import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      // No backend yet, simulate success
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(800px 400px at 10% 100%, rgba(14,165,233,0.12), transparent), radial-gradient(800px 400px at 90% 100%, rgba(99,102,241,0.12), transparent)' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Book a meeting</h2>
            <p className="mt-2 text-slate-300 max-w-xl">Tell us about your project and we’ll set up a 30-min discovery call to map scope, timeline, and budget.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> 48h response time</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Clear, fixed pricing</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> Friendly, expert team</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input required name="name" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Project URL (optional)</label>
              <input name="url" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="https://" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">What are you building?</label>
              <textarea required name="about" rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Tell us about your goals" />
            </div>
            <button disabled={status==='loading'} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-2 font-medium text-white hover:bg-sky-400 disabled:opacity-60">
              {status === 'loading' ? 'Booking...' : status === 'success' ? 'Request sent ✓' : 'Request a call'}
            </button>
            {status === 'error' && <p className="mt-2 text-sm text-red-300">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
