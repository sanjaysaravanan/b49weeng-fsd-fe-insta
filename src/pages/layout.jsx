import { Outlet } from "react-router-dom";

import AppContext from "../AppContext";
import styles from "./layout.module.css";
import { useContext, useState } from "react";

const Message = () => {
  const { displayMsg } = useContext(AppContext);
  return (
    <>
      {displayMsg.show && (
        <div className={`${styles.message} ${styles[displayMsg.type]}`}>
          <p>{displayMsg.msg}</p>
        </div>
      )}
    </>
  );
};

const Loader = () => {
  const { displayMsg } = useContext(AppContext);
  return (
    <>
      {displayMsg.loader && (
        <div className={styles.loaderOverlay}>
          <div className={styles.loaderContent}>
            {/* You can add loading animation or message here */}
            <i className="fa-solid fa-spin fa-2x fa-spinner"></i>
          </div>
        </div>
      )}
    </>
  );
};

const Layout = () => {
  const [displayMsg, setDisplayMsg] = useState({
    type: "",
    msg: "",
    show: false,
    loader: false,
  });

  return (
    <AppContext.Provider
      value={{
        displayMsg,
        setDisplayMsg,
      }}
    >
      <div>
        {/* general Loader */}
        {/* General Error Msg */}
        <Outlet />
        <Message />
        <Loader />
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
