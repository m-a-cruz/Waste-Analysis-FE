import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    setError(""); // Clear previous error

    // Mock verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code

    // Store email and code in localStorage (simulating backend)
    localStorage.setItem("resetEmail", email);
    localStorage.setItem("verificationCode", verificationCode.toString());

    alert(`Mock email sent! Your code is: ${verificationCode}`); // For testing

    navigate("/forgotpassword/verifycode");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        <div className="w-[400px]">
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <img src="/BINLOGO.png" className="w-12 h-12" alt="Bin Logo" />
            <h1 className="text-green-700 font-bold text-lg">
              Bin There, <br /> Done That!
            </h1>
          </div>

          <div className="text-gray-600 mb-4 flex items-center">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              ← Back to Login
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Forgot your password?</h2>
          <p className="text-gray-500 mb-6">
            Don’t worry, it happens. Enter your email below to recover your password.
          </p>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Admin@ntc.edu.ph"
              className={`w-full p-3 border rounded-md ${error ? "border-red-500" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            className="w-full bg-green-600 text-white py-3 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-gray-200">
        <img src="/Forgotimg.png" alt="Illustration" className="w-3/4" />
      </div>
    </div>
  );
}
