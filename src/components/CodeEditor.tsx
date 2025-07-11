
import React, { useState, useRef, useEffect } from 'react';
import { Copy, Download, Play, RefreshCw, Eye, Code } from 'lucide-react';
import { toast } from 'sonner';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

export const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  const [language, setLanguage] = useState('html');
  const [showPreview, setShowPreview] = useState(false);
  const [previewContent, setPreviewContent] = useState('');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  const handleDownload = () => {
    const extensions = {
      html: 'html',
      css: 'css',
      javascript: 'js',
      typescript: 'ts',
      react: 'jsx',
      python: 'py'
    };
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extensions[language as keyof typeof extensions] || 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Code downloaded successfully!');
  };

  const generatePreviewContent = () => {
    if (!code || !['html', 'css', 'javascript'].includes(language)) {
      return '';
    }

    let htmlContent = '';
    
    if (language === 'html') {
      htmlContent = code;
    } else if (language === 'css') {
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${code}</style>
        </head>
        <body>
          <div class="preview-content">
            <h1>CSS Preview</h1>
            <p>This is a sample paragraph to demonstrate your CSS styles.</p>
            <button>Sample Button</button>
            <div class="box">Sample Box</div>
          </div>
        </body>
        </html>
      `;
    } else if (language === 'javascript') {
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .console { background: #1a1a1a; color: #00ff00; padding: 10px; border-radius: 4px; font-family: monospace; }
          </style>
        </head>
        <body>
          <h1>JavaScript Preview</h1>
          <div id="output"></div>
          <div class="console" id="console"></div>
          <script>
            const originalLog = console.log;
            console.log = function(...args) {
              originalLog.apply(console, args);
              const consoleDiv = document.getElementById('console');
              if (consoleDiv) {
                consoleDiv.innerHTML += args.join(' ') + '\\n';
              }
            };
            
            try {
              ${code}
            } catch (error) {
              const consoleDiv = document.getElementById('console');
              if (consoleDiv) {
                consoleDiv.innerHTML += 'Error: ' + error.message;
              }
            }
          </script>
        </body>
        </html>
      `;
    }
    
    return htmlContent;
  };

  useEffect(() => {
    if (showPreview) {
      const content = generatePreviewContent();
      setPreviewContent(content);
    }
  }, [code, language, showPreview]);

  const canPreview = ['html', 'css', 'javascript'].includes(language);

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-700 text-white rounded-md px-3 py-1 text-sm border border-slate-600 focus:border-blue-400 focus:outline-none"
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="react">React</option>
            <option value="python">Python</option>
          </select>

          {canPreview && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md transition-colors text-sm ${
                showPreview
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-slate-600 hover:bg-slate-700 text-white'
              }`}
            >
              {showPreview ? <Code className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showPreview ? 'Code' : 'Preview'}</span>
            </button>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
          >
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Editor/Preview Container */}
      <div className="relative">
        {showPreview && canPreview ? (
          <div className="w-full h-96 bg-white rounded-lg border border-slate-700 overflow-hidden">
            <iframe
              srcDoc={previewContent}
              className="w-full h-full"
              title="Code Preview"
              sandbox="allow-scripts"
            />
          </div>
        ) : (
          <>
            <textarea
              value={code}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Your generated code will appear here, or start typing to write your own..."
              className="w-full h-96 bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-lg border border-slate-700 focus:border-blue-400 focus:outline-none resize-none"
              spellCheck={false}
            />
            {!code && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-slate-500">
                  <RefreshCw className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Ready for your next masterpiece</p>
                  <p className="text-sm">Use the AI Assistant to generate code or start typing</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
