import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupPage() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <h2>Login Page</h2>
            <form onSubmit={handleSignup} >
                <label>
                    First Name:
                    <input type="text" required value={firstname} onChange={(event) => {setFirstname(event.target.value); }}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastname} onChange={(event) => {setLastname(event.target.value); }}/>
                </label>
                <label>
                    Email:
                    <input type="text" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <label>
                    Password:
                    <input type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <button type="submit" >Sign Up!</button>
            </form>
        </>
    )
}

export default SignupPage;