import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "../config/config.index";
import { AuthContext } from "../context/Auth.context";
import { useContext } from "react";

function Comments(props) { // this is us passing the eventId from the EDP
    
    const [newComment, setNewComment] = useState(""); //allows us to update the comment info and send it to the DB
    const { user } = useContext(AuthContext);
    const userId = user._id;
    const { propEventId } = props;
    //console.log("fehjpiehgeiogheowi", {propEventId})

    const handlePostComment = async (event) => {
        event.preventDefault();
        try {
            const userComment = await axios.post(`${API_URL}/feedback/${propEventId}`, { comment: newComment, userId});
            console.log("gihfeoihewgoiewghiowehg",userComment);
            setNewComment("");

        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    useEffect(() => {
       // this is something we don't want to happen on page render, instead we want it to happen on form submit
    }, []);

  return ( 
        <>
            <form onSubmit={handlePostComment}>
                 <textarea cols="30" rows="10" value = {newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
                <button type="submit">Send</button>
            </form>
        </>
  )
}

export default Comments;