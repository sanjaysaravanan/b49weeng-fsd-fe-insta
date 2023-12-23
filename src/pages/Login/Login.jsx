// Login.js

import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can add your authentication logic
    console.log("Logging in with:", { username, password });
  };

  return (
    <div className={styles.root}>
      <div className={styles["login-container"]}>
        <h2>Login</h2>
        <div className={styles["input-container"]}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <br />
        <br />
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
