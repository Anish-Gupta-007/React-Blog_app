import React from "react";

export default function Navbar() {
  return (
    <header className="topbar card">
      <div className="brand">The Blog App</div>
      <div style={{ flex: 1 }} />
      <div className="muted">Post your Own things</div>
    </header>
  );
}
