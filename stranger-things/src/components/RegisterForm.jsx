import { useState } from "react";
import { registerUser } from "../API/api";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords must match");
      return;
    } else {
      navigate("/users");
    }
    try {
      const result = await registerUser(username, password, confirmPassword);
      console.log("Result in Component: ", result);
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
        <input
          required
          minLength={5}
          type="text"
          id="confirm-password"
          name="confirm-password"
          className="register-input"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="register-button">Submit</button>
      </form>
    </div>
  );
}
