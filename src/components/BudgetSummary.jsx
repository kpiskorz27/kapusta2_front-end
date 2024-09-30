import React from "react";

const BudgetSummary = ({ income = 0, expenses = 0 }) => {
  console.log("Expenses in BudgetSummary:", expenses); // Check if data is correctly passed

  return (
    <div className="budget-summary-container">
      <div className="expenses">
        <div className="expenses-text">Expenses:</div>
        <div className="expenses-sum">-{expenses} PLN</div>{" "}
        {/* Handle undefined expenses */}
      </div>
      <div className="divider"></div>
      <div className="income">
        <div className="income-text">Income:</div>
        <div className="income-sum">+{income} PLN</div>
      </div>
    </div>
  );
};

export default BudgetSummary;
