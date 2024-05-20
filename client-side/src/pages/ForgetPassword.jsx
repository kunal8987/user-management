import React, { useState } from "react";
import Swal from "sweetalert2";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Email Are Required!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    console.log(email);
  };
  return (
    <section className="bg-[#E3E1D9] h-svh">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-tight text-black">
            Forget Password
          </h2>

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  ></input>
                </div>
              </div>

              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-600">
                  Get OTP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
