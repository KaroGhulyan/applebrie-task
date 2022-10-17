import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => (
  <Routes>
    <>
      {/*<Route path="/user:id" element={<UserView />} />*/}
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  </Routes>
);
