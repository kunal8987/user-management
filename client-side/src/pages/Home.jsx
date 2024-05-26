import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center bg-[#E3E1D9] h-svh">
        <h1 className="text-4xl font-bold tracking-tight text-orange-600 sm:text-6xl pt-10 leading-8">
          Welcome <br /> To The <br /> User Management.
        </h1>
        <p className="mt-8 text-xl font-semibold leading-8 text-gray-600 px-3">
          User management refers to the effective management of users and their
          accounts within an organization’s IT infrastructure. <br /> It
          involves granting users access to various resources such as devices,
          applications, systems, networks, and storage systems.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2">
          <Link to={"/login"}>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold bg-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  text-white hover:bg-orange-600"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
