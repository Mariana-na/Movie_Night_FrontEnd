import { useState, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async () => {

    const tokenInStorage = localStorage.getItem("authToken");
    console.log(tokenInStorage)

    if (tokenInStorage) {
      try {
        const response = await axios.get("http://localhost:5005/auth/verify", {
          headers: { Authorization: `Bearer ${tokenInStorage}` },
        });
        console.log("from the context, here is the verify response", response);
        setUser(response.data.currentUser);
        setIsLoggedIn(true);
        setIsLoading(false);
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

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  }




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
                logoutUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextWrapper };

