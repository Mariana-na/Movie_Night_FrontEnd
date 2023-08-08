import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";
import {API_URL} from "../config/config.index";

function Comments({eventId}) {

    //const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

/*     const getComments = async () => {
        try {
            const response = await axios.get(`${API_URL}/${eventId}/feedback`);
            setComments(response.data);

        } catch (error) {
            console.error('Error fetching comments', error);
        }
    } */

    const handlePostComment = async (event) => {
        event.preventDefault();
        try {
            const AddComment = await axios.post(`${API_URL}/${eventId}/feedback`, {text: newComment});
            setNewComment("");
            //getComments();
            console.log("new added comment response", AddComment)

        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    useEffect(() => {
        //getComments();
    }, []);

  return (
        <>
            <form onSubmit={handlePostComment}>
                 <textarea cols="30" rows="10" value = {newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
                <button type="submit">Send</button>
            </form>

           {/*  <ul>
                {comments.map(comment => (
                <li key={comment.id}>{comment.text}</li>
                ))}
            </ul> */}

        </>
  )
}

export default Comments;