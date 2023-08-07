import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";

function Comments({eventId}) {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const getComment = async () => {
        try {
            const response = await axios.get("http://localhost:5005/feedback/:feedbackId");
            setComments(response.data);

        } catch (error) {
            console.error('Error fetching comments', error);
        }
    }

    const postComment = async () => {
        try {
            

        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

  return (
        <>
            <form o/* nSubmit={handleSendComment} */>
                 <textarea cols="30" rows="10" value = {newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
                <button type="submit">Send</button>
            </form>
        </>
  )
}

export default Comments