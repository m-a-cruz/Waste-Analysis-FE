import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const storedCode = localStorage.getItem("verificationCode");
  const storedEmail = localStorage.getItem("resetEmail");

  const handleVerify = () => {
    if (!code.trim()) {
      setError("Code is required.");
      return;
    }

    if (code === storedCode) {
      alert("Code verified! Proceeding to reset password.");
      navigate("/forgotpassword/verifycode/setnewpassword");
    } else {
      setError("Invalid code. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center px-8">
        <div className="w-[400px]">
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <img src="/BINLOGO.png" className="w-10 h-10" alt="Bin Logo" />
            <h1 className="text-green-700 font-bold text-sm">
              Bin There, <br /> Done That!
            </h1>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Verify Code</h2>
          <p className="text-gray-500 mb-6">
            An authentication code has been sent to <b>{storedEmail}</b>.
          </p>

          <div className="mb-4">
            <label className="block text-gray-700">Enter Code</label>
            <input
              type="text"
              placeholder="Enter your code"
              className={`w-full p-3 border rounded-md bg-gray-100 ${error ? "border-red-500" : ""}`}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <p className="text-sm text-gray-600">
            Didn’t receive a code?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => window.location.reload()}>
              Resend
            </span>
          </p>

          <button
            className="w-full bg-green-600 text-white py-3 rounded-md mt-4"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-gray-200">
        <img src="/Forgotimg.png" alt="Illustration" className="w-3/4" />
      </div>
    </div>
  );
}
