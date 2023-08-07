import LogOut from '../components/LogOut';
import {Link} from "react-router-dom";

function ProfilePage() {

  return (
    <>
      <div>ProfilePage</div>
      <Link to="/eventCreation">Create Event</Link>
      <LogOut/>
    </>
  )
}

export default ProfilePage