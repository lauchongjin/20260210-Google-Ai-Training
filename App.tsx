
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
  Github, 
  Linkedin, 
  Twitter, 
  ToggleLeft, 
  ToggleRight,
  ChevronDown
} from 'lucide-react';
import Portfolio from './components/Portfolio';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';

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

  return (
    <div className={`min-h-screen mode-transition ${mode === 'technical' ? 'bg-[#0a0a0a] text-zinc-100' : 'bg-white text-gray-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? (mode === 'technical' ? 'bg-black/80 backdrop-blur-md border-zinc-800 py-4' : 'bg-white/80 backdrop-blur-md border-gray-100 py-4')
          : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${mode === 'technical' ? 'bg-blue-600' : 'bg-indigo-600'}`}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>
              ALEX<span className={mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}>.SYS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  mode === 'technical' ? 'text-zinc-400' : 'text-gray-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMode}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                mode === 'technical' 
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white' 
                  : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode === 'technical' ? <ToggleLeft className="w-5 h-5 text-blue-500" /> : <ToggleRight className="w-5 h-5 text-indigo-500" />}
              {mode.toUpperCase()} MODE
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Grid for Tech Mode */}
        {mode === 'technical' && (
          <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold ${
              mode === 'technical' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
            }`}>
              {mode === 'technical' ? <Code2 className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
              {mode === 'technical' ? 'SYSTEMS ARCHITECT & GROWTH HACKER' : 'CREATIVE DIRECTOR & BRAND PHOTOGRAPHER'}
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${mode === 'creative' ? 'font-serif italic' : 'font-mono uppercase'}`}>
              The Art of <br />
              <span className={mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}>
                {mode === 'technical' ? 'Optimization' : 'Storytelling'}
              </span>
            </h1>

            <p className={`text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed ${mode === 'technical' ? 'text-zinc-400 font-mono' : 'text-gray-600'}`}>
              {mode === 'technical' 
                ? 'Building scalable data pipelines, optimizing conversion funnels, and automating operations with surgical precision.'
                : 'Capturing the raw essence of brands through high-end commercial photography and visual narratives that convert.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#work" className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                mode === 'technical' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-200'
              }`}>
                Explore Cases <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className={`px-8 py-4 rounded-2xl font-bold text-lg border transition-all flex items-center justify-center gap-2 ${
                mode === 'technical' ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-900' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}>
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md md:max-w-xl">
            <div className={`relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl transition-transform duration-700 hover:-rotate-2 ${
              mode === 'technical' ? 'border-4 border-zinc-800' : 'border-8 border-white'
            }`}>
              <img 
                src={mode === 'technical' ? 'https://picsum.photos/seed/tech/800/800' : 'https://picsum.photos/seed/creative/800/800'} 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-sm font-bold opacity-80 uppercase mb-1">Founder @ GrowthStudio</div>
                  <div className="text-2xl font-black">Alex Rivera</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
          <ChevronDown className={mode === 'technical' ? 'text-zinc-700' : 'text-gray-300'} />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Core Pillars Section */}
        <section className={`py-24 px-6 border-y ${mode === 'technical' ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-gray-100'}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="group">
              <TrendingUp className={`w-12 h-12 mb-6 transition-colors ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Growth Hacking</h3>
              <p className={mode === 'technical' ? 'text-zinc-500 text-sm' : 'text-gray-500 text-sm'}>Full-funnel optimization and data-backed experimentation.</p>
            </div>
            <div className="group">
              <Database className={`w-12 h-12 mb-6 transition-colors ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>CRM Architecture</h3>
              <p className={mode === 'technical' ? 'text-zinc-500 text-sm' : 'text-gray-500 text-sm'}>HubSpot and Salesforce implementations that scale.</p>
            </div>
            <div className="group">
              <Code2 className={`w-12 h-12 mb-6 transition-colors ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Notion Systems</h3>
              <p className={mode === 'technical' ? 'text-zinc-500 text-sm' : 'text-gray-500 text-sm'}>The digital brain for complex agency operations.</p>
            </div>
            <div className="group">
              <Camera className={`w-12 h-12 mb-6 transition-colors ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Photography</h3>
              <p className={mode === 'technical' ? 'text-zinc-500 text-sm' : 'text-gray-500 text-sm'}>Visual storytelling for lifestyle and SaaS brands.</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <Portfolio mode={mode} />

        {/* Services */}
        <section id="services" className={`py-24 px-6 ${mode === 'technical' ? 'bg-zinc-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold mb-16 text-center ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Services & Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((pkg) => (
                <div key={pkg.title} className={`p-8 rounded-3xl border transition-all ${
                  mode === 'technical' ? 'bg-zinc-900 border-zinc-800 hover:border-blue-500/50' : 'bg-white border-gray-100 hover:shadow-xl'
                }`}>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${mode === 'technical' ? 'text-blue-400' : 'text-indigo-600'}`}>
                    {pkg.pillar}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <div className="text-3xl font-black mb-8">{pkg.price}</div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex gap-3 text-sm opacity-70">
                        <Zap className={`w-4 h-4 shrink-0 ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                    mode === 'technical' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-900 hover:bg-black text-white'
                  }`}>
                    Book Consulting
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <Contact mode={mode} />
      </main>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${mode === 'technical' ? 'bg-black border-zinc-900' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Zap className={`w-5 h-5 ${mode === 'technical' ? 'text-blue-500' : 'text-indigo-600'}`} />
            <span className={`font-bold ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>ALEX.SYS</span>
          </div>
          
          <div className={`flex gap-8 text-sm font-medium ${mode === 'technical' ? 'text-zinc-500' : 'text-gray-400'}`}>
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
          </div>

          <div className={`text-xs ${mode === 'technical' ? 'text-zinc-700' : 'text-gray-300'}`}>
            © {new Date().getFullYear()} Alex Rivera. Handcrafted with React & Gemini.
          </div>
        </div>
      </footer>

      {/* AI Bot */}
      <AIConsultant mode={mode} />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[60] flex flex-col p-12 transition-all ${mode === 'technical' ? 'bg-black' : 'bg-white'}`}>
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
          </div>
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-4xl font-bold" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
