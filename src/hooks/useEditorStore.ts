
import { useState, useCallback } from 'react';

export interface EditorElement {
  id: string;
  type: string;
  content: string;
  styles: {
    fontSize?: string;
    fontFamily?: string;
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    textAlign?: 'left' | 'center' | 'right';
    fontWeight?: string;
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    position?: string;
    top?: string;
    left?: string;
    zIndex?: number;
    [key: string]: any;
  };
  props: {
    src?: string;
    href?: string;
    alt?: string;
    placeholder?: string;
    [key: string]: any;
  };
  position: { x: number; y: number };
  children?: EditorElement[];
}

export const useEditorStore = () => {
  const [elements, setElements] = useState<EditorElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<EditorElement | null>(null);
  const [history, setHistory] = useState<EditorElement[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const saveState = useCallback((newElements: EditorElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...newElements]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const addElement = useCallback((element: Omit<EditorElement, 'id'>) => {
    const newElement: EditorElement = {
      ...element,
      id: `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    
    const newElements = [...elements, newElement];
    setElements(newElements);
    saveState(newElements);
    setSelectedElement(newElement);
  }, [elements, saveState]);

  const updateElement = useCallback((id: string, updates: Partial<EditorElement>) => {
    const newElements = elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    );
    setElements(newElements);
    saveState(newElements);
    
    if (selectedElement?.id === id) {
      setSelectedElement({ ...selectedElement, ...updates });
    }
  }, [elements, selectedElement, saveState]);

  const deleteElement = useCallback((id: string) => {
    const newElements = elements.filter(el => el.id !== id);
    setElements(newElements);
    saveState(newElements);
    
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  }, [elements, selectedElement, saveState]);

  const selectElement = useCallback((element: EditorElement | null) => {
    setSelectedElement(element);
  }, []);

  const duplicateElement = useCallback((id: string) => {
    const element = elements.find(el => el.id === id);
    if (element) {
      const newElement: EditorElement = {
        ...element,
        id: `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        position: {
          x: element.position.x + 20,
          y: element.position.y + 20
        }
      };
      
      const newElements = [...elements, newElement];
      setElements(newElements);
      saveState(newElements);
      setSelectedElement(newElement);
    }
  }, [elements, saveState]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setElements([...history[newIndex]]);
      setSelectedElement(null);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setElements([...history[newIndex]]);
      setSelectedElement(null);
    }
  }, [history, historyIndex]);

  const exportToHTML = useCallback(() => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Website</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="relative">
`;

    elements.forEach(element => {
      html += generateElementHTML(element);
    });

    html += `
</body>
</html>`;
    
    return html;
  }, [elements]);

  const generateElementHTML = (element: EditorElement): string => {
    const styles = Object.entries(element.styles)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
      .join('; ');
    
    const position = `position: absolute; left: ${element.position.x}px; top: ${element.position.y}px;`;
    const combinedStyles = `${styles}; ${position}`;

    switch (element.type) {
      case 'heading':
        const level = element.props.level || 1;
        return `<h${level} style="${combinedStyles}">${element.content}</h${level}>`;
      case 'paragraph':
        return `<p style="${combinedStyles}">${element.content}</p>`;
      case 'button':
        return `<button style="${combinedStyles}" onclick="${element.props.onClick || ''}">${element.content}</button>`;
      case 'image':
        return `<img src="${element.props.src || ''}" alt="${element.props.alt || ''}" style="${combinedStyles}">`;
      case 'link':
        return `<a href="${element.props.href || '#'}" style="${combinedStyles}">${element.content}</a>`;
      default:
        return `<div style="${combinedStyles}">${element.content}</div>`;
    }
  };

  const saveToStorage = useCallback(() => {
    localStorage.setItem('visualEditor_elements', JSON.stringify(elements));
    localStorage.setItem('visualEditor_history', JSON.stringify(history));
  }, [elements, history]);

  const loadFromStorage = useCallback(() => {
    const savedElements = localStorage.getItem('visualEditor_elements');
    const savedHistory = localStorage.getItem('visualEditor_history');
    
    if (savedElements) {
      const parsedElements = JSON.parse(savedElements);
      setElements(parsedElements);
    }
    
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      setHistory(parsedHistory);
      setHistoryIndex(parsedHistory.length - 1);
    }
  }, []);

  return {
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
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    exportToHTML,
    saveToStorage,
    loadFromStorage
  };
};
