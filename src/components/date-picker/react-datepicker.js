// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
const CustomInput = ({ value, onClick }) => {
  return (
    <button className="custom-input" onClick={onClick}>
      {value}
    </button>
  );
};
// const CustomHeader = ({
//   date,
//   decreaseMonth,
//   increaseMonth,
//   prevMonthButtonDisabled,
//   nextMonthButtonDisabled,
//   showMonthYearDropdown,
//   toggleMonthYearDropdown,
// }) => (
//   <div
//     className="custom-header"
//     style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       margin: "0 0 10px 0",
//     }}
//   >
//     <span
//       className="custom-header-date"
//       onClick={toggleMonthYearDropdown}
//       style={{ cursor: "pointer" }}
//     >
//       {date.toLocaleString("en-US", {
//         month: "long",
//         year: "numeric",
//       })}
//     </span>

//     <div id="action-buttons">
//       <button
//         className="custom-header-button"
//         onClick={decreaseMonth}
//         disabled={prevMonthButtonDisabled}
//       >
//         {"<"}
//       </button>
//       <button
//         className="custom-header-button"
//         onClick={increaseMonth}
//         disabled={nextMonthButtonDisabled}
//       >
//         {">"}
//       </button>
//     </div>
//   </div>
// );

// export default function POCReactDatePicker() {
//   const [config, setConfig] = useState({
//     startDate: new Date(),
//   });

//   const onChange = (date) => {
//     setConfig({
//       ...config,
//       startDate: date,
//     });
//   };

//   return (
//     <div className="react-datepicker-wrapper">
//       <h1
//         style={{
//           fontFamily: "Arial, sans-serif",
//           fontSize: "24px",
//           fontWeight: "bold",
//           color: "#4285F4",
//         }}
//       >
//         React Datepicker
//       </h1>

//       <DatePicker
//         selected={config.startDate}
//         onChange={onChange}
//         className="google-datepicker"
//         calendarClassName="google-datepicker-calendar"
//         dateFormat="dd/MM/yyyy"
//         placeholderText="Select a date"
//         dropdownMode="select"
//         popperPlacement="bottom-start"
//         customInput={<CustomInput />}
//         showTwoColumnMonthYearPicker
//         // add the time picker below
//         showTimeSelect
//       />
//     </div>
//   );
// }

registerLocale("en-GB", enGB);

function CustomDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showTime, setShowTime] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showStartDate, setShowStartDate] = useState(true);

  const CustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
  }) => (
    <div className="header">
      <div>{`${date.toLocaleString("en-GB", {
        month: "long",
      })} ${date.getFullYear()}`}</div>
      <button onClick={decreaseMonth}>Prev</button>
      <button onClick={increaseMonth}>Next</button>
    </div>
  );

  const toggleEndDate = () => {
    setShowEndDate(!showEndDate);
  };

  const toggleStartDate = () => {
    setShowStartDate(!showStartDate);
  };

  const clearAll = () => {
    setStartDate(new Date());
    setEndDate(null);
    setShowTime(false);
    setShowEndDate(false);
    setShowStartDate(true);
  };

  const onChange = (date) => {
    setStartDate(date);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {showStartDate && (
        <DatePicker
          selected={startDate}
          onChange={onChange}
          className="google-datepicker"
          calendarClassName="google-datepicker-calendar"
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          dropdownMode="select"
          popperPlacement="bottom-start"
          customInput={<CustomInput />}
          showTwoColumnMonthYearPicker
        />
      )}
      {showEndDate && (
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select an end date"
          renderCustomHeader={CustomHeader}
          showTimeSelect={showTime}
          locale="en-GB"
        />
      )}
      <button onClick={toggleEndDate}>Toggle End Date</button>
      <button onClick={toggleStartDate}>Toggle Start Date</button>
      <button onClick={() => setShowTime(!showTime)}>Toggle Time Select</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default CustomDatePicker;
