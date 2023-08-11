import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Comments from "../components/Comments";
import { API_URL } from "../config/config.index";
import EventEditForm from "../components/EventEditForm";
import CommentsViewer from "../components/CommentsViewer";
import { AuthContext } from "../context/Auth.context";
import "/style/global.css";
import "/style/EventDetailPage.css";

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
  const [commentCreated, setCommentCreated] = useState(null);
  const [eventComments, setEventComments] = useState([]);
 
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
      const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL}/feedback/${eventId}`);
        const allComments = response.data;
        console.log("All the comments from this event: ", allComments);
        setEventComments(allComments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
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
            <div className="event-container">
              <div className="ed-logistics">
                <h1>{eventInfo.eventName}</h1>
                <span className="when-where-container">
                  <span className="when-where">
                    <h3>When:</h3> <h2>{eventInfo.eventDate}</h2>
                  </span>
                  <span className="when-where">
                    <h3>Where:</h3> <h2>{eventInfo.eventLocation}</h2>
                  </span>
                </span>
              </div>
              <div className="ed-movie-recipe-container">
                <div className="ed-movie-container">
                  {randomMovie && (
                    <span>
                      <h4>What we're watching:</h4>
                      <h2>{randomMovie.name}</h2>
                    </span>
                  )}
                  <img src={randomMovie.image} alt={randomMovie.name} />
                </div>
                <div className="ed-recipe-container">
                  {randomMeal && (
                    <span>
                      <h4>What we're eating:</h4>
                      <h2> {randomMeal.strMeal}</h2>
                    </span>
                  )}
                  <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                </div>
              </div>

              {isCurrentUserEventCreator && (
                <div className="button-container">
                  <button className="creator-buttons" onClick={handleEdit}>
                    Update Event
                  </button>
                  <button className="creator-buttons-2" onClick={handleDelete}>
                    Delete Event
                    </button>
                    <p>Send me a comment:</p>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <p>Loading event details...</p>
      )}

      <Comments
        propEventId={propEventId}
        comments={eventComments}
        setComments={setEventComments}
      />
      <CommentsViewer comments={eventComments} setComments={setEventComments} />
    </>
  );
}

export default EventDetailPage;
