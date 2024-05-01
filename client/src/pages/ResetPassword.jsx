import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { id, token } = useParams();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        `/api/auth/reset-password/${id}/${token}`,
        {
          newPassword: password,
          confirmPassword,
        }
      );
      setMessage(response.data);
      // Redirect to Sign In page after updating password
      navigate("/sign-in");
    } catch (error) {
      setMessage(error.response.data);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-egyptianblue text-center font-semibold my-7">
        Update Password
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-3 rounded-lg focus:outline-none pr-16"
          />
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <FiEyeOff className="text-gray-500 hover:text-gray-700" />
            ) : (
              <FiEye className="text-gray-500 hover:text-gray-700" />
            )}
          </span>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="border p-3 rounded-lg focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-egyptianblue text-white p-3 rounded-lg uppercase hover:opacity-95"
        >
          Update Password
        </button>
      </form>
      {message && <p className="text-red-500 mt-5">{message}</p>}
      <div className="flex flex-col sm:flex-row justify-between"></div>
    </div>
  );
};

export default ResetPassword;
