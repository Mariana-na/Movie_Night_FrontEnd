import {Link, useLocation } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Auth.context";
// import { useState } from "react";
import "../assets/style/home.css";


function Navbar() {
    const {isLoggedIn, user, logoutUser, isLoading} = useContext(AuthContext);

    const location = useLocation();

    return (
        <nav>
           {location.pathname !== "/" && (
            <Link to= "/"><button>Home</button></Link> /*Make it not show up in HomePage */
           )}

                {!isLoading ? (
                    isLoggedIn ? (
                      <>
                        <Link to="/profile/:userId">
                          <button>Profile</button>
                        </Link>
                        <button onClick={logoutUser}>Logout</button>
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

export default Navbar;