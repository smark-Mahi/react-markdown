import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../node_modules/react-quill/dist/quill.snow.css";
import Parser from "html-react-parser";

const ReactQuills = () => {
  const [body, setBody] = useState("");
  const textRef = useRef(null);
  const handleBody = (e) => {
    setBody(e);
    console.log(e, textRef.current.getText());
  };
  return (
    <div>
      <ReactQuill
        placeholder="write..."
        modules={ReactQuills.modules}
        formats={ReactQuills.formats}
        onChange={handleBody}
        value={body}
        ref={textRef}
        style={{ height: "200px", width: "300px" }}
      />
    </div>
  );
};

ReactQuills.modules = {
  toolbar: [
    // [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    // [{ list: "ordered" }, { list: "bullet" }],
    // ["link", "images", "video"],
    // ["clean"],
    // ["code-block"],
  ],
};
ReactQuills.formats = [
  // "header",
  // "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  // "list",
  // "bullet",
  // "link",
  // "images",
  // "video",
  // "code-block",
];

export default ReactQuills;
