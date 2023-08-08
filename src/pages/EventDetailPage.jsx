import React from 'react'
//import CommentAndButtonsForm from '../components/CommentAndButtonsForm';
import Comments from '../components/Comments';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import axios from 'axios';
import {API_URL} from "../config/config.index";
import {useParams} from "react-router-dom";
import { useState } from 'react';
import "../App.css";


function EventDetailPage() {

  const [eventInfo, setEventInfo] = useState(null);
  const { eventId } = useParams();

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

  useEffect (() => {
    fetchEvent ()
}, [])



  return (
    <>
      <NavBar/>
      <h1>Movie Night</h1>
      <p>{eventInfo.eventDate}</p>
      <p>{eventInfo.eventLocation} </p>
      <Comments/>
      {/* <CommentAndButtonsForm/> */}
    </>

  )
}

export default EventDetailPage