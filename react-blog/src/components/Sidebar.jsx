import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/create" className="btn-add">
        + Add Blog
      </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        {/* About link removed */}
      </nav>
    </aside>
  );
}
