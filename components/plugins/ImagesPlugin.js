import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  $isRootNode,
  $setSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
} from "lexical";
import { useEffect } from "react";
import { useEditor } from "../EditorProvider";
import { $createImageNode, ImageNode } from "../nodes/ImageNode";

export const INSERT_IMAGE_COMMAND = createCommand();

export default function ImagesPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    }

    return editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          if ($isRootNode(selection.anchor.getNode())) {
            selection.insertParagraph();
          }
          const imageNode = $createImageNode(payload);
          selection.insertNodes([imageNode]);
        }
        // $setSelection(null);
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);
  return null;
}
