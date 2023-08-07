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
        <h3>When? Where? Who?</h3>
        <form onSubmit={handleSubmit}>
          <label>When? </label>
          <input
            type="text"
            name="when"
            value={when}
            onChange={handleWhenInput}
          />
          <label>Where? </label>
          <input
            type="text"
            name="where"
            value={where}
            onChange={handleWhereInput}
          />
          <label>Who? </label>
          <input type="text" name="who" value={who} onChange={handleWhoInput} />

          <button type="submit">Confirm</button>
        </form>
      </div>
    );

}

export default EventLogistics;