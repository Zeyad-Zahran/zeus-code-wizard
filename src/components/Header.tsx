
import React from 'react';
import { Zap, Github, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-yellow-400" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Zeus AI Coder</h1>
              <p className="text-sm text-slate-400">AI-Powered Development</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
