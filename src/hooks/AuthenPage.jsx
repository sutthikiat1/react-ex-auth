import React, { useState, createContext } from "react";
export const AuthContextPage = createContext();
function AuthenPage({ chidren }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  console.log("--------------Authe Page--------------");

  const verifyToken = async () => {
    const token = await localStorage.getItem("token"); //ดึง token จาก local
    await fetch("http://localhost:3001/authen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          console.log("Status OK!!");
          //alert(data.decoded.role);
          setRole(data.decoded.role);
          setEmail(data.decoded.email);
        } else {
          //ไม่มีการเข้าสู่ระบบ
          //alert("authen Failed");
          localStorage.removeItem("token");
          window.location = "/Login";
        }
        console.log("Success: ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <AuthContextPage.Provider value={{ email, role, verifyToken }}>
      {chidren}
    </AuthContextPage.Provider>
  );
}

export default AuthenPage;
