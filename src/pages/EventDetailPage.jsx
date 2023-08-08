import React from 'react'
//import CommentAndButtonsForm from '../components/CommentAndButtonsForm';
import Comments from '../components/Comments';
import NavBar from '../components/NavBar';
//import {API_URL} from "../config/config.index";
import "../App.css";


function EventDetailPage() {
  return (
    <>
      <NavBar/>
      <h1>Movie Night</h1>
      <Comments/>
      {/* <CommentAndButtonsForm/> */}
    </>

  )
}

export default EventDetailPage