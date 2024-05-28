import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import ProfileCard from "./ProfileCard";
const sessionData = window.sessionStorage;
const ShowProfile = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let token = JSON.parse(sessionData.getItem("adminToken"));
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4500/api/v1/profile/get-profile`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        // console.log(response.data.profile);
        setLoading(false);
        setData(response.data.profile);

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
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p className=" text-5xl text-center top-40">LOADING...</p>;
  }
  return (
    <div>
      {data.map((el) => {
        return <ProfileCard key={el._id} {...el} />;
      })}
    </div>
  );
};

export default ShowProfile;
