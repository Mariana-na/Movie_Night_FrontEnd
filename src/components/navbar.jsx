import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/Auth.context";

function navbar() {
    const {isLoggedIn, user} = useContext(AuthContext); //????????

    return (
        <nav>
            <Link to= "/">
                <button>
                    Home
                </button>
            </Link>

        </nav>

    )
}

export default navbar;