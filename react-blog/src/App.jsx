import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";
import EditBlog from "./pages/EditBlog.jsx";
import ViewBlog from "./pages/ViewBlog.jsx";

function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main-wrap">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="/view/:id" element={<ViewBlog />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
