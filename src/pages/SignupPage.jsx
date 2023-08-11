import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {API_URL} from "../config/config.index";
import "/style/global.css";
import "/style/SignupPage.css";

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
        <div class="signup-overall-container">
            <h1 className="signup-title" ><span>Movie</span>Night</h1>
            <form className="signup-form-container" onSubmit={handleSignup} >
                <label className="signup-text">
                    Name:
                    <input className="signup-input" placeholder="Your real name. Or a nickname" type="text" required value={name} onChange={(event) => {setName(event.target.value); }}/>
                </label>
                <label className="signup-text" >
                    Email:
                    <input className="signup-input" type="email" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <label className="signup-text" >
                    Password:
                    <input className="signup-input" type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <button className="signup-btn" type="submit">Sign Up</button>
            </form>

            { errorMessage && <p>{errorMessage}</p> }

            <p className="signup-login-text" >Already have account?</p>
            <Link className="signup-login" to={"/login"}> Login</Link>

        </div>
    )
}

export default SignupPage;