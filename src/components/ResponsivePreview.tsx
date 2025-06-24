
import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink } from 'lucide-react';

interface ResponsivePreviewProps {
  code: string;
}

export const ResponsivePreview = ({ code }: ResponsivePreviewProps) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showExternal, setShowExternal] = useState(false);

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
        
        <button
          onClick={openExternalPreview}
          className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Open External</span>
        </button>
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
