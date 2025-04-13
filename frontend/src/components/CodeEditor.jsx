import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }) {
  return (
    <Editor
      height="80vh"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={(val) => setCode(val)}
    />
  );
}
