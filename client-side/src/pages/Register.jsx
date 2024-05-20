import React, { useState } from "react";
import Swal from "sweetalert2";

let initialState = {
  username: "",
  email: "",
  password: "",
};

export default function SignUpThree() {
  const [fromState, setFormState] = useState(initialState);

  let handleChange = (e) => {
    let { id, value } = e.target;
    setFormState({ ...fromState, [id]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (
      fromState.username === "" ||
      fromState.email === "" ||
      fromState.password === ""
    ) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "All Fields Are Required!",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    console.log(fromState);
  };
  return (
    <section className="bg-[#E3E1D9] h-svh">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-lg text-gray-900">
            Already have an account?{" "}
            <a
              href="#"
              title=""
              className="font-medium p-1 rounded-sm text-orange-500 hover:bg-orange-600 hover:text-gray-200  text-xl transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Username{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    value={fromState.username}
                    onChange={handleChange}
                    placeholder="Username"
                    id="username"
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
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    value={fromState.password}
                    onChange={handleChange}
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  // type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-600"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
