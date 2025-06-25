
import React from 'react';
import { EditorElement } from '../../hooks/useEditorStore';
import { Trash2, Copy, Palette, Type, Layout } from 'lucide-react';

interface PropertiesPanelProps {
  element: EditorElement;
  onUpdate: (id: string, updates: Partial<EditorElement>) => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const PropertiesPanel = ({ element, onUpdate, onDuplicate, onDelete }: PropertiesPanelProps) => {
  const updateStyles = (styleUpdates: Partial<EditorElement['styles']>) => {
    onUpdate(element.id, {
      styles: { ...element.styles, ...styleUpdates }
    });
  };

  const updateProps = (propUpdates: Partial<EditorElement['props']>) => {
    onUpdate(element.id, {
      props: { ...element.props, ...propUpdates }
    });
  };

  const updateContent = (content: string) => {
    onUpdate(element.id, { content });
  };

  return (
    <div className="w-80 bg-white border-l border-gray-300 p-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Properties</h3>
        <div className="flex space-x-2">
          <button
            onClick={onDuplicate}
            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Type className="w-4 h-4 inline mr-1" />
            Content
          </label>
          {element.type === 'image' ? (
            <div className="space-y-2">
              <input
                type="text"
                value={element.props.src || ''}
                onChange={(e) => updateProps({ src: e.target.value })}
                placeholder="Image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={element.props.alt || ''}
                onChange={(e) => updateProps({ alt: e.target.value })}
                placeholder="Alt text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          ) : element.type === 'link' ? (
            <div className="space-y-2">
              <input
                type="text"
                value={element.content}
                onChange={(e) => updateContent(e.target.value)}
                placeholder="Link text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={element.props.href || ''}
                onChange={(e) => updateProps({ href: e.target.value })}
                placeholder="URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          ) : (
            <textarea
              value={element.content}
              onChange={(e) => updateContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              rows={3}
            />
          )}
        </div>

        {/* Typography Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Palette className="w-4 h-4 inline mr-1" />
            Typography
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Font Size</label>
              <input
                type="text"
                value={element.styles.fontSize || '16px'}
                onChange={(e) => updateStyles({ fontSize: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Font Weight</label>
              <select
                value={element.styles.fontWeight || 'normal'}
                onChange={(e) => updateStyles({ fontWeight: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="lighter">Light</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text Color</label>
              <input
                type="color"
                value={element.styles.color || '#000000'}
                onChange={(e) => updateStyles({ color: e.target.value })}
                className="w-full h-8 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Align</label>
              <select
                value={element.styles.textAlign || 'left'}
                onChange={(e) => updateStyles({ textAlign: e.target.value as 'left' | 'center' | 'right' })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Layout className="w-4 h-4 inline mr-1" />
            Layout
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Width</label>
              <input
                type="text"
                value={element.styles.width || 'auto'}
                onChange={(e) => updateStyles({ width: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Height</label>
              <input
                type="text"
                value={element.styles.height || 'auto'}
                onChange={(e) => updateStyles({ height: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Padding</label>
              <input
                type="text"
                value={element.styles.padding || '8px'}
                onChange={(e) => updateStyles({ padding: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Margin</label>
              <input
                type="text"
                value={element.styles.margin || '4px'}
                onChange={(e) => updateStyles({ margin: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Color</label>
              <input
                type="color"
                value={element.styles.backgroundColor || '#ffffff'}
                onChange={(e) => updateStyles({ backgroundColor: e.target.value })}
                className="w-full h-8 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Border Radius</label>
              <input
                type="text"
                value={element.styles.borderRadius || '0px'}
                onChange={(e) => updateStyles({ borderRadius: e.target.value })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        </div>

        {/* Position Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs text-gray-600 mb-1">X</label>
              <input
                type="number"
                value={element.position.x}
                onChange={(e) => onUpdate(element.id, {
                  position: { ...element.position, x: parseInt(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Y</label>
              <input
                type="number"
                value={element.position.y}
                onChange={(e) => onUpdate(element.id, {
                  position: { ...element.position, y: parseInt(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
