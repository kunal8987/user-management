import React from "react";
import { Link } from "react-router-dom";
const LocalButtons = () => {
  return (
    <div className=" space-x-5 mt-4 lg:mt-0 ">
      <Link to={"/login"}>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Login
        </button>
      </Link>
      <Link to={"/register"}>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Register
        </button>
      </Link>
    </div>
  );
};

export default LocalButtons;
