import TreeViewPlugin from "./plugins/TreeViewPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import initialTheme from "./themes/initialTheme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { ImageNode } from "./nodes/ImageNode";
import ImagesPlugin from "./plugins/ImagesPlugin";
import Button from "./Buttons/UploadButton";

export default function Editor() {
  const editorConfig = {
    theme: initialTheme,
    onError(error) {
      throw error;
    },
    nodes: [ImageNode],
  };
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <ToolbarPlugin />
      <div>
        <RichTextPlugin contentEditable={<ContentEditable />} />
      </div>
      <AutoFocusPlugin />
      <ImagesPlugin />
      <Button />
      <TreeViewPlugin />
    </LexicalComposer>
  );
}
