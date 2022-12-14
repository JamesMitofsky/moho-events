import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
// import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { EditorState } from "lexical/LexicalEditorState";

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
// function onChange(editorState: EditorState) {
//   editorState.read(() => {
//     // Read the contents of the EditorState here.
//     const root = $getRoot();
//     const selection = $getSelection();

//     console.log(root, selection);
//   });
// }

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

const initialConfig = {
  namespace: "Details Editor",
  onError,
};

interface Props {
  setValue: any;
  registeredAddress: string;
}

export default function TextEditor({ setValue, registeredAddress }: Props) {
  // push the current form state to React Hook Form management
  function updateState(editorState: EditorState) {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      setValue(registeredAddress, root);
    });
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<span>Enter some text...</span>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <OnChangePlugin onChange={updateState} />

      <HistoryPlugin />
    </LexicalComposer>
  );
}
