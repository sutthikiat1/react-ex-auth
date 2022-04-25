import React, { useContext, useEffect } from "react";
import { AuthContext } from "../hooks/Authen";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import withAuth from "../hoc/withAuth";
function Dashboard() {
  const { email, role, verifyToken } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="text-center m-[50px] items-center ">
        <p>email : {email}</p>
        <p>status : {role}</p>
        <p className="w-[120px] h-[60] border-2 m-auto mt-[35px]">
          <Link to="/">
            <button onClick={() => handleLogout()}>Log out</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
