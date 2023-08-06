import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventCreationPage from "./pages/EventCreationPage";
import EventDetailPage from "./pages/EventDetailPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
// import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>

        <Route path="/profile/:userId" element={<ProfilePage/> }/>
        <Route path="/eventCreation" element={ <EventCreationPage/> }/>
        <Route path="/eventDetails/:eventId" element={ <EventDetailPage/> }/>
        <Route path="*" element={<h1>404 page</h1>}/>
      </Routes>
    </>
  );
}
export default App;
