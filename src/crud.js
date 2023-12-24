import axios from "axios";

const backendUrl = import.meta.env
  ? import.meta.env.VITE_BE_URL // localhost
  : // eslint-disable-next-line no-undef
    process.env.VITE_BE_URL; // cloud;

const backend = axios.create({
  baseURL: backendUrl,
  timeout: 10000,
});

backend.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // accessing the DOM requires some more additional middleware on axios and DOM

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      localStorage.clear();
      location.reload();
    }
    return Promise.reject(error);
  }
);

// Creating an User
const createUser = async (userData) => {
  const response = await backend.post("/users", {
    ...userData,
  });

  return response.data;
};

const getAllUsers = async () => {
  const response = await backend.get("/users", {
    headers: {
      "auth-token": localStorage.getItem("accessToken"),
    },
  });
  return response.data;
};

// Auth related methods
const registerUser = async (userData) => {
  try {
    const response = await backend.post("/register", {
      ...userData,
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await backend.post("/login", {
      ...loginData,
    });
    return { ...response.data };
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

const verifyToken = async (token) => {
  try {
    const response = await backend.post(`/register/verify/${token}`, {});
    return { ...response.data };
  } catch (err) {
    console.log(err);
    return { msg: "Token verification failed", code: 0 };
  }
};

export { createUser, getAllUsers, registerUser, loginUser, verifyToken };
