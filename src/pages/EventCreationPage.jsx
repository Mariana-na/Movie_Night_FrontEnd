//import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";


// Function to fetch the JSON object
async function fetchRandomMeal() {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    const meal = response.data;  
    console.log("From fRM function", meal);
    return meal;
  }
   
  catch (error) {
    console.error(error);
  }
}


function EventCreationPage() {
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
      <div>EventCreationPage</div>
      <p>{randomMeal.meals[0].idMeal} This is the meal</p>
      
    </>
  );
}

export default EventCreationPage;