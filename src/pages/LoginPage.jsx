import {useContext, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/Auth.context";
import "../assets/style/home.css";


const LoginPage = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post("http://localhost:5005/auth/login", {email, password})

            if(response.status === 202) {
            console.log("Login response", response.data)

            localStorage.setItem("authToken", response.data);
            await authenticateUser();
            navigate("/profile");
            }


        } catch (error) {
            console.log(error);
           // setErrorMessage(err.response.data.errorMessage);
            
        }
    }



    return (
        <>
        <br />

        <Link to={"/"} className="home-btn">Home</Link>

            <h1 className="login-title"><b>Movie</b>Night</h1>
            <form onSubmit={handleLogin} >
                <label>
                   <p className="login-text">Email:</p> 
                    <input className="login-input" type="text" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <br />
                <label>
                    <p className="login-text">Password:</p>
                    <input className="login-input" type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <br /> <br />
                <button className="login-btn" type="submit" >Log In</button>
            </form>

            { errorMessage && <p>{errorMessage}</p> }

            <p>Don't have an account yet?</p>
            <Link to={"/signup"} className="login-signup"> Sign Up</Link>


        </>
    )

}

export default LoginPage;