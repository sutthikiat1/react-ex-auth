import React, { useEffect, useContext } from "react";
import Test2 from "./Test2";
import { TextNameContext } from "./Test2";
function Test() {
  const { name } = useContext(TextNameContext);
  console.log("หน้า1");

  /* useEffect(() => {
    console.log("หน้า1U");
  }, []); */

  return <div>Test1 ค่าที่ส่งมา : {name}</div>;
}

export default Test2(Test);
