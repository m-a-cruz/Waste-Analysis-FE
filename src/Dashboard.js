import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, X } from "lucide-react";
import axios from "axios";


// Chart URLs
// const chartUrls = {
//   percentage: "https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=48aca54f-2e07-466e-9a34-e7e547568105&maxDataAge=60&theme=light&autoRefresh=true",
//   dailyAvg: "https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=d0af8988-13de-4fe2-86bf-1faee300750e&maxDataAge=60&theme=light&autoRefresh=true",
//   gasType: "https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=bd7ad7a5-385a-4e3d-b68e-5e25856ed4c9&maxDataAge=60&theme=light&autoRefresh=true",
//   avgPerHour: "https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0280a12e-f457-482b-886f-0b9a538435fa&maxDataAge=60&theme=light&autoRefresh=true",
// };

const InfoCard = ({ title, subtitle, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-gray-300 h-[200px] cursor-pointer" onClick={onClick}>
    <p className="text-6xl font-bold text-blue-600">{title}</p>
    <span className="text-2xl text-gray-500">{subtitle}</span>
  </div>
);

const ChartCard = ({ url, height, title, onClick }) => (
  <div className={`bg-white p-6 rounded-lg shadow-lg border border-gray-300 cursor-pointer ${height}`} onClick={onClick}>
    <iframe src={url} className="w-full h-full rounded-lg pointer-events-none" loading="lazy" title={title}></iframe>
  </div>
);

export default function Dashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [chartData, setChartData] = useState([]);
  // const [selectedAvatar, setSelectedAvatar] = useState("/avatar1.jpg");
  const navigate = useNavigate();

  const API_URL = "http://192.168.120.80:5000/gas/charts";

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) setSelectedAvatar(storedAvatar);
    fetchCharts();
  }, []);

  const fetchCharts = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(localStorage.getItem("id"))}`,
        },
      });
      console.log(response)
      setChartData(response.data);
    } catch (error) {
      console.error("Fetch charts error:", error);
    }
  };

  const openModal = (url) => {
    setModalContent(url);
    setModalOpen(true);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "profile") {
      setIsProfileOpen(!isProfileOpen);
      setIsNotifOpen(false); 
    } else {
      setIsNotifOpen(!isNotifOpen);
      setIsProfileOpen(false); 
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-300 p-4 flex justify-between items-center relative">
        <img src="/BINLOGO.png" alt="Bin Logo" className="h-10 w-auto cursor-pointer object-contain" />
        
        <div className="flex items-center space-x-6 relative">
          {/* Notification Icon */}
          <div className="relative">
            <Bell className="text-black cursor-pointer" size={24} onClick={() => toggleDropdown("notif")} />
            {isNotifOpen && (
              <div className="absolute right-0 mt-3 w-96 bg-white shadow-lg rounded-lg p-4 border border-gray-300 z-50">
                <h2 className="text-center text-lg font-semibold mb-3">Notification</h2>
                <div className="space-y-3 max-h-80 overflow-auto">
                  <div className="flex items-start space-x-3 p-2 border-b">
                    <Settings className="text-black-500" size={80} />
                    <div>
                      <h3 className="font-semibold">System Update</h3>
                      <p className="text-sm text-gray-600">We're improving your experience! A system update is scheduled for March 21</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-2 border-b">
                    <AlertTriangle className="text-yellow-500" size={80} />
                    <div>
                      <h3 className="font-semibold">Alert Notification</h3>
                      <p className="text-sm text-gray-600">Alert! high concentration gas detected immediate action required!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div className="relative">
            <img src={selectedAvatar} alt="Profile" className="h-8 w-8 rounded-full cursor-pointer border" onClick={() => toggleDropdown("profile")} />
            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-300 z-50">
                <div className="text-center">
                  <img src={selectedAvatar} alt="Profile" className="h-12 w-12 rounded-full mx-auto border" />
                  <h2 className="text-lg font-semibold mt-2">{firstName} {lastName}</h2>
                  <p className="text-gray-500 text-sm">Admin@ncf.edu.ph</p>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-1 inline-block">
                    Navigator Midlane
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => navigate("/dashboard/accountsettings")}>
                    ⚙ Account Settings
                  </button>
                  <button onClick={() => navigate("/dashboard/HelpPage")} className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">
                    ❓ Help
                  </button>
                  <button onClick={() => navigate("/dashboard/ReportAProblem")} className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">
                    ⚠ Report a Problem
                  </button>
                </div>
                <button onClick={() => navigate("/")} className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600">
                  LOGOUT
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

       {/* Dashboard Content */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          <InfoCard
            title="Sample"
            subtitle="ppm"
            onClick={() => openModal("")}
          />
          <InfoCard
            title="Carbon Dioxide"
            subtitle="Sample ppm"
            onClick={() => openModal("")}
          />
          {chartData
            .filter((chart) => chart.title === "percentage" || chart.title === "" || chart.title === "")
            .map((chart) => (
              <ChartCard
                key={chart._id}
                url={chart.link}
                height="h-[400px]"
                title="Pie Chart"
                onClick={() => openModal(chart.link)}
              />
            ))}
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-6">
          {chartData
          .filter((chart) => chart.title === "dailyAvg" || chart.title === "gasType")
          .map((chart) => (
            <ChartCard key={chart._id} url={chart.link} height="h-[400px]" title={chart.title} onClick={() => openModal(chart.link)}/>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-lg p-6 w-[90vw] h-[90vh] shadow-lg border border-gray-300 relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setModalOpen(false)}>
              <X size={20} />
            </button>
            <iframe src={modalContent} className="w-full h-full rounded-lg" loading="lazy" title="Chart"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
