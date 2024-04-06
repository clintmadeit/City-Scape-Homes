import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <h1 className="text-xl text-red-700">
        You are not authorized to access this page! Redirecting to homepage in 5
        seconds...
      </h1>
    </div>
  );
};

export default Unauthorized;
