import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const { token, setToken } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [links, setLinks] = useState("")

  useEffect(() => {
    if (token === null) {
      setLinks (
        <h3 className="links">
            <Link to="/">HOME</Link>
            <Link to="/posts">POSTS</Link>
            <Link to="/users">LOGIN</Link>
          </h3>
      )
      setIsLoggedIn(false);
    }else {
      setLinks (
        <h3 className="links">
            <Link to="/">PROFILE</Link>
            <Link to="/posts">POSTS</Link>
            <Link to="/create-posts">CREATE POST</Link>
            <Link to="/users" onClick={() =>{
              setToken(null);
              localStorage.removeItem("token");
            }}>LOGOUT</Link>
          </h3>
      )
      setIsLoggedIn(true);
    }
  }
  , [token]);

  return (
    <div className="app">
      <header className="head">
        <h2>Stranger Things</h2>
        {links}
      </header>

      <Routes>
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/users" element={<LoginForm />} />
        <Route path="/create-posts" element={<CreatePost />} />
        <Route path="/users/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
