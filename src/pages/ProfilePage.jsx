
import LogOut from '../components/LogOut';
import {Link} from "react-router-dom";
import Navbar from '../components/navbar';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import "../assets/style/home.css";


function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div>
        <h2>Profile Page</h2>

        //////////////// Picture //////////////
        
        <p>
          Username: {user.name}
        </p>
         <p>
          Email: {user.email}
        </p>
      </div>

      {/* <div>
        <h3>My Events</h3>
        <ul>
        </ul>
      </div>

      <Link to="../pages/eventCreationPage">Create Event</Link> */}

      <LogOut />
    </>
  );
}

export default ProfilePage