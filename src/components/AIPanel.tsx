
import React, { useState } from 'react';
import { Send, Sparkles, Loader2, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface AIPanelProps {
  onCodeGenerated: (code: string) => void;
  onTabChange: (tab: string) => void;
}

export const AIPanel = ({ onCodeGenerated, onTabChange }: AIPanelProps) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<Array<{type: 'user' | 'ai', content: string}>>([]);

  const GEMINI_API_KEY = 'AIzaSyB7YsXWxDR_gMuJxM_lUnnsTPLigRoZtNo';

  const examplePrompts = [
    "Create a responsive login page with HTML, CSS, and JavaScript",
    "Build a todo list app with add, delete, and mark complete functionality",
    "Generate a modern landing page with hero section and features",
    "Create a contact form with validation using Bootstrap 5",
    "Build a dashboard with sidebar navigation and charts"
  ];

  const callGeminiAPI = async (userPrompt: string): Promise<string> => {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a web development assistant. Generate complete HTML, CSS, and JavaScript code based on the user's request. Make sure the code is production-ready, responsive, and follows modern web development best practices. Include all necessary styling and functionality in a single HTML file.

User request: ${userPrompt}

Please provide only the complete HTML code without any explanations or markdown formatting.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 8192,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setHistory(prev => [...prev, { type: 'user', content: prompt }]);

    try {
      console.log('Calling Gemini API with prompt:', prompt);
      const generatedCode = await callGeminiAPI(prompt);
      
      console.log('Generated code received from Gemini:', generatedCode);
      onCodeGenerated(generatedCode);
      
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: `Generated code based on your request: "${prompt}". The code has been added to the editor.` 
      }]);
      
      toast.success('Code generated successfully with Gemini AI!');
      
      // Switch to editor tab to show the generated code
      setTimeout(() => onTabChange('editor'), 500);
      
    } catch (error) {
      console.error('Gemini API error:', error);
      toast.error('Failed to generate code. Please try again.');
      setHistory(prev => [...prev, { 
        type: 'ai', 
        content: 'Sorry, I encountered an error while generating the code. Please try again.' 
      }]);
    } finally {
      setIsGenerating(false);
      setPrompt('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Chat History */}
      {history.length > 0 && (
        <div className="bg-slate-800/50 rounded-lg p-4 max-h-64 overflow-y-auto space-y-3">
          {history.map((item, index) => (
            <div key={index} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                item.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-700 text-slate-100'
              }`}>
                <p className="text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="space-y-4">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to create... (e.g., 'Create a responsive login page with email and password fields')"
            className="w-full h-32 bg-slate-800 text-white p-4 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none resize-none"
            disabled={isGenerating}
          />
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Example Prompts */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-300">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Try these examples:</span>
          </div>
          <div className="grid gap-2">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                onClick={() => setPrompt(example)}
                className="text-left text-sm text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 p-3 rounded-lg transition-all border border-slate-700 hover:border-slate-600"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Info */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">zeus ai coder</h3>
        </div>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>• Fast and efficient AI code generation</li>
          <li>• Powered by Google's latest Gemini model</li>
          <li>• Creates complete web applications</li>
          <li>• Supports modern frameworks and best practices</li>
        </ul>
      </div>
    </div>
  );
};
