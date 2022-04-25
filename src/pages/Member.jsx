import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../hooks/Authen";

import Navbar from "../components/Navbar/Navbar";

const Btn = styled.button`
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    background-color: #cf09cf;
    color: white;
  }
`;
function Member() {
  const [items, setItems] = useState([]);
  const [employee, setEmployee] = useState([]);

  const { email, role, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://www.mecallapi.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });

    fetch("http://localhost:3001/employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full  mb-[40px]">
        <div className="flex justify-center  ">
          <div className="border-2 w-[70%] h-[60px] mt-4 bg-blue-400 rounded-md  flex justify-center items-center shadow-md">
            <span className="text-[25px] text-[#fff]">Member</span>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className=" h-[60px] w-[70%] flex justify-between  mt-4  ">
            <span className="  text-[25px]  w-[90px]    items-center">
              {email}
            </span>
            <Btn className="border-2 rounded-md w-[120px]">Create</Btn>
          </div>
        </div>

        <div className="flex justify-center w-auto h-auto  m-auto mt-6">
          <table className="table-auto border-[1px] w-[70%] ">
            <thead>
              <tr className="bg-slate-300 h-[50px]">
                <th className="border-[1px]">Name</th>
                <th className="border-[1px]">Lastname</th>
                <th className="border-[1px]">username</th>
                <th className="border-[1px]">Profile</th>
              </tr>
            </thead>
            <tbody>
              {items.map((row) => (
                <tr
                  key={row.id}
                  className="border-[1px] text-center odd:bg-white even:bg-slate-100"
                >
                  <td className="border-[1px]">{row.fname}</td>
                  <td className="border-[1px]">{row.lname}</td>
                  <td className="border-[1px]">{row.username}</td>
                  <td className="border-[1px]">
                    <img
                      src={row.avatar}
                      alt=""
                      className="w-[80px] h-[80px] m-auto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {employee.map((val, key) => {
          return (
            <div key={key}>
              <span>{val.fname}</span>
              <span>{val.lname}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Member;
