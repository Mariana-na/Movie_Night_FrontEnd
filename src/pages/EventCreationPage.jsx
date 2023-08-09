import RecipeInfo from "../components/RecipeInfo";
import EventLogistics from "../components/EventLogistics";
import MovieInfo from "../components/MovieInfo";
import NavBar from '../components/navbar';

function EventCreationPage() {
  return (
    <>

        <NavBar />
      <h1 className="header"><b>Movie</b>Night</h1>

      <MovieInfo/>

      <RecipeInfo />
      <EventLogistics />
    </>
  );
}

export default EventCreationPage;
