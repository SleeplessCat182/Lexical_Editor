import Editor from "../components/Editor";
import { EditorProvider } from "../components/EditorProvider";

export default function Home() {
  return (
    <div>
      <EditorProvider>
        <div>
          <Editor id={"first"} />
        </div>
        <div>
          <Editor id={"second"} />
        </div>
      </EditorProvider>
    </div>
  );
}
