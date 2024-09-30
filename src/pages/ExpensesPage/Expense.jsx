import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/DownList/Form/Form";
import { Summary } from "../../components/Summary/Summary";
import { TransactionListDesk } from "../../components/TransactionListDesk/TransactionListDesk";
import {
  selectBalance,
  selectExpenseTransactions,
  selectIsLoggedIn,
} from "../../redux/slices/selectorsM";
import { getExpenses } from "../../redux/auth/operations";
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from "../ExpensesPage/ExpensePage.styled";
import { useMatchMedia } from "../../hooks/use-match-media";
import { BackButton } from "../../components/Buttons/BackButton";

export default function ExpensesPage() {
  const dispatch = useDispatch();

  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allExpenses = useSelector(selectExpenseTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "red";

  useEffect(() => {
    if (user) {
      dispatch(getExpenses());
    }
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && (
        <>
          <StyledBg />
          <BackButton />
        </>
      )}
      <StyledFrame>
        <Form />
        <StyledTableAndSummaryDiv>
          <TransactionListDesk>
            {allExpenses}
            {color}
          </TransactionListDesk>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}
