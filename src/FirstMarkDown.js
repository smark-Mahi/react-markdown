import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const FirstMarkDown = () => {
  const [markDown, setMarkDown] = useState("# markdown");
  return (
    <div style={{ marginTop: "10px" }}>
      <textarea
        value={markDown}
        onChange={(e) => {
          setMarkDown(e.target.value);
        }}
        cols="60"
        rows="20"
      ></textarea>
      <section>
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </section>
    </div>
  );
};

export default FirstMarkDown;
