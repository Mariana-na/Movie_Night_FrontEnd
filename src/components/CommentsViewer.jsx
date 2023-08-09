import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/config.index";
import { useParams } from "react-router-dom";

function CommentsViewer() {
  const [eventComments, setEventComments] = useState([]);
  const { eventId } = useParams();
  const [userData, setUserData] = useState({});


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


  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const userNamesPromises = eventComments.map(async (comment) => {
          const userId = comment.userId;
          const commentUser = await axios.get(`${API_URL}/user/${userId}`);
          console.log(commentUser);
          return { userId, name: commentUser.data.name };
        });
  
        const userNames = await Promise.all(userNamesPromises);
        const userDataMap = userNames.reduce((map, user) => {
          map[user.userId] = user.name;
          return map;
        }, {});
  
        setUserData(userDataMap);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUserNames();
  }, [eventComments]);
  

  return (
    <>
      {eventComments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>{comment.name} </p>
        </div>
      ))}
    </>
  );
}

export default CommentsViewer;
