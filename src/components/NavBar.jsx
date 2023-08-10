import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import { useLocation } from "react-router-dom";
import "/style/NavBar.css";
//import "../img/MovieNight.png";
import "/style/global.css";

function NavBar() {
  const { isLoggedIn, user, logoutUser, isLoading } = useContext(AuthContext);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isProfilePage = location.pathname === "/profile";

  return (
    <>
      <nav>
        <div className="leftSection">
          <img src="../img/MovieNight.png" alt="logo"/>
          {!isHomePage && (
            <Link to="/">
              <button className="buttons">Home</button>
            </Link>
          )}

          {!isLoading && isLoggedIn && !isProfilePage && (
            <Link to="/profile">
              <button className="buttons">Profile</button>
            </Link>
          )}

          {isLoggedIn && <span>Hello {user && user.name}</span>}
        </div>
        <div className="right-section">
          {!isLoading ? (
            isLoggedIn ? (
              <button className="logOutButton" onClick={logoutUser}>
                Logout
              </button>
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
        </div>
      </nav>
    </>
  );
}

export default NavBar;
