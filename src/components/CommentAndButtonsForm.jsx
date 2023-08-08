import React from 'react'
import {useState} from "react";
import axios from "axios";
import {API_URL} from "../config/config.index";
import "../App.css";

function CommentAndButtonsForm() {

    const [comment, setComment] = useState("");
    const [attending, setAttending] = useState(0);
    const [notAttending, setNotAttending] = useState(0);

    const handleSendComment = event => {
        event.preventDefault();
        onSubmit({comment});
        setComment("");
    }

    const handleAttending = async () => {

        try {
            const response = await axios.post(`${API_URL}/event/:eventId/attending`);
            setAttending(response.data.attendingCount);
            setNotAttending(0);
            
        } catch (error) {
            console.error('Error updating attending status:', error);
        }
    }

    const handleNotAttending = async () => {

        try {
            const response = await axios.post(`${API_URL}/api/:eventId/notAttending`);
            setNotAttending(response.data.notAttendingCount);
            setAttending(0);
            
        } catch (error) {
            console.error('Error updating not attending status:', error);
        }
    }


  return (
    <>
        <form onSubmit={handleSendComment}>
            <textarea cols="30" rows="10" value = {comment} onChange={(event) => setComment(event.target.value)}></textarea>
            <br />
            <button type="submit">Send</button>
        </form>

        <button onClick={handleAttending} className={`${
          attending ? 'attending-button-selected' : ''
        }`} > 
        I'm coming </button>

        <button onClick={handleNotAttending} className={`${
          notAttending ? 'not-attending-button-selected' : ''
        }`} > Can't Make It </button>
    </>
  )
}

export default CommentAndButtonsForm;