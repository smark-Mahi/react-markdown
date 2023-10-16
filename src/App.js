import { useCallback, useId, useState } from "react";
import "./App.css";
import FirstMarkDown from "./FirstMarkDown";
import ReactQuills from "./ReactQuill";
import EmojiPicker from "emoji-picker-react";
import Dropzone from "./Dropzone";
import ImageGrid from "./ImageGrid";

function App() {
  const id = useId();
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: id, src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  //picker
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, settext] = useState("");
  function clickEmoji(emojiData, e) {
    console.log(emojiData, "e");
    settext((prevState) => prevState + emojiData.emoji);
  }
  console.log(text, "emojitext");
  return (
    <div className="App w-[40%]">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          width: "20%",
          marginLeft: "20px",
          gap: "4px",
        }}
      >
        <div style={{ display: "flex", gap: "4px" }}>
          <textarea
            value={text}
            placeholder="write your text..."
            cols="30"
            rows="2"
            style={{
              resize: "none",
              outline: "none",
              background: "transparent",
            }}
            onChange={(e) => settext(e.target.value)}
          ></textarea>
          <span
            onClick={() => setShowEmoji(!showEmoji)}
            style={{ cursor: "pointer" }}
          >
            btn
          </span>
        </div>
        <div style={{ display: "flex" }}>
          {showEmoji && (
            <EmojiPicker
              width={400}
              height={300}
              onEmojiClick={clickEmoji}
              previewConfig={{ showPreview: false }}
              autoFocusSearch={false}
            />
          )}
        </div>
      </div>
      <Dropzone onDrop={onDrop} />
      <ImageGrid images={images} />
      {/* <FirstMarkDown />
      <ReactQuills /> */}
    </div>
  );
}

export default App;
