// src/components/UserList.js
import PropTypes from "prop-types";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={styles.userListContainer}>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul className={styles.userList}>
          {users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <img src={user.profilePic} alt={`Profile for ${user.email}`} />
              <div>
                <p>ID: {user.id}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Bio: {user.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};

export default UserList;
