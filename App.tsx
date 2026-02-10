
import React, { useState, useEffect } from 'react';
import { SiteMode } from './types';
import { NAV_LINKS, SERVICES } from './constants';
import { 
  Menu, 
  X, 
  Zap, 
  Code2, 
  Database, 
  Camera, 
  TrendingUp,
  ArrowRight, 
  ToggleLeft, 
  ToggleRight,
  ChevronDown
} from 'lucide-react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [mode, setMode] = useState<SiteMode>('technical');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMode = () => {
    setMode(prev => prev === 'technical' ? 'creative' : 'technical');
  };

  const navClass = scrolled 
    ? (mode === 'technical' ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800' : 'bg-white/80 backdrop-blur-md border-b border-zinc-100')
    : 'bg-transparent border-b border-transparent';

  return (
    <div className={`min-h-screen mode-transition ${mode === 'technical' ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-gray-900'}`} style={{ transition: 'background-color 0.5s ease' }}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`} style={{ padding: scrolled ? '1rem 0' : '1.5rem 0' }}>
        <div className="max-w-7xl px-6 flex justify-between items-center mx-auto">
          <div className="flex items-center" style={{ gap: '0.75rem' }}>
            <div className={`p-2 rounded-lg ${mode === 'technical' ? 'bg-blue-600' : 'bg-indigo-600'}`}>
              <Zap className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} />
            </div>
            <span className={`text-xl font-bold ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>
              ALEX<span className={mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}>.SYS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  mode === 'technical' ? 'text-zinc-400' : 'text-gray-500'
                }`}
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center" style={{ gap: '1rem' }}>
            <button 
              onClick={toggleMode}
              className={`flex items-center rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${
                mode === 'technical' 
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-400' 
                  : 'bg-zinc-100 border-zinc-200 text-gray-600'
              }`}
              style={{ gap: '0.5rem', cursor: 'pointer' }}
            >
              {mode === 'technical' ? <ToggleLeft className="text-blue-500" /> : <ToggleRight className="text-indigo-500" />}
              {mode.toUpperCase()} MODE
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
        {mode === 'technical' && (
          <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ gap: '4rem' }}>
          <div className="flex-1 text-center md:text-left">
            <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 text-xs font-bold ${
              mode === 'technical' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
            }`} style={{ gap: '0.5rem' }}>
              {mode === 'technical' ? <Code2 size={16} /> : <Camera size={16} />}
              {mode === 'technical' ? 'SYSTEMS ARCHITECT & GROWTH HACKER' : 'CREATIVE DIRECTOR & BRAND PHOTOGRAPHER'}
            </div>
            
            <h1 className={`font-black mb-8 leading-tight ${mode === 'creative' ? 'font-serif' : 'font-mono'}`} style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: '0 0 2rem 0' }}>
              The Art of <br />
              <span className={mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}>
                {mode === 'technical' ? 'Optimization' : 'Storytelling'}
              </span>
            </h1>

            <p className={`text-xl mb-12 max-w-2xl leading-relaxed ${mode === 'technical' ? 'text-zinc-400 font-mono' : 'text-gray-600'}`}>
              {mode === 'technical' 
                ? 'Building scalable data pipelines, optimizing conversion funnels, and automating operations with surgical precision.'
                : 'Capturing the raw essence of brands through high-end commercial photography and visual narratives that convert.'}
            </p>

            <div className="flex flex-col sm:flex-row" style={{ gap: '1rem', justifyContent: 'center' }}>
              <a href="#work" className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center ${
                mode === 'technical' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
              }`} style={{ gap: '0.5rem', textDecoration: 'none' }}>
                Explore Cases <ArrowRight size={20} />
              </a>
              <a href="#contact" className={`px-8 py-4 rounded-2xl font-bold text-lg border transition-all flex items-center justify-center ${
                mode === 'technical' ? 'border-zinc-700 text-zinc-300' : 'border-zinc-200 text-gray-700'
              }`} style={{ gap: '0.5rem', textDecoration: 'none' }}>
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex-1 w-full" style={{ maxWidth: '32rem' }}>
            <div className={`relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 ${
              mode === 'technical' ? 'border-4 border-zinc-800' : 'border-8 border-white'
            }`} style={{ borderStyle: 'solid' }}>
              <img 
                src={mode === 'technical' ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800'} 
                alt="Portrait" 
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }}
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className={mode === 'technical' ? 'text-zinc-700' : 'text-zinc-300'} />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Core Pillars Section */}
        <section className={`py-24 px-6 border-y ${mode === 'technical' ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-100'}`} style={{ borderStyle: 'solid none' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4" style={{ gap: '3rem' }}>
            {[
              { Icon: TrendingUp, title: 'Growth Hacking', text: 'Full-funnel optimization and data-backed experimentation.' },
              { Icon: Database, title: 'CRM Architecture', text: 'HubSpot and Salesforce implementations that scale.' },
              { Icon: Code2, title: 'Notion Systems', text: 'The digital brain for complex agency operations.' },
              { Icon: Camera, title: 'Photography', text: 'Visual storytelling for lifestyle and SaaS brands.' }
            ].map((pillar, i) => (
              <div key={i}>
                <pillar.Icon className={`mb-6 ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} size={48} style={{ marginBottom: '1.5rem' }} />
                <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>{pillar.title}</h3>
                <p className={`text-sm opacity-60`}>{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Portfolio mode={mode} />

        <section id="services" className={`py-24 px-6 ${mode === 'technical' ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold mb-16 text-center ${mode === 'creative' ? 'font-serif' : 'font-mono'}`} style={{ marginBottom: '4rem' }}>Services & Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
              {SERVICES.map((pkg) => (
                <div key={pkg.title} className={`p-8 rounded-3xl border transition-all ${
                  mode === 'technical' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'
                }`} style={{ borderStyle: 'solid' }}>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${mode === 'technical' ? 'text-blue-400' : 'text-indigo-600'}`}>
                    {pkg.pillar}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <div className="text-3xl font-black mb-8" style={{ marginBottom: '2rem' }}>{pkg.price}</div>
                  <ul className="space-y-4" style={{ marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                    {pkg.features.map(f => (
                      <li key={f} className="flex text-sm opacity-70" style={{ gap: '0.75rem', marginBottom: '1rem' }}>
                        <Zap className={`${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    mode === 'technical' ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-white'
                  }`} style={{ border: 'none', cursor: 'pointer' }}>
                    Book Consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact mode={mode} />
      </main>

      <footer className={`py-12 px-6 border-t ${mode === 'technical' ? 'bg-black border-zinc-900' : 'bg-white border-zinc-100'}`} style={{ borderStyle: 'solid none' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center" style={{ gap: '2rem' }}>
          <div className="flex items-center" style={{ gap: '0.75rem' }}>
            <Zap className={`${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} size={20} />
            <span className={`font-bold ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>ALEX.SYS</span>
          </div>
          
          <div className={`flex text-sm font-medium ${mode === 'technical' ? 'text-zinc-500' : 'text-zinc-400'}`} style={{ gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
          </div>

          <div className={`text-xs ${mode === 'technical' ? 'text-zinc-700' : 'text-zinc-300'}`}>
            © {new Date().getFullYear()} Alex Rivera. Static Deployment Ready.
          </div>
        </div>
      </footer>

      {isMenuOpen && (
        <div className={`fixed inset-0 z-[60] flex flex-col p-12 ${mode === 'technical' ? 'bg-black' : 'bg-white'}`}>
          <div className="flex justify-end" style={{ marginBottom: '3rem' }}>
            <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}><X size={32} /></button>
          </div>
          <div className="flex flex-col" style={{ gap: '2rem' }}>
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-4xl font-bold" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Persistent AI Consultant */}
      <AIConsultant mode={mode} />
    </div>
  );
};

export default App;