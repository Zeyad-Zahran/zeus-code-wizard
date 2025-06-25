import React, { useState, useRef } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, Upload, Github, Edit } from 'lucide-react';
import { toast } from 'sonner';

interface ResponsivePreviewProps {
  code: string;
}

export const ResponsivePreview = ({ code }: ResponsivePreviewProps) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showExternal, setShowExternal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [currentCode, setCurrentCode] = useState(code);
  const editorWindowRef = useRef<Window | null>(null);

  const githubToken = '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';
  const bitlyToken = '4fe7d43aa8957fee55e6907556dc39c4f7e72d90';

  const viewModes = {
    desktop: { width: '100%', height: '600px', icon: Monitor, label: 'Desktop' },
    tablet: { width: '768px', height: '600px', icon: Tablet, label: 'Tablet' },
    mobile: { width: '375px', height: '600px', icon: Smartphone, label: 'Mobile' }
  };

  const openExternalPreview = () => {
    const newWindow = window.open('', '_blank', 'width=1200,height=800,resizable=yes,scrollbars=yes');
    if (newWindow) {
      newWindow.document.write(currentCode);
      newWindow.document.close();
      setShowExternal(true);
    }
  };

  const createGitHubRepo = async (repoName: string) => {
    const response = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        name: repoName,
        description: 'Website created with Zeus AI Coder',
        public: true,
        auto_init: true
      })
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  };

  const uploadFileToRepo = async (owner: string, repo: string, path: string, content: string) => {
    const encodedContent = btoa(unescape(encodeURIComponent(content)));
    
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `Add ${path} via Zeus AI Coder`,
        content: encodedContent
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to upload ${path}: ${response.status}`);
    }

    return await response.json();
  };

  const enableGitHubPages = async (owner: string, repo: string) => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${githubToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/'
        }
      })
    });

    if (!response.ok && response.status !== 409) {
      throw new Error(`Failed to enable GitHub Pages: ${response.status}`);
    }

    return response.status === 409 ? { already_exists: true } : await response.json();
  };

  const createBitlyLink = async (longUrl: string) => {
    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bitlyToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        long_url: longUrl,
        title: 'Zeus AI Generated Site'
      })
    });

    if (!response.ok) {
      throw new Error(`Bit.ly API error: ${response.status}`);
    }

    return await response.json();
  };

  const openEditorInNewWindow = () => {
    // Close existing editor window if open
    if (editorWindowRef.current && !editorWindowRef.current.closed) {
      editorWindowRef.current.close();
    }

    // Create new editor window
    const editorWindow = window.open(
      '', 
      'visual-editor',
      'width=1400,height=900,resizable=yes,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no'
    );

    if (editorWindow) {
      editorWindowRef.current = editorWindow;
      
      // Write the editor HTML to the new window
      editorWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Visual Editor</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
          <style>
            body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .editor-container { height: 100vh; display: flex; flex-direction: column; background: #f3f4f6; }
          </style>
        </head>
        <body>
          <div id="visual-editor-root" class="editor-container">
            <div class="bg-gray-800 text-white p-4 flex items-center justify-between">
              <h2 class="text-lg font-semibold">Visual Editor - Enhanced</h2>
              <div class="flex items-center space-x-2">
                <button id="save-btn" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">Save & Close</button>
                <button id="close-btn" class="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg">Close</button>
              </div>
            </div>
            <div class="flex-1 flex">
              <div class="w-64 bg-white border-r p-4 overflow-y-auto">
                <h3 class="font-semibold mb-4">Enhanced Templates</h3>
                <div id="template-grid" class="grid grid-cols-1 gap-2"></div>
              </div>
              <div class="flex-1 bg-white p-4">
                <div class="border-2 border-dashed border-gray-300 h-full rounded-lg flex items-center justify-center">
                  <div class="text-center">
                    <p class="text-lg mb-2">Enhanced Visual Editor</p>
                    <p class="text-sm text-gray-600">Select a template or start building</p>
                  </div>
                </div>
              </div>
              <div class="w-80 bg-white border-l p-4">
                <h3 class="font-semibold mb-4">Properties Panel</h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium mb-2">Background Color</label>
                    <input type="color" class="w-full h-10 rounded" value="#ffffff">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">Text Color</label>
                    <input type="color" class="w-full h-10 rounded" value="#000000">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script>
            // Enhanced templates with preserved colors
            const templates = ${JSON.stringify(getEnhancedTemplates())};
            
            // Populate template grid
            const templateGrid = document.getElementById('template-grid');
            templates.forEach((template, index) => {
              const templateBtn = document.createElement('button');
              templateBtn.className = 'p-3 border rounded-lg hover:bg-blue-50 text-left';
              templateBtn.innerHTML = \`
                <div class="font-medium text-sm">\${template.name}</div>
                <div class="text-xs text-gray-500">\${template.category}</div>
              \`;
              templateBtn.onclick = () => applyTemplate(template);
              templateGrid.appendChild(templateBtn);
            });
            
            function applyTemplate(template) {
              console.log('Applying template:', template.name);
              // Template application logic would go here
            }
            
            // Handle window communication
            window.addEventListener('message', (event) => {
              if (event.data.type === 'EDITOR_DATA') {
                console.log('Received editor data:', event.data.payload);
              }
            });
            
            // Save and close functionality
            document.getElementById('save-btn').onclick = () => {
              const editorData = {
                type: 'SAVE_PROJECT',
                payload: {
                  code: document.getElementById('current-code')?.value || '${currentCode.replace(/'/g, "\\'")}',
                  timestamp: Date.now()
                }
              };
              window.opener?.postMessage(editorData, '*');
              window.close();
            };
            
            document.getElementById('close-btn').onclick = () => {
              window.close();
            };
            
            // Send initial data
            window.opener?.postMessage({
              type: 'EDITOR_READY',
              payload: { ready: true }
            }, '*');
          </script>
        </body>
        </html>
      `);
      
      editorWindow.document.close();
      
      // Set up message listener for communication
      const handleMessage = (event: MessageEvent) => {
        if (event.source === editorWindow) {
          if (event.data.type === 'SAVE_PROJECT') {
            setCurrentCode(event.data.payload.code);
            toast.success('Project saved successfully!');
          } else if (event.data.type === 'EDITOR_READY') {
            // Send current project data to editor
            editorWindow.postMessage({
              type: 'EDITOR_DATA',
              payload: {
                code: currentCode,
                projectName: 'Current Project'
              }
            }, '*');
          }
        }
      };
      
      window.addEventListener('message', handleMessage);
      
      // Clean up when window closes
      const checkClosed = setInterval(() => {
        if (editorWindow.closed) {
          window.removeEventListener('message', handleMessage);
          clearInterval(checkClosed);
          editorWindowRef.current = null;
        }
      }, 1000);
    }
  };

  const handleQuickUpload = async () => {
    if (!currentCode) {
      toast.error('No code to upload');
      return;
    }

    setIsUploading(true);
    
    try {
      const repoName = `zeus-ai-site-${Date.now()}`;
      
      toast.success('🚀 Creating GitHub repository...');
      const repo = await createGitHubRepo(repoName);

      toast.success('📤 Uploading website files...');
      await uploadFileToRepo(repo.owner.login, repo.name, 'index.html', currentCode);

      toast.success('🌐 Enabling GitHub Pages...');
      await enableGitHubPages(repo.owner.login, repo.name);

      const pagesUrl = `https://${repo.owner.login.toLowerCase()}.github.io/${repo.name}`;
      
      setTimeout(async () => {
        try {
          toast.success('🔗 Creating short link...');
          const bitlyResponse = await createBitlyLink(pagesUrl);
          
          toast.success(`🎉 Website deployed successfully!`);
          toast.success(`📱 Short URL: ${bitlyResponse.link}`);
          
          await navigator.clipboard.writeText(bitlyResponse.link);
          toast.success('Short URL copied to clipboard!');
          
        } catch (bitlyError) {
          console.error('Bit.ly error:', bitlyError);
          toast.success(`✅ Website deployed to: ${pagesUrl}`);
          await navigator.clipboard.writeText(pagesUrl);
          toast.success('GitHub Pages URL copied to clipboard!');
        }
      }, 2000);
      
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* View Mode Controls */}
      <div className="flex items-center justify-between bg-slate-800/30 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          {Object.entries(viewModes).map(([mode, config]) => {
            const IconComponent = config.icon;
            return (
              <button
                key={mode}
                onClick={() => setViewMode(mode as any)}
                className={`flex items-center space-x-1 px-3 py-1 rounded-md transition-colors text-sm ${
                  viewMode === mode
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={openEditorInNewWindow}
            className="flex items-center space-x-1 px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors text-sm"
          >
            <Edit className="w-4 h-4" />
            <span>Enhanced Editor</span>
          </button>
          
          <button
            onClick={handleQuickUpload}
            disabled={isUploading || !currentCode}
            className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md transition-colors text-sm"
          >
            {isUploading ? (
              <>
                <Upload className="w-4 h-4 animate-pulse" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Github className="w-4 h-4" />
                <span>Upload Website</span>
              </>
            )}
          </button>
          
          <button
            onClick={openExternalPreview}
            className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open External</span>
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex justify-center bg-slate-900 rounded-lg p-4">
        <div
          className="bg-white rounded-lg shadow-2xl transition-all duration-300"
          style={{
            width: viewModes[viewMode].width,
            height: viewModes[viewMode].height,
            maxWidth: '100%'
          }}
        >
          <iframe
            srcDoc={currentCode || '<html><body><div style="padding: 20px; text-align: center; color: #666;">No code to preview</div></body></html>'}
            className="w-full h-full border-0 rounded-lg"
            title="Website Preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

// Enhanced templates with preserved colors and 20+ options
function getEnhancedTemplates() {
  return [
    // Business & Corporate
    { name: 'Corporate Landing', category: 'Business', colors: ['#2563eb', '#1e40af', '#ffffff'] },
    { name: 'Professional Services', category: 'Business', colors: ['#059669', '#047857', '#f0fdf4'] },
    { name: 'Tech Startup', category: 'Business', colors: ['#7c3aed', '#5b21b6', '#faf5ff'] },
    { name: 'Consulting Firm', category: 'Business', colors: ['#dc2626', '#b91c1c', '#fef2f2'] },
    { name: 'Financial Services', category: 'Business', colors: ['#1f2937', '#111827', '#f9fafb'] },
    
    // E-commerce
    { name: 'Online Store', category: 'E-commerce', colors: ['#f59e0b', '#d97706', '#fffbeb'] },
    { name: 'Fashion Boutique', category: 'E-commerce', colors: ['#ec4899', '#be185d', '#fdf2f8'] },
    { name: 'Electronics Shop', category: 'E-commerce', colors: ['#3b82f6', '#2563eb', '#eff6ff'] },
    { name: 'Marketplace', category: 'E-commerce', colors: ['#10b981', '#059669', '#ecfdf5'] },
    
    // Creative & Portfolio
    { name: 'Designer Portfolio', category: 'Creative', colors: ['#000000', '#374151', '#ffffff'] },
    { name: 'Photography', category: 'Creative', colors: ['#6b7280', '#4b5563', '#f3f4f6'] },
    { name: 'Artist Showcase', category: 'Creative', colors: ['#8b5cf6', '#7c3aed', '#f5f3ff'] },
    { name: 'Creative Agency', category: 'Creative', colors: ['#ef4444', '#dc2626', '#fef2f2'] },
    
    // Blog & Content
    { name: 'Personal Blog', category: 'Blog', colors: ['#6366f1', '#4f46e5', '#eef2ff'] },
    { name: 'News Magazine', category: 'Blog', colors: ['#1f2937', '#111827', '#ffffff'] },
    { name: 'Travel Blog', category: 'Blog', colors: ['#06b6d4', '#0891b2', '#ecfeff'] },
    
    // Restaurant & Food
    { name: 'Restaurant', category: 'Food', colors: ['#92400e', '#78350f', '#fef3c7'] },
    { name: 'Cafe Menu', category: 'Food', colors: ['#a16207', '#92400e', '#fefce8'] },
    
    // Health & Wellness
    { name: 'Medical Practice', category: 'Health', colors: ['#0d9488', '#0f766e', '#f0fdfa'] },
    { name: 'Fitness Studio', category: 'Health', colors: ['#ea580c', '#c2410c', '#fff7ed'] },
    
    // Education
    { name: 'Online Course', category: 'Education', colors: ['#7c2d12', '#92400e', '#fefce8'] },
    { name: 'University', category: 'Education', colors: ['#1e40af', '#1d4ed8', '#dbeafe'] },
    
    // Non-profit
    { name: 'Charity Organization', category: 'Non-profit', colors: ['#16a34a', '#15803d', '#f0fdf4'] }
  ];
}

// Helper functions for GitHub integration
async function createGitHubRepo(repoName: string) {
  const githubToken = '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';
  const response = await fetch('https://api.github.com/user/repos', {
    method: 'POST',
    headers: {
      'Authorization': `token ${githubToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      name: repoName,
      description: 'Website created with Zeus AI Coder',
      public: true,
      auto_init: true
    })
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return await response.json();
}

async function uploadFileToRepo(owner: string, repo: string, path: string, content: string) {
  const githubToken = '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';
  const encodedContent = btoa(unescape(encodeURIComponent(content)));
  
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${githubToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      message: `Add ${path} via Zeus AI Coder`,
      content: encodedContent
    })
  });

  if (!response.ok) {
    throw new Error(`Failed to upload ${path}: ${response.status}`);
  }

  return await response.json();
}

async function enableGitHubPages(owner: string, repo: string) {
  const githubToken = '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';
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${githubToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json'
    },
    body: JSON.stringify({
      source: {
        branch: 'main',
        path: '/'
      }
    })
  });

  if (!response.ok && response.status !== 409) {
    throw new Error(`Failed to enable GitHub Pages: ${response.status}`);
  }

  return response.status === 409 ? { already_exists: true } : await response.json();
}

async function createBitlyLink(longUrl: string) {
  const bitlyToken = '4fe7d43aa8957fee55e6907556dc39c4f7e72d90';
  const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${bitlyToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      long_url: longUrl,
      title: 'Zeus AI Generated Site'
    })
  });

  if (!response.ok) {
    throw new Error(`Bit.ly API error: ${response.status}`);
  }

  return await response.json();
}
