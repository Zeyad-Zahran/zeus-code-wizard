
import React from 'react';
import { useDrag } from 'react-dnd';
import { 
  Type, AlignLeft, Square, Image, Video, Star, Link, 
  FileText, CheckSquare, List, ListOrdered, Map, 
  Grid3x3, Navigation, Minus, Heading1, Heading2, 
  Heading3, Plus
} from 'lucide-react';
import { EditorElement } from '../../hooks/useEditorStore';

interface ToolboxProps {
  onAddElement: (element: Omit<EditorElement, 'id'>) => void;
}

interface DraggableToolProps {
  type: string;
  icon: React.ComponentType<any>;
  label: string;
  onAddElement: (element: Omit<EditorElement, 'id'>) => void;
}

const DraggableTool = ({ type, icon: Icon, label, onAddElement }: DraggableToolProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TOOL',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const createElement = () => {
    const baseElement = {
      type,
      content: getDefaultContent(type),
      styles: getDefaultStyles(type),
      props: getDefaultProps(type),
      position: { x: 100, y: 100 }
    };
    onAddElement(baseElement);
  };

  return (
    <div
      ref={drag}
      onClick={createElement}
      className={`flex flex-col items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <Icon className="w-6 h-6 text-gray-600 mb-1" />
      <span className="text-xs text-gray-700 text-center">{label}</span>
    </div>
  );
};

const getDefaultContent = (type: string): string => {
  switch (type) {
    case 'heading': return 'Heading Text';
    case 'paragraph': return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    case 'button': return 'Click Me';
    case 'link': return 'Link Text';
    case 'list': return 'List Item 1\nList Item 2\nList Item 3';
    default: return 'Element Content';
  }
};

const getDefaultStyles = (type: string) => {
  const baseStyles = {
    fontFamily: 'Arial, sans-serif',
    color: '#000000',
    backgroundColor: 'transparent',
    padding: '8px',
    margin: '4px',
  };

  switch (type) {
    case 'heading':
      return { ...baseStyles, fontSize: '32px', fontWeight: 'bold' };
    case 'paragraph':
      return { ...baseStyles, fontSize: '16px', lineHeight: '1.6' };
    case 'button':
      return { 
        ...baseStyles, 
        backgroundColor: '#3B82F6', 
        color: '#FFFFFF', 
        border: 'none', 
        borderRadius: '6px',
        padding: '12px 24px',
        cursor: 'pointer'
      };
    case 'image':
      return { ...baseStyles, width: '200px', height: 'auto' };
    default:
      return baseStyles;
  }
};

const getDefaultProps = (type: string) => {
  switch (type) {
    case 'heading':
      return { level: 1 };
    case 'image':
      return { src: 'https://via.placeholder.com/200x150', alt: 'Placeholder Image' };
    case 'link':
      return { href: '#' };
    case 'video':
      return { src: '', width: '400', height: '300' };
    default:
      return {};
  }
};

export const Toolbox = ({ onAddElement }: ToolboxProps) => {
  const tools = [
    { type: 'heading', icon: Heading1, label: 'Heading' },
    { type: 'paragraph', icon: AlignLeft, label: 'Paragraph' },
    { type: 'button', icon: Square, label: 'Button' },
    { type: 'image', icon: Image, label: 'Image' },
    { type: 'video', icon: Video, label: 'Video' },
    { type: 'icon', icon: Star, label: 'Icon' },
    { type: 'link', icon: Link, label: 'Link' },
    { type: 'form', icon: FileText, label: 'Form' },
    { type: 'input', icon: Minus, label: 'Input' },
    { type: 'checkbox', icon: CheckSquare, label: 'Checkbox' },
    { type: 'list', icon: List, label: 'List' },
    { type: 'ordered-list', icon: ListOrdered, label: 'Ordered List' },
    { type: 'map', icon: Map, label: 'Map' },
    { type: 'grid', icon: Grid3x3, label: 'Grid' },
    { type: 'navbar', icon: Navigation, label: 'Navbar' },
    { type: 'footer', icon: Minus, label: 'Footer' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-300 p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Toolbox</h3>
      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool) => (
          <DraggableTool
            key={tool.type}
            type={tool.type}
            icon={tool.icon}
            label={tool.label}
            onAddElement={onAddElement}
          />
        ))}
      </div>
    </div>
  );
};
