import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";
import "../assets/style/home.css";

function HomePage() {

/*   const handleMakeMyNight = () => {
    console.log("Make My Night clicked");
  }; */

  return (
    <>
        <NavBar/>

        <h1 className="header"><b>Movie</b>Night</h1>

        <Link to="/eventCreation"><button>Make My Night!</button></Link>

        <h5 className="home-text">Press the button</h5>
        <h4 className="home-text">Refine your suggestions</h4>
        <h2 className="home-text">Have a great night!</h2>
    </>
  );
}

export default HomePage;
