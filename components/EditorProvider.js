import {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";

const EditorContext = createContext(null);

export const EditorProvider = ({ children }) => {
  const [editors, setEditors] = useState({});

  const createEditor = useCallback((id, editor) => {
    setEditors((editors) => {
      if (editors[id]) return editors;
      return { ...editors, [id]: editor };
    });
  }, []);

  const deleteEditor = useCallback((id) => {
    setEditors((editors) => {
      if (!editors[id]) return editors;
      const { [id]: _, ...rest } = editors;
      return rest;
    });
  }, []);

  const value = useMemo(() => {
    return {
      editors,
      createEditor,
      deleteEditor,
    };
  }, [editors, createEditor, deleteEditor]);

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export const useEditors = () => {
  const context = useContext(EditorContext);
  if (context === null) {
    throw new Error(
      `The \`useEditors\` hook must be used inside the <EditorProvider> component's context.`
    );
  }
  const { createEditor, deleteEditor } = context;
  return { createEditor, deleteEditor };
};

export const useEditor = (id) => {
  const context = useContext(EditorContext);
  if (context === null) {
    throw new Error(
      `The \`useEditor\` hook must be used inside the <EditorProvider> component's context.`
    );
  }
  return context.editors[id] || null;
};
