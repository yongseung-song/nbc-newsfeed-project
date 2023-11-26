import { createContext, useState } from "react";

const initialState = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
