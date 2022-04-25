import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("hello");
  }, []);

  return <div>App</div>;
}

export default App;
