import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import UpdatePassword from "../pages/UpdatePassword";
import Email from "../pages/EmailCanform";
import Home from "../pages/Home";
import PrivateRoutes from "../context/PrivateRoutes";
import CreateProfile from "../profile/CreateProfile";
import ShowProfile from "../profile/ShowProfile";
import EditProfile from "../profile/EditProfile";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <ShowProfile />
            </PrivateRoutes>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/email-conformed" element={<Email />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route
          path="/create-profile"
          element={
            <PrivateRoutes>
              <CreateProfile />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
