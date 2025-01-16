import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6); // Number of jobs per page
  const [maxPageButtons] = useState(5); // Max number of pagination buttons
  const navigate = useNavigate();

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/jobs", {
          withCredentials: true,
        });
        setJobs(res.data.job);
        // setJobs(res)
      } catch (error) {
        toast.error(error.response.data.message);
        navigate("/log-in", { replace: true }); // Use replace option here
      }
    };
    getResponse();
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Handles page change
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Calculate range of page numbers to display
  const getPaginationRange = () => {
    const startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <>
      <section className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-gray-100">
        <div className="flex justify-end mb-3">
          <p>
            Want to post a Job? Visit{" "}
            <Link className="font-semibold text-blue-500" to={"/create-job"}>
              Create Job Page
            </Link>
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {currentJobs.map((element, index) => (
            <article
              key={index}
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
                  {element.category}
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
                    {element.company.companyName}
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
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {getPaginationRange().map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                currentPage === number
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default JobsPage;
