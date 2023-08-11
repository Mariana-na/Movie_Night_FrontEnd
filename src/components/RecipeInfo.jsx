import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "/style/global.css";
import "/style/RecipeInfo.css";
import { Link } from "react-router-dom";

// Function to fetch the JSON object from the api
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

function RecipeInfo(props) {
  const { randomMeal, setRandomMeal } = props;

  useEffect(() => {
    const getRandomMeal = async () => {
      const meal = await fetchRandomMeal();
      setRandomMeal(meal);
      console.log("JSON: ", JSON.stringify(meal));
    };

    getRandomMeal();
  }, []);

  const handleButtonClick = async () => {
    const meal = await fetchRandomMeal();
    setRandomMeal(meal);
    console.log("JSON:", JSON.stringify(meal));
  };

  return (
    <>
      <div className="rInfo">
        <div className="rInfo-right">
          <h2>{randomMeal && randomMeal.meals[0].strMeal}</h2>
          <p id="cuisine">
            Cuisine: {randomMeal && randomMeal.meals[0].strArea}
          </p>
          <div id="buttons">
            <button className="update" onClick={handleButtonClick}>
              Update Recipe
            </button>
            <span>
              <Link
                to={randomMeal && randomMeal.meals[0].strSource}
                className="recipe-button"
              >
                See recipe
              </Link>
            </span>
          </div>
          {/* <p>YouTube: {randomMeal && randomMeal.meals[0].strYouTube}</p> */}
        </div>
        <img
          src={randomMeal && randomMeal.meals[0].strMealThumb}
          alt="Meal Thumbnail"
        />
      </div>
    </>
  );
}

export default RecipeInfo;


