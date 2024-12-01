import React, { useState } from 'react';
import { Menu, X, Zap, Cpu, Code, Database } from 'lucide-react';

const CyberflowAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Cpu className="text-cyan-400" />,
      title: "Workflow Automation",
      description: "Transform repetitive tasks into AI-powered efficiency streams."
    },
    {
      icon: <Code className="text-green-400" />,
      title: "AI Strategy",
      description: "Develop custom AI integration roadmaps tailored to your business."
    },
    {
      icon: <Database className="text-purple-400" />,
      title: "Data Intelligence",
      description: "Unlock hidden insights with advanced AI-driven analytics."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-mono overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0 animate-pulse"></div>

      <nav className="relative z-10 p-4 flex justify-between items-center border-b border-cyan-800/20">
        <div className="text-2xl font-bold text-cyan-400">
          CyberFlow <span className="text-sm">AI CONSULTING</span>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-cyan-400 hover:text-cyan-200"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#approach" className="hover:text-cyan-400 transition-colors">Approach</a>
          <a href="#contact" className="bg-cyan-600 px-4 py-2 rounded hover:bg-cyan-500 transition-colors">
            Get Consultation
          </a>
        </div>
      </nav>

      {/* Additional sections would go here */}
    </div>
  );
};

export default CyberflowAI;