import { useState, useEffect } from "react";
import { fetchAllPost } from "../API/api";

export default function AllPosts() {
  const [data, setData] = useState([]);

  async function getPost() {
    const postList = await fetchAllPost();
    setData(postList.data.posts);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((data) => {
          return (
            <div key={data.author.username}>
              <h1>username:{data.author.username}</h1>
              <h2>Title :{data.title}</h2>
              <p> {data.description}</p>
            </div>
          );
        })}
    </div>
  );
}
