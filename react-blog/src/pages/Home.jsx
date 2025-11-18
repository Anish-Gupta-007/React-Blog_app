import React from "react";
import BlogList from "../components/BlogList.jsx";

export default function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2>All Posts</h2>
        <div className="muted">Blogs • Things • Thought</div>
      </div>
      <BlogList />
    </div>
  );
}
