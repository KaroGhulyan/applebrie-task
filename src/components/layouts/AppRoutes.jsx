import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const UsersList = lazy(() => import("../../pages/users/UsersList"));

export const AppRoutes = () => (
  <Routes>
    <>
      <Route path="/" element={<UsersList />} />
      {/*<Route path="/user:id" element={<UserView />} />*/}
      {/*<Route path="*" element={<Navigate to="/" replace />} />*/}
    </>
  </Routes>
);
