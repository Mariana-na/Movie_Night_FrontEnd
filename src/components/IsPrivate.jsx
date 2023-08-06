import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import { useNavigate } from "react-router-dom";

function IsPrivate ({children}) {
    const {isLoading, isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!isLoggedIn) {
        navigate("/login");
    }

    return <>{children}</>;

}

export default IsPrivate;