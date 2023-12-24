// Register.js

import { useContext, useState } from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { registerUser } from "../../crud";
import AppContext from "../../AppContext";

const Register = () => {
  const { displayMsg, setDisplayMsg } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Here you can add your registration logic
    try {
      setDisplayMsg({
        ...displayMsg,
        loader: true,
      });
      const response = await registerUser({
        email,
        username: name,
        phone,
        bio,
        profilePic,
        password,
      });
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

  return (
    <div className={styles.root}>
      <div className={styles["register-container"]}>
        <h2>Register</h2>
        <div className={styles["input-container"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="profilePic">Profile Picture URL:</label>
          <input
            type="text"
            id="profilePic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
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
        <button onClick={handleRegister}>Register</button>
        <br />
        <br />
        <Link to={"/login"}>Sign In</Link>
      </div>
    </div>
  );
};

export default Register;
