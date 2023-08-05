import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventCreationPage from "./pages/EventCreationPage";
import EventDetailPage from "./pages/EventDetailPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<EventCreationPage />} />
        <Route path="/" element={<EventDetailPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<ProfilePage />} />
        <Route path="/" element={<SignupPage />} />
      </Routes>
    </>
  );
}
export default App;
