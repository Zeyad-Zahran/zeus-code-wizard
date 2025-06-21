
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { CodeEditor } from '@/components/CodeEditor';
import { AIPanel } from '@/components/AIPanel';
import { TemplateLibrary } from '@/components/TemplateLibrary';
import { Zap, Code, Brain, Sparkles } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [generatedCode, setGeneratedCode] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Zap className="w-16 h-16 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Zeus Code Wizard
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Harness the power of AI to generate, improve, and debug code with divine precision
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Code className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Code Generation</h3>
              <p className="text-blue-200">Create complete applications from simple descriptions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Brain className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Smart Debugging</h3>
              <p className="text-blue-200">AI-powered error detection and fixes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Code Optimization</h3>
              <p className="text-blue-200">Improve performance and readability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="container mx-auto px-6 pb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'editor'
                  ? 'bg-blue-600/20 text-blue-300 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Code Editor
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'ai'
                  ? 'bg-blue-600/20 text-blue-300 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Assistant
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === 'templates'
                  ? 'bg-blue-600/20 text-blue-300 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Templates
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'editor' && (
              <CodeEditor 
                code={generatedCode} 
                onChange={setGeneratedCode}
              />
            )}
            {activeTab === 'ai' && (
              <AIPanel 
                onCodeGenerated={setGeneratedCode}
                onTabChange={setActiveTab}
              />
            )}
            {activeTab === 'templates' && (
              <TemplateLibrary 
                onTemplateSelect={setGeneratedCode}
                onTabChange={setActiveTab}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
