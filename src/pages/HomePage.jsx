import {Link} from "react-router-dom";

function HomePage() {
  const handleSomeFunction = () => {   
    console.log("You clicked the button!");
  };
  return (
    <>
      <h2>Movie Night</h2>
      <p>Sign up or log in to get started.</p>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>

      {/* Example of a button that triggers a function */}
      <button onClick={handleSomeFunction}>Click Me</button>
    </>
  );
}

export default HomePage