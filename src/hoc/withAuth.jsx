import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (Components) => (props) => {
  const history = useNavigate();

  useEffect(() => {
    (async () => {
      const token = await verifyToken();
      console.log("hello", token);
      if (!token) {
        history("/");
      }
    })();
  }, []);

  const verifyToken = async () => {
    // do something..
    const token = localStorage.getItem("token");
    return token;
  };
  return <Components {...props} />;
};

export default withAuth;
