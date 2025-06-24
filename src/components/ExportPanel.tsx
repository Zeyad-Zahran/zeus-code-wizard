import React, { useState } from 'react';
import { Download, Github, FileCode, Smartphone, Globe, Upload } from 'lucide-react';
import { toast } from 'sonner';

interface ExportPanelProps {
  code: string;
}

export const ExportPanel = ({ code }: ExportPanelProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const [githubToken] = useState('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');
  const [bitlyToken] = useState('4fe7d43aa8957fee55e6907556dc39c4f7e72d90');

  const exportOptions = [
    { 
      id: 'html', 
      label: 'HTML/CSS/JS', 
      icon: FileCode,
      description: 'Pure web files ready for any hosting'
    },
    { 
      id: 'react', 
      label: 'React Project', 
      icon: Smartphone,
      description: 'Modern React application structure'
    },
    { 
      id: 'wordpress', 
      label: 'WordPress Theme', 
      icon: Globe,
      description: 'Ready-to-install WordPress theme'
    }
  ];

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

    if (!response.ok && response.status !== 409) { // 409 means pages already enabled
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

  const handleExport = async (type: string) => {
    if (!code) {
      toast.error('No code to export');
      return;
    }

    setIsExporting(true);
    
    try {
      let exportContent = code;
      let filename = 'website';
      
      switch (type) {
        case 'html':
          filename = 'website.html';
          break;
        case 'react':
          exportContent = generateReactProject(code);
          filename = 'react-project.zip';
          break;
        case 'wordpress':
          exportContent = generateWordPressTheme(code);
          filename = 'wordpress-theme.zip';
          break;
      }

      const blob = new Blob([exportContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success(`${type.toUpperCase()} export completed!`);
    } catch (error) {
      toast.error('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleGithubUpload = async () => {
    if (!code) {
      toast.error('No code to upload');
      return;
    }

    setIsExporting(true);
    
    try {
      const repoName = `zeus-ai-site-${Date.now()}`;
      
      // Step 1: Create GitHub repository
      toast.success('Creating GitHub repository...');
      const repo = await createGitHubRepo(repoName);
      console.log('Repository created:', repo);

      // Step 2: Upload index.html
      toast.success('Uploading website files...');
      await uploadFileToRepo(repo.owner.login, repo.name, 'index.html', code);

      // Step 3: Enable GitHub Pages
      toast.success('Enabling GitHub Pages...');
      await enableGitHubPages(repo.owner.login, repo.name);

      // Step 4: Create Bit.ly short link
      const pagesUrl = `https://${repo.owner.login.toLowerCase()}.github.io/${repo.name}`;
      
      // Wait a bit for GitHub Pages to be ready
      setTimeout(async () => {
        try {
          toast.success('Creating short link...');
          const bitlyResponse = await createBitlyLink(pagesUrl);
          
          toast.success(`🎉 Website deployed successfully!`);
          toast.success(`📱 Short URL: ${bitlyResponse.link}`);
          
          // Copy short URL to clipboard
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
      console.error('GitHub deployment error:', error);
      toast.error('GitHub deployment failed. Please check your tokens and try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const generateReactProject = (htmlCode: string) => {
    return `// React Project Structure
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      ${htmlCode.replace(/<[^>]*>/g, '')}
    </div>
  );
}

export default App;`;
  };

  const generateWordPressTheme = (htmlCode: string) => {
    return `<?php
// WordPress Theme: Generated by Zeus AI Coder
// style.css
/*
Theme Name: Zeus AI Generated Theme
Description: Auto-generated WordPress theme
Version: 1.0
*/

// index.php
<?php get_header(); ?>
${htmlCode}
<?php get_footer(); ?>`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Export Your Website</h3>
        <p className="text-slate-400">Choose your preferred format and deployment method</p>
      </div>

      {/* Export Options */}
      <div className="grid md:grid-cols-3 gap-4">
        {exportOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <button
              key={option.id}
              onClick={() => handleExport(option.id)}
              disabled={isExporting || !code}
              className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 hover:border-slate-500 rounded-lg p-4 text-left transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center space-x-3 mb-3">
                <IconComponent className="w-6 h-6 text-blue-400" />
                <h4 className="font-semibold text-white">{option.label}</h4>
              </div>
              <p className="text-sm text-slate-400">{option.description}</p>
            </button>
          );
        })}
      </div>

      {/* GitHub Integration */}
      <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 rounded-lg p-4 border border-purple-500/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Github className="w-6 h-6 text-white" />
            <div>
              <h4 className="font-semibold text-white">Automatic GitHub Deployment</h4>
              <p className="text-sm text-slate-400">Create repo, enable Pages & get Bit.ly short link</p>
            </div>
          </div>
          <button
            onClick={handleGithubUpload}
            disabled={isExporting || !code}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
          >
            {isExporting ? 'Deploying...' : 'Deploy & Share'}
          </button>
        </div>
      </div>

      {/* Status */}
      {!code && (
        <div className="text-center text-slate-500 py-8">
          <Download className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Generate or write some code first to enable export options</p>
        </div>
      )}
    </div>
  );
};
