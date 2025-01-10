import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const RegisterUserPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const user = {
        username,
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:3000/user/register",
        user
      );
      if (response.data.errors && response.data.errors[0].msg) {
        // If there are errors, set the error state and do NOT navigate
        setError(response.data.errors[0].msg);
        setMessage(""); // Clear any success message
      } else if (response.data.message) {
        // If registration is successful, set the success message and navigate
        setMessage(response.data.message);
        setError(""); // Clear any error message
        navigate("/login"); // Navigate only after successful registration
      }
    } catch (error) {
      // Handle unexpected errors
      console.error(error.message);
      setError("An unexpected error occurred. Please try again.");
      setMessage(""); // Clear any success message
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Sign Up
          </h2>

          {/* Display error or success message */}
          {error && (
            <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-900">
              {error}
            </div>
          )}
          {message && (
            <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-900">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterUserPage;
