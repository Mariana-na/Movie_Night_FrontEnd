import {Link} from "react-router-dom";
import NavBar from "../components/NavBar";
import "/style/global.css";
import "/style/HomePage.css";

function HomePage() {


  return (
    <div className="home-overall-container">
        <NavBar/>

        <h1 className="header"><span className="M">Movie</span><span className="N">Night</span></h1>

        <Link to="/eventCreation"><button className="homePage-mk-btn" >Make My Night!</button></Link>

        <div className="home-text-container" >
            <h4 className="home-text-h4">Press the Button</h4>
            <h3 className="home-text-h3">Refine your Suggestions</h3>
            <h2 className="home-text-h2">Have a Great Night!</h2>
        </div>
    </div>
  );
}

export default HomePage;
