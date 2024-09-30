import React from "react";
import sprite from "../assets/images/symbol-defs.svg";
import PropTypes from "prop-types";

const ReportCategorySwitcher = ({ view, setView }) => {
  // Helper to toggle between 'expenses' and 'income'
  const handleSwitch = () => {
    // Toggle between "expenses" and "income"
    setView((prevView) => (prevView === "expenses" ? "income" : "expenses"));
  };

  return (
    <div className="category-switcher">
      <span className="arrow" onClick={handleSwitch}>
        <svg className="icon" width="18px" height="12px">
          <use href={`${sprite}#icon-return-sign`}></use>
        </svg>
      </span>
      <span className="view-name">
        {view === "expenses" ? "EXPENSES" : "INCOME"}
      </span>
      <span className="arrow" onClick={handleSwitch}>
        <svg className="icon" width="18px" height="12px">
          <use href={`${sprite}#icon-forward-sign`}></use>
        </svg>
      </span>
    </div>
  );
};

ReportCategorySwitcher.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default ReportCategorySwitcher;
