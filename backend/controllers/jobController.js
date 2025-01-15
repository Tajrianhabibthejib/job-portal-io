import jobModel from "../models/jobModel.js";

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

    // Validate all fields
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

    // Create a new job
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
    });

    return res.status(201).json({
      success: true,
      message: "Job Created Successfully",
      job: newJob, // Optionally include the created job
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message, // Optional for debugging
    });
  }
};
