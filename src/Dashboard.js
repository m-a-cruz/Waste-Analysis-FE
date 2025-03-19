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
  const [modalContent, setModalContent] = useState("");
  const [chartData, setChartData] = useState([]);
  // const [selectedAvatar, setSelectedAvatar] = useState("/avatar1.jpg");
  const navigate = useNavigate();

  const API_URL = "http://192.168.120.80:5000/gas/charts";

  useEffect(() => {
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

  const closeModal = () => setModalOpen(false);
  const closeProfile = () => setIsProfileOpen(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-300 p-4 flex justify-between items-center">
        <img src="/BINLOGO.png" alt="Bin Logo" className="h-10 w-auto cursor-pointer object-contain" />
        <div className="flex items-center space-x-6">
          <Bell className="text-black cursor-pointer" size={24} />
          <img src="/profile-pic.png" alt="Profile" className="h-8 w-8 rounded-full cursor-pointer" onClick={() => setIsProfileOpen(true)} />
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

      {/* Profile Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeProfile}>
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg border border-gray-300 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={closeProfile}>
              <X size={20} />
            </button>
            <div className="text-center">
              <img src="/profile-pic.png" alt="Profile" className="h-16 w-16 rounded-full mx-auto border" />
              <h2 className="text-lg font-semibold mt-2">Kaizuko Nami</h2>
              <p className="text-gray-500 text-sm">Admin@ncf.edu.ph</p>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-1 inline-block">Navigator Midlane</span>
            </div>
            <div className="mt-4 space-y-2">
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => navigate("/dashboard/accountsettings")}>⚙ Account Settings</button>
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">❓ Help</button>
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">⚠ Report a Problem</button>
            </div>
            <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600">LOGOUT</button>
          </div>
        </div>
      )}

      {/* Chart Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg p-6 w-[90vw] h-[90vh] shadow-lg border border-gray-300 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={closeModal}>
              <X size={20} />
            </button>
            <iframe src={modalContent} className="w-full h-full rounded-lg" loading="lazy" title="Chart"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
