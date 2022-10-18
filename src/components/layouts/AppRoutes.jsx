import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import UserView from "../../pages/users/UserView";
const UsersList = lazy(() => import("../../pages/users/UsersList"));
const PostsList = lazy(() => import("../../pages/posts/PostsList"));

export const AppRoutes = () => (
  <Routes>
    <>
      <Route path="/" element={<UsersList />} />
      <Route path="/user/:id" element={<UserView />} />
      <Route path="/posts" element={<PostsList />} />
    </>
  </Routes>
);
