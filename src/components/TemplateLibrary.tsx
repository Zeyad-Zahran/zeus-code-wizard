
import React, { useState } from 'react';
import { Palette, Search, Filter } from 'lucide-react';
import { getAllTemplates, getAllCategories } from '../utils/templateManager';

interface TemplateLibraryProps {
  onTemplateSelect: (code: string) => void;
  onTabChange: (tab: string) => void;
}

export const TemplateLibrary = ({ onTemplateSelect, onTabChange }: TemplateLibraryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const allTemplates = getAllTemplates();
  const categories = ['All', ...getAllCategories()];

  const filteredTemplates = allTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template: typeof allTemplates[0]) => {
    onTemplateSelect(template.code);
    onTabChange('editor');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Template Library</h2>
        <p className="text-slate-400">Choose from our collection of {allTemplates.length}+ professional templates</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-slate-400 text-sm">
        Showing {filteredTemplates.length} of {allTemplates.length} templates
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-slate-600/50 transition-all cursor-pointer group"
            onClick={() => handleTemplateSelect(template)}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${template.color} text-white flex-shrink-0`}>
                {template.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors truncate">
                    {template.title}
                  </h3>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                    {template.category}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{template.description}</p>
                
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  Use Template →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">No templates found matching your criteria</div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Clear filters
          </button>
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
        </ul>
      </div>
    </div>
  );
};
