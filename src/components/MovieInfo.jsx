import { useState, useEffect } from "react";
import "/style/global.css";
import "/style/MovieInfo.css";

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
      <div className="mInfo">
        <div className="mInfo-left">
          <h2>{randomMovie && randomMovie.name}</h2>
          {/*<p>Rating: {randomMovie && randomMovie.aggregateRating.ratingValue}</p> */}
          <span id="genre-release">
            <p> Released: {randomMovie && randomMovie.datePublished}</p>

            <p>Genre: {randomMovie && randomMovie.genre[0]}</p>  </span>
            <p>{randomMovie && randomMovie.description}</p>
        
          <button className="update" onClick={handleButtonClick}>Update Movie</button>
        </div>
        <img
          src={randomMovie && randomMovie.image}
          alt={randomMovie && randomMovie.name}
        />
      </div>
    </>
  );
}

export default MovieInfo;
