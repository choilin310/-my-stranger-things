import { useEffect, useState } from "react";
import { fetchMe } from "../API/api";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { token, user, setToken } = useAuth();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const APIresponse = await fetchMe(token);
      setMessages(APIresponse.data.messages);
    }
    if (token && user) {
      getMessages();
    }
  }, [token, user]);

  if (messages.length === 0) {
    return (
      <div className="noMessage-container">
        <h1 className="noMessage-title">{token && `Welcome ${user.username}`}</h1>
        <h3 className="noMessage-subtitle">My messages</h3>
        <div className="noMessage-paragraph">No messages</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">{token && `Welcome ${user.username}`}</h1>
      <h3 className="subtitle">My messages</h3>
      <ul className="messages-list">
        {messages.map((message, index) => (
          <li key={index} className="message">
            <div className="message-header">
              <span className="message-from">From: {message.fromUser.username}</span>
              <span className="message-about">Post: {message.post.title}</span>
            </div>
            <div className="message-content">{message.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
