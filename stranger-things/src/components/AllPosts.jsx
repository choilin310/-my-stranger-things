import { useState, useEffect } from "react";
import { fetchAllPost, deletePosts } from "../API/api";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AllPosts() {
  const [data, setData] = useState([]);
  const { token, user } = useAuth();
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
        data.map((post) => {
          return (
            <div className="post" key={post._id}>
              <h1 className="post-username">
                Username: {post.author.username}
              </h1>
              <h2 className="post-title">Title: {post.title}</h2>
              <p className="post-description">{post.description}</p>
              <h5 className="post-price">Price: {post.price}</h5>
              <div className="btn-container">
                {token && (
                  <button
                    className="message-post-btn"
                    onClick={() => navigate("/post/:postId/messages")}
                  >
                    Message
                  </button>
                )}
                {user._id === post.author._id && token && (
                  <button
                    className="delete-post-btn"
                    onClick={async (e) => {
                      e.preventDefault();
                      await deletePosts(token, post._id);
                      window.location.reload();
                    }}
                  >
                    Delete Post
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
