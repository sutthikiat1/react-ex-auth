import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

const authen = (Components) => () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  var num = 0;
  const verifyToken = () => {
    num += 1;
    console.log("Workkkkkkkkkkkkkkkkkkkkkkkkk : ", num);
    const token = localStorage.getItem("token"); //ดึง token จาก local
    fetch("http://localhost:3001/authen", {
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
    <AuthContext.Provider value={{ email, role, verifyToken }}>
      <Components />
    </AuthContext.Provider>
  );
};

export default authen;
