import React from "react";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="w-full h-[100px] border-2 bg-slate-400">
      <ul className="flex justify-between  m-[25px] text-[30px]">
        <Link to="/AdminStatus/dashboard">
          <li>Home</li>
        </Link>
        <Link to="/AdminStatus/Member">
          <li>Member</li>
        </Link>
        <Link to="/AdminStatus/Admin">
          <li>Admin</li>
        </Link>
        <Link to="/" onClick={() => handleLogout()}>
          <li>LOGOUT</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarAdmin;
