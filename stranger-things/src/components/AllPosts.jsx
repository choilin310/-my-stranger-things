import { useState, useEffect } from "react";
import { fetchAllPost } from "../API/api";
import useAuth from "../hooks/useAuth";

export default function AllPosts() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useAuth();

  async function getPost() {
    const postList = await fetchAllPost();
    setData(postList.data.posts);
  }

  useEffect(() => {
    getPost();
  }, []);

  return  (
    <div className="create-post">
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
      {data.length > 0 &&
        data.map((posts) => {
          return (
            <div className="post" key={posts.author.id}>
              <h1 className="post-username">Username: {posts.author.username}</h1>
              <h2 className="post-title">Title: {posts.title}</h2>
              <p className="post-description">{posts.description}</p>
              <h5 className="post-price">Price: {posts.price}</h5>
            </div>
          );
        })}
    </div>
  );
}
