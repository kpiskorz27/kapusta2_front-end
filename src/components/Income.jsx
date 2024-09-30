import React, { useState } from "react";
import sprite from "../assets/images/symbol-defs.svg";

const Income = ({ categories = [] }) => {
  // State to keep track of the active category
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    // Toggle the category, making it active or deactivating it
    setActiveCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  // Sort categories by amount (descending)
  const sortedCategories = [...categories].sort((a, b) => b.amount - a.amount);

  if (!sortedCategories || sortedCategories.length === 0) {
    return (
      <div className="no-expenses-income">
        No income available for this period.
      </div>
    );
  }

  return (
    <div className="items-section-income">
      <div className="row">
        {sortedCategories.map((category) => (
          <div
            className={`category-item ${
              activeCategory === category.name ? "active" : ""
            }`}
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
          >
            <span className="category-income">{category.amount} PLN</span>
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

export default Income;
