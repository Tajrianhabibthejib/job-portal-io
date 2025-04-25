import React from "react";

const ReadMoreCard = ({ job }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">{job?.title}</h1>
        <p className="mb-4 text-gray-600">{job?.description}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Details</h2>
          <p className="text-gray-600">Salary: {job?.salary} per year</p>
          <p className="text-gray-600">Category: {job?.category}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Company</h2>
          <p className="text-gray-600">Name: {job?.company.companyName}</p>
          <p className="text-gray-600">{job?.company.companyDescription}</p>
          <p className="text-gray-600">Phone: {job?.company.companyPhone}</p>
          <p className="text-gray-600">Email: {job?.company.companyEmail}</p>
          <p className="text-gray-600">Country: {job?.company.companyOrigin}</p>
        </div>

        <button className="w-full px-4 py-2 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ReadMoreCard;
