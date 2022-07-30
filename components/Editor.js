import TreeViewPlugin from "./plugins/TreeViewPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import initialTheme from "./themes/initialTheme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { ImageNode } from "./nodes/ImageNode";
import ImagesPlugin from "./plugins/ImagesPlugin";
import Button from "./Buttons/UploadButton";
import { MultipleEditorStorePlugin } from "./plugins/MultipleEditorStorePlugin";

export default function Editor({ id }) {
  const editorConfig = {
    theme: initialTheme,
    onError(error) {
      throw error;
    },
    nodes: [ImageNode],
  };
  // console.log("Created: ", id);
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <ToolbarPlugin />
      <div>
        <RichTextPlugin contentEditable={<ContentEditable />} />
      </div>
      <ImagesPlugin />
      <Button id={id} />
      {/* <OnChangePlugin onChange={onChange} /> */}
      <MultipleEditorStorePlugin id={id} />
      <TreeViewPlugin />
    </LexicalComposer>
  );
}
