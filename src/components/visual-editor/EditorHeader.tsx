
import React from 'react';
import { Save, X, Download, Undo, Redo, Eye, EyeOff } from 'lucide-react';

interface EditorHeaderProps {
  onSave: () => void;
  onCancel: () => void;
  onExport: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  isPreviewMode: boolean;
  onTogglePreview: () => void;
}

export const EditorHeader = ({
  onSave,
  onCancel,
  onExport,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  isPreviewMode,
  onTogglePreview
}: EditorHeaderProps) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold">Visual Editor</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={onTogglePreview}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
        >
          {isPreviewMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{isPreviewMode ? 'Edit Mode' : 'Preview'}</span>
        </button>
        
        <button
          onClick={onExport}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
        
        <button
          onClick={onSave}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
        
        <button
          onClick={onCancel}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};
