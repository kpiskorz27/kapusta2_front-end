import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  selectIncomeSummary,
  selectExpensesSummary,
  selectIsLoading,
} from "../../redux/slices/selectorsM";
import {
  StyledTable,
  StyledRow,
  StyledTableHead,
  StyledValue,
} from "./Summary.styled";

export const Summary = () => {
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading);
  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);
  let data;

  if (location.pathname === "/home/income") {
    data = Object.entries(incomeData) ?? [];
  }
  if (location.pathname === "/home/expenses") {
    data = Object.entries(expensesData) ?? [];
  }

  return (
    !isLoading && (
      <StyledTable>
        <StyledTableHead>SUMMARY</StyledTableHead>
        {data?.map((el) => {
          if (el[1] === "N/A") {
            return false;
          } else {
            return (
              <StyledRow key={`${el[0]}${el[1]}`}>
                <StyledValue>{el[1]}.00</StyledValue>
              </StyledRow>
            );
          }
        })}
      </StyledTable>
    )
  );
};
