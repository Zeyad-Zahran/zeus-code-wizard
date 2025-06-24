
import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, Upload, Github } from 'lucide-react';
import { toast } from 'sonner';

interface ResponsivePreviewProps {
  code: string;
}

export const ResponsivePreview = ({ code }: ResponsivePreviewProps) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showExternal, setShowExternal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

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
      newWindow.document.write(code);
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

  const handleQuickUpload = async () => {
    if (!code) {
      toast.error('No code to upload');
      return;
    }

    setIsUploading(true);
    
    try {
      const repoName = `zeus-ai-site-${Date.now()}`;
      
      toast.success('🚀 Creating GitHub repository...');
      const repo = await createGitHubRepo(repoName);

      toast.success('📤 Uploading website files...');
      await uploadFileToRepo(repo.owner.login, repo.name, 'index.html', code);

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
            onClick={handleQuickUpload}
            disabled={isUploading || !code}
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
            srcDoc={code || '<html><body><div style="padding: 20px; text-align: center; color: #666;">No code to preview</div></body></html>'}
            className="w-full h-full border-0 rounded-lg"
            title="Website Preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};
