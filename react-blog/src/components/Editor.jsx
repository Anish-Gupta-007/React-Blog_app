import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function Editor({ value, onChange }) {
  return (
    <div className="editor-wrap ">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
}
