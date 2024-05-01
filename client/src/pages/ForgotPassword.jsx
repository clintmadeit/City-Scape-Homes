import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email }
      );

      if (response.data.status === "Reset link sent!") {
        alert("A reset password link has been sent to your email.");
        navigate("/sign-in");
      } else {
        setMessage(response.data.status);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.status);
      } else {
        setMessage("An error occurred!");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-egyptianblue text-center font-semibold my-7">
        Reset Password
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-3 rounded-lg focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-egyptianblue text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          {loading ? "Sending Link..." : "Send Reset Link"}
        </button>
      </form>
      {message && <p className="text-red-500 mt-5">{message}</p>}
      <div className="flex flex-col sm:flex-row">
        <div className="flex gap-2 mt-5">
          <p>Remembered your password?</p>
          <Link to={"/sign-in"}>
            <span className="text-egyptianblue hover:text-neonorange">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
