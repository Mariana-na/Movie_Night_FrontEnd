//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./MovieInfo.css";
import { API_URL } from "../config/config.index";

async function fetchRandomMovie() {
  const top250films = "./data/top250.json";
  const parsedObj = JSON.parse(top250films);
  const numEntries = Object.keys(parsedObj).length;
  const randomIndex = Math.floor(Math.random() * numEntries);
  const randomEntry = parsedObj[randomIndex];
  console.log(randomEntry);

  // try {
  //   const response = await axios.get(
  //     `${API_URL}/event/randomMovie`
  //   );
  //   const movie = response.data;
  //   console.log("From fRM function", movie);
  //   return movie;
  // } catch (error) {
  //   console.error(error);
  // }
}

function MovieInfo() {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const getRandomMovie = async () => {
      const movie = await fetchRandomMovie();
      setRandomMovie(randomEntry);
      console.log("JSON: ", JSON.stringify(randomMovie));
    };

    getRandomMovie();
  }, []);

  return (
    <>
      <p>Name: {randomMovie && randomMovie.name}</p>
      {/*<p>Rating: {randomMovie && randomMovie.aggregateRating.ratingValue}</p> */}
      <p>Year: {randomMovie && randomMovie.datePublished}</p>
      <p>Genre(s): {randomMovie && randomMovie.genre[0]}</p>
      <img src={randomMovie && randomMovie.image} />
    </>
  );
}

export default MovieInfo;
