import React, { useState } from "react";
import sprite from "../assets/images/symbol-defs.svg";

const Expenses = ({ categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  const sortedCategories = [...categories].sort((a, b) => b.amount - a.amount);

  if (!sortedCategories || sortedCategories.length === 0) {
    return (
      <div className="no-expenses-income">
        No expenses available for this period.
      </div>
    );
  }

  return (
    <div className="items-section-expenses">
      <div className="row">
        {sortedCategories.map((category) => (
          <div
            className={`category-item ${
              activeCategory === category.name ? "active" : ""
            }`}
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
          >
            <span className="category-expense">{category.amount} PLN</span>
            <div className="icon-wrapper">
              <span className="icon-background"></span>
              <svg
                className={`icon ${
                  activeCategory === category.name ? "icon-active" : ""
                }`}
                width="56px"
                height="56px"
              >
                <use href={`${sprite}#icon-${category.icon}`}></use>
              </svg>
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
