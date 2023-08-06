import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Auth.context";
import { useState } from "react";

function navbar() {
    const {isLoggedIn, user, logoutUser} = useContext(AuthContext);
    const [hamburger, setHamburger] = useState (false);

    {/*
    const toggleMenu = () => {
        setHamburger(!hamburger);
    }
*/}

    return (
        <nav>
            <Link to= "/"><button>Home</button></Link> {/*Make it not show up in HomePage */}

        {/*
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={hamburger ? 'bar bar1' : 'bar'}></div>
                <div className={hamburger ? 'bar bar2' : 'bar'}></div>
                <div className={hamburger ? 'bar bar3' : 'bar'}></div>
            </div>
            <ul className={hamburger ? 'nav-links show' : 'nav-links'}>
                <Link to="/" >Home</Link>
                <Link to="/profile" >Profile</Link>
                <Link to="/login" >Log In</Link>
            </ul>

        */}



                {isLoggedIn && (
                    <>
                    <Link to="/profile/:userId">
                        <button>Profile</button>
                    </Link>        
                    <button>Logout</button>
                    </>
                )}
                    <button onClick={logoutUser}>Logout</button>
                    <span>{user && user.name}</span>
 
                {!isLoggedIn && (
                    <>
                    <Link to="/signup"> <button>Sign Up</button> </Link>
                    <Link to="/login"> <button>Login</button> </Link>
                    </>
                )}


        </nav>

    )
}

export default navbar;