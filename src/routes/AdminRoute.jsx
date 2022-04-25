import React, { useContext, useEffect } from "react";
import { AuthContext } from "../hooks/Authen";
import Authen from "../hooks/Authen";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { role, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    const callApi = async () => {
      await verifyToken();
    };
    console.log("เรียก");
    callApi();
  }, [verifyToken]);

  if (role !== "") {
    return (
      <div>
        {role && role === "admin" ? children : <Navigate to="/Login" />}
      </div>
    );
  }
}

export default Authen(AdminRoute);
