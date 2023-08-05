import {Link} from "react-router-dom";

function HomePage() {
  return (
    <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
    </>
  )
}

export default HomePage