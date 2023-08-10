import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Comments from "../components/Comments";
import { API_URL } from "../config/config.index";
import EventEditForm from "../components/EventEditForm";
import CommentsViewer from "../components/CommentsViewer";
import { AuthContext } from "../context/Auth.context";

function EventDetailPage() {
  const [eventInfo, setEventInfo] = useState(null);
  const { eventId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [propEventId, setPropEventId] = useState(eventId);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [randomMeal, setRandomMeal] = useState(null);
  const [randomMovie, setRandomMovie] = useState(null);
  const [eventCreatorId, setEventCreatorId] = useState(null);

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`${API_URL}/event/${eventId}`);
      const eventInfo = response.data;
      setEventInfo(eventInfo);
      setRandomMeal(eventInfo.randomMeal);
      setRandomMovie(eventInfo.randomMovie);
      setEventCreatorId(eventInfo.userId); // Assign eventCreatorId
      console.log("Event details:", eventInfo);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchEvent();
  }, [eventId]);

  //const eventCreatorId = eventInfo ? eventInfo.userId : null; //delete if we graduate safely!


  const isCurrentUserEventCreator = user && user._id === eventCreatorId;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async (updatedEventData) => {
    try {
      const updatedEvent = await axios.put(
        `${API_URL}/event/${eventId}`,
        updatedEventData
      );
      setEventInfo(updatedEvent.data);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/event/${eventId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              <p>{eventInfo.recipeId}</p>
              {randomMeal && <p>{randomMeal.strMeal}</p>}
              {randomMovie && <p>{randomMovie.name}</p>}
              <p>{eventInfo.eventDate}</p>
              <p>{eventInfo.eventLocation}</p>
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

export default EventDetailPage;
