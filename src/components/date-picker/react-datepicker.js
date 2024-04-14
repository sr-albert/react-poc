import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style.css"; // Import your custom CSS file
import ToggleButton from "../button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Settings } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomDatePicker = () => {
  const [info, setInfo] = useState({
    selectedDate: new Date(),
    includeTime: false,
    endDate: false,
    isOpen: false,
  });

  const handleDateChange = (date) => {
    setInfo({ ...info, selectedDate: date });
  };

  const clearAll = () => {
    // Clear all data like: end date, start date, remind date, etc.
    setInfo({
      selectedDate: new Date(),
      includeTime: false,
      endDate: false,
      isOpen: false,
    });
  };

  const RenderCalendarContainer = ({ children }) => {
    return (
      <div className="calendar-container flex flex-col items-left justify-center p-4 bg-white rounded-lg">
        <div className="calendar-wrapper">{children}</div>
        <div className="border-t border-gray-300 my-2"></div>
        <div className="remind-wrapper flex flex-row w-full  justify-between items-center space-x-4">
          <div className="flex flex-row gap-2">
            <AccessAlarmIcon />
            <p>Remind</p>
          </div>
          <select>
            <option value="none">None</option>
            <option value="1-day-before">1 day before</option>
            <option value="2-days-before">2 days before</option>
            <option value="1-week-before">1 week before</option>
          </select>
        </div>
        <div className="border-t border-gray-300 my-2"></div>

        <div className="end-date-and-time-wrapper flex flex-col gap-2">
          <div className="end-date-wrapper flex justify-between items-center space-x-4">
            <p>End date</p>
            <ToggleButton
              value={info.endDate}
              onChange={() => {
                setInfo({ ...info, endDate: !info.endDate });
              }}
            />
          </div>
          <div className="include-wrapper flex justify-between items-center space-x-4">
            <p>Include time</p>
            <ToggleButton
              value={info.includeTime}
              onChange={() => {
                setInfo({ ...info, endDate: !info.includeTime });
              }}
            />
          </div>
        </div>
        <div className="border-t border-gray-300 my-2"></div>

        <div className="date-format-wrapper">
          <button className="flex w-full flex-row gap-2">
            {/* setting icon */}
            <Settings className="h-5 w-5" />
            <p> Date format & timezone</p>
          </button>
        </div>
        <div className="border-t border-gray-300 my-2"></div>

        <div className="clear-wrapper">
          <button onClick={clearAll}>Clear</button>
        </div>
        <div className="border-t border-gray-300 my-2"></div>

        <div className="learn-about-wrapper"></div>
      </div>
    );
  };

  const RenderCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="border-soild border-2 border-gray p-2 rounded-md"
      onClick={() => {
        onClick();
        setInfo({ ...info, isOpen: !info.isOpen });
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  const RenderCustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
    return (
      <div className="flex flex-row w-full justify-between items-center">
        <p>
          {date.toLocaleString("en-GB", { month: "long", year: "numeric" })}
        </p>
        <div className="flex flex-row gap-2">
          <button className="p-2 hover:border" onClick={decreaseMonth}>
            <ArrowBackIosNewIcon />
          </button>
          <button className="p-2" onClick={increaseMonth}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex picker-wrapper ">
      <DatePicker
        open={info.isOpen}
        selected={info?.selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        withPortal
        className="custom-datepicker"
        renderCustomHeader={RenderCustomHeader}
        calendarContainer={RenderCalendarContainer}
        value={info?.selectedDate}
        customInput={<RenderCustomInput />}
        onClickOutside={() => {
          setInfo({ ...info, isOpen: false });
        }}
      />
    </div>
  );
};

export default CustomDatePicker;
