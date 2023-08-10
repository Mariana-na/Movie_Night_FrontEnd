import React from 'react'
import {useState} from "react";
import "/style/global.css";

function EventEditForm({ eventInfo, handleUpdate }) {
    const [editedEvent, setEditedEvent] = useState({
      eventName: eventInfo.eventName,
      eventDate: eventInfo.eventDate,
      eventLocation: eventInfo.eventLocation
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedEvent((prevEvent) => ({
          ...prevEvent,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(editedEvent);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="eventName" value={editedEvent.eventName} onChange={handleChange}/>
          <input type="text" name="eventDate" value={editedEvent.eventDate} onChange={handleChange}/>
          <input type="text" name="eventLocation" value={editedEvent.eventLocation} onChange={handleChange}/>
          <button type="submit">Update</button>
        </form>
      );
    }

export default EventEditForm;