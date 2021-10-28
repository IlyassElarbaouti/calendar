import React, { useEffect, useState } from "react";
import "./event.scss";
import { deleteEvent } from "../../gateway/events";

const Event = ({id, height, marginTop, title, time ,deleteEventHandler}) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const [showDeleteBtn,setShowDeleteBtn]=useState(true)

  const toggleDeleteBtnHandler = ()=>{
    setShowDeleteBtn(!showDeleteBtn)
  }

  return (
    <>
      <div
        style={eventStyle}
        onClick={toggleDeleteBtnHandler}
        className="event"
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
        {showDeleteBtn && (
          <button
            style={{
              margin: "0px 10px",
              position: "absolute",
              bottom: -10,
              right: -10,
            }}
            onClick={() => deleteEventHandler(id)}
            className="button deleteBtn"
          >
            <i
              style={{ margin: "0px 10px", color: "grey" }}
              className="fa-trash fas"
            ></i>
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default Event;
