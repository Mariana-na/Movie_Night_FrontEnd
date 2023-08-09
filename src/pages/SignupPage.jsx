import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/home.css";

function SignupPage() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post("http://localhost:5005/auth/signup", {firstname, email, password})

            console.log("signup response", response)

            navigate("/login");

        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>

<br />

<Link to={"/"} className="home-btn">Home</Link>
            <h1 className="signup-title"><b>Movie</b>Night</h1>
            <form onSubmit={handleSignup} className="signup-form" >
                <label>
                   <p className="signup-text"> First Name:</p>
                    <input className="signup-input" placeholder="Your real name. Or a nickname" type="text" required value={firstname} onChange={(event) => {setFirstname(event.target.value); }}/>
                </label>
                <br />
                <label>
                    <p className="signup-text">Last Name:</p>
                    <input className="signup-input" placeholder="Makes it easier for your friends to recognise you" type="text" value={lastname} onChange={(event) => {setLastname(event.target.value); }}/>
                </label>
                <br />
                <label>
                    <p className="signup-text">Email:</p>
                    <input className="signup-input" type="text" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <br />
                <label>
                    <p className="signup-text">Password:</p>
                    <input className="signup-input" type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <br /> <br />
                <button className="signup-btn" type="submit">Sign Up</button>
            </form>

            { errorMessage && <p>{errorMessage}</p> }

            <p>Already have account?</p>
            <Link to={"/login"} className="signup-login"> Login</Link>

        </>
    )
}

export default SignupPage;