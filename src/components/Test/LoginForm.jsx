import React, { useContext } from "react";
import { AuthContext } from "./Main";

function LoginForm() {
  const auth = useContext(AuthContext);
  console.log(auth);
  if (!!auth) {
    return (
      <div>
        <p>user : {auth.username}</p>
        <p>Full : {auth.fullname}</p>
        <p>
          <button>Log out</button>
        </p>
      </div>
    );
  }
  return (
    <form action="">
      <p>
        <input type="text" name="" id="" placeholder="username" />
      </p>
      <p>
        <input type="password" name="" id="" placeholder="pass" />
      </p>
      <p>
        <button type="submit">Log in</button>
      </p>
    </form>
  );
}

export default LoginForm;
