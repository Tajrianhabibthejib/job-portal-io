import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import JobList from "../components/JobList";
import Footer from "../components/Footer";
import axios from "axios";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("http://localhost:3000/get-jobs", {
        credentials: true, // if you need to send cookies with the request
      });
      console.log();
      setJobs(res.data.jobs);
    };
    getJobs();
  }, []);

  return (
    <>
      <Hero />
      <JobList jobs={jobs} />
      <Footer />
    </>
  );
};

export default HomePage;
