import { Routes, Route, Link } from "react-router-dom";
import LogInForm from "./components/LogInForm";
import AllPosts from "./components/AllPosts";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="head">
        <h2>Stranger Things</h2>
      </header>

      <Routes>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/users" element={<LogInForm />} />
      </Routes>

      <footer>
        <h3 className="links">
          <Link to="/">HOME</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/users">LOGIN</Link>
        </h3>
      </footer>
    </div>
  );
}

export default App;
