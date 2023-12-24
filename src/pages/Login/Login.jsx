// Login.js

import { useContext, useState } from "react";
import styles from "./login.module.css";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../crud";
import AppContext from "../../AppContext";

const Login = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));

  const { displayMsg, setDisplayMsg } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [directToHome, setToHome] = useState(false);
  const handleLogin = async () => {
    // Here you can add your authentication logic
    try {
      setDisplayMsg({
        ...displayMsg,
        loader: true,
      });
      const response = await loginUser({
        email: username,
        password,
      });

      localStorage.setItem("isAuthenticated", true);
      setToHome(true);

      setDisplayMsg({
        type: "success",
        msg: response.msg || "",
        show: true,
        loader: false,
      });
    } catch (err) {
      console.log(err);
      const {
        response: { data = {} },
      } = err;
      setDisplayMsg({
        type: "error",
        msg: data.msg || "",
        show: true,
        loader: false,
      });
    }
  };

  if (isAuthenticated || directToHome) {
    return <Navigate to="/" />;
  }

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
