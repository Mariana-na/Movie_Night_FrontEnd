
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventCreationPage from "./pages/EventCreationPage";
import EventDetailPage from "./pages/EventDetailPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>


        <Route path="/profile" element={<IsPrivate><ProfilePage/></IsPrivate>}/>
        <Route path="/eventCreation" element={<IsPrivate><EventCreationPage/></IsPrivate>}/>
        <Route path="/eventDetails/:eventId" element={<IsPrivate><EventDetailPage/></IsPrivate>}/>
        <Route path="*" element={<h1>404 page</h1>}/>
      </Routes>
    </>
  );
}
export default App;
