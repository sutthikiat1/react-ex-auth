import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Authen from "../hooks/Authen";
function User() {
  return (
    <div w-full>
      <Navbar />
      <div className="flex justify-center m-[50px]">หน้าสำหรับUser</div>
    </div>
  );
}

export default Authen(User);
