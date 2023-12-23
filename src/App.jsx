import PropTypes from "prop-types";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
        <Route>
          <Route
            index
            element={<PrivateRoute page={<h1>Home PageComing Soon</h1>} />}
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
