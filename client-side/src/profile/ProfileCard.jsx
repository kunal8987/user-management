import React from "react";
import { Link } from "react-router-dom";
const ProfileCard = ({
  firstName,
  lastName,
  city,
  state,
  zipCode,
  phone,
  email,
  address,
  department,
  gender,
  aboutUs,
  avatar,
  country,
  dob,
  _id,
}) => {
  return (
    <div className=" mt-5">
      <div className="flow-root rounded-lg border bg-[#E3E1D9] border-gray-500 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">Details</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Profile</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">
              <img
                className="relative z-0 inline-block h-15 w-12 rounded-full ring-2 ring-white"
                src={avatar}
                alt="Profile Picture"
              />
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">First Name</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">
              {firstName}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Last Name</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">
              {lastName}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{email}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">City</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{city}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">State</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{state}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Pin Code</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{zipCode}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Country</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{country}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Department</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">
              {department}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Mobile No</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{phone}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Date of birth</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{dob}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Gender</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{gender}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Address</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{address}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-orange-300 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">About</dt>
            <dd className="text-gray-900 font-bold sm:col-span-2">{aboutUs}</dd>
          </div>
        </dl>
      </div>
      <div className=" pb-8 ">
        <button className="rounded-md block w-1/3 m-auto mt-3 md:mt-8 bg-black px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          <Link to={`/edit-profile/${_id}`}>Edit</Link>
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
