import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      {" "}
      <section className="relative py-24">
        <div className="w-full px-4 mx-auto max-w-7xl md:px-5 lg:px-5">
          <div className="grid items-center justify-start w-full grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="grid items-start justify-center order-last w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:order-first">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="object-cover rounded-xl"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="object-cover ml-auto sm:ml-0 rounded-xl"
                src="https://pagedone.io/asset/uploads/1717741215.png"
                alt="about Us image"
              />
            </div>
            <div className="inline-flex flex-col items-center justify-center w-full gap-10 lg:items-start">
              <div className="flex flex-col items-start justify-center w-full gap-8">
                <div className="flex flex-col items-center justify-start w-full gap-3 lg:items-start">
                  <h2 className="text-4xl font-bold leading-normal text-center text-gray-900 font-manrope lg:text-start">
                    Empowering Each Other to Succeed With React And React Native
                  </h2>
                  <p className="text-base font-normal leading-relaxed text-center text-gray-500 lg:text-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Doloribus optio asperiores ducimus, voluptate quaerat,
                    accusamus ex vero reiciendis possimus sunt omnis deleniti
                    non. Rem cupiditate inventore voluptatem quisquam
                    perspiciatis alias!
                  </p>
                </div>
                <div className="inline-flex items-center justify-center w-full gap-5 lg:justify-start sm:gap-10">
                  <div className="inline-flex flex-col items-start justify-start">
                    <h3 className="text-4xl font-bold leading-normal text-gray-900 font-manrope">
                      33+
                    </h3>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="text-4xl font-bold leading-normal text-gray-900 font-manrope">
                      125+
                    </h4>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start">
                    <h4 className="text-4xl font-bold leading-normal text-gray-900 font-manrope">
                      52+
                    </h4>
                    <h6 className="text-base font-normal leading-relaxed text-gray-500">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <Link to={'/jobs'} className="px-1.5 text-white text-sm font-medium leading-6">
                  Jobs
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
