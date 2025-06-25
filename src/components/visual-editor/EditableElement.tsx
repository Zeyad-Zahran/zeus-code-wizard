
import React, { useState, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Trash2, Copy, Move } from 'lucide-react';
import { EditorElement } from '../../hooks/useEditorStore';

interface EditableElementProps {
  element: EditorElement;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (updates: Partial<EditorElement>) => void;
  onDelete: () => void;
  isPreviewMode: boolean;
}

export const EditableElement = ({
  element,
  isSelected,
  onSelect,
  onUpdate,
  onDelete,
  isPreviewMode
}: EditableElementProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [{ isDrag }, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { id: element.id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  }));

  const handleDoubleClick = () => {
    if (!isPreviewMode) {
      setIsEditing(true);
    }
  };

  const handleContentChange = (content: string) => {
    onUpdate({ content });
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
      if (contentRef.current) {
        handleContentChange(contentRef.current.innerText);
      }
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  const renderElement = () => {
    const commonProps = {
      style: {
        ...element.styles,
        position: 'absolute' as const,
        left: element.position.x,
        top: element.position.y,
        cursor: isPreviewMode ? 'default' : 'pointer',
        outline: isSelected && !isPreviewMode ? '2px solid #3B82F6' : 'none',
      },
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isPreviewMode) {
          onSelect();
        }
      },
      onDoubleClick: handleDoubleClick,
    };

    if (isEditing && !isPreviewMode) {
      return (
        <div
          {...commonProps}
          ref={contentRef}
          contentEditable
          suppressContentEditableWarning
          onBlur={() => {
            if (contentRef.current) {
              handleContentChange(contentRef.current.innerText);
            }
          }}
          onKeyDown={handleKeyDown}
          dangerouslySetInnerHTML={{ __html: element.content }}
        />
      );
    }

    switch (element.type) {
      case 'heading':
        const HeadingTag = `h${element.props.level || 1}` as keyof JSX.IntrinsicElements;
        return <HeadingTag {...commonProps}>{element.content}</HeadingTag>;
      
      case 'paragraph':
        return <p {...commonProps}>{element.content}</p>;
      
      case 'button':
        return <button {...commonProps}>{element.content}</button>;
      
      case 'image':
        return (
          <img
            {...commonProps}
            src={element.props.src || 'https://via.placeholder.com/200x150'}
            alt={element.props.alt || 'Image'}
          />
        );
      
      case 'link':
        return (
          <a {...commonProps} href={element.props.href || '#'}>
            {element.content}
          </a>
        );
      
      case 'video':
        return (
          <video
            {...commonProps}
            controls
            width={element.props.width || 400}
            height={element.props.height || 300}
          >
            <source src={element.props.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      
      default:
        return <div {...commonProps}>{element.content}</div>;
    }
  };

  return (
    <div
      ref={!isPreviewMode ? drag : undefined}
      className={`relative ${isDrag ? 'opacity-50' : ''}`}
    >
      {renderElement()}
      
      {isSelected && !isPreviewMode && (
        <div className="absolute -top-8 left-0 flex space-x-1 bg-blue-600 text-white text-xs rounded px-2 py-1 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="hover:bg-blue-700 p-1 rounded"
          >
            <Trash2 className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Duplicate functionality would be handled by parent
            }}
            className="hover:bg-blue-700 p-1 rounded"
          >
            <Copy className="w-3 h-3" />
          </button>
          <Move className="w-3 h-3 cursor-move" />
        </div>
      )}
    </div>
  );
};
