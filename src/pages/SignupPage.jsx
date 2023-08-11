import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {API_URL} from "../config/config.index";
function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();
    const handleSignup = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`${API_URL}/auth/signup`, {name, email, password})
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
            <p className="signup-text">Name:</p>
                    <input placeholder="Your real name. Or a nickname" type="text" required value={name} onChange={(event) => {setName(event.target.value); }}/>
                </label>
                <br />

                <label>
                    <p className="signup-text"> Email:</p>
                    <input type="text" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
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