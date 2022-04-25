import React, { createContext, useState } from "react";
export const TextNameContext = createContext({});
const Test2 = (Components) => () => {
  console.log("TEST2");
  const name = "TeeTime";
  return (
    <div>
      <TextNameContext.Provider value={{ name }}>
        <Components />
        Test2
      </TextNameContext.Provider>
    </div>
  );
};
export default Test2;
