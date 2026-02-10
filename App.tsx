
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

  return (
    <div className={`min-h-screen mode-transition ${mode === 'technical' ? 'bg-[#0a0a0a] text-zinc-100' : 'bg-white text-gray-900'}`} style={{ backgroundColor: mode === 'technical' ? '#0a0a0a' : '#ffffff' }}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? (mode === 'technical' ? 'bg-[#000000cc] border-[#27272a]' : 'bg-[#ffffffcc] border-[#f4f4f5]')
          : 'bg-transparent border-transparent'
      }`} style={{ borderBottom: '1px solid', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
        <div className="max-w-7xl px-6 flex justify-between items-center" style={{ height: scrolled ? '64px' : '88px', transition: 'height 0.3s ease' }}>
          <div className="flex items-center" style={{ gap: '0.75rem' }}>
            <div className={`p-2 rounded-lg ${mode === 'technical' ? 'bg-[#2563eb]' : 'bg-[#4f46e5]'}`} style={{ display: 'flex', borderRadius: '8px' }}>
              <Zap className="text-white" size={20} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>
              ALEX<span className={mode === 'technical' ? 'text-[#3b82f6]' : 'text-[#4f46e5]'}>.SYS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center" style={{ gap: '2.5rem' }}>
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-all hover:opacity-70`}
                style={{ 
                  textDecoration: 'none', 
                  color: mode === 'technical' ? '#a1a1aa' : '#71717a'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center" style={{ gap: '1rem' }}>
            <button 
              onClick={toggleMode}
              className={`flex items-center rounded-full border px-3 py-1.5 text-xs font-bold transition-all`}
              style={{ 
                gap: '0.5rem', 
                cursor: 'pointer',
                backgroundColor: mode === 'technical' ? '#18181b' : '#f4f4f5',
                borderColor: mode === 'technical' ? '#3f3f46' : '#e4e4e7',
                color: mode === 'technical' ? '#a1a1aa' : '#52525b'
              }}
            >
              {mode === 'technical' ? <ToggleLeft size={20} color="#3b82f6" /> : <ToggleRight size={20} color="#4f46e5" />}
              {mode.toUpperCase()} MODE
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        {mode === 'technical' && (
          <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        )}

        <div className="relative z-10 max-w-7xl flex flex-col md:flex-row items-center" style={{ gap: '4rem' }}>
          <div className="flex-1 text-center md:text-left">
            <div className={`inline-flex items-center px-4 py-2 rounded-full mb-6 text-xs font-bold border`} 
              style={{ 
                gap: '0.5rem',
                backgroundColor: mode === 'technical' ? 'rgba(59, 130, 246, 0.1)' : '#eef2ff',
                color: mode === 'technical' ? '#60a5fa' : '#4f46e5',
                borderColor: mode === 'technical' ? 'rgba(59, 130, 246, 0.2)' : '#e0e7ff',
                borderRadius: '9999px',
                marginBottom: '1.5rem'
              }}>
              {mode === 'technical' ? <Code2 size={16} /> : <Camera size={16} />}
              {mode === 'technical' ? 'SYSTEMS ARCHITECT & GROWTH HACKER' : 'CREATIVE DIRECTOR & BRAND PHOTOGRAPHER'}
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${mode === 'creative' ? 'font-serif italic' : 'font-mono uppercase'}`} style={{ marginBottom: '2rem' }}>
              The Art of <br />
              <span style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5' }}>
                {mode === 'technical' ? 'Optimization' : 'Storytelling'}
              </span>
            </h1>

            <p className={`text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed`} style={{ color: mode === 'technical' ? '#a1a1aa' : '#52525b', marginBottom: '3rem' }}>
              {mode === 'technical' 
                ? 'Building scalable data pipelines, optimizing conversion funnels, and automating operations with surgical precision.'
                : 'Capturing the raw essence of brands through high-end commercial photography and visual narratives that convert.'}
            </p>

            <div className="flex flex-col md:flex-row items-center" style={{ gap: '1rem' }}>
              <a href="#work" className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center`}
                style={{ 
                  gap: '0.5rem', 
                  textDecoration: 'none',
                  backgroundColor: mode === 'technical' ? '#2563eb' : '#4f46e5',
                  color: '#ffffff',
                  borderRadius: '16px',
                  boxShadow: mode === 'creative' ? '0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 8px 10px -6px rgba(79, 70, 229, 0.1)' : 'none'
                }}>
                Explore Cases <ArrowRight size={20} />
              </a>
              <a href="#contact" className={`px-8 py-4 rounded-2xl font-bold text-lg border transition-all flex items-center justify-center`}
                style={{ 
                  gap: '0.5rem', 
                  textDecoration: 'none',
                  borderColor: mode === 'technical' ? '#3f3f46' : '#e4e4e7',
                  color: mode === 'technical' ? '#d4d4d8' : '#3f3f46',
                  backgroundColor: mode === 'technical' ? 'transparent' : '#ffffff',
                  borderRadius: '16px'
                }}>
                Hire Me
              </a>
            </div>
          </div>

          <div className="flex-1 w-full" style={{ maxWidth: '448px' }}>
            <div className={`relative aspect-square overflow-hidden group shadow-2xl transition-transform duration-700`}
              style={{ 
                borderRadius: '48px',
                border: mode === 'technical' ? '4px solid #27272a' : '8px solid #ffffff'
              }}>
              <img 
                src={mode === 'technical' ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800'} 
                alt="Portrait" 
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%)', transition: 'filter 0.5s ease' }}
              />
              <div className="absolute inset-0 flex items-end p-8" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
                <div className="text-white">
                  <div className="text-sm font-bold opacity-80 uppercase mb-1">Founder @ GrowthStudio</div>
                  <div className="text-2xl font-black">Alex Rivera</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 animate-bounce cursor-pointer">
          <ChevronDown size={24} color={mode === 'technical' ? '#3f3f46' : '#d4d4d8'} />
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Core Pillars Section */}
        <section className={`py-24 px-6 border-y`} style={{ 
          backgroundColor: mode === 'technical' ? '#09090b' : '#ffffff',
          borderStyle: 'solid none',
          borderColor: mode === 'technical' ? '#18181b' : '#f4f4f5'
        }}>
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4" style={{ gap: '3rem' }}>
            <div className="group">
              <TrendingUp className={`transition-colors`} size={48} style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5', marginBottom: '1.5rem' }} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Growth Hacking</h3>
              <p style={{ color: mode === 'technical' ? '#71717a' : '#52525b', fontSize: '0.875rem' }}>Full-funnel optimization and data-backed experimentation.</p>
            </div>
            <div className="group">
              <Database className={`transition-colors`} size={48} style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5', marginBottom: '1.5rem' }} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>CRM Architecture</h3>
              <p style={{ color: mode === 'technical' ? '#71717a' : '#52525b', fontSize: '0.875rem' }}>HubSpot and Salesforce implementations that scale.</p>
            </div>
            <div className="group">
              <Code2 className={`transition-colors`} size={48} style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5', marginBottom: '1.5rem' }} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Notion Systems</h3>
              <p style={{ color: mode === 'technical' ? '#71717a' : '#52525b', fontSize: '0.875rem' }}>The digital brain for complex agency operations.</p>
            </div>
            <div className="group">
              <Camera className={`transition-colors`} size={48} style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5', marginBottom: '1.5rem' }} />
              <h3 className={`text-xl font-bold mb-3 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Photography</h3>
              <p style={{ color: mode === 'technical' ? '#71717a' : '#52525b', fontSize: '0.875rem' }}>Visual storytelling for lifestyle and SaaS brands.</p>
            </div>
          </div>
        </section>

        <Portfolio mode={mode} />

        <section id="services" className={`py-24 px-6`} style={{ backgroundColor: mode === 'technical' ? '#09090b' : '#fafafa' }}>
          <div className="max-w-7xl">
            <h2 className={`text-4xl font-bold text-center ${mode === 'creative' ? 'font-serif' : 'font-mono'}`} style={{ marginBottom: '4rem' }}>Services & Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
              {SERVICES.map((pkg) => (
                <div key={pkg.title} className={`p-8 rounded-3xl border transition-all`}
                  style={{ 
                    backgroundColor: mode === 'technical' ? '#18181b' : '#ffffff',
                    borderColor: mode === 'technical' ? '#27272a' : '#f4f4f5',
                    borderRadius: '24px',
                    borderStyle: 'solid'
                  }}>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-4`} style={{ color: mode === 'technical' ? '#60a5fa' : '#4f46e5', marginBottom: '1rem' }}>
                    {pkg.pillar}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <div className="text-3xl font-black mb-8" style={{ marginBottom: '2rem' }}>{pkg.price}</div>
                  <ul style={{ padding: 0, listStyle: 'none', marginBottom: '2rem' }}>
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center text-sm" style={{ gap: '0.75rem', marginBottom: '1rem', opacity: 0.7 }}>
                        <Zap size={16} style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all`}
                    style={{ 
                      backgroundColor: mode === 'technical' ? '#27272a' : '#18181b',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer'
                    }}>
                    Book Consulting
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact mode={mode} />
      </main>

      <footer className={`py-12 px-6 border-t`} style={{ 
        backgroundColor: '#000000', 
        borderColor: mode === 'technical' ? '#18181b' : '#27272a',
        borderStyle: 'solid none'
      }}>
        <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center" style={{ gap: '2rem' }}>
          <div className="flex items-center" style={{ gap: '0.75rem' }}>
            <Zap size={20} style={{ color: mode === 'technical' ? '#3b82f6' : '#4f46e5' }} />
            <span className={`font-bold ${mode === 'creative' ? 'font-serif' : 'font-mono'}`} style={{ color: '#ffffff' }}>ALEX.SYS</span>
          </div>
          
          <div className="flex" style={{ gap: '2rem' }}>
            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
              <a key={social} href="#" className="text-sm font-medium transition-colors" style={{ color: '#71717a', textDecoration: 'none' }}>{social}</a>
            ))}
          </div>

          <div className="text-xs" style={{ color: '#3f3f46' }}>
            © {new Date().getFullYear()} Alex Rivera. Optimized Performance Build.
          </div>
        </div>
      </footer>

      <AIConsultant mode={mode} />

      {isMenuOpen && (
        <div className={`fixed inset-0 z-[60] flex flex-col p-12 transition-all ${mode === 'technical' ? 'bg-black' : 'bg-white'}`}>
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
    </div>
  );
};

export default App;
