//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./MovieInfo.css";
import {API_URL} from "../config/config.index";

// Function to fetch the JSON object
async function fetchRandomMovie() {
  try {
    const response = await axios.get(
      `${API_URL}/api/randomMovie`
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
      <p>Name: {randomMovie && randomMovie.name}</p>
      {/*<p>Rating: {randomMovie && randomMovie.aggregateRating.ratingValue}</p> */}
      <p>Year: {randomMovie && randomMovie.datePublished}</p>
      <p>Genre(s): {randomMovie && randomMovie.genre}</p>
      <img src={randomMovie && randomMovie.image} />
    </>
  );
}

export default MovieInfo;
