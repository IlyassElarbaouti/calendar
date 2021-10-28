import React, { useState } from "react";

import "./modal.scss";


const Modal = ({ events,closeHandler,handleSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={closeHandler} className="create-event__close-btn">
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={handleChange}
              value={formData.title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="event-form__field"
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={handleChange}
                value={formData.startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                onChange={handleChange}
                value={formData.endTime}
                className="event-form__field"
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
            <button
              onClick={handleSubmit}
              type="submit"
              className="event-form__submit-btn"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
