import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";
import "/style/global.css";
import "/style/HomePage.css";

function HomePage() {


  return (
    <>
        <NavBar/>

        <h1 className="header">Movie Night</h1>

        <Link to="/eventCreation"><button className="homePage-mk-btn" >Make My Night!</button></Link>

        <h4 className="home-text" >Press the button</h4>
        <h3 className="home-text" >Refine your suggestions</h3>
        <h2 className="home-text" >Have a great night!</h2>
    </>
  );
}

export default HomePage;
