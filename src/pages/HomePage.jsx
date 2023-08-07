import {Link} from "react-router-dom";
import FilmGenreDropDown from "../components/filmGenreDropDown";
import MealPrefDropDown from "../components/mealPrefDropDown";
import Navbar from "../components/navbar";

function HomePage() {
  return (
    <>
        <Navbar/>

        <h1>Movie Night</h1>

        <FilmGenreDropDown />
        <br />
        <MealPrefDropDown/>
        <br />


        <button type="button" ><Link to="/eventCreation" >Make My Night!</Link></button>
        

        <h4>Press the button</h4>
        <h3>Refine your suggestions</h3>
        <h2>Have a great night!</h2>
    </>
  )
}

export default HomePage;