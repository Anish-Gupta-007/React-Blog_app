import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext.jsx";
import Editor from "../components/Editor.jsx";

export default function CreateBlog() {
  const { create } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title required");
    create({ title, content });
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={submit} className="card">
        <div className="form-row">
          <label className="muted">Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
          />
        </div>

        <div className="form-row">
          <label className="muted">Content</label>
          <Editor value={content} onChange={setContent} />
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button
            className="btn"
            type="button"
            onClick={() => {
              setTitle("");
              setContent("");
            }}
          >
            Reset
          </button>
          <button
            className="btn"
            type="submit"
            style={{ background: "#5A67D8", color: "#fff" }}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
