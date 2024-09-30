import React from "react";
import { useNavigate } from "react-router-dom";
import sprite from "../assets/images/symbol-defs.svg";

const MainPageButton = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page-container">
      <button className="back-to-home" onClick={() => navigate("/")}>
        <div className="return-arrow">
          <svg className="icon" width="18px" height="12px">
            <use href={`${sprite}#icon-main-page-return-arrow`}></use>
          </svg>
        </div>
        <span className="main-page-text">Main Page</span>
      </button>
    </div>
  );
};

export default MainPageButton;
