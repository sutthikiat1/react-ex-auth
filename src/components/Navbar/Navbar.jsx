import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/Authen";
import NavbarAdmin from "./NavbarAdmin";
import NavbarUser from "./NavbarUser";

function Navbar({ role }) {
  return role === "admin" ? <NavbarAdmin /> : <NavbarUser />;
}

export default Navbar;
