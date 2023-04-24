import { useState } from "react";
import { loginUser } from "../API/api";
import { Link } from "react-router-dom";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      console.log("Result in Component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="login-container">
        <h1 className="title">Login</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="login-form"
        >
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
            type="password"
            id="password"
            name="password"
            className="input"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Login
          </button>

          <p className="signup-link">
            Don't have an account?
            <Link to="/users/register"> Sign up!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
