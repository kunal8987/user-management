import { useEffect, useState } from "react";
import { createContext } from "react";
const sessionData = window.sessionStorage;
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: "",
  });

  let payload = JSON.parse(sessionData.getItem("adminToken"));
  if (payload) {
    state.isAuth = true;
  } else {
    state.isAuth = false;
  }

  const loginUser = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: payload,
    });
  };

  const logoutUser = () => {
    setState({
      ...state,
      isAuth: false,
      token: sessionData.removeItem("adminToken"),
    });
  };
  return (
    <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
