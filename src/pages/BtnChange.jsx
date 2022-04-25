import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  color: ${(props) => (props.primary ? "black" : "red")};
  border: ${(props) => (props.primary ? "2px solid #000" : "2px solid pink")};
  font-size: 17px;
  border-radius: 5px;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background: ${(props) => (props.primary ? " #000" : "red")};
    color: #fff;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Navbar = styled.div`
  border-bottom: 2px solid #333;
  padding: 2em;
  display: flex;
  justify-content: space-between;
`;
const TestLogo = styled.div``;

const NavMenu = styled.div`
  padding: 0.5em;
`;
const UL = styled.div`
  display: flex;
  list-style: none;
  margin-right: 1em;
`;
const Ulli = styled.div`
  margin-right: 1em;
`;

const TestBtn = styled.button`
  font-size: 17px;
  border-radius: 5px;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  background: #000;
  color: #fff;
  width: 150px;
`;

const ButtonToggle = styled(TestBtn)`
  opacity: 0.6;
  cursor: pointer;
  ${({ active }) =>
    // เงื่อนไข ถ้ามีค่าใน active ให้ทำงานหลัง &&
    active &&
    `
  opacity: 1;
  background: pink;

  `};
`;

const types = ["Cash", "TrueMoney", "Bitcoin"];

function BtnChange() {
  const [color, setColor] = useState("red");
  const [active, setActive] = useState(types[1]);
  // console.log(types[0]);
  console.log("ทำงาน");
  const handleChange = () => {
    const ChangeColor = document.querySelector(".Btn");

    ChangeColor.style.background === "red"
      ? (ChangeColor.style.background = "blue")
      : (ChangeColor.style.background = "red");
  };
  return (
    <>
      <div className="">
        <Navbar>
          <TestLogo className="w-[200px] bg-blue-500 border-2 p-2 h-[50px] text-[#fff]">
            TestLogoTime
          </TestLogo>
          <NavMenu className="">
            <UL>
              <Ulli>
                <a href="/login">Home</a>
              </Ulli>
              <Ulli>
                <a href="/login">About</a>
              </Ulli>
              <Ulli>
                <a href="/login">Content</a>
              </Ulli>
            </UL>
          </NavMenu>
        </Navbar>

        <Button>Click me !</Button>

        <Button
          primary
          onClick={() => {
            alert("อิอิ");
          }}
        >
          Click me primary!
        </Button>
        <Button
          primary
          className="Btn"
          onClick={() => {
            handleChange();
          }}
        >
          เปลี่ยนสี
        </Button>
        <div className="mt-[50px]">
          {types.map((type) => (
            <ButtonToggle
              key={type}
              active={active === type} //ส่งค่า type ไปที่ ButtonToggle
              onClick={() => setActive(type)}
            >
              {type}
            </ButtonToggle>
          ))}
        </div>
      </div>
    </>
  );
}

export default BtnChange;
