//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./MovieInfo.css";

// Function to fetch the JSON object
async function fetchRandomMovie() {
  try {
    const response = await axios.get(
      "http://localhost:5005/api/randomMovie"
    );
    const movie = response.data;
    console.log("From fRM function", movie);
    return movie;
  } catch (error) {
    console.error(error);
  }
}

function MovieInfo() {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const getRandomMovie = async () => {
      const movie = await fetchRandomMovie();
      setRandomMovie(movie);
      console.log("JSON: ", JSON.stringify(randomMovie));
    };

    getRandomMovie();
  }, []);

  return (
    <>
    <h4 className="event-movie-text">Your Movie:</h4>
      <p className="event-movie-info"><b> Name:</b> {randomMovie && randomMovie.name}</p>
      <p className="event-movie-info"><b> Rating:</b> {randomMovie && randomMovie.aggregateRating.ratingValue}</p>
      <p className="event-movie-info"><b> Year:</b> {randomMovie && randomMovie.datePublished}</p>
      <p className="event-movie-info"><b> Genre(s):</b> {randomMovie && randomMovie.genre}</p>
      <img className="event-movie-info" src={randomMovie && randomMovie.image} />
    </>
  );
}

export default MovieInfo;
