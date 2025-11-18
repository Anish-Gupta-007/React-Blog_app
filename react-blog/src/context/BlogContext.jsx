import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("blogs");
    return saved ? JSON.parse(saved) : [];
  });

  const create = (blog) => {
    setBlogs((prev) => [
      { ...blog, id: Date.now(), date: new Date().toISOString() },
      ...prev,
    ]);

    navigate("/");
  };

  const update = (id, updatedBlog) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updatedBlog } : b))
    );

    navigate("/");
  };

  const remove = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BlogContext.Provider value={{ blogs, create, update, remove }}>
      {children}
    </BlogContext.Provider>
  );
}
