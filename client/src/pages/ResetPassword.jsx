import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/request-password-reset", {
        email,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
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
          Send Reset Link
        </button>
      </form>
      {message && <p className="text-red-500 mt-5">{message}</p>}
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex gap-2 mt-5">
          <p>Don&apos;t have an account?</p>
          <Link to={"/sign-up"}>
            <span className="text-egyptianblue">Sign Up</span>
          </Link>
        </div>
        <div className="flex gap-2 mt-5">
          <p>Remembered your password?</p>
          <Link to={"/sign-in"}>
            <span className="text-egyptianblue">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
