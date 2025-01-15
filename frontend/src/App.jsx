import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import RegisterUserPage from "./pages/RegisterUserPage";
import LoginUserPage from "./pages/LoginUserPage";
import JobsPage from "./pages/JobsPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-up" element={<RegisterUserPage />} />
        <Route path="/log-in" element={<LoginUserPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
