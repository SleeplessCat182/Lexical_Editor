import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { useEditor } from "../EditorProvider";
import { INSERT_IMAGE_COMMAND } from "../plugins/ImagesPlugin";
import ButtonStyle from "./uploadbutton.module.css";

export default function Button({ id }) {
  // const [editor] = useLexicalComposerContext();
  const editor = useEditor(id);
  console.log(`${id}: ${editor}`);
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (src !== "") {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        altText: "Locally uploaded",
        src: src,
        width: "40%",
        height: "auto",
      });
    }
  }, [src, editor]);

  const encodeImage = (e) => {
    if (e.files !== null) {
      const uploadedFile = e.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onloadend = function () {
        setSrc(reader.result);
      };
    }
  };

  return (
    <div className={ButtonStyle.buttons}>
      <label htmlFor="file">
        <BsImages className={ButtonStyle.icon} />
      </label>
      <input
        className={ButtonStyle.upload_button}
        type="file"
        id="file"
        onChange={(e) => {
          encodeImage(e.target);
        }}
      />
    </div>
  );
}
