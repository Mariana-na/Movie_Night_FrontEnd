import "/style/global.css";
import "/style/EventLogistics.css";

function EventLogistics(props) {


    const {eventName, setEventName,when, setWhen, where, setWhere, who, setWho} = props;



  const handleEventNameInput = (e) => setEventName(e.target.value);  
  const handleWhenInput = e => setWhen(e.target.value);
    const handleWhereInput = e => setWhere(e.target.value);
    const handleWhoInput = e => setWho(e.target.value);



  return (
    <div className="logistics-container">
      <h3>When? Where? Who?</h3>
      {/* <form onSubmit={handleSubmit}> */}

      <div className="event-name">
        <label>Give your event a name... </label>
        <input
          className="el-logi-input"
          type="text"
          name="eventName"
          value={eventName}
          onChange={handleEventNameInput}
        />
      </div>
      <div className="input-container">
        <label>When? </label>
        <input
          className="el-logi-input"
          type="text"
          name="when"
          value={when}
          onChange={handleWhenInput}
        />
        <label>Where? </label>
        <input
          className="el-logi-input"
          type="text"
          name="where"
          value={where}
          onChange={handleWhereInput}
        />
        <label>Who? </label>
        <input
          className="el-logi-input"
          type="text"
          name="who"
          value={who}
          onChange={handleWhoInput}
        />
      </div>
      {/* <button type="submit">Confirm</button> */}
      {/* form */}
    </div>
  );

}

export default EventLogistics;