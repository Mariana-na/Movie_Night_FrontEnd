import {Link} from "react-router-dom";
import FilmGenreDropDown from "../components/filmGenreDropDown";
import MealPrefDropDown from "../components/mealPrefDropDown";
import NavBar from "../components/navbar";
import "../assets/style/home.css";

function HomePage() {
  const handleSomeFunction = () => {
    console.log("You clicked the button!");
  };

  const handleMakeMyNight = () => {
    console.log("Make My Night clicked");
  };

  return (
    <>
        <NavBar/>

        <h1 className="header"><b>Movie</b>Night</h1>

       <div className="home-div"><FilmGenreDropDown /></div>
       <div className="home-div"><MealPrefDropDown/></div>
        
        <br />


        <button className="homePage-mk-btn" type="button" ><Link to="/eventCreation" >Make My Night!</Link></button>
        

        <h5 className="home-text">Press the button</h5>
        <h4 className="home-text">Refine your suggestions</h4>
        <h2 className="home-text">Have a great night!</h2>
    </>
  );
}

export default HomePage;
