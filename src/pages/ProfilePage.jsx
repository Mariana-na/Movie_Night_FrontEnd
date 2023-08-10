import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import EventCreationPage from './EventCreationPage';
import "../assets/style/home.css";


function ProfilePage() {
  const { user } = useContext(AuthContext);


  return (
    <>
      <NavBar/>
      <div>
        <h2 className='prof-title'>Profile Page</h2>

        //////////////// Picture //////////////
        
        <p className='prof-gr'>
          Name: {user.name}
        </p>
         <p className='prof-gr'>
          Email: {user.email}
        </p>
      </div>

      <button className='home-btn' type="button" ><Link to="/eventCreation" >Create an Event</Link></button>
    </>
  );
}

export default ProfilePage