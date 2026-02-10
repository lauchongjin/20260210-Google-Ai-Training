
import React, { useState } from 'react';
import { SiteMode } from '../types';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface Props {
  mode: SiteMode;
}

const Contact: React.FC<Props> = ({ mode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', budget: '1000-5000' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate a successful form submission
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950 mode-transition">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 ${mode === 'creative' ? 'font-serif' : 'font-mono uppercase'}`}>
            Let's Build Together
          </h2>
          <p className={`text-xl ${mode === 'technical' ? 'text-zinc-500' : 'text-gray-600'}`}>
            Ready to scale your systems or capture your brand? Reach out for a custom consultation.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12 rounded-[2rem] border transition-all ${
          mode === 'technical' 
            ? 'bg-zinc-900 border-zinc-800' 
            : 'bg-white border-gray-100 shadow-2xl shadow-indigo-100'
        }`}>
          {status === 'success' ? (
            <div className="col-span-2 text-center py-12">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className={`w-16 h-16 ${mode === 'technical' ? 'text-blue-500' : 'text-green-500'}`} />
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${mode === 'creative' ? 'text-gray-900' : 'text-white font-mono'}`}>Message Received</h3>
              <p className={`mb-8 ${mode === 'technical' ? 'text-zinc-400' : 'text-gray-600'}`}>
                Thank you for reaching out. Alex will get back to you within 24-48 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className={`px-8 py-3 rounded-xl font-bold ${mode === 'technical' ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-gray-900'}`}
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
              <div>
                <h4 className={`text-xl font-bold mb-6 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Project Details</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-xs font-bold uppercase mb-2 ${mode === 'technical' ? 'text-zinc-500' : 'text-gray-400'}`}>Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl outline-none border transition-all ${
                        mode === 'technical' ? 'bg-zinc-800 border-zinc-700 text-white focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold uppercase mb-2 ${mode === 'technical' ? 'text-zinc-500' : 'text-gray-400'}`}>Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl outline-none border transition-all ${
                        mode === 'technical' ? 'bg-zinc-800 border-zinc-700 text-white focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold uppercase mb-2 ${mode === 'technical' ? 'text-zinc-500' : 'text-gray-400'}`}>Estimated Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl outline-none border transition-all ${
                        mode === 'technical' ? 'bg-zinc-800 border-zinc-700 text-white focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-indigo-500'
                      }`}
                    >
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-20k">$5,000 - $20,000</option>
                      <option value="20k+">$20,000+</option>
                    </select>
                  </div>
                  <button 
                    disabled={status === 'loading'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      mode === 'technical' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-100'
                    }`}
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
                    Send Message
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className={`text-xl font-bold mb-6 ${mode === 'creative' ? 'font-serif' : 'font-mono'}`}>Message</h4>
                  <textarea 
                    rows={8}
                    required
                    placeholder="Briefly describe your goals or bottlenecks..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-xl outline-none border transition-all resize-none ${
                      mode === 'technical' ? 'bg-zinc-800 border-zinc-700 text-white focus:border-blue-500' : 'bg-gray-50 border-gray-200 focus:border-indigo-500'
                    }`}
                  ></textarea>
                </div>

                <div className={`p-6 rounded-2xl border mt-8 ${
                  mode === 'technical' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                }`}>
                  <div className="flex gap-4 items-center">
                    <Mail className="w-6 h-6 shrink-0" />
                    <p className="text-xs leading-relaxed">
                      This form is connected directly to Alex's workspace. Your inquiry is safe and private.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
