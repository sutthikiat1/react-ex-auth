import React, { createContext } from "react";
import LoginArea from "./LoginArea";

export const AuthContext = createContext({});

const fakeUser = { username: "nice789", fullname: "อิอิ" };

function Main() {
  return (
    <AuthContext.Provider value={fakeUser}>
      <div>
        <LoginArea />
      </div>
    </AuthContext.Provider>
  );
}

export default Main;
