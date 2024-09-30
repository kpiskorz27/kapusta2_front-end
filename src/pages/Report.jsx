import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../redux/slices/transactionSliceK";
import MainPageButton from "../components/BackToHome";
import CurrentPeriod from "../components/CurrentPeriod";
import BudgetSummary from "../components/BudgetSummary";
import Balance from "../components/Balance";
import Expenses from "../components/Expenses";
import Income from "../components/Income";
import ReportCategorySwitcher from "../components/ReportCategorySwitcher";
// import ReportGraph from "../components/ReportGraph";

const Report = () => {
  const dispatch = useDispatch();
  const { income, expenses } = useSelector((state) => state.transactions);
  const [currentPeriod, setCurrentPeriod] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [formattedMonthYear, setFormattedMonthYear] = useState(
    `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(
      2,
      "0"
    )}`
  );
  const [view, setView] = useState("expenses");

  useEffect(() => {
    dispatch(fetchTransactions(formattedMonthYear));
  }, [dispatch, formattedMonthYear]);

  return (
    <div className="report-container">
      <div className="top-container">
        <MainPageButton />
        <Balance />
        <CurrentPeriod
          currentPeriod={currentPeriod}
          setCurrentPeriod={setCurrentPeriod}
          onPeriodChange={setFormattedMonthYear}
        />
      </div>
      <BudgetSummary
        income={income?.incomeTotal}
        expenses={expenses?.expenseTotal}
      />

      <div className="category-section">
        <ReportCategorySwitcher view={view} setView={setView} />

        {view === "expenses" && (
          <Expenses categories={expenses?.expensesData || []} type="expense" />
        )}
        {view === "income" && (
          <Income categories={income?.incomesData || []} type="income" />
        )}
      </div>
      {/* <ReportGraph /> */}
    </div>
  );
};

export default Report;
