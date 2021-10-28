// import React from "react";
// import Day from "../day/Day";

// import "./week.scss";

// const Week = ({ weekDates, events }) => {
//   return (
//     <div className="calendar__week">
//       {weekDates.map((dayStart) => {
//         const dayEnd = new Date(dayStart.getTime()).setHours(
//           dayStart.getHours() + 24
//         );

//         //getting all events from the day we will render
//         const dayEvents = events.filter(
//           (event) =>
//             new Date(event.dateFrom) > dayStart &&
//             new Date(event.dateTo) < new Date(dayEnd)
//         );
//         return (
//           <Day
//             events={events}
//             key={dayStart.getDate()}
//             dataDay={dayStart.getDate()}
//             dayEvents={dayEvents}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Week;

import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Day from "../day/Day.jsx";

const Week = ({ weekDates, events, deleteEventHandler }) => (
  <div className="calendar__week">
    {weekDates.map((dayStart) => {
      const dayEnd = new Date(dayStart.getTime()).setHours(
        dayStart.getHours() + 24
      );
      const dayEvents = events.filter(
        (event) =>
          new Date(event.dateFrom).getTime() > new Date(dayStart).getTime() &&
          new Date(event.dateTo).getTime() < new Date(dayEnd).getTime()
      );

      const currentDate = moment(new Date()).format("MMM DD YYYY");
      const thisWeek = moment(new Date(dayStart)).format("MMM DD YYYY");
      console.log(currentDate)

      return (
        <div
          className="calendar__day"
          data-day={dayStart.getDate()}
          key={dayStart.getDate()}
        >
          <Day
            deleteEventHandler={deleteEventHandler}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        </div>
      );
    })}
  </div>
);

export default Week;
