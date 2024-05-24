import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import UpdatePassword from "../pages/UpdatePassword";
import Email from "../pages/EmailCanform";
import Home from "../pages/Home";
import PrivateRoutes from "../context/PrivateRoutes";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/email-conformed" element={<Email />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
