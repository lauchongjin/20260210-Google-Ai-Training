
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { Message, SiteMode } from '../types';
import { getGeminiResponse } from '../services/gemini';

interface Props {
  mode: SiteMode;
}

const AIConsultant: React.FC<Props> = ({ mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi, I'm Alex's AI Consultant. How can I help you optimize your growth or systems today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const replyText = await getGeminiResponse(messages, input);
      const botMsg: Message = { role: 'model', text: replyText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className={`w-80 md:w-96 h-[500px] flex flex-col rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 ${
          mode === 'technical' ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-gray-200'
        }`}>
          {/* Header */}
          <div className={`p-4 flex items-center justify-between ${
            mode === 'technical' ? 'bg-zinc-800 border-b border-zinc-700' : 'bg-gray-100 border-b border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${mode === 'technical' ? 'bg-blue-600' : 'bg-indigo-500'}`}>
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className={`font-semibold ${mode === 'technical' ? 'text-white' : 'text-gray-900'}`}>
                AI Consultant
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <X className={`w-5 h-5 ${mode === 'technical' ? 'text-zinc-400' : 'text-gray-500'}`} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? (mode === 'technical' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white')
                    : (mode === 'technical' ? 'bg-zinc-800 text-zinc-100' : 'bg-gray-200 text-gray-800')
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`p-3 rounded-2xl ${mode === 'technical' ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                  <Loader2 className={`w-4 h-4 animate-spin ${mode === 'technical' ? 'text-zinc-400' : 'text-gray-500'}`} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${mode === 'technical' ? 'border-zinc-700' : 'border-gray-200'}`}>
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about systems, ROI, or shoots..."
                className={`flex-1 text-sm bg-transparent border rounded-lg px-3 py-2 outline-none transition-all ${
                  mode === 'technical' 
                    ? 'border-zinc-700 text-white focus:border-blue-500' 
                    : 'border-gray-300 text-gray-900 focus:border-indigo-500'
                }`}
              />
              <button
                type="submit"
                className={`p-2 rounded-lg transition-colors ${
                  mode === 'technical' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2 ${
            mode === 'technical' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'
          }`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden md:inline font-medium">Talk to my AI</span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
