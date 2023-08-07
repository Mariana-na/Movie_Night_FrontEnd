import React from 'react';
import LogOut from '../components/LogOut';
import {Link} from "react-router-dom";


/////////////////////////// Hamed codes Start //////////////////////////
function ProfilePage() {

  const user = {
    name: "",
    email: "",
  };

  const events = [
    { id: 1, title: "", date: "" },
    { id: 2, title: "", date: "" },
  ];

  return (
    <>
      <div>
        <h2>Profile Page</h2>
        <p>
          Username: {user.name}
          <br />
          Email: {user.email}
        </p>
      </div>

      <div>
        <h3>My Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.title} - {event.date}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/eventCreationPage">Create Event</Link>

      <LogOut />
    </>
  );
}

/////////////////////////// Hamed codes End //////////////////////////


// function ProfilePage() {

//   return (
//     <>
//       <div>ProfilePage</div>
//       <Link to="/eventCreation">Create Event</Link>
  
//         {/* Log out button */}
//         <LogOut />
//     </>
//     );
// }

export default ProfilePage