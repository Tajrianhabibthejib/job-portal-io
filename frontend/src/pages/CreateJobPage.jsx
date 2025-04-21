import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  salaryFilter,
  companyOriginFilter,
  categoryFilter,
} from "../constants/Filter";

const CreateJobPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [salary, setSalary] = useState("25,000+");
  const [category, setCategory] = useState("Fresher");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [country, setCountry] = useState("United States of America");

  const navigate = useNavigate();

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/", {
          withCredentials: true,
        });
      } catch (error) {
        toast.error(error.response.data.message);
        navigate("/log-in", { replace: true }); // Use replace option here
      }
    };
    getResponse();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        title: jobTitle,
        description: jobDescription,
        salary,
        category,
        company: {
          companyName,
          companyDescription,
          companyPhone,
          companyEmail,
          companyOrigin: country,
        },
      }; // Add this line for debugging
      const res = await axios.post(
        "http://localhost:3000/api/job/create",
        jobData, // Send jobData directly
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies or other credentials are sent
        }
      ); // Handle success response
      if (res.data.success === true) {
        toast.success(res.data.message);
        navigate("/jobs");
      }
    } catch (error) {
      console.error(
        "Error creating job:",
        error.response ? error.response.data : error.message
      );
    }

    // Perform any API call or further actions here.
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new job
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Title:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Job Title"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Description:
              </label>
              <textarea
                id="description"
                rows="8"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your job description here"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="salary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Salary:
              </label>
              <select
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {salaryFilter.map((element, index) => {
                  return (
                    <option key={index} value={element}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {categoryFilter.map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="companyName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="companyDescription"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Description:
              </label>
              <textarea
                id="companyDescription"
                rows="8"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Company Description"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="companyPhone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Phone:
              </label>
              <input
                type="text"
                name="companyPhone"
                id="companyPhone"
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Company Phone"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="companyEmail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Email:
              </label>
              <input
                type="text"
                name="companyEmail"
                id="companyEmail"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Company Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Origin/Country:
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                {companyOriginFilter.map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateJobPage;
