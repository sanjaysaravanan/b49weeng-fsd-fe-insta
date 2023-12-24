// src/App.js
import styles from "./home.module.css";
import mockPosts from "../../Mock-Data/posts.json";
import Post from "../../Components/Post/Post";
import Sidebar from "../../Components/Sidebar/Sidebar";
import RightBar from "../../Components/Sidebar/Rightbar";

function Home() {
  return (
    <div className={styles["app-container"]}>
      <div className={`${styles["sidebar"]} ${styles["left-sidebar"]}`}>
        <Sidebar />
      </div>
      <div className={styles["main-content"]}>
        <h1>Welcome to My React App</h1>
        <p>Main content goes here</p>
        {mockPosts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      <div className={`${styles["sidebar"]} ${styles["right-sidebar"]}`}>
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
