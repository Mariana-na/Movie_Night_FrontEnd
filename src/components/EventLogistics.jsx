//import { useState } from "react";

function EventLogistics(props) {


    const {eventName, setEventName,when, setWhen, where, setWhere, who, setWho} = props;



  const handleEventNameInput = (e) => setEventName(e.target.value);  
  const handleWhenInput = e => setWhen(e.target.value);
    const handleWhereInput = e => setWhere(e.target.value);
    const handleWhoInput = e => setWho(e.target.value);



  return (
    <div className="logistics">
      <h3>When? Where? Who?</h3>
      {/* <form onSubmit={handleSubmit}> */}
      <label className="event-creat-label">Event name </label>
      <input className="event-input" type="text" name="eventName" value={eventName} onChange={handleEventNameInput} />
      <label className="event-creat-label">When? </label>
      <input className="event-input" type="text" name="when" value={when} onChange={handleWhenInput} />
      <label className="event-creat-label">Where? </label>
      <input className="event-input"
        type="text"
        name="where"
        value={where}
        onChange={handleWhereInput}
      />
      <label className="event-creat-label">Who? </label>
      <input className="event-input" type="text" name="who" value={who} onChange={handleWhoInput} />

      {/* <button className="event-btn" type="submit">Confirm</button> */}
      {/* form */}
    </div>
  );

}

export default EventLogistics;