// import React from 'react'
import {useContext} from "react";
import {AuthContext} from "../context/Auth.context";
import {useNavigate} from "react-router-dom";

function LogOut() {

    const {logoutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/");
    };

  return (
    <button className="btns logout" onClick={handleLogout}>
      Logout
    </button>
  )
}

export default LogOut