import React, { useContext, useEffect } from "react";
import { AuthContext } from "../hooks/Authen";
import Authen from "../hooks/Authen";
import { Navigate } from "react-router-dom";

function UserRoute({ children }) {
  const { role, verifyToken } = useContext(AuthContext);
  console.log(role);
  useEffect(() => {
    const callApi = async () => {
      await verifyToken();
    };
    callApi();
  }, [verifyToken]);

  if (role !== "") {
    return (
      <div>{role && role === "user" ? children : <Navigate to="/Login" />}</div>
    );
  }
}

export default Authen(UserRoute);
