// src/components/MyPosts.js
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MyPosts.module.css";

const MyPosts = ({ posts }) => {
  const [userPosts, setUserPosts] = useState(posts);

  const handleDeletePost = (postId) => {
    // Filter out the post with the specified postId
    const updatedPosts = userPosts.filter((post) => post.id !== postId);
    setUserPosts(updatedPosts);
    // Here you can implement the logic to delete the post on the server
    // For simplicity, we're just updating the state in this example
    console.log(`Post with ID ${postId} deleted.`);
  };

  return (
    <div className={styles.myPostsContainer}>
      <h2>My Posts</h2>
      {userPosts.length > 0 ? (
        <ul className={styles.postList}>
          {userPosts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <img src={post.imageUrl} alt={`Post ${post.id}`} />
              <div>
                <p>{post.caption}</p>
                <button onClick={() => handleDeletePost(post.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.array,
};

export default MyPosts;
