import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {},
    category: {
      type: String,
      required: true,
    },
    company: {
      companyName: {
        type: String,
        required: true,
      },
      companyDescription: {
        type: String,
        required: true,
      },
      companyPhone: {
        type: String,
        required: true,
      },
      companyEmail: {
        type: String,
        required: true,
      },
      companyOrigin: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;
