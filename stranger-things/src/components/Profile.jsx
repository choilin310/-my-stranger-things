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

  return (
    <div className="container">
      <h1 className="title">{token && `Welcome, ${user.username}`}</h1>
      <h3 className="subtitle">My messages</h3>
      <ul className="messages-list">
        {messages.map((message, index) => (
          <li key={index} className="message">
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
