import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobsPage = () => {
  const [jobs, setJobs] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/jobs", {
          withCredentials: true,
        });
        setJobs(res.data.job);
      } catch (error) {
        toast.error(error.response.data.message);
        navigate("/log-in");
      }
    };
    getResponse();
  }, []);

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
          {jobs.map((element, index) => (
            <article
              key={index}
              className="p-6 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-5 text-gray-500">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
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
                <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">
                {element.title}
                </a>
              </h2>
              <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              {element.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {element.company.companyName}
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default JobsPage;
