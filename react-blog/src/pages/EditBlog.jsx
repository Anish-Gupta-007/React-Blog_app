import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext.jsx";
import Editor from "../components/Editor.jsx";

export default function EditBlog() {
  const { id } = useParams();
  const { blogs, update } = useContext(BlogContext);
  const post = blogs.find((p) => p.id === id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setContent(post.content || "");
    }
  }, [post]);

  const submit = (e) => {
    e.preventDefault();
    update(id, { title, content });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={submit} className="card">
        <div className="form-row">
          <label className="muted">Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label className="muted">Content</label>
          <Editor value={content} onChange={setContent} />
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button
            className="btn"
            type="submit"
            style={{ background: "#38B2AC", color: "#fff" }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
