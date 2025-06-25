
import React, { useState } from 'react';
import { Palette, Search } from 'lucide-react';
import { getAllTemplates, getTemplatesByCategory, searchTemplates } from '../utils/templateManager';
import { Template } from '../types/template';

interface TemplateLibraryProps {
  onTemplateSelect: (code: string) => void;
  onTabChange: (tab: string) => void;
}

export const TemplateLibrary = ({ onTemplateSelect, onTabChange }: TemplateLibraryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = getTemplatesByCategory();
  const allTemplates = getAllTemplates();

  const getFilteredTemplates = (): Template[] => {
    let templates = allTemplates;

    if (searchQuery) {
      templates = searchTemplates(searchQuery);
    }

    if (selectedCategory !== 'all') {
      templates = templates.filter(template => 
        template.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return templates;
  };

  const handleTemplateSelect = (template: Template) => {
    onTemplateSelect(template.code);
    onTabChange('editor');
  };

  const filteredTemplates = getFilteredTemplates();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Template Library</h2>
        <p className="text-slate-400">Choose from our collection of professional templates</p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {category.name} ({category.templates.length})
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all cursor-pointer group"
            onClick={() => handleTemplateSelect(template)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${template.color} text-white`}>
                {template.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {template.title}
                  </h3>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                    {template.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Use Template →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400">No templates found matching your criteria.</p>
        </div>
      )}

      <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg p-4 border border-yellow-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Palette className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">Customization Tips</h3>
        </div>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>• All templates are fully customizable and responsive</li>
          <li>• Built with Bootstrap 5 and modern CSS</li>
          <li>• Include Font Awesome icons and Google Fonts</li>
          <li>• Ready to use with your own content and branding</li>
          <li>• Search and filter to find exactly what you need</li>
        </ul>
      </div>
    </div>
  );
};
