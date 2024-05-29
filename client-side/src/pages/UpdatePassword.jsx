import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let initialState = {
  otp: "",
  email: "",
  newPassword: "",
};
export default function UpdatePassword() {
  const [fromState, setFormState] = useState(initialState);
  const navigate = useNavigate();
  let handleChange = (e) => {
    let { id, value } = e.target;
    setFormState({ ...fromState, [id]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (
      fromState.otp === "" ||
      fromState.email === "" ||
      fromState.newPassword === ""
    ) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "All Fields Are Required!",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    axios
      .post(`http://localhost:4500/api/v1/auth/update-password`, fromState)
      .then((response) => {
        // console.log(response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(fromState);
  };
  return (
    <section className="bg-[#E3E1D9] h-svh">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-tight text-black">
            Update Your Password
          </h2>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  OTP{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={fromState.otp}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    id="otp"
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    value={fromState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    id="email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    New Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    value={fromState.newPassword}
                    onChange={handleChange}
                    placeholder="New Password"
                    id="newPassword"
                  ></input>
                </div>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-600">
                  Update Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
