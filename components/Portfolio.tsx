
import React, { useState } from 'react';
import { SiteMode, CaseStudy } from '../types';
import { CASE_STUDIES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Code, ExternalLink, Maximize2 } from 'lucide-react';

interface Props {
  mode: SiteMode;
}

const mockChartData = [
  { name: 'Month 1', value: 400 },
  { name: 'Month 2', value: 300 },
  { name: 'Month 3', value: 800 },
  { name: 'Month 4', value: 1200 },
];

const Portfolio: React.FC<Props> = ({ mode }) => {
  const [filter, setFilter] = useState<CaseStudy['category'] | 'all'>('all');

  const filtered = CASE_STUDIES.filter(cs => filter === 'all' || cs.category === filter);

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className={`text-4xl font-bold mb-4 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>
            Selected Work
          </h2>
          <p className={`max-w-xl text-lg ${mode === 'technical' ? 'text-zinc-400 font-mono' : 'text-gray-600'}`}>
            From SQL-optimized growth funnels to emotionally resonant brand imagery.
          </p>
        </div>

        <div className="flex gap-2 bg-zinc-100 p-1 rounded-xl">
          {['all', 'growth', 'systems', 'photography'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                filter === f 
                  ? (mode === 'technical' ? 'bg-zinc-800 text-white' : 'bg-white shadow-sm text-indigo-600') 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((cs) => (
          <div 
            key={cs.id}
            className={`group relative overflow-hidden rounded-3xl transition-all duration-500 border ${
              mode === 'technical' ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-white border-gray-100 shadow-sm hover:shadow-xl'
            }`}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={cs.image} 
                alt={cs.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  mode === 'technical' ? 'bg-zinc-800 text-blue-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {cs.category}
                </span>
                <Maximize2 className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ${
                  mode === 'technical' ? 'text-zinc-400' : 'text-gray-400'
                }`} />
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>
                {cs.title}
              </h3>
              
              <p className={`mb-6 line-clamp-2 ${mode === 'technical' ? 'text-zinc-400' : 'text-gray-600'}`}>
                {cs.description}
              </p>

              {/* Data Visualization for Technical Mode */}
              {mode === 'technical' && cs.category !== 'photography' && (
                <div className="mb-6 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                  <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockChartData}>
                        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {cs.metrics?.map(m => (
                      <div key={m.label}>
                        <div className="text-[10px] text-zinc-500 uppercase">{m.label}</div>
                        <div className="text-sm font-mono text-blue-400">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet */}
              {mode === 'technical' && cs.codeSnippet && (
                <div className="mb-6 p-4 bg-black/40 rounded-xl border border-zinc-800 font-mono text-xs overflow-x-auto text-zinc-300">
                  <div className="flex justify-between items-center mb-2 border-b border-zinc-800 pb-2">
                    <Code className="w-3 h-3" />
                    <span className="text-[10px] uppercase text-zinc-600">analysis.sql</span>
                  </div>
                  <pre>{cs.codeSnippet}</pre>
                </div>
              )}

              {/* Gallery View for Creative Mode */}
              {mode === 'creative' && cs.gallery && (
                <div className="flex gap-2 mb-6">
                  {cs.gallery.map((img, i) => (
                    <img key={i} src={img} className="w-12 h-12 rounded-lg object-cover border border-white shadow-sm" alt="Thumbnail" />
                  ))}
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400 font-medium">
                    +4
                  </div>
                </div>
              )}

              <button className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                mode === 'technical' 
                  ? 'bg-zinc-800 hover:bg-zinc-700 text-white' 
                  : 'bg-gray-900 hover:bg-black text-white'
              }`}>
                View Case Study
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
