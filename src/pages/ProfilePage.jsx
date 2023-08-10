import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import "../BodyM.css";
import "./style/ProfilePage.css";


function ProfilePage() {
  const { user } = useContext(AuthContext);


  return (
    <>
      <NavBar/>
      <div>
        {/* <h2 className="prof-title" >Profile Page</h2> */}
        <img className="prof-pic" src="../public/img/aaa.jpg" alt="profile picture" />
        
        <p className="prof-gr" >
          {user.name}
        </p>
         <p className="prof-gr" >
          {user.email}
        </p>
      </div>
      <Link to="/eventCreation"><button class="create-event-btn" >Create an Event</button></Link>
    </>
  );
}

export default ProfilePage