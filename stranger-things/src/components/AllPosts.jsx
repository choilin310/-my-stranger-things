import { useState, useEffect } from "react";
import { fetchAllPost, deletePosts } from "../API/api";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function handleMessages() {
  Navigate("/messages");
}

export default function AllPosts() {
  const [data, setData] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();

  async function getPost() {
    const postList = await fetchAllPost();
    setData(postList.data.posts);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="all-post">
      {data.length > 0 &&
        data.map((posts) => {
          return (
            <div className="post" key={posts._id}>
              <h1 className="post-username">
                Username: {posts.author.username}
              </h1>
              <h2 className="post-title">Title: {posts.title}</h2>
              <p className="post-description">{posts.description}</p>
              <h5 className="post-price">Price: {posts.price}</h5>
              <div className="btn-container">
              <button className="message-post-btn" onClick={handleMessages}>
                  Message
                </button>
                <button
                  className="delete-post-btn"
                  onClick={async (e) => {
                    e.preventDefault();
                    await deletePosts(token, posts._id);
                    window.location.reload();
                  }}
                >
                  {" "}
                  Delete Post
                </button>
             </div>
            </div>
          );
        })}
    </div>
  );
}
