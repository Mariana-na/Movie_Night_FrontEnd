
import React from 'react'
import CommentAndButtonsForm from '../components/CommentAndButtonsForm'
import "../App.css";
import NavBar from "../components/navbar"


function EventDetailPage() {
  return (
    <>
    <NavBar />
      <h1 className='header'><b>Movie</b>Night</h1>
      <CommentAndButtonsForm/>
    </>

  )
}

export default EventDetailPage