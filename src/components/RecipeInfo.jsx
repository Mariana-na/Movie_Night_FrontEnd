//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

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
    
      <p>Name: {randomMeal && randomMeal.meals[0].strMeal}</p>
      <p>Area: {randomMeal && randomMeal.meals[0].strArea}</p>
      <p>Recipe: {randomMeal && randomMeal.meals[0].strSource}</p>
      <p>YouTube: {randomMeal && randomMeal.meals[0].strYouTube}</p>
      <img src={randomMeal && randomMeal.meals[0].strMealThumb} />
    </>
  );
}

export default RecipeInfo;
