import RecipeInfo from "../components/RecipeInfo";
import EventLogistics from "../components/EventLogistics";
import MovieInfo from "../components/MovieInfo";
import { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { API_URL } from "../config/config.index";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { useContext } from "react";
import "/style/global.css";
import "/style/EventCreationPage.css";

function EventCreationPage() {
  // const [eventLogistics, setEventLogistics] = useState(null);

  // Information from the EventLogistics component
  const [eventName, setEventName] = useState("");
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [who, setWho] = useState("");

  // Information from the RecipeInfo and Movie component
  const [randomMeal, setRandomMeal] = useState(null);
  const [randomMovie, setRandomMovie] = useState(null);

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const userId = user ? user._id : null;


  const handleEventCreation = async (event) => {
    event.preventDefault();
    console.log("randomMeal ECP2", randomMeal.meals[0].strMeal);
    console.log("randomMeal ECP3", randomMovie.name);
    try {
      const newEvent = await axios.post(`${API_URL}/event/createEvent`, {
        eventName,
        when,
        where,
        who,
        randomMeal: {
          strMeal: randomMeal.meals[0].strMeal,
          strArea: randomMeal.meals[0].strArea,
          strSource: randomMeal.meals[0].strSource,
          strMealThumb: randomMeal.meals[0].strMealThumb,
        },
        randomMovie: {
          name: randomMovie.name,
          datePublished: randomMovie.datePublished,
          genre: randomMovie.genre[0],
          image: randomMovie.image,
          description: randomMovie.description,
        },
        userId,
      });

      console.log("event creation response", newEvent);
      console.log("randomMeal ECP", randomMeal);

      const eventId = newEvent.data._id;

      navigate(`/eventDetails/${eventId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (event) => {
    // Handle the form data here
    event.preventDefault();
    handleEventCreation(event);
  };

  return (
    <>
      <div>
        <NavBar />

        <form onSubmit={handleFormSubmit}>
          {/* When the user clicks on this – the entire event is created using all the info */}
          <MovieInfo randomMovie={randomMovie} setRandomMovie={setRandomMovie} />
          <RecipeInfo randomMeal={randomMeal} setRandomMeal={setRandomMeal} />
          <EventLogistics
            eventName={eventName}
            setEventName={setEventName}
            when={when}
            setWhen={setWhen}
            where={where}
            setWhere={setWhere}
            who={who}
            setWho={setWho}
          />
          <button className="event-creation-button" type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default EventCreationPage;
