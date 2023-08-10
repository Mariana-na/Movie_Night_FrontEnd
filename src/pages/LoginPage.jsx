import {useContext, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/Auth.context";
import {API_URL} from "../config/config.index";
import "/style/global.css";
import "/style/LoginPage.css";

const LoginPage = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    // eslint-disable-next-line no-unused-vars
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`${API_URL}/auth/login`, {email, password})

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
        <div className="login-overall-container">
            <h1 className="login-title" >Movie Night</h1>
            <form className="login-form-container" onSubmit={handleLogin} >
                <label className="login-text" >
                    Email:
                    <input className="login-input" type="email" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <label className="login-text" >
                    Password:
                    <input className="login-input" type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <button className="login-btn" type="submit" >Log In</button>
            </form>

            { errorMessage && <p>{errorMessage}</p> }

            <p className="login-signup-text" >Don't have an account yet?</p>
            <Link className="login-signup" to={"/signup"}> Sign Up</Link>


        </div>
    )

}

export default LoginPage;