import React, { useState } from "react";

import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Upload from "../components/Upload";

function Create() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAge, setNewage] = useState("");
  const [items, setItems] = useState([]);

  const getEmployees = () => {
    fetch("http://localhost:3001/employee")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  };

  const addEmployee = (e) => {
    e.preventDefault();
    if (fname && lname && age && email && password) {
      axios
        .post("http://localhost:3001/create", {
          lname: lname,
          fname: fname,
          age: age,
          email: email,
          password: password,
        })
        .then(() => {
          setItems([
            ...items,
            {
              lname: lname,
              fname: fname,
              age: age,
              email: email,
              password: password,
            },
          ]);
        });
    } else {
      alert("กรุณาใส่ข้อมูลให้ครบ");
    }
  };

  const updateEmployee = (id) => {
    if (newAge > 0) {
      axios
        .put("http://localhost:3001/update", { age: newAge, id: id })
        .then((response) => {
          setItems(
            items.map((val) => {
              return val.id === id
                ? {
                    id: val.id,
                    lname: val.lname,
                    fname: val.fname,
                    age: val.age,
                    email: val.email,
                  }
                : val;
            })
          );
        });
    } else {
      alert("กรุณาใส่ค่าอายุให้ถูกต้อง");
    }
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setItems(
        items.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-center  ">
          <div className="w-[60%] h-auto">
            <form action="post" className="m-[40px]">
              <div>
                <label class="block">
                  <span class="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Name
                  </span>
                  <input
                    type="text"
                    name="fname"
                    class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter name"
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
                    maxLength={11}
                  />
                </label>
                <label class="block">
                  <span class=" mt-4 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    LastName
                  </span>
                  <input
                    type="text"
                    name="lname"
                    class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter name"
                    onChange={(event) => {
                      setLname(event.target.value);
                    }}
                  />
                </label>
                <label class="block">
                  <span class="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Age
                  </span>
                  <input
                    type="number"
                    name="age"
                    class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Enter age"
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
                  />
                </label>
                <label class="block">
                  <span class="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </label>
                <label class="block">
                  <span class="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input
                    type="password"
                    name="password"
                    class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </label>
                <button
                  onClick={addEmployee}
                  className="rounded-md mt-6 bg-green-600 w-[130px] h-[50px] text-[30px] text-[#fff] mb-[50px]"
                >
                  save
                </button>
              </div>

              <hr className="m-[35px]" />
              <Upload />
            </form>
            <hr />
            <button
              className="rounded-md mt-6 text-[#fff] bg-green-600 w-[20%] h-[5%] mb-[20px]"
              onClick={getEmployees}
            >
              Show employee
            </button>

            {items.map((val, key) => {
              return (
                <div className="w-full h-auto m-auto border-2 ">
                  <div className="h-auto  p-[35px]">
                    <span>
                      Name : {val.fname} {val.lname}
                    </span>
                    <br />
                    <span> Age : {val.age}</span>
                    <br />
                    <span>Email : {val.email}</span>

                    <div className="flex">
                      <input
                        type="text"
                        placeholder="ใส่อายุใหม่"
                        className="border-2 p-1"
                        onChange={(e) => {
                          setNewage(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          updateEmployee(val.id);
                        }}
                        className="rounded-md ml-[20px] text-[#fff] bg-yellow-400 w-[15%] h-auto "
                      >
                        Update
                      </button>
                      <button
                        onClick={() => {
                          deleteEmployee(val.id);
                        }}
                        className="rounded-md ml-[20px] text-[#fff] bg-red-400 w-[15%] h-auto "
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
