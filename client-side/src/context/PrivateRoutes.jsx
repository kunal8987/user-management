import React, { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { useNavigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const state = useContext(AuthContext);
  const navigate = useNavigate();
  if (!state.authState.isAuth) {
    return navigate("/login");
  } else {
    return children;
  }
};

export default PrivateRoutes;
