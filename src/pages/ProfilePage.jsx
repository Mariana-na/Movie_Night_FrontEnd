import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import EventCreationPage from './EventCreationPage';


function ProfilePage() {
  const { user } = useContext(AuthContext);


  return (
    <>
      <NavBar/>
      <div>
        <h2>Profile Page</h2>

        //////////////// Picture //////////////
        
        <p>
          Name: {user.name}
        </p>
         <p>
          Email: {user.email}
        </p>
      </div>

      <button type="button" ><Link to="/eventCreation" >Create an Event</Link></button>
    </>
  );
}

export default ProfilePage