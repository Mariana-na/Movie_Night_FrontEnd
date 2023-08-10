import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";

function HomePage() {

/*   const handleMakeMyNight = () => {
    console.log("Make My Night clicked");
  }; */

  return (
    <>
        <NavBar/>

        <h1>Movie Night</h1>

        <Link to="/eventCreation"><button>Make My Night!</button></Link>

        <h4>Press the button</h4>
        <h3>Refine your suggestions</h3>
        <h2>Have a great night!</h2>
    </>
  );
}

export default HomePage;
