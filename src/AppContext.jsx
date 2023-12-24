import { createContext } from "react";

const AppContext = createContext({
  message: {
    type: "",
    msg: "",
    show: false,
  },
});

export default AppContext;
