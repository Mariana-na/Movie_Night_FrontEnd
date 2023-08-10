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
        <nav className="pages-nav-btn">
           {location.pathname !== "/" && (
            <Link to= "/"><button className="btns">Home</button></Link> /*Make it not show up in HomePage */
           )}

                {!isLoading ? (
                    isLoggedIn ? (
                      <>
                        <Link to="/profile">
                          <button className="btns">Profile</button>
                        </Link>
                        <button className="btns" onClick={logoutUser}>Logout</button>
                        <span>{user && user.name}</span>
                      </>
                    ) : (
                      <>
                      <section className="nav-btn">
                        <Link to="/signup">
                          <button className="nav-btn-sign">Sign Up</button>
                        </Link>
                        <Link to="/login">
                          <button className="nav-btn-login">Login</button>
                        </Link>
                        </section>
                      </>
                    )
                  ) : null}

        </nav>

    )
}


export default NavBar;

