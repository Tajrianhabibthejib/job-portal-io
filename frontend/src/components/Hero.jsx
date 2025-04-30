import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="grid items-center gap-12 px-6 py-20 mx-auto max-w-7xl lg:py-32 lg:grid-cols-12">
        <div className="text-center lg:col-span-7 lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Find Top React & React Native Jobs
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
            Discover exciting opportunities tailored for React & React Native
            developers. Land your dream job today.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row lg:justify-start">
            <Link
              to="/create-job"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
            >
              Create Job
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 10.707a1 1 0 01-1.414-1.414l6-6z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-indigo-700 border border-indigo-300 dark:text-white dark:border-gray-600 rounded-xl hover:bg-indigo-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-indigo-200 dark:focus:ring-gray-800"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="Job Search Mockup"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
