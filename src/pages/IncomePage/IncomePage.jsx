import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionListDesk } from "../../components/TransactionListDesk/TransactionListDesk";
import {
  selectIncomeTransactions,
  selectIsLoggedIn,
  selectBalance,
} from "../../redux/slices/selectorsM";
import { getIncome } from "../../redux/auth/operations";
import { useMatchMedia } from "../../hooks/use-match-media";
import { BackButton } from "../../components/Buttons/BackButton";
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
} from "../ExpensesPage/ExpensePage.styled";
import Form from "../../components/DownList/Form/Form";
import { Summary } from "../../components/Summary/Summary";

export default function IncomePage() {
  const dispatch = useDispatch();

  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allIncomes = useSelector(selectIncomeTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "green";

  useEffect(() => {
    if (user) dispatch(getIncome());
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
            {allIncomes}
            {color}
          </TransactionListDesk>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}
