import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/profile", {
          withCredentials: true,
        });
        if (res.data.success === false) {
          console.log(res.data.message);
          return;
        }
        setData(res.data.user);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="w-full max-w-4xl p-8 transition-all duration-300 shadow-2xl bg-white/80 backdrop-blur-lg rounded-2xl md:p-12">
        {/* Top section: Avatar and Basic Info */}

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* Profile Image */}
          <div className="w-32 h-32 overflow-hidden rounded-full shrink-0 ring-4 ring-blue-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800">
              @{data.username}
            </h2>
            <h3 className="mt-1 text-xl text-gray-600">Email: {data.email}</h3>

            {/* Bio */}
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              🚀 {data.bio}
            </p>

            {/* Jobs Posted */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-sm font-medium text-gray-500">
                Jobs Posted:
              </span>
              <span className="px-3 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full">
                {data?.jobs?.length}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Link to={'#'} className="p-3 bg-gray-300 rounded-md">Edit</Link>
              <Link to={'#'} className="p-3 bg-gray-300 rounded-md">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
