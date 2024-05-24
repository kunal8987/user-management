import React from "react";
import Navbar from "./component/Navbar";
import AllRoutes from "./component/AllRoutes";
const App = () => {
  return (
    <>
      <div className="bg-[#B4B4B8]">
        <div className="container mx-auto px-5 md:px-10 lg:px-14 xl:px-20">
          <Navbar />
          <AllRoutes />
        </div>
      </div>
    </>
  );
};

export default App;
