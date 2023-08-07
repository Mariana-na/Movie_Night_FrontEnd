import RecipeInfo from "../components/RecipeInfo";
import EventLogistics from "../components/EventLogistics";
import MovieInfo from "../components/MovieInfo";

function EventCreationPage() {
  return (
    <>

      <h1>Movie Night</h1>

      <MovieInfo/>

      <RecipeInfo />
      <EventLogistics />
    </>
  );
}

export default EventCreationPage;
