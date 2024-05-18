import React from "react";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmailConform from "./pages/EmailCanform";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
const App = () => {
  return (
    <>
      <div className="bg-[#B4B4B8]">
        <div className="container mx-auto px-5 md:px-10 lg:px-14 xl:px-20">
          <Navbar />
          {/* <Login/> */}
          {/* <Register/> */}
          {/* <EmailConform/> */}
          {/* <ForgetPassword/> */}
          <UpdatePassword/>
        </div>
      </div>
    </>
  );
};

export default App;
