import {Link} from "react-router-dom";
import NavBar from '../components/NavBar';
import { AuthContext } from '../context/Auth.context';
import { useContext } from 'react';
import "/style/global.css";
import "/style/ProfilePage.css";


function ProfilePage() {
  const { user } = useContext(AuthContext);


  return (
    <>
      <NavBar/>
      <div>
        {/* <h2 className="prof-title" >Profile Page</h2> */}
        <img className="prof-pic" src="../img/aaa.jpg" alt="profile picture" />
        
        <p className="prof-gr" >
          {user.name}
        </p>
         <p className="prof-gr" >
          {user.email}
        </p>
      </div>
      <Link to="/eventCreation"><button className="create-event-btn" >Create an Event</button></Link>
    </>
  );
}

export default ProfilePage