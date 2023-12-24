// src/components/Post.js
import PropTypes from "prop-types";
import "./Post.css";

const Post = ({ username, caption, imageUrl, likes, id }) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <p className="post-username">{username}</p>
      </div>
      <img className="post-image" src={imageUrl} alt={`Post ${id}`} />
      <div className="post-footer">
        <p className="post-caption">{caption}</p>
        <p className="post-likes">Likes: {likes}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  username: PropTypes.string,
  caption: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
};

export default Post;
