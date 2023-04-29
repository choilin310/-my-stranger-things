import { useState } from "react";
import { postMessage } from "../API/api";
import { useAuth } from "../hooks/useAuth";
import { useParams } from "react-router-dom";

export default function Message() {
  const { token } = useAuth();
  const { postId } = useParams();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postMessage(postId, token, message);
      setMessage(response);
      console.log(message, "message from message");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="message-form">
      <form onSubmit={handleSubmit}>
        <label for="message">Message</label>
        <input
          class="message-input"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          id="message"
          placeholder="Type your message here"
          required
        />
        <button class="message-send-btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
