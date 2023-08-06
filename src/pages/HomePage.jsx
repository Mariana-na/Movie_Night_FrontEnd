import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const handleSomeFunction = () => {
    console.log("You clicked the button!");
  };

  const handleMakeMyNight = () => {
    console.log("Make My Night clicked");
  };

  return (
    <>
      <nav>
        <div>
          <h1>Movie Night</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
         
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>

      <h1>Explore Movie Nights</h1>

      <div>
        <label htmlFor="movieGenre">Select Movie Genre:</label>
        <select id="movieGenre">
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>
      </div>

      <div>
        <label htmlFor="mealPreference">Select Meal Preference:</label>
        <select id="mealPreference">
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetaria">non-Vegetaria</option>
        </select>
      </div>

      <button onClick={handleMakeMyNight}>Make My Night!</button>
    </>
  );
}

export default HomePage;
