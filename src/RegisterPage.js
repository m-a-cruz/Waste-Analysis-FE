import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
    
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <img src="/Registerimg.png" alt="Picture ni"className="w-3/4"/>
      </div>

      {/* Registration Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white relative">
        <button onClick={() => navigate("/")}className="absolute top-6 right-6 text-gray-600 hover:text-gray-800">← Back to Login</button>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create your account</h1>
        <p className="text-gray-500 mb-6"> Let's get you set up so you can access your personal account.</p>

        {/* Form Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="text"
            placeholder="Access Code"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            I accept the <span className="text-green-600">Terms & Conditions</span>
          </label>
        </div>

        {/* Create Account  */}
        <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg">Create my account</button>

        <p className="text-center text-gray-600 mt-4">Already have an account?{" "}<span onClick={() => navigate("/")}className="text-green-600 cursor-pointer">Login</span></p>
      </div>
    </div>
  );
}
