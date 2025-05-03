import React from "react";
import { Buffer } from "buffer";

const ReadMoreCard = ({ job }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-3xl p-8 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-[1.01]">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">{job?.title}</h1>
        <p className="mb-6 leading-relaxed text-gray-700">{job?.description}</p>

        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Job Details
          </h2>
          <div className="space-y-1 text-gray-700">
            <p>
              <span className="font-medium">Salary:</span> {job?.salary} / year
            </p>
            <p>
              <span className="font-medium">Category:</span> {job?.category}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Company Info
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={
                job.company?.companyImage
                  ? `data:image/jpeg;base64,${Buffer.from(
                      job.company.companyImage
                    ).toString("base64")}`
                  : "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              }
              alt="Company Logo"
              className="object-cover w-16 h-16 border-2 border-blue-500 rounded-full shadow-sm"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {job?.company.companyName}
              </p>
              <p className="text-sm text-gray-500">
                {job?.company.companyOrigin}
              </p>
            </div>
          </div>
          <div className="space-y-1 text-gray-700">
            <p>{job?.company.companyDescription}</p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              {job?.company.companyPhone}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              {job?.company.companyEmail}
            </p>
          </div>
        </div>

        <button className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ReadMoreCard;
