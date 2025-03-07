import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Bell } from "lucide-react";

export default function AccountSettings() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Nav */}
      <nav className="bg-white shadow-lg border-b border-gray-300 p-4 flex justify-between items-center">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-8 cursor-pointer" onClick={() => navigate("/dashboard")} />
      </nav>

      {/* Side bar */}
      <div className="flex">
        <div className="w-1/5 bg-white p-6 min-h-screen border-r">
          <button onClick={() => navigate(-1)} className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">⬅ Back</button>
          
          <button onClick={() => navigate("/dashboard/accountsettings")} className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">⚙ Account Settings</button>
          <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">❓ Help</button>
          <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">⚠ Report a Problem</button>
        </div>

        
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Prof */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src="/profile-pic.png" alt="Profile" className="h-20 w-20 rounded-full" />
                <div>
                  <p className="text-sm font-semibold">Profile Picture</p>
                  <p className="text-gray-500">PNG, JPEG, under 15MB</p>
                </div>
              </div>
              <button className="bg-gray-200 px-4 py-2 rounded-lg">Upload Picture</button>
            </div>

            {/* Full Name */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">First Name</label>
                <input type="text" className="w-full p-2 border rounded" value="Kaizuko" />
              </div>
              <div>
                <label className="block text-sm font-semibold">Last Name</label>
                <input type="text" className="w-full p-2 border rounded" value="Nami" />
              </div>
            </div>

            {/* Contact Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Contact Email</label>
              <input type="email" className="w-full p-2 border rounded" value="Admin@ncf.edu.ph" />
            </div>

            {/* Password*/}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">Current Password</label>
                <input type="password" className="w-full p-2 border rounded" value="********" />
              </div>
              <div>
                <label className="block text-sm font-semibold">New Password</label>
                <input type="password" className="w-full p-2 border rounded" value="********" />
              </div>
            </div>
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}