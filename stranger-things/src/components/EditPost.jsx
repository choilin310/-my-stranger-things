import { useState, useEffect } from "react";
import { updatePost } from "../API/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function EditPost(){
    const { token } = useAuth();
    const { postId } = useParams();
    const [editPost, setEditPost] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await updatePost(token, postId, e.target.title.value, e.target.description.value, e.target.price.value);
            setEditPost(response.data.posts);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <h3>Edit Post</h3>
              <input 
              type="text"
              name="title" 
              />
              <input 
              type="text"
              name="description" 
              />
              <input 
              type="text"
              name="price" 
              />
              <button type="submit">Submit</button>
            </form>
        </div>
    )
}