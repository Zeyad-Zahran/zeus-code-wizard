
import React, { useState, useRef, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toolbox } from './visual-editor/Toolbox';
import { Canvas } from './visual-editor/Canvas';
import { PropertiesPanel } from './visual-editor/PropertiesPanel';
import { EditorHeader } from './visual-editor/EditorHeader';
import { useEditorStore } from '../hooks/useEditorStore';
import { toast } from 'sonner';

interface VisualEditorProps {
  initialCode: string;
  onSave: (code: string) => void;
  onCancel: () => void;
}

export const VisualEditor = ({ initialCode, onSave, onCancel }: VisualEditorProps) => {
  const {
    elements,
    selectedElement,
    history,
    addElement,
    updateElement,
    deleteElement,
    selectElement,
    duplicateElement,
    undo,
    redo,
    canUndo,
    canRedo,
    exportToHTML,
    importFromHTML,
    saveToStorage,
    loadFromStorage
  } = useEditorStore();

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleSave = useCallback(() => {
    const html = exportToHTML();
    saveToStorage();
    onSave(html);
    toast.success('Website saved successfully!');
  }, [exportToHTML, saveToStorage, onSave]);

  const handleCancel = useCallback(() => {
    onCancel();
  }, [onCancel]);

  const handleExport = useCallback(() => {
    const html = exportToHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Website exported successfully!');
  }, [exportToHTML]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col bg-gray-100">
        <EditorHeader
          onSave={handleSave}
          onCancel={handleCancel}
          onExport={handleExport}
          onUndo={undo}
          onRedo={redo}
          canUndo={canUndo}
          canRedo={canRedo}
          isPreviewMode={isPreviewMode}
          onTogglePreview={() => setIsPreviewMode(!isPreviewMode)}
        />
        
        <div className="flex-1 flex overflow-hidden">
          {!isPreviewMode && (
            <Toolbox onAddElement={addElement} />
          )}
          
          <div className="flex-1 flex flex-col">
            <Canvas
              ref={canvasRef}
              elements={elements}
              selectedElement={selectedElement}
              onSelectElement={selectElement}
              onUpdateElement={updateElement}
              onDeleteElement={deleteElement}
              isPreviewMode={isPreviewMode}
            />
          </div>
          
          {!isPreviewMode && selectedElement && (
            <PropertiesPanel
              element={selectedElement}
              onUpdate={updateElement}
              onDuplicate={() => duplicateElement(selectedElement.id)}
              onDelete={() => deleteElement(selectedElement.id)}
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
};
