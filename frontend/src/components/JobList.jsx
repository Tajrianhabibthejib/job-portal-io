import React from "react";
import dayjs from "dayjs";

const JobList = ({ jobs }) => {
  return (
    <section className="py-8">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
        <div className="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
            Recent Jobs
          </h2>
          <p className="text-lg font-light text-gray-600 sm:text-xl">
            We use an agile approach to get the best jobs available right now.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.slice(0, 3).map((element, index) => (
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
                <a href="#" className="transition-all hover:text-blue-600">
                  {element.title}
                </a>
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
                <a
                  href={`/jobs/read-more/${element._id}`}
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
