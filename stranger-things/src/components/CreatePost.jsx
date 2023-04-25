import { useState } from "react";
import React from "react";
import { createPost } from "../API/api";
import useAuth from "../hooks/useAuth";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useAuth();

  if(token === undefined){
    return(
      <div>
        <h1>Please login to create a post</h1>
      </div>
    )
  }

  return (
    <div className="create-post">
      <h1 className="create-post-title">Create Posts</h1>
      <form
        className="create-post-form"
        onSubmit={async (e) => {
          e.preventDefault();
          await createPost(title, description, price, token);
        }}
      >
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
        <button className="create-post-button" type="submit">Create Post</button>
      </form>
    </div>
  );
}
