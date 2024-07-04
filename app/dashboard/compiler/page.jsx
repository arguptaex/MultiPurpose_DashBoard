"use client";
import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import styles from "@/components/dashboard/compiler/compiler.module.css";
function App() {
  const [code, setCode] = useState(" // write your code");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("javascript");

  useEffect(() => {
    console.log(1);
    if (localStorage.getItem("code")) {
      const storedCode = localStorage.getItem("code");
      setCode(storedCode);
    }
    if (localStorage.getItem("lang")) {
      const storedLang = localStorage.getItem("lang");
      setLang(storedLang);
    }
  }, []);

  const compileCode = async () => {
    const response = await fetch("/api/compiler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, lang }),
    });

    const data = await response.json();

    console.log("check output:", data, data.data.output);
    setOutput(data.data.output);
  };
  return (
    <div className={styles.codeEditorApp}>
      <h1>Online Compiler</h1>

      <select
        name="lang"
        id="lang"
        value={lang}
        onChange={(e) => {
          localStorage.setItem("lang", e.target.value);
          return setLang(e.target.value);
        }}
      >
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>

      <div className={styles.codeEditor}>
        <Editor
          height="50vh"
          language={lang}
          // defaultLanguage={lang}
          defaultValue={code}
          theme="vs-dark"
          onChange={(value) => {
            localStorage.setItem("code", value);
            setCode(value);
          }}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
            wordWrap: "on",
            tabSize: 2,
            cursorStyle: "line",
            folding: true,
            renderWhitespace: "all",
          }}
        />
      </div>
      <br />
      <button onClick={compileCode}>Compile & Run</button>
      <h2>Output:</h2>
      <pre className={styles.outputBox}>{output}</pre>
    </div>
  );
}

export default App;
