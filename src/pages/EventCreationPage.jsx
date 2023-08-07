import RecipeInfo from "../components/RecipeInfo";
import EventLogistics from "../components/EventLogistics";
import MovieInfo from "../components/MovieInfo";
import {useState} from "react";

function EventCreationPage() {

  const [eventLogistics, setEventLogistics] = useState(null);

  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [who, setWho] = useState("");


  const handleFormSubmit = (event) => {
    // Handle the form data here
    event.preventDefault();
    console.log("kiiiiiiiiiiiiiiiiiiiiiiikiiiiiiiiiiiiiiiii", when );
  };
  return (
    <div>
      <MovieInfo/>
      <RecipeInfo />
      <form onSubmit={handleFormSubmit}>
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
