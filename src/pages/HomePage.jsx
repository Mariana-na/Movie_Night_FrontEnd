import {Link} from "react-router-dom";
import FilmGenreDropDown from "../components/filmGenreDropDown";
import MealPrefDropDown from "../components/mealPrefDropDown";
import NavBar from "../components/NavBar";

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

        <h1>Movie Night</h1>


        <button type="button" ><Link to="/eventCreation" >Make My Night!</Link></button>
        

        <h4>Press the button</h4>
        <h3>Refine your suggestions</h3>
        <h2>Have a great night!</h2>
    </>
  );
}

export default HomePage;
