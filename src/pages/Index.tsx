
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { CodeEditor } from '@/components/CodeEditor';
import { AIPanel } from '@/components/AIPanel';
import { TemplateLibrary } from '@/components/TemplateLibrary';
import { ResponsivePreview } from '@/components/ResponsivePreview';
import { ExportPanel } from '@/components/ExportPanel';
import { InspirationBox } from '@/components/InspirationBox';
import { SecurityAssistant } from '@/components/SecurityAssistant';
import { Zap, Code, Brain, Sparkles, Monitor, Download, Lightbulb, Shield } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const [generatedCode, setGeneratedCode] = useState('');

  const tabs = [
    { id: 'editor', label: 'Code Editor', icon: Code },
    { id: 'preview', label: 'Live Preview', icon: Monitor },
    { id: 'ai', label: 'AI Assistant', icon: Brain },
    { id: 'templates', label: 'Templates', icon: Code },
    { id: 'inspiration', label: 'Inspiration', icon: Lightbulb },
    { id: 'export', label: 'Export', icon: Download },
    { id: 'security', label: 'Security', icon: Shield }
  ];

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
            Zeus AI Coder
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Harness the power of AI to generate, improve, and debug code with divine precision
          </p>
          
          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Code className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Code Generation</h3>
              <p className="text-blue-200 text-sm">Create complete applications from simple descriptions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Monitor className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Preview</h3>
              <p className="text-blue-200 text-sm">Real-time responsive preview across all devices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Download className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Multi-Platform Export</h3>
              <p className="text-blue-200 text-sm">Export to HTML, React, WordPress, or GitHub</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-8 h-8 text-red-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Security Assistant</h3>
              <p className="text-blue-200 text-sm">AI-powered security analysis and best practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="container mx-auto px-6 pb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap border-b border-slate-700/50 bg-slate-900/30">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600/20 text-blue-300 border-b-2 border-blue-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'editor' && (
              <CodeEditor 
                code={generatedCode} 
                onChange={setGeneratedCode}
              />
            )}
            {activeTab === 'preview' && (
              <ResponsivePreview code={generatedCode} />
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
            {activeTab === 'inspiration' && (
              <InspirationBox />
            )}
            {activeTab === 'export' && (
              <ExportPanel code={generatedCode} />
            )}
            {activeTab === 'security' && (
              <SecurityAssistant code={generatedCode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
