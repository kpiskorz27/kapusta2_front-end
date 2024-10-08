import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useMatchMedia } from '../../hooks/use-match-media';
import GrayBg from '../../components/GrayBg';
import ReportsBtn from '../../components/Buttons/ReportsBtn/ReportsBtn';
import ChangeBalance from '../../components/ChangeBalance/ChangeBalance';
import DateSelection from '../../components/DateSelection/DateSelection';
import { StyledHomePage } from './Styles';
import { TransactionsList } from '../../components/TransactionsList/TransactionsList';
import {
  TransactionTabsMobile,
  TransactionTabsDesktop,
} from '../../components/TransactionTabs/TransactionTabs';


export default function HomePage() {

  const [startDate, setStartDate] = useState(new Date());

  const { isMobile } = useMatchMedia();

  const location = useLocation();

  return (
    <>
      <GrayBg />
      <StyledHomePage>
        <div className="flexWrapper">
          {isMobile && <ReportsBtn to="/reports" state={{ from: location }} />}
          <ChangeBalance />
          {!isMobile && <ReportsBtn to="/reports" state={{ from: location }} />}
        </div>
        {isMobile && (
          <div className="datePickerMobWrap">
            <DateSelection startDate={startDate} setStartDate={setStartDate} />
          </div>
        )}
        {isMobile && <TransactionTabsMobile />}
        {!isMobile && <TransactionTabsDesktop />}
        {!isMobile && <Outlet />}
        {isMobile && <TransactionsList />}
      </StyledHomePage>
    </>
  );
}