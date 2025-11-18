import React, { useContext } from "react";
import BlogCard from "./BlogCard.jsx";
import { BlogContext } from "../context/BlogContext.jsx";

export default function BlogList() {
  const { blogs, remove } = useContext(BlogContext);

  if (!blogs || blogs.length === 0)
    return <div className="card">No posts yet — create one.</div>;

  return (
    <section className="posts-grid">
      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          post={b}
          onDelete={(id) => {
            if (window.confirm("Delete this post?")) remove(id);
          }}
        />
      ))}
    </section>
  );
}
