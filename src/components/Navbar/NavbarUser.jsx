import React from "react";
import { Link } from "react-router-dom";
function NavbarUser() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="w-full h-[100px] border-2 bg-slate-400">
      <ul className="flex justify-between  m-[25px] text-[30px]">
        <Link to="/dashboard">
          <li>Home</li>
        </Link>
        <Link to="/user">
          <li>User</li>
        </Link>
        <Link to="/">
          <li onClick={() => handleLogout()}>LOGOUT</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarUser;
