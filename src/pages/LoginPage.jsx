import {useContext, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/Auth.context";
import {API_URL} from "../config/config.index";

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
        <>
            <h1>Movie Night</h1>
            <form onSubmit={handleLogin} >
                <label>
                    Email:
                    <input type="text" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <br /> <br />
                <button type="submit" >Log In</button>
            </form>

            { errorMessage && <p>{errorMessage}</p> }

            <p>Dont have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>


        </>
    )

}

export default LoginPage;