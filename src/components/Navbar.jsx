import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-lg" />
            <div className="text-white font-semibold tracking-tight">BluePixel Agency</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors">
              Book a meeting
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                Book a meeting
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
