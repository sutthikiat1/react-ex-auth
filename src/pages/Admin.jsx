import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../hooks/Authen";
import Authen from "../hooks/Authen";

function Admin() {
  return (
    <div>
      <div w-full>
        <Navbar />
        <div className="flex justify-center m-[50px]">หน้าสำหรับAdmin</div>
      </div>
    </div>
  );
}

export default Authen(Admin);
