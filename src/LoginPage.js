import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col  items-center bg-white shadow-lg">
        <div className="w-3/4w-64 flex-initial">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.svg" alt="Logo" className="h-14" />
          </div>

          <h1 className="text-2xl font-bold text-green-600 text-center mb-2">
            Bin There, Done That!
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Login into your account
          </p>

          {/* Email Field */}
          <div className="w-96 mb-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-3 w-full bg-gray-100"
            />
            <div className="absolute right-3 top-3 text-gray-500">📧</div>
          </div>

          {/* Password Field */}
          <div className="reltive mb-2">
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-3 w-full bg-gray-100"
            />
            <div className="absolute right-3 top-3 text-gray-500">🔒</div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm text-green-600 mb-4 cursor-pointer">
            Forgot Password?
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Register Button - Navigates to Register Page */}
          <button
            className="w-full border border-green-600 text-green-600 py-2 rounded-lg"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>

      {/* Right Side - Illustration & Text */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-200">
        <img src="/illustration.png" alt="picture ni" className="w-3/4 mb-4" />
        <p className="text-green-700 text-lg font-semibold text-center">
          Monitor and Analyze your Trash gas toxicity level
        </p>
      </div>
    </div>
  );
}
