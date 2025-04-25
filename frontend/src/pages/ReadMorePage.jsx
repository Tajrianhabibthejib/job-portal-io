import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import ReadMoreCard from "../components/ReadMoreCard";

const ReadMorePage = () => {
  const [job, setJob] = useState(null); // Initializing with null to indicate no job data
  const { jobId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/jobs/read-more/${jobId}`
        );
        setJob(res.data.findJob);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };
    getJob();
  }, [jobId]);

  if (loading) {
    // Center spinner on the page
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <HashLoader size={50} color="#4A90E2" />
      </div>
    );
  }

  if (!job) {
    return (
      <p className="flex items-center justify-center w-full h-screen">
        Job details not found
      </p>
    ); // Graceful error handling if no job is found
  }

  return <ReadMoreCard job={job} />;
};

export default ReadMorePage;
