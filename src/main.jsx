import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextWrapper } from "./context/Auth.context.jsx";
import "../style/global.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextWrapper>
        <App />
      </AuthContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
