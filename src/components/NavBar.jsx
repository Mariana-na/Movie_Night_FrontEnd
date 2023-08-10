import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Auth.context";
import { useLocation } from "react-router-dom";

function NavBar() {

    const {isLoggedIn, user, logoutUser, isLoading} = useContext(AuthContext);
    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const isProfilePage = location.pathname === "/profile";


    return (
        <nav>
          {!isHomePage && (
            <Link to= "/"><button>Home</button></Link>
            )}


                {!isLoading ? (
                    isLoggedIn ? (
                      <>
                        {!isProfilePage && (
                        <Link to="/profile">
                          <button>Profile</button>
                        </Link>
                        )}
                        <button onClick={logoutUser}>Logout</button>
                        <span>{user && user.name}</span>
                      </>
                    ) : (
                      <>
                        <Link to="/signup">
                          <button>Sign Up</button>
                        </Link>
                        <Link to="/login">
                          <button>Login</button>
                        </Link>
                      </>
                    )
                  ) : null}

        </nav>

    )
}


export default NavBar;

