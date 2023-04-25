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
            </div>
          );
        })}
    </div>
  );
}
