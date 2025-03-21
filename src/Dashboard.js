import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, X, AlertTriangle, Settings, AlertOctagon } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("/avatar1.jpg");
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName") || "Kaizuko");
  const [lastName, setLastName] = useState(localStorage.getItem("lastName") || "Nami");
  const [gasLevel, setGasLevel] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const storedAvatar = localStorage.getItem("selectedAvatar");
    if (storedAvatar) setSelectedAvatar(storedAvatar);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("firstName")) localStorage.setItem("firstName", "Kaizuko");
    if (!localStorage.getItem("lastName")) localStorage.setItem("lastName", "Nami");
  }, []);

  const openModal = (content) => {
    setModalContent(content);
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
  // useEffect(() => {
  //   const checkGasLevel = async () => {
  //     try {
  //       const response = await axios.get("https://your-backend.com/api/gas-level"); 
  //       const newGasLevel = response.data.gasLevel; 
  
  //       setGasLevel(newGasLevel);

  // Simulated function to receive gas level data 
  useEffect(() => {
    const checkGasLevel = () => {
      const newGasLevel = Math.random() * 300; 
      setGasLevel(newGasLevel);

      if (newGasLevel > 200) { 
        setIsAlertOpen(true);
        setTimestamp(new Date().toLocaleString());
      }
    };

    const interval = setInterval(checkGasLevel, 5000); // Run every 5 seconds
    return () => clearInterval(interval);
  }, []);

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
      {/* Dashboard */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-1 space-y-6">
          {/* gas concentration */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-gray-300 h-[200px] cursor-pointer"
            onClick={() => openModal("")}
          >
            <p className="text-6xl font-bold text-blue-600">Sample</p>
            <span className="text-2xl text-gray-500">ppm</span>
          </div>

          {/* most active gas */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-center border border-gray-300 h-[200px] cursor-pointer"
            onClick={() => openModal("")}
          >
            <p className="text-green-600 text-2xl font-bold">Carbon Dioxide</p>
            <p className="text-black text-xl font-bold">Sample ppm</p>
          </div>

          {/* percentage of gases */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 h-[400px] cursor-pointer"
            onClick={() =>
              openModal("https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=48aca54f-2e07-466e-9a34-e7e547568105&maxDataAge=60&theme=light&autoRefresh=true")
            }
          >
            <iframe
              src="https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=48aca54f-2e07-466e-9a34-e7e547568105&maxDataAge=60&theme=light&autoRefresh=true"
              className="w-full h-full rounded-lg pointer-events-none"
              loading="lazy"
              title="Pie Chart"
            ></iframe>
          </div>
        </div>

        {/* daily avg. of gas type by day of the week*/}
        <div className="col-span-2 space-y-6">
          <div
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 h-[424px] cursor-pointer"
            onClick={() =>
              openModal("https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0280a12e-f457-482b-886f-0b9a538435fa&maxDataAge=60&theme=light&autoRefresh=true")
            }
          >
            <iframe
              src="https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0280a12e-f457-482b-886f-0b9a538435fa&maxDataAge=60&theme=light&autoRefresh=true"
              className="w-full h-full rounded-lg pointer-events-none"
              loading="lazy"
              title="Line Chart"
            ></iframe>
          </div>

          {/* hourly monitoring */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 h-[400px] cursor-pointer"
            onClick={() =>
              openModal("https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=bd7ad7a5-385a-4e3d-b68e-5e25856ed4c9&maxDataAge=60&theme=light&autoRefresh=true")
            }
          >
            <iframe
              src="https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=bd7ad7a5-385a-4e3d-b68e-5e25856ed4c9&maxDataAge=60&theme=light&autoRefresh=true"
              className="w-full h-full rounded-lg pointer-events-none"
              loading="lazy"
              title="Bar Chart"
            ></iframe>
          </div>
        </div>

        {/* total gas level */}
        <div className="flex justify-center w-[1850px]">
          <div
            className="bg-white p-6 rounded-lg shadow-lg h-[500px] w-[1850px] overflow-hidden mx-auto cursor-pointer"
            onClick={() =>
              openModal("https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0322c77a-e771-431f-852c-afca5f564422&maxDataAge=60&theme=light&autoRefresh=true")
            }
          >
            <iframe
              src="https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0322c77a-e771-431f-852c-afca5f564422&maxDataAge=60&theme=light&autoRefresh=true"
              className="w-[1800px] h-full rounded-lg pointer-events-none"
              loading="lazy"
              title="Table Chart"
            ></iframe>
          </div>
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

    {/*  Critical Alert Modal */}
{isAlertOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 ">
    <div className="bg-white rounded-lg p-6 w-[900px] h-[300px] shadow-lg border border-gray-300 relative text-center  ring-4 ring-red-300 shadow-red-500/50">
      <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setIsAlertOpen(false)}>
        <X size={20} />
      </button>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 text-red-500 font-bold">
          <AlertOctagon size={30} />
          <h2 className="text-2xl font-bold text-pink-600 mt-5">Alert! High Gas Concentration Detected!</h2>
          <AlertOctagon size={30} />
        </div>
        <p className="text-4xl font-extrabold text-red-600 mt-3">{gasLevel.toFixed(4)} ppm</p>
        <p className="text-gray-700 mt-3 font-medium">
          Immediate action required! Gas levels have exceeded the safe threshold.
          <br />
          Ensure safety measures are in place.
        </p>

        <p className="text-gray-500 text-sm mt-4">{timestamp}</p>

        {/* Acknowledge Button
             <button
             className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => setIsAlertOpen(false)}>Acknowledge
            </button> */}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
