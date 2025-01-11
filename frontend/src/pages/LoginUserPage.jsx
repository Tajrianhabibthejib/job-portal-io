import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RegisterUserPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { username, email, password };

      const response = await axios.post(
        "http://localhost:3000/user/register",
        user,
        { withCredentials: true }
      );
      if (response.data.errors?.[0]?.msg) {
        setError(response.data.errors[0].msg);
        setMessage("");
      } else if (response.data.message) {
        setMessage(response.data.message);
        setError("");

        response.data.message === "Email or username already exists"
          ? toast.error(response.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              theme: "light",
            })
          : toast.success(response.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              theme: "light",
            });
        navigate("/log-in");
      }
    } catch (error) {
      console.error(error.message);
      setError("An unexpected error occurred. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
          Login
        </h2>

        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 bg-red-100 border border-red-400 rounded-lg dark:bg-red-900 dark:text-red-200">
            {error}
          </div>
        )}
        {message && (
          <div className="p-4 mb-4 text-sm text-green-800 bg-green-100 border border-green-400 rounded-lg dark:bg-green-900 dark:text-green-200">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>


          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 text-sm text-gray-600 right-3 dark:text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-sm font-medium text-white transition duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Have an account?{" "}
            <button
              onClick={() => navigate("/sign-up")}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserPage;
