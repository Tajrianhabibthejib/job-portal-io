import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import Select from "../components/Select";
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

      console.log("Full API response:", res.data);

      const jobsData = res.data.job; // <-- Extract the actual job object

      // Check if jobsData is an array or an object and handle accordingly
      if (Array.isArray(jobsData)) {
        setJobs(jobsData);
      } else if (jobsData) {
        setJobs([jobsData]); // Wrap single job in array for consistent rendering
      } else {
        setJobs([]); // If no job data returned, set jobs as an empty array
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "Failed to filter jobs.";
      toast.error(errorMessage);
      setJobs([]); // Reset the jobs if there was an error
    }
  };

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/jobs", {
          withCredentials: true,
        });
        const result = res.data.job;
        console.log(result);
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
          {/* Filter Selects */}
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
          {/* Filter Button */}
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
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((element) => (
            <article
              key={element._id}
              className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-5 text-gray-500">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-lg">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  {element.category || "No Category"}{" "}
                  {/* Fallback for missing category */}
                </span>
                <span className="text-sm text-gray-400">
                  {dayjs(element.createdAt).format("MMMM D, YYYY")}
                </span>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                <Link
                  to={`/jobs/read-more/${element._id}`}
                  className="transition-all hover:text-blue-600"
                >
                  {element.title}
                </Link>
              </h2>
              <p className="mb-5 text-sm text-gray-600">
                {element.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Company avatar"
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {element.company?.companyName || "Unknown Company"}
                  </span>
                </div>
                <Link
                  to={`/jobs/read-more/${element._id}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 transition-all hover:underline"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))
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
