import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css"; // Import your custom CSS file
import ToggleButton from "./button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const clearDate = () => {
    // Clear all data like: end date, start date, remind date, etc.
  };

  const RenderCalendarContainer = ({ children }) => {
    return (
      <div
        className="custom-calendar-container"
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="calendar-wrapper">{children}</div>
        <div
          className="remind-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <AccessAlarmIcon />
            <p>Remind</p>
          </div>
          {/* Remind dropdown */}
          <select>
            <option value="none">None</option>
            <option value="1-day-before">1 day before</option>
            <option value="2-days-before">2 days before</option>
            <option value="1-week-before">1 week before</option>
          </select>
        </div>
        <div
          className="end-date-and-time-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="">
            <div className="end-date-wrapper">
              <p>End date</p>
            </div>
            <ToggleButton />
          </div>
        </div>
        <div className="date-format-wrapper"></div>
        <div className="clear-wrapper">
          <button onClick={clearDate}>Clear</button>
        </div>
        <div className="lear-about-wrapper"></div>
      </div>
    );
  };

  const RenderCustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>
          {date.toLocaleString("en-GB", { month: "long", year: "numeric" })}
        </p>
        <div>
          <button onClick={decreaseMonth}>Prev</button>
          <button onClick={increaseMonth}>Next</button>
        </div>
      </div>
    );
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        withPortal
        className="custom-datepicker"
        renderCustomHeader={RenderCustomHeader}
        calendarContainer={RenderCalendarContainer}
      />
    </div>
  );
};

export default CustomDatePicker;
