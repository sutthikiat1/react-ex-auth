import React, { createContext, useState } from "react";
export const TestContext = createContext({});

function InputRegister({ children }) {
  const [nameja, setNameja] = useState(null);
  const namenew = "dsasdafwfag";
  //Provider ให้ข้อมูล
  return (
    <TestContext.Provider value={{ namenew, nameja }}>
      {children}
    </TestContext.Provider>
  );
}

export default InputRegister;
