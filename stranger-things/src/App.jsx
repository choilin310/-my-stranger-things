import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import { HomePage } from "./components/Home";
import  PostMessage  from "./components/PostMessage"
import { useAuth } from "./hooks/useAuth";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const { token, setToken } = useAuth();
  const [links, setLinks] = useState("");

  useEffect(() => {
    if (token === null) {
      setLinks(
        <h3 className="links">
          <Link to="/">HOME</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/users">LOGIN</Link>
        </h3>
      );
    } else {
      setLinks(
        <h3 className="links">
          <Link to="/users/me">PROFILE</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/create-posts">CREATE POST</Link>
          <Link
            to="/users"
            onClick={() => {
              setToken(null);
              localStorage.removeItem("token");
            }}
          >
            LOGOUT
          </Link>
        </h3>
      );
    }
  }, [token]);

  return (
    <div className="app">
      <header className="head">
        <h2>Stranger Things</h2>
        {links}
      </header>
      <Routes>
      <Route path="/post/:postId/messages" element={<PostMessage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/users" element={<LoginForm />} />
        <Route path="/create-posts" element={<CreatePost />} />
        <Route path="/users/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
