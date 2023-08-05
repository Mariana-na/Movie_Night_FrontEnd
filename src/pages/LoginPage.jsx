import {useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/Auth.context";

const LoginPage = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
  //  const [errorMessage, setErrorMessage] = useState(null);
    const { authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post("http://localhost:5005/auth/login", {email, password})

            console.log("Login response", response)

            localStorage.setItem("authToken", response.token);
            await authenticateUser;

            navigate("/profile/:userId");

        } catch (error) {
            console.log(error);
           // setErrorMessage(err.response.data.errorMessage);
            
        }
    }



    return (
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin} >
            <label>
                    Email:
                    <input type="text" required value={email} onChange={(event) => {setEmail(event.target.value); }}/>
                </label>
                <label>
                    Password:
                    <input type="password" required value={password} onChange={(event) => {setPassword(event.target.value); }}/>
                </label>
                <button type="submit" >Log In</button>
            </form>


        </>
    )

}

export default LoginPage;