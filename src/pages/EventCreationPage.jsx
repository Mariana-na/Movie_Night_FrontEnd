import RecipeInfo from "../components/RecipeInfo";
import EventLogistics from "../components/EventLogistics";
import MovieInfo from "../components/MovieInfo";
import {useState} from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { API_URL } from "../config/config.index";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { useContext } from "react";



function EventCreationPage() {

 // const [eventLogistics, setEventLogistics] = useState(null);
  
// Information from the EventLogistics component
  const [eventName, setEventName] = useState("");
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [who, setWho] = useState("");

// Information from the RecipeInfo component
  const [randomMeal, setRandomMeal] = useState(null);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const userId = user._id

  
  const handleEventCreation = async (event) => {
        event.preventDefault()


        try {
            const newEvent = await axios.post(`${API_URL}/event/createEvent`, {eventName, when, where, who, randomMeal, userId });


            console.log("event creation response", newEvent)

            const eventId = newEvent.data._id

            navigate(`/eventDetails/${eventId}`);

        } catch (error) {
            console.log(error);
            
        }
    }

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
          <MovieInfo />
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
          <button type="submit">Confirm</button>
        </form>
      </div>
      <p>When {when}</p>
      <p>Where {where}</p>
      <p>Who {who}</p>
    </>
  );
}

export default EventCreationPage;
