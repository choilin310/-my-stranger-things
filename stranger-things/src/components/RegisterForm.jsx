import { useState } from "react";
import { registerUser } from "../API/api";
import useAuth from "../hooks/useAuth";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result in Component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-label" htmlFor="username">
          Username
        </label>
        <input
          required
          minLength={5}
          type="text"
          id="username"
          name="username"
          className="register-input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="register-label" htmlFor="password">
          Password
        </label>
        <input
          required
          minLength={5}
          type="text"
          id="password"
          name="password"
          className="register-input"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button">Submit</button>
      </form>
    </div>
  );
}
