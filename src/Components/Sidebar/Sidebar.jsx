// src/components/Sidebar.js
import { useState } from "react";
import styles from "./Sidebar.module.css";

const usersData = [
  {
    id: 1,
    username: "john_doe",
    avatarUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  },
  {
    id: 2,
    username: "jane_smith",
    avatarUrl:
      "https://marketplace.canva.com/EAFltIh8PKg/1/0/1600w/canva-cute-anime-cartoon-illustration-girl-avatar-J7nVyTlhTAE.jpg",
  },
  // Add more user data as needed
];

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = usersData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.userList}>
        {filteredUsers.map((user) => (
          <div key={user.id} className={styles.userItem}>
            <img src={user.avatarUrl} alt={`Avatar for ${user.username}`} />
            <p>{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
