import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        const res = await axios.get("http://localhost:3000/", {
          withCredentials: true,
        });
        if (res.data.success === true) {
          setIsLoggedIn(true);
        } else if (res.data.message === false) {
          setIsLoggedIn(false);
        }
      } catch (error) {}
    };
    getToken();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/logout",
        {}, // Empty object for the request body
        {
          withCredentials: true, // Include credentials for cross-origin requests
        }
      );
      if (res.data.success === true) {
        toast.success("Logged out successfully");
        setIsLoggedIn(false);
        navigate("/log-in");
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      toast.error("An error occurred during logout");
    }
  };

  return (
    <nav className="flex items-center justify-between p-3">
      <Link to="/" className="text-2xl">
        Job Portal IO
      </Link>
      <ul className="flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to={"/Jobs"}>Jobs</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <Link to={"/Jobs"}>Jobs</Link>
            <Link to={"/log-in"}>Login</Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
