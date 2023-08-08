import RecipeInfo from "../components/RecipeInfo";
import EventLogistics from "../components/EventLogistics";
import MovieInfo from "../components/MovieInfo";
import {useState} from "react";
import NavBar from "../components/NavBar";
//import {API_URL} from "../config/config.index";

function EventCreationPage() {

 // const [eventLogistics, setEventLogistics] = useState(null);
  
// Information from the EventLogistics component
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [who, setWho] = useState("");

// Information from the RecipeInfo component
  const [randomMeal, setRandomMeal] = useState(null);


  const handleFormSubmit = (event) => {
    // Handle the form data here
    event.preventDefault();
  
  };
  return (
    <div>
      <NavBar/>
      <MovieInfo/>
      <RecipeInfo randomMeal={randomMeal} setRandomMeal={setRandomMeal} />
      <form onSubmit={handleFormSubmit}>
        {/* When the user clicks on this – the entire event is created using all the info */}
        <EventLogistics when={when} setWhen={setWhen} where={where} setWhere={setWhere} who={who} setWho={setWho} />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

{/*
  return (
    <>

      <h1>Movie Night</h1>

      <MovieInfo/>
      <RecipeInfo />
      <EventLogistics />
    </>
  );
}
*/}

export default EventCreationPage;
