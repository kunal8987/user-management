import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const sessionData = window.sessionStorage;
const EditProfile = () => {
  const [fromState, setFromState] = useState("");
  const param = useParams();
  const navigate = useNavigate();
  //   console.log(param.id);

  let handleChange = (e) => {
    let { id, value } = e.target;

    if (id === "phone" || id === "zipCode") {
      setFromState({ ...fromState, [id]: +value });
    } else {
      setFromState({ ...fromState, [id]: value });
    }
  };

  let token = JSON.parse(sessionData.getItem("adminToken"));

  useEffect(() => {
    axios
      .get(`http://localhost:4500/api/v1/profile/get-profile`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        //   console.log(response.data.profile);
        setFromState(response.data.profile[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //     // console.log(_id);

  let handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(
        `http://localhost:4500/api/v1/profile/update-profile/${param.id}`,
        fromState,
        {
          headers: { Authorization: `${token}` },
        }
      )
      .then((response) => {
        // console.log(response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="bg-[#E3E1D9] h-full">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-3xl font-bold leading-tight text-black">
              Edit Your Profile
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                {/* FIRST NAME  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="firstName"
                      value={fromState.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                    ></input>
                  </div>
                </div>
                {/* LAST NAME  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="lastName"
                      value={fromState.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                    ></input>
                  </div>
                </div>
                {/* EMAIL ADDRESS  */}
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
                {/* PHONE NO  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="phone"
                      value={fromState.phone}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                    ></input>
                  </div>
                </div>
                {/* ADDRESS  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="address"
                      value={fromState.address}
                      onChange={handleChange}
                      placeholder="Address"
                    ></input>
                  </div>
                </div>
                {/* CITY  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="city"
                      value={fromState.city}
                      onChange={handleChange}
                      placeholder="City Name"
                    ></input>
                  </div>
                </div>
                {/* STATE  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="state"
                      value={fromState.state}
                      onChange={handleChange}
                      placeholder="State Name"
                    ></input>
                  </div>
                </div>
                {/* PIN CODE  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Pin Code
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="zipCode"
                      value={fromState.zipCode}
                      onChange={handleChange}
                      placeholder="Pin Code"
                    ></input>
                  </div>
                </div>
                {/* COUNTRY  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="country"
                      value={fromState.country}
                      onChange={handleChange}
                      placeholder="Country Name"
                    ></input>
                  </div>
                </div>
                {/* DATE OF BIRTH  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Date Of Birth
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="date"
                      id="dob"
                      value={fromState.dob}
                      onChange={handleChange}
                      placeholder="DOB"
                    ></input>
                  </div>
                </div>
                {/* ABOUT US  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    About Us
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      // type="text"
                      id="aboutUs"
                      value={fromState.aboutUs}
                      onChange={handleChange}
                      placeholder="About Your Self "
                    ></textarea>
                  </div>
                </div>
                {/* DEPARTMENT  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Department
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="department"
                      value={fromState.department}
                      onChange={handleChange}
                      placeholder="Department"
                    ></input>
                  </div>
                </div>
                {/* GENDER  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="gender"
                      value={fromState.gender}
                      onChange={handleChange}
                      placeholder="Gender"
                    ></input>
                  </div>
                </div>
                {/* AVATAR  */}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Profile Pic
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      id="avatar"
                      // value={fromState.email}
                      // onChange={handleChange}
                      placeholder="Profile Pic"
                    ></input>
                  </div>
                </div>
                <div>
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-600">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditProfile;
