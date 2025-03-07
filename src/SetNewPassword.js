import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleSubmit = () => {
    setIsPasswordReset(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); 
  };

  return (
    <div className="flex h-screen">
    <div className="w-1/2 flex flex-col justify-center items-center px-8">
    <div className="w-[400px]">
    <div className="absolute top-6 left-6 flex items-center space-x-2">
    <img src="/BINLOGO.png" className="w-10 h-10" alt="Bin Logo" />
      <h1 className="text-green-700 font-bold text-sm">Bin There, <br /> Done That! </h1>
    </div>

      {isPasswordReset ? (
      <div className="bg-gray-200 p-6 rounded-md text-center">
      <h2 className="text-2xl font-bold">Your password has been reset!</h2>
      <p className="text-gray-600 mt-2">Redirecting to Login in 3 seconds... </p>
      </div>) : (
        <>
      {/* New Password */}
      <h2 className="text-2xl font-semibold mb-2">Set a new password</h2>
      <p className="text-gray-500 mb-6">Your previous password has been reset. Please set a new password for your account.</p>
             
      <div className="mb-4 relative">
      <label className="block text-gray-700">New password</label>
      <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-3 border rounded-md bg-gray-100" />
      
      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-9 right-3" > {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} </button>
      </div>

        <div className="mb-4 relative">
        <label className="block text-gray-700">Confirm password</label>
        <input type={showConfirmPassword ? "text" : "password"} placeholder="Password" className="w-full p-3 border rounded-md bg-gray-100"/>
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute top-9 right-3"> {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}  </button>
        </div>
         <button className="w-full bg-green-600 text-white py-3 rounded-md mt-4" onClick={handleSubmit} > Set password </button> </>  )}
        </div>
      </div>
      
      <div className="w-1/2 flex justify-center items-center bg-gray-200">
        <img src="/Forgotimg.png" alt="Illustration" className="w-3/4" />
      </div>
    </div>
  );
}
