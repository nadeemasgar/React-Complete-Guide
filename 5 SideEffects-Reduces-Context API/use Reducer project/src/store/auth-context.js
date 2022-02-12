import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginhandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginhandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// AuthContext is an object that will contain a component
// You have to do 2 things.. 1=> all components that are wrapped by it should have access to it
// 2=> Beside providing,  you then need to consume it. You need to hook into it, you need to listen to it, if you wanna call it like this.
/* Providing means that you wrap in JSX code all the components that should be able to tap into that Context. So that should be able to listen to that Context. */
/* we can listen in two ways. We can listen by using Auth-Context consumer  or by using a React Hook. */
