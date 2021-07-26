import { useState, createContext, useContext, useEffect } from "react";

import Notification from "./Notification";

const Context = createContext({});

const NotificationProvider = ({ children = null }) => {
  const [notification, setNotification] = useState({
    isShown: false,
    content: null,
  });

  const showNotification = (content) => {
    setNotification({
      content,
      isShown: true,
    });
  };

  useEffect(() => {
    let timeout;
    if (notification.isShown) {
      timeout = setTimeout(() => {
        setNotification({
          ...notification,
          isShown: false,
        });
      }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [notification, setNotification]);

  return (
    <Context.Provider
      value={{
        showNotification,
      }}
    >
      <Notification
        content={notification.content}
        isDisplayed={notification.isShown}
      />
      {children}
    </Context.Provider>
  );
};

const useNotification = () => useContext(Context);

export { useNotification, NotificationProvider };
