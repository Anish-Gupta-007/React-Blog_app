import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext.jsx";

export default function ViewBlog() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const post = blogs.find((p) => p.id === id);

  if (!post) return <div className="card">Post not found</div>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{post.title}</h2>
        <div>{new Date(post.date).toLocaleString()}</div>
      </div>
      <div
        className="card"
        style={{ marginTop: 12 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${post.id}`} className="btn edit">
          Edit
        </Link>
        <Link to="/" className="btn" style={{ marginLeft: 8 }}>
          Back
        </Link>
      </div>
    </div>
  );
}
