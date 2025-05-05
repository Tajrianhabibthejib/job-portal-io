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
import CreateJobPage from "./pages/CreateJobPage";
import ErrorPage from "./pages/errorPage";
import ReadMorePage from "./pages/ReadMorePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Sign-up" element={<RegisterUserPage />} />
        <Route path="/log-in" element={<LoginUserPage />} />
        <Route path="/create-job" element={<CreateJobPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path={`/jobs/read-more/:jobId`} element={<ReadMorePage />} />
        <Route path={`/Profile`} element={<ProfilePage />} />

        <Route path="*" element={<ErrorPage />} />
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
