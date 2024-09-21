import React from "react";
import sprite from "../assets/images/symbol-defs.svg";
import "../assets/styles/report-page.css";
const Report = () => {
  return (
    <div className="report-container">
      {/* Back to Home Button */}
      <button className="back-to-home">
        <span className="arrow-left">←</span> Back to Home
      </button>

      {/* Current Period Section */}
      <div className="current-period">
        <div className="month">
          <span className="arrow">←</span>
          <span className="month-name">NOVEMBER 2019</span>
          <span className="arrow">→</span>
        </div>
        <div className="balance">
          Balance: <strong>55 000.00 UAH</strong>
        </div>
      </div>

      {/* Expenses and Income Summary */}
      <div className="report-sections">
        <div className="expenses-section">
          <h2>
            Expenses: <span className="negative">-18 000.00 UAH</span>
          </h2>
        </div>

        <div className="income-section">
          <h2>
            Income: <span className="positive">+45 000.00 UAH</span>
          </h2>
        </div>
      </div>

      {/* Expense and Income Categories */}
      <div className="category-section">
        <div className="row">
          <div className="category-item">
            <span className="category-expense">5 000.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="63" height="56.44">
                <use href={`${sprite}#icon-products`}></use>
              </svg>
            </div>
            <span className="category-name">PRODUCTS</span>
          </div>
          <div className="category-item">
            <span className="category-expense">3 000.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-cocktail-1`}></use>
              </svg>
            </div>
            <span className="category-name">ALCOHOL</span>
          </div>
          <div className="category-item">
            <span className="category-expense">2 400.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-kite-1`}></use>
              </svg>
            </div>
            <span className="category-name">ENTERTAINMENT</span>
          </div>
        </div>

        <div className="row">
          <div className="category-item">
            <span className="category-expense">2 200.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-hands-holding-heart-1`}></use>
              </svg>
            </div>
            <span className="category-name">HEALTH</span>
          </div>
          <div className="category-item">
            <span className="category-expense">2 000.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-car-1`}></use>
              </svg>
            </div>
            <span className="category-name">TRANSPORT</span>
          </div>
          <div className="category-item">
            <span className="category-expense">1 800.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-couch-1`}></use>
              </svg>
            </div>
            <span className="category-name">HOUSING</span>
          </div>
        </div>

        <div className="row">
          <div className="category-item">
            <span className="category-expense">1 500.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="55.89px" height="56px">
                <use href={`${sprite}#icon-tools-1`}></use>
              </svg>
            </div>
            <span className="category-name">TECHNIQUE</span>
          </div>
          <div className="category-item">
            <span className="category-expense">900.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-invoice-1`}></use>
              </svg>
            </div>
            <span className="category-name">COMMUNAL, COMMUNICATION</span>
          </div>
          <div className="category-item">
            <span className="category-expense">800.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-clay-1`}></use>
              </svg>
            </div>
            <span className="category-name">SPORTS, HOBBIES</span>
          </div>
        </div>

        <div className="row">
          <div className="category-item">
            <span className="category-expense">800.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-book-1`}></use>
              </svg>
            </div>
            <span className="category-name">EDUCATION</span>
          </div>
          <div className="category-item">
            <span className="category-expense">200.00</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg className="icon" width="56px" height="56px">
                <use href={`${sprite}#icon-ufo-1`}></use>
              </svg>
            </div>
            <span className="category-name">OTHER</span>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="report-graph">{/* Your graph component */}</div>

      {/* Example for bars (expenses/income graph) */}
      <div className="bar-container">
        <span className="bar-label">Pork</span>
        <div className="bar" style={{ width: "80%" }}></div>
        <span className="bar-value">1 000 UAH</span>
      </div>
      <div className="bar-container">
        <span className="bar-label">Beef</span>
        <div className="bar" style={{ width: "80%" }}></div>
        <span className="bar-value">1 000 UAH</span>
      </div>
      {/* Repeat for all other items */}
    </div>
  );
};

export default Report;
