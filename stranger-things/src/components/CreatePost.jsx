import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { createPost } from "../API/api";
import { Navigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [post, setPost] = useState(false);
  const { token } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createPost(title, description, price, token);
      setPost(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (post) {
    return <Navigate to="/posts" />;
  }

  return (
    <div className="create-post">
      <h1 className="create-post-title">Create Posts</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <label className="create-post-label">Title</label>
        <input
          className="create-post-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="create-post-label">Description:</label>
        <input
          className="create-post-input"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label className="create-post-label">Price:</label>
        <input
          className="create-post-input"
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button className="create-post-button" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
}
