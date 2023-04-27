import { createContext, useEffect, useState } from "react";
import { fetchMe } from "../API/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getMe() {
      const APIresponse = await fetchMe(token);
      setUser(APIresponse.data);
    }
    if (token) {
      getMe();
    }
  }, [token]);
  
  const contextValue = {
    token,
    setToken,
    user,
    setUser,
  };


  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;                          
