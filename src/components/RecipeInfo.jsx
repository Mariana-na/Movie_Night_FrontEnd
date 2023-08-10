//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./RecipeInfo.css";

// Function to fetch the JSON object
async function fetchRandomMeal() {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const meal = response.data;
    console.log("From fRM function", meal);
    return meal;
  } catch (error) {
    console.error(error);
  }
}

function RecipeInfo() {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    const getRandomMeal = async () => {
      const meal = await fetchRandomMeal();
      setRandomMeal(meal);
      console.log("JSON: ", JSON.stringify(randomMeal));
    };

    getRandomMeal();
  }, []);

  return (
    <>
    <h4 className="event-meal-text">Your Meal:</h4>
      <p className="event-meal-info"><b>Name: </b>{randomMeal && randomMeal.meals[0].strMeal}</p>
      <p className="event-meal-info"><b>Area: </b>{randomMeal && randomMeal.meals[0].strArea}</p>
      <p className="event-meal-info"><b>Recipe: </b>{randomMeal && randomMeal.meals[0].strSource}</p>
      <p className="event-meal-info"><b>YouTube: </b>{randomMeal && randomMeal.meals[0].strYouTube}</p>
      <img className="meal-img" src={randomMeal && randomMeal.meals[0].strMealThumb}  />
      <br />
    </>
  );
}

export default RecipeInfo;


