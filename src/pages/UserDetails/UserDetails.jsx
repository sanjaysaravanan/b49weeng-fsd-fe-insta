// src/components/UserDetails.js
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./UserDetails.module.css";

const UserDetails = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here you can implement the logic to save the edited user details
    // For simplicity, we'll just log the edited user data
    console.log("Saving edited user:", editedUser);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the edited user data and switch back to view mode
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className={styles.userDetailsContainer}>
      <img
        className={styles.profilePic}
        src={editedUser.profilePic}
        alt="Profile"
      />
      {isEditing ? (
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={editedUser.id} readOnly />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={editedUser.phone}
            onChange={handleChange}
          />
          <label>Bio:</label>
          <textarea
            name="bio"
            value={editedUser.bio}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>ID: {editedUser.id}</p>
          <p>Email: {editedUser.email}</p>
          <p>Phone: {editedUser.phone}</p>
          <p>Bio: {editedUser.bio}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default UserDetails;
