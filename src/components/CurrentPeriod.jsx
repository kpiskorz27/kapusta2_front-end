import React, { useEffect } from "react";
import sprite from "../assets/images/symbol-defs.svg";

const CurrentPeriod = ({ currentPeriod, setCurrentPeriod, onPeriodChange }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (direction) => {
    let { month, year } = currentPeriod;

    month += direction;
    if (month < 0) {
      month = 11;
      year -= 1;
    } else if (month > 11) {
      month = 0;
      year += 1;
    }

    // Ensure the year stays within the 2000–2100 range
    if (year < 2000) year = 2100;
    if (year > 2100) year = 2000;

    setCurrentPeriod({ month, year });
  };

  // Format the period as YYYY-MM and pass it to the parent when it changes
  useEffect(() => {
    const formattedMonthYear = `${currentPeriod.year}-${String(
      currentPeriod.month + 1 // Correct month formatting (add 1)
    ).padStart(2, "0")}`;

    onPeriodChange(formattedMonthYear); // Pass the formatted period to parent
  }, [currentPeriod, onPeriodChange]);

  return (
    <div className="current-period">
      <div className="text-current-period">Current period:</div>
      <div className="month">
        <span className="arrow" onClick={() => handleMonthChange(-1)}>
          <svg className="icon" width="18px" height="12px">
            <use href={`${sprite}#icon-return-sign`}></use>
          </svg>
        </span>
        <span className="month-name">
          {months[currentPeriod.month]} {currentPeriod.year}
        </span>
        <span className="arrow" onClick={() => handleMonthChange(1)}>
          <svg className="icon" width="18px" height="12px">
            <use href={`${sprite}#icon-forward-sign`}></use>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CurrentPeriod;
