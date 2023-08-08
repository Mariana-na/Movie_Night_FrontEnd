//import { useState } from "react";

function EventLogistics(props) {

    // eslint-disable-next-line react/prop-types
    const {eventName, setEventName,when, setWhen, where, setWhere, who, setWho} = props;

   // const [when, setWhen] = useState("");
    //const [where, setWhere] = useState("");
    //const [who, setWho] = useState("");

  const handleEventNameInput = (e) => setEventName(e.target.value);  
  const handleWhenInput = e => setWhen(e.target.value);
    const handleWhereInput = e => setWhere(e.target.value);
    const handleWhoInput = e => setWho(e.target.value);
//     const handleSubmit = e => {
//         e.preventDefault();
//         const newLogistics = { when, where, who }
//         console.log(newLogistics);
// }


  return (
    <div className="logistics">
      <h3>When? Where? Who?</h3>
      {/* <form onSubmit={handleSubmit}> */}
      <label>Event name </label>
      <input type="text" name="eventName" value={eventName} onChange={handleEventNameInput} />
      <label>When? </label>
      <input type="text" name="when" value={when} onChange={handleWhenInput} />
      <label>Where? </label>
      <input
        type="text"
        name="where"
        value={where}
        onChange={handleWhereInput}
      />
      <label>Who? </label>
      <input type="text" name="who" value={who} onChange={handleWhoInput} />

      {/* <button type="submit">Confirm</button> */}
      {/* form */}
    </div>
  );

}

export default EventLogistics;