import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="fixed inset-0 -z-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.20), transparent), radial-gradient(1000px 500px at 90% -20%, rgba(99,102,241,0.20), transparent)' }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300">
          <p>© {new Date().getFullYear()} BluePixel Agency. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App