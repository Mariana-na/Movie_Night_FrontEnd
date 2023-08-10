
// import LogOut from '../components/LogOut';
import {Link} from "react-router-dom";
import NavBar from '../components/navbar';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import "../assets/style/home.css";


function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div>
        <h2 className='prof-title'>Profile Page</h2>

        //////////////// Picture //////////////
        
        {/* <p>
          Username: {user.name}
        </p> */}
         <p className='prof-gr'>
          Welcom: {user.email}
        </p>
      </div>

      <div>
        {/* <h3>My Events</h3> */}
        <ul>
        </ul>
      </div>

      <Link to="../eventCreation" className='home-btn'>Create Event</Link>
      <br />
      
      {/* <LogOut /> */}
      
    </>
  );
}

export default ProfilePage