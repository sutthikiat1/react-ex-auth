import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormD = styled.div`
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5rem;
  //border: 2px solid black;

  form {
    width: 60%;
    display: flex;
    justify-content: center;
    .input {
      width: 100%;
      height: 50px;
      padding: 10px;
      border: 1px solid teal;
      border-radius: 4px;
      margin-left: 20px;
      &:focus {
      }
    }
    .bbtn {
      font-size: 17px;
      border-radius: 5px;
      margin-left: 20px;
      padding: 0.25em 1em;
      transition: 0.5s all ease-out;
      background: #000;
      color: #fff;
      width: 150px;
      &:hover {
        background: #e066ff;
        color: #fff;
      }
    }
  }
`;
function Login() {
  const history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget); //ดึงค่าจาก input ในฟอม
    const email = data.get("email");
    const password = data.get("password");

    if (data.get("email") !== "" && data.get("password") !== "") {
      const jsonData = {
        email: data.get("email"),
        password: data.get("password"),
      };

      if (email === "user@gmail.com" && password === "123456") {
        localStorage.setItem("token", "user");
        history("/dashboard");
      } else if (email === "admin@gmail.com" && password === "123456") {
        localStorage.setItem("token", "admin");
        history("/dashboard");
      } else {
        alert("ไปกรอกให้ครบจ้า");
      }

      // fetch("http://localhost:3001/login", {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(jsonData),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     if (data.status === "ok") {
      //       localStorage.setItem("token", data.token);

      //       if (data.role === "user") {
      //         window.location = "User/dashboard";
      //       } else if (data.role === "admin") {
      //         window.location = "AdminStatus/Member";
      //       }
      //       alert("login sucess");
      //     } else {
      //       alert("login Failed");
      //     }
      //     console.log("Success:", data);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    } else {
      alert("ไปกรอกให้ครบจ้า");
    }
  };

  return (
    <>
      <FormD>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={user.email}
          />
          <input
            className="input"
            type="text"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={user.password}
          />
          <button type="submit" className="bbtn ">
            Login
          </button>
        </form>
        <Link to="/Create">
          <div className="ml-[20px] flex justify-center w-[100px] h-[50px] border-2 items-center bg-black rounded-md">
            <span className=" text-[#fff] ">SignUp</span>
          </div>
        </Link>
      </FormD>
      <div className="w-[70%] h-[250px] ml-[15%] flex justify-center items-center border-2 rounded">
        <span className="text-[25px]">
          User : user@gmail.com 123456 || Admin : admin@gmail.com 123456
        </span>
      </div>
    </>
  );
}

export default Login;
