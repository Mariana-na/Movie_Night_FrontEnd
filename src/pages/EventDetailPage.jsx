import React from 'react'
import Comments from '../components/Comments';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import axios from 'axios';
import {API_URL} from "../config/config.index";
import {useParams} from "react-router-dom";
import { useState } from 'react';
import EventEditForm from '../components/EventEditForm';
import "../App.css";


function EventDetailPage() {

  const [eventInfo, setEventInfo] = useState(null);
  const { eventId } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const fetchEvent = async (event) => {

    try {
      const displayEvent = await axios.get(`${API_URL}/event/${eventId}`);

      //{eventName, userId.name, recipeId.name, when, where, who}

      const eventInfo = displayEvent.data;
      setEventInfo(displayEvent.data);

      console.log("event display", eventInfo)

    } catch (error) {
      console.log(error);
    }
  }


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async (updatedEventData) => {

    try {
      const updatedEvent = await axios.put(`${API_URL}/event/${eventId}`, updatedEventData);

      setEventInfo(updatedEvent.data);
      setIsEditing(false);

    } catch (error) {
      console.log(error)
    }
  }


/*   const updateEvent = async (event) => {
    try {
      const editedEvent = await axios.post(`${API_URL}/event/${eventId}`);

    } catch (error) {
      console.log(error)
      
    }
  } */

  useEffect (() => {
    fetchEvent ()
}, [])



  return (
    <>
      <NavBar/>
      {eventInfo ? (
        <div>
          {isEditing ? (
            <EventEditForm eventInfo={eventInfo} handleUpdate={handleUpdate} />
          
        ) : (
          <div>
          <h1>{eventInfo.eventName}</h1>
          {/* <p>{eventInfo.userId.name}</p> */}
          <p>{eventInfo.recipeId}</p>
          <p>{eventInfo.eventDate}</p>
          <p>{eventInfo.eventLocation}</p>
          {/* <p>{eventInfo.attendees}</p> */}
          <button onClick={handleEdit}>Edit Event</button>
          </div>
        )}
        </div>
      ) : (
        <p>Loading event details...</p>
      )}

        {/* <button onClick="handleEdit">Edit Event</button> */}

      <Comments/>
    </>

  )
}

export default EventDetailPage