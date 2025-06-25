
import React, { forwardRef } from 'react';
import { useDrop } from 'react-dnd';
import { EditableElement } from './EditableElement';
import { EditorElement } from '../../hooks/useEditorStore';

interface CanvasProps {
  elements: EditorElement[];
  selectedElement: EditorElement | null;
  onSelectElement: (element: EditorElement | null) => void;
  onUpdateElement: (id: string, updates: Partial<EditorElement>) => void;
  onDeleteElement: (id: string) => void;
  isPreviewMode: boolean;
}

export const Canvas = forwardRef<HTMLDivElement, CanvasProps>(({
  elements,
  selectedElement,
  onSelectElement,
  onUpdateElement,
  onDeleteElement,
  isPreviewMode
}, ref) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TOOL',
    drop: (item: { type: string }, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset && ref && 'current' in ref && ref.current) {
        const canvasRect = ref.current.getBoundingClientRect();
        const x = offset.x - canvasRect.left;
        const y = offset.y - canvasRect.top;
        
        // This would be handled by the parent component
        console.log('Drop at:', { x, y, type: item.type });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectElement(null);
    }
  };

  return (
    <div
      ref={(node) => {
        drop(node);
        if (ref && 'current' in ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      }}
      className={`flex-1 relative bg-white overflow-auto ${
        isOver ? 'bg-blue-50' : ''
      } ${isPreviewMode ? '' : 'border-2 border-dashed border-gray-300'}`}
      onClick={handleCanvasClick}
      style={{ minHeight: '600px' }}
    >
      {!isPreviewMode && elements.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <p className="text-lg mb-2">Drop elements here to start building</p>
            <p className="text-sm">Or click on tools in the toolbox</p>
          </div>
        </div>
      )}
      
      {elements.map((element) => (
        <EditableElement
          key={element.id}
          element={element}
          isSelected={selectedElement?.id === element.id}
          onSelect={() => onSelectElement(element)}
          onUpdate={(updates) => onUpdateElement(element.id, updates)}
          onDelete={() => onDeleteElement(element.id)}
          isPreviewMode={isPreviewMode}
        />
      ))}
    </div>
  );
});

Canvas.displayName = 'Canvas';
