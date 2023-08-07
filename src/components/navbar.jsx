import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Auth.context";
import { useState } from "react";

function navbar() {
    const {isLoggedIn, user, logoutUser, isLoading} = useContext(AuthContext);



    return (
        <nav>
            <Link to= "/"><button>Home</button></Link> {/*Make it not show up in HomePage */}


                {/*
                {!isLoading ? (
                    isLoggedIn ? (
                    <><Link to="/profile/:userId"><button>Profile</button></Link>
                    <button onClick={logoutUser}>Logout</button>
                    <span>{user && user.name}</span></>
                   ) : (
                    <><Link to="/signup"> <button>Sign Up</button> </Link>
                    <Link to="/login"> <button>Login</button> </Link></>)
                )}
                */}


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
                        <Link to="/signup">
                          <button>Sign Up</button>
                        </Link>
                        <Link to="/login">
                          <button>Login</button>
                        </Link>
                      </>
                    )
                  ) : null}
                  


                {/*
                {isLoggedIn && (
                    <>
                    <Link to="/profile/:userId"><button>Profile</button></Link> 
                    <button onClick={logoutUser}>Logout</button>
                    <span>{user && user.name}</span>
                    </>
                )}

 
                {!isLoggedIn && (
                    <>
                    <Link to="/signup"> <button>Sign Up</button> </Link>
                    <Link to="/login"> <button>Login</button> </Link>
                    </>
                )}
                */}


        </nav>

    )
}

export default navbar;