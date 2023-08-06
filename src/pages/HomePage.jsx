import {Link} from "react-router-dom";

function HomePage() {
  return (
    <>
        <Link to="/signup">Sign Up</Link> {/*Move to navbar component*/}
        <Link to="/login">Log In</Link> {/*Move to navbar component*/}

        <h1>Movie Night</h1>
{/*
        <div>
          <select>
            <option disabled selected>Film genre...</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
        </div>

        <div>
          <select>
            <option disabled selected>Meal preferences...</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetaria">non-Vegetarian</option>
          </select>
        </div>
        */}

        <button>Make My Night!</button>

        <h4>Press the button</h4>
        <h3>Refine your suggestions</h3>
        <h2>Have a great night!</h2>
    </>
  )
}

export default HomePage