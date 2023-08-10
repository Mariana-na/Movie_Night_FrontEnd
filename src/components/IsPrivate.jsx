import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
// eslint-disable-next-line react/prop-types
function IsPrivate({ children }) {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoading, isLoggedIn, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <>{children}</>;
}
export default IsPrivate;
