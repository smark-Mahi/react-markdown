import React, {  useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop }) => {
  const [images, setImages] = useState([]);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragAccept,
    isDragReject,
    i,
  } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  useEffect(() => {
    setImages([...images, ...acceptedFiles]);
  }, [acceptedFiles]);
  console.log(images, "imds");

  return (
    <>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          textAlign: "center",
          padding: "20px",
          border: "3px blue dashed",
          width: "60%",
          margin: "auto",
        }}
      >
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          <p className="dropzone-content">
            Drag’n’drop some files here, or click to select files
          </p>
          <button type="button" className="btn">
            Click to select files
          </button>
        </div>
      </div>
      <aside>
        {images.map((files, i) => (
          <ul key={i}>
            <li>
              {files.path} - {files.size} bytes
            </li>
          </ul>
        ))}
      </aside>
    </>
  );
};

export default Dropzone;
