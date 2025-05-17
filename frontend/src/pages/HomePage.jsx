import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import axios from "axios";
import { toast } from "react-toastify";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("http://localhost:3000/get-jobs", {
        credentials: true,
      });
      setJobs(res.data.jobs);
    };
    getJobs();
  }, []);

  return (
    <>
      <Hero />
      <section className="py-8">
        <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {jobs.length > 0 ? (
              [...jobs]
                .reverse()
                .slice(0, 3)
                .map((job) => <JobCard key={job._id} element={job} />)
            ) : (
              <p className="p-4 font-semibold text-center text-white bg-gray-600 rounded-md">
                No jobs available right now.
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
