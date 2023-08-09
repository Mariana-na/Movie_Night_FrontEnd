import "../App.css";
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import {useParams} from "react-router-dom";
import Comments from '../components/Comments';
import {API_URL} from "../config/config.index";
import { useNavigate } from "react-router-dom";
import EventEditForm from '../components/EventEditForm';
import CommentsViewer from '../components/CommentsViewer';
import { AuthContext } from "../context/Auth.context";
import { useContext } from "react";



function EventDetailPage() {

  const [eventInfo, setEventInfo] = useState(null);
  const { eventId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [propEventId, setpropEventId] = useState(eventId);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);



  const fetchEvent = async (event) => {

    try {
      const displayEvent = await axios.get(`${API_URL}/event/${eventId}`);

      const eventInfo = displayEvent.data;
      setEventInfo(displayEvent.data);

      console.log("event display", eventInfo)

    } catch (error) {
      console.log(error);
    }
  }

  const eventCreatorId = eventInfo ? eventInfo.userId : null; // Extract creator ID from eventInfo

  const isCurrentUserEventCreator = user && user._id === eventCreatorId;


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

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/event/${eventId}`)

      navigate("/");

    } catch (error) {
      console.log(error)
    }
  }


  useEffect (() => {
    fetchEvent ()
}, [])


  return (
    <>
      <NavBar />
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
          {isCurrentUserEventCreator && (
            <div>
              <button onClick={handleEdit}>Update Event</button>
              <button onClick={handleDelete}>Delete Event</button>
            </div>
          )}
          </div>
        )}

        </div>
      ) : (
        <p>Loading event details...</p>
      )}

      <Comments propEventId={propEventId} />
      <CommentsViewer />
    </>
  );
}

export default EventDetailPage