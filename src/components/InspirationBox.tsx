
import React, { useState, useEffect } from 'react';
import { Lightbulb, Sparkles, TrendingUp, Palette, Layout, Zap } from 'lucide-react';

export const InspirationBox = () => {
  const [currentCategory, setCurrentCategory] = useState('trending');
  const [inspirations, setInspirations] = useState<any[]>([]);

  const categories = {
    trending: { icon: TrendingUp, label: 'Trending Designs' },
    layouts: { icon: Layout, label: 'Layout Ideas' },
    colors: { icon: Palette, label: 'Color Schemes' },
    animations: { icon: Zap, label: 'Animation Effects' }
  };

  const inspirationData = {
    trending: [
      {
        title: 'Glassmorphism Hero Section',
        description: 'Translucent cards with backdrop blur effects',
        code: 'Create a hero section with glassmorphism design using backdrop-filter and semi-transparent backgrounds'
      },
      {
        title: 'Dark Mode Dashboard',
        description: 'Professional dark theme with neon accents',
        code: 'Build a modern dashboard with dark theme, sidebar navigation, and colorful data visualizations'
      },
      {
        title: 'Animated Landing Page',
        description: 'Smooth scroll animations and micro-interactions',
        code: 'Design a landing page with scroll-triggered animations and interactive elements'
      }
    ],
    layouts: [
      {
        title: 'Card Grid Layout',
        description: 'Responsive grid with hover effects',
        code: 'Create a responsive card grid layout with CSS Grid and hover animations'
      },
      {
        title: 'Split Screen Design',
        description: 'Two-column layout with contrasting sections',
        code: 'Build a split-screen layout with different background colors and content alignment'
      },
      {
        title: 'Magazine Style Blog',
        description: 'Multi-column layout with featured articles',
        code: 'Design a magazine-style blog layout with featured posts and category filters'
      }
    ],
    colors: [
      {
        title: 'Gradient Combinations',
        description: 'Beautiful gradient color schemes',
        code: 'Apply modern gradient backgrounds using CSS gradients with vibrant color combinations'
      },
      {
        title: 'Monochromatic Palette',
        description: 'Single color with multiple shades',
        code: 'Create a design using a monochromatic color palette with various tints and shades'
      },
      {
        title: 'Neon Cyberpunk Theme',
        description: 'Bright neon colors on dark backgrounds',
        code: 'Design a cyberpunk-themed interface with neon colors, glows, and futuristic elements'
      }
    ],
    animations: [
      {
        title: 'Loading Animations',
        description: 'Creative loading spinners and progress bars',
        code: 'Create animated loading indicators with CSS animations and SVG graphics'
      },
      {
        title: 'Page Transitions',
        description: 'Smooth transitions between sections',
        code: 'Add smooth page transitions and section reveals using CSS transitions and transforms'
      },
      {
        title: 'Interactive Buttons',
        description: 'Buttons with hover and click animations',
        code: 'Design interactive buttons with hover effects, ripple animations, and state changes'
      }
    ]
  };

  useEffect(() => {
    setInspirations(inspirationData[currentCategory as keyof typeof inspirationData]);
  }, [currentCategory]);

  const handleUseInspiration = (inspiration: any) => {
    // This would integrate with the AI panel to generate code based on inspiration
    console.log('Using inspiration:', inspiration);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Lightbulb className="w-8 h-8 text-yellow-400" />
          <h3 className="text-2xl font-bold text-white">Inspiration Box</h3>
        </div>
        <p className="text-slate-400">Discover trending designs and get inspired for your next project</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(categories).map(([key, category]) => {
          const IconComponent = category.icon;
          return (
            <button
              key={key}
              onClick={() => setCurrentCategory(key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                currentCategory === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Inspiration Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inspirations.map((inspiration, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-slate-600 transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                {inspiration.title}
              </h4>
              <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-slate-400 mb-4">{inspiration.description}</p>
            <button
              onClick={() => handleUseInspiration(inspiration)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all text-sm font-medium"
            >
              Use This Inspiration
            </button>
          </div>
        ))}
      </div>

      {/* AI Suggestion */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h4 className="font-semibold text-white">AI Suggestion</h4>
        </div>
        <p className="text-sm text-slate-300">
          Try combining glassmorphism with dark mode themes - they're trending in 2024! 
          Ask me: "Create a glassmorphism card with dark background and neon accents"
        </p>
      </div>
    </div>
  );
};
