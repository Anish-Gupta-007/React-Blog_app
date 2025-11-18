import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post, onDelete }) {
  const preview = post.content?.replace(/<[^>]+>/g, "").slice(0, 160);
  const date = new Date(post.date).toLocaleString();
  return (
    <article className="post-card fade-up">
      <div className="post-card-top" style={{ display: "flex", gap: 12 }}>
        <div className="thumb" aria-hidden>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="6" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#EEF2FF" />
                <stop offset="1" stopColor="#E6FFFA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="post-meta">{date}</div>
          <div className="post-title">{post.title}</div>
          <div className="post-preview">{preview}</div>
        </div>
      </div>

      <div className="card-actions" style={{ marginTop: 12 }}>
        <Link to={`/view/${post.id}`} className="btn view">
          View
        </Link>
        <Link to={`/edit/${post.id}`} className="btn edit">
          Edit
        </Link>
        <button
          className="btn delete"
          onClick={() => onDelete(post.id)}
          aria-label={`Delete ${post.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
