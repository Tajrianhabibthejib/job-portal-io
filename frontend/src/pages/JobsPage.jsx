import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "../components/Select";
import JobCard from "../components/JobCard";
import {
  salaryFilter,
  categoryFilter,
  companyOriginFilter,
} from "../constants/Filter";

const JobsPage = () => {
  const [salary, setSalary] = useState("25,000+");
  const [category, setCategory] = useState("Fresher");
  const [companyOrigin, setCompanyOrigin] = useState(
    "United States of America"
  );
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/api/job/salary/${salary}/category/${category}/country/${companyOrigin}`,
        {
          withCredentials: true,
        }
      );
      const jobsData = res.data.job;
      setJobs(Array.isArray(jobsData) ? jobsData : []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to filter jobs.");
      setJobs([]);
    }
  };

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/jobs", {
          withCredentials: true,
        });
        const result = res.data.job;
        setJobs(Array.isArray(result) ? result : []);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Error loading jobs.");
        navigate("/log-in", { replace: true });
      }
    };
    getResponse();
  }, [navigate]);

  return (
    <section className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="container p-6 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 lg:flex-nowrap">
          <Select
            filter={salaryFilter}
            state={salary}
            setState={setSalary}
            className="w-full sm:min-w-[200px] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Select
            filter={categoryFilter}
            state={category}
            setState={setCategory}
            className="w-full sm:min-w-[200px] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Select
            filter={companyOriginFilter}
            state={companyOrigin}
            setState={setCompanyOrigin}
            className="w-full sm:min-w-[200px] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            onClick={handleFilter}
            className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="flex justify-end mb-3">
        <p>
          Want to post a Job? Visit{" "}
          <Link className="font-semibold text-blue-500" to={"/create-job"}>
            Create Job Page
          </Link>
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {jobs.length > 0 ? (
          [...jobs]
            .reverse()
            .map((job) => <JobCard key={job._id} element={job} />)
        ) : (
          <p className="p-4 font-semibold text-center text-white bg-gray-600 rounded-md col-span-full">
            No jobs found.
          </p>
        )}
      </div>
    </section>
  );
};

export default JobsPage;
