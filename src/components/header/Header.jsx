import React from "react";

import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = ({weekStartDate,nextWeekHandler ,resetWeek, prevWeekHandler ,createHandler}) => {
  const currentMonth = months[weekStartDate.getMonth()]
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={createHandler}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button onClick={resetWeek} className="navigation__today-btn button">
          Today
        </button>
        <button
          onClick={prevWeekHandler}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextWeekHandler}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{currentMonth}</span>
      </div>
    </header>
  );
};

export default Header;
