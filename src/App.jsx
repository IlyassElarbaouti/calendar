import React, { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import Modal from "./components/modal/Modal.jsx";
import "./common.scss";
import {
  fetchEvents,
  createNewEvent,
  deleteEvent,
  createObjectForm,
} from "./gateway/events.js";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const fetchEventsHandler = () => {
    fetchEvents().then((data) => setEvents(data));
  };
  const deleteEventHandler = (id) => {
    deleteEvent(id).then(() => fetchEventsHandler());
    console.log(events);
  };

  useEffect(() => {
    fetchEventsHandler();
  }, []);
 
  const createHandler = () => {
    setModalOpen(true);
  };
  const closeHandler = () => {
    setModalOpen(false);
  };

  const prevWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const nextWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
    console.log(weekStartDate);
  };

  const resetWeek = () => {
    setWeekStartDate(new Date());
  };
  console.log(events);
  
   const handleSubmit = (event) => {
     event.preventDefault();
     createNewEvent(createObjectForm()).then(() => fetchEventsHandler());
     setModalOpen(!modalOpen);
   };
  return (
    <>
      {modalOpen && (
        <Modal
          handleSubmit={handleSubmit}
          events={events}
          closeHandler={closeHandler}
        />
      )}
      <Header
        createHandler={createHandler}
        weekStartDate={weekStartDate}
        resetWeek={resetWeek}
        prevWeekHandler={prevWeekHandler}
        nextWeekHandler={nextWeekHandler}
      />
      <Calendar
        deleteEventHandler={deleteEventHandler}
        events={events}
        weekDates={weekDates}
      />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }
