import { useState, useEffect } from "react";
import "./MovieInfo.css";
import top250films from "../data/top250.json";

// Function to fetch the film info from the local JSON

function fetchRandomMovie() {
  const randomIndex = Math.floor(
    Math.random() * Object.keys(top250films).length
  );
  const randomEntry = top250films[randomIndex];
  console.log(randomEntry);
  return randomEntry;
}

function MovieInfo(props) {
  const { randomMovie, setRandomMovie } = props;
  const [buttonPressed, setButtonPressed] = useState(false);
   const handleButtonClick = () => {
     setButtonPressed(true);
   };

  useEffect(() => {
    const randomMovie = fetchRandomMovie();
    setRandomMovie(randomMovie);
    console.log("JSON:", JSON.stringify(randomMovie));
  }, []);

  useEffect(() => {
    if (buttonPressed) {
      const randomMovie = fetchRandomMovie();
      setRandomMovie(randomMovie);
      setButtonPressed(false);
      console.log("JSON:", JSON.stringify(randomMovie));
    }
  }, [buttonPressed]);

  return (
    <>
      <p className="event-movie-info">Name: {randomMovie && randomMovie.name}</p>
      {/*<p>Rating: {randomMovie && randomMovie.aggregateRating.ratingValue}</p> */}
      <p className="event-movie-info">Year: {randomMovie && randomMovie.datePublished}</p>
      <p className="event-movie-info">Genre(s): {randomMovie && randomMovie.genre[0]}</p>
      <img className="event-movie-info"
        src={randomMovie && randomMovie.image}
        alt={randomMovie && randomMovie.name}
      />
      <p className="event-movie-info">Name: {randomMovie && randomMovie.description}</p>
      <button onClick={handleButtonClick}>Update Movie</button>
    </>
  );
}

export default MovieInfo;
