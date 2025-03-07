import { useState } from "react";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Bell, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const data = [
    { name: "Monday", CO2: 100, O2: 50, Methane: 30 },
    { name: "Tuesday", CO2: 150, O2: 40, Methane: 20 },
    { name: "Wednesday", CO2: 200, O2: 60, Methane: 35 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Nav*/}
      <nav className="bg-white shadow-lg border-b border-gray-300 p-4 flex justify-between items-center">
   
        <img src="/BINLOGO.png" alt="Bin Logo" className="h-10 w-auto cursor-pointer object-contain" />

        {/* Notification & Profile */}
        <div className="flex items-center space-x-6">
          <Bell className="text-black cursor-pointer" size={24} />
          <img
            src="/profile-pic.png"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* Profile Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>

            {/* Profile  */}
            <div className="text-center">
              <img src="/profile-pic.png" alt="Profile" className="h-16 w-16 rounded-full mx-auto border" />
              <h2 className="text-lg font-semibold mt-2">Kaizuko Nami</h2>
              <p className="text-gray-500 text-sm">Admin@ncf.edu.ph</p>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-1 inline-block">Navigator Midlane</span>
            </div>

            {/* Options */}
            <div className="mt-4 space-y-2">
            <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => navigate("/dashboard/accountsettings")}>⚙ Account Settings</button>
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">❓ Help</button>
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">⚠ Report a Problem</button>
            </div>

            {/* Logout  */}
            <button 
            onClick={() => navigate("/")} 
            className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600"
            >LOGOUT
            </button>
          </div>
        </div>
      )}

      {/* Main  */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-4xl font-bold text-blue-500">365 ppm</h2>
            <p className="text-gray-500">Daily Avg. Concentration of Gas</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl text-green-600">Carbon Dioxide</h2>
            <p className="text-black">124.3583 ppm</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <PieChart width={150} height={150}>
              <Pie data={data} dataKey="CO2" nameKey="name" fill="#8884d8" label />
            </PieChart>
            <p className="text-center text-sm text-gray-500">Percentage of Gases</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <LineChart width={400} height={200} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="CO2" stroke="#8884d8" />
            </LineChart>
            <p className="text-center text-sm text-gray-500">Daily Avg. Gas Concentration</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <BarChart width={400} height={200} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Methane" fill="#82ca9d" />
            </BarChart>
            <p className="text-center text-sm text-gray-500">Daily Avg. of Gas Type by Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
