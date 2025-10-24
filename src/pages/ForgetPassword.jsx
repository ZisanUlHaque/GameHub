import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        navigate(location.state || "/auth/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Enter your registered email to receive a password reset link.
        </p>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-lg"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
