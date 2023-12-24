// src/components/RightBar.js
import styles from "./RightBar.module.css";

const RightBar = () => {
  return (
    <div className={styles.rightBarContainer}>
      <div className={styles.profileInfo}>
        <img
          className={styles.profilePic}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdczPRwvAWqy5nS7SbEIXTUglogOG0TJghl_UX2n-TQ&s"
          alt="Profile"
        />
        <p className={styles.userName}>John Doe</p>
      </div>
      <div className={styles.menuItems}>
        <p>My Account</p>
        <p>My Posts</p>
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

export default RightBar;
