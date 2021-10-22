import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import Modal from './components/modal/Modal.jsx'
import "./common.scss";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const createHandler = () =>{
    setModalOpen(true)
  }
  const closeHandler = () => {
    setModalOpen(false)
  };
  

  const prevWeekHandler = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
    console.log(weekStartDate);
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
  return (
    <>
      {modalOpen && <Modal closeHandler={closeHandler} />}
      <Header
        createHandler={createHandler}
        weekStartDate={weekStartDate}
        resetWeek={resetWeek}
        prevWeekHandler={prevWeekHandler}
        nextWeekHandler={nextWeekHandler}
      />
      <Calendar weekDates={weekDates} />
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
