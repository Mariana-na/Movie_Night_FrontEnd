import { useState } from "react";

function EventLogistics() {

    const [when, setWhen] = useState("");
    const [where, setWhere] = useState("");
    const [who, setWho] = useState("");

    const handleWhenInput = e => setWhen(e.target.value);
    const handleWhereInput = e => setWhere(e.target.value);
    const handleWhoInput = e => setWho(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        const newLogistics = { when, where, who }
        console.log(newLogistics);
}


    return (
      <div className="logistics">
        <h3 className="event-creat-text"><b>When?</b><b> Where?</b><b> Who?</b></h3>
        <form onSubmit={handleSubmit}>
          <label className="event-creat-label">When? </label> <br />
          <input className="event-input"
            type="text"
            name="when"
            value={when}
            onChange={handleWhenInput}
          /> <br />
          <label className="event-creat-label">Where? </label> <br />
          <input className="event-input"
            type="text"
            name="where"
            value={where}
            onChange={handleWhereInput}
          /> <br />
          <label className="event-creat-label">Who? </label> <br />
          <input className="event-input event-input-who" type="text" name="who" value={who} onChange={handleWhoInput} />

          <br />

          <button className="event-btn" type="submit">Confirm</button>
        </form>
      </div>
    );

}

export default EventLogistics;