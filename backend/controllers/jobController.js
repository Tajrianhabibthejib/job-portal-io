import jobModel from "../models/jobModel.js";
import userModel from "../models/userModel.js";

export const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      salary,
      category,
      company: {
        companyName,
        companyDescription,
        companyPhone,
        companyEmail,
        companyOrigin,
      },
    } = req.body;

    if (
      !title ||
      !description ||
      !salary ||
      !category ||
      !companyName ||
      !companyDescription ||
      !companyPhone ||
      !companyEmail ||
      !companyOrigin
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields",
      });
    }

    const userId = req.user.id;
    console.log(userId);

    const newJob = await jobModel.create({
      title,
      description,
      salary,
      category,
      company: {
        companyName,
        companyDescription,
        companyPhone,
        companyEmail,
        companyOrigin,
      },
      postedBy: userId,
    });

    const user = await userModel.findById(userId);
    if (user) {
      user.jobs.push(newJob._id);
      await user.save();
    }

    return res.status(201).json({
      success: true,
      message: "Job Created Successfully",
      job: newJob,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getJobs = async (req, res) => {
  const { salary, category, country } = req.params;

  const job = await jobModel.find({
    salary: salary,
    category: category,
    "company.companyOrigin": country, // Use dot notation for nested fields
  });
  if (!job) {
    return res.status(400).json({
      success: false,
      message: "No jobs found",
    });
  }
  res.json({ job });
};
