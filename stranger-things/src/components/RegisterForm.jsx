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
    <div className="login-container">
      <h1 className="title">Register</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          required
          minLength={5}
          type="text"
          id="username"
          name="username"
          className="input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          required
          minLength={5}
          type="text"
          id="password"
          name="password"
          className="input"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
