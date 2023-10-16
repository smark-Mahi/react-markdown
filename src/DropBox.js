import { useDropzone } from "react-dropzone";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};
const Container = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  borderWidth: "2px",
  borderRadius: "10px",
  borderColor: `${(props) => getColor(props)}`,
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "black",
  fontWeight: "bold",
  fontSize: "1.4rem",
  outline: "none",
  transition: "border 0.24s ease-in-out",
};
function DropBox({ onDrop }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ));
  return (
    <>
      {" "}
      <section className="dropbox">
        <Container
          className="dropbox"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button type="button" className="btn" onClick={open}>
            Click to select file
          </button>
        </Container>
      </section>
      <aside>
        <h4>List</h4>
        <p>{lists}</p>
      </aside>
    </>
  );
}
export default DropBox;
