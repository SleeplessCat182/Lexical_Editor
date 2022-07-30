import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { useEditors, EditorProvider } from "../EditorProvider";

export function MultipleEditorStorePlugin({ id }) {
  const [editor] = useLexicalComposerContext();
  const editors = useEditors();
  console.log(id);
  useEffect(() => {
    editors.createEditor(id, editor);
    return () => editors.deleteEditor(id);
  }, [id, editor]);
  return null;
}
