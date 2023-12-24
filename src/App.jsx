import PropTypes from "prop-types";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import UserDetails from "./pages/UserDetails/UserDetails";
import MyPosts from "./pages/MyPosts/MyPosts";

import PostsData from "./Mock-Data/posts.json";
import UsersData from "./Mock-Data/users.json";
import UserList from "./pages/Peoples/UserList";
import NewPostForm from "./pages/NewPost/NewPost";
import Layout from "./pages/layout";

const PrivateRoute = ({ page }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (isAuthenticated) {
    return page;
  }
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  page: PropTypes.element,
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route index element={<PrivateRoute page={<Home />} />} /> */}
          <Route index element={<PrivateRoute page={<Home />} />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                page={
                  <UserDetails
                    user={{
                      id: "1",
                      email: "john.doe@example.com",
                      phone: "123-456-7890",
                      bio: "Software Developer",
                      profilePic:
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
                    }}
                  />
                }
              />
            }
          />
          <Route
            path="/my-posts"
            element={<PrivateRoute page={<MyPosts posts={PostsData} />} />}
          />
          <Route
            path="/people"
            element={<PrivateRoute page={<UserList users={UsersData} />} />}
          />
          <Route
            path="/new-post"
            element={
              <PrivateRoute page={<NewPostForm onAddPost={() => {}} />} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<h1>Verify Coming Soon</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
