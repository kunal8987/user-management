import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
const sessionData = window.sessionStorage;
let initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [fromState, setFromState] = useState(initialState);
  const { authState, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  let handleChange = (e) => {
    let { id, value } = e.target;
    setFromState({ ...fromState, [id]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (fromState.password === "" || fromState.email === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Email And Password Are Required!",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    axios
      .post(`http://localhost:4500/api/v1/auth/login`, fromState)
      .then((response) => {
        // console.log(response.data);
        loginUser(response.data.token);
        sessionData.setItem("adminToken", JSON.stringify(response.data.token));

        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

  };
  return (
    <section className="bg-[#E3E1D9] h-svh">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-lg text-gray-800 ">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              title=""
              className="font-semibold text-xl p-1 rounded-sm text-orange-500 hover:bg-orange-600 hover:text-gray-200 transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    id="email"
                    value={fromState.email}
                    onChange={handleChange}
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <Link
                    to="/forget-password"
                    title=""
                    className="text-md font-semibold p-1 rounded-sm text-orange-500 hover:bg-orange-600 hover:text-gray-200 hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </Link>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    value={fromState.password}
                    onChange={handleChange}
                    id="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-600">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
