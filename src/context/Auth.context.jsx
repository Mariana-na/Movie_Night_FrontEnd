import { useState, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async () => {
    const tokenInStorage = localStorage.getItem("authToken");
    if (tokenInStorage) {
      try {
        const { data } = await axios.get("http://localhost:5005/auth/verify", {
          headers: { authorization: `Bearer ${tokenInStorage}` },
        });
        console.log("from the context, here is the verify response", data);
        setUser(data.currentUser);
        setIsLoading(false);
        setIsLoggedIn(true);
      } catch (err) {
        console.log("error on the authenticate user function", err);
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);


    return (
        <AuthContext.Provider
            value={{
                authenticateUser,
                user,
                isLoading,
                isLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextWrapper };

