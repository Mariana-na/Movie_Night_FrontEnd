import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/config.index";
import { useParams } from "react-router-dom";

function CommentsViewer() {
  const [eventComments, setEventComments] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
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

  return (
    <>
      {eventComments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.userId}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </>
  );
}

export default CommentsViewer;
