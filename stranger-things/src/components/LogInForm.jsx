import { useState } from "react";
import { registerUser } from "../API/api";

export default function LogInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result in Component: ", result);
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
          type="password"
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
