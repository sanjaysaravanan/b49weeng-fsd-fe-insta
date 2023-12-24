// src/components/NewPostForm.js
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./NewPost.module.css";

const NewPostForm = ({ onAddPost }) => {
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data before adding the post
    if (caption.trim() === "" || imageUrl.trim() === "") {
      alert("Caption and Image URL are required fields.");
      return;
    }
    // Create a new post object
    const newPost = {
      id: Date.now(), // Using timestamp as a simple unique identifier
      caption,
      imageUrl,
    };
    // Pass the new post to the parent component
    onAddPost(newPost);
    // Clear the form fields
    setCaption("");
    setImageUrl("");
  };

  return (
    <div className={styles.newPostFormContainer}>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="caption">Caption:</label>
        <input
          type="text"
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

NewPostForm.propTypes = {
  onAddPost: PropTypes.func,
};

export default NewPostForm;
