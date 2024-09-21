import React from "react";
import { Routes, Route } from "react-router-dom";
import Report from "../pages/Report";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="kapusta2_front-end/" element={<Report />} />
      </Routes>
    </div>
  );
};
