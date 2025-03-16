import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, X } from "lucide-react";

export default function Dashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigate = useNavigate();


  const openModal = (chartUrl) => {
    setModalContent(chartUrl);
    setModalOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-300 p-4 flex justify-between items-center">
        <img src="/BINLOGO.png" alt="Bin Logo" className="h-10 w-auto cursor-pointer object-contain" />
        <div className="flex items-center space-x-6">
          <Bell className="text-black cursor-pointer" size={24} />
          <img
            src="/profile-pic.png"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={() => setIsProfileOpen(true)}
          />
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

        {/* daily avg. gas concentration */}
        <div className="col-span-2 space-y-6">
          <div
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 h-[424px] cursor-pointer"
            onClick={() =>
              openModal("https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0322c77a-e771-431f-852c-afca5f564422&maxDataAge=60&theme=light&autoRefresh=true")
            }
          >
            <iframe
              src="https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0322c77a-e771-431f-852c-afca5f564422&maxDataAge=60&theme=light&autoRefresh=true"
              className="w-full h-full rounded-lg pointer-events-none"
              loading="lazy"
              title="Line Chart"
            ></iframe>
          </div>

          {/* daily avg. of gas type by day of the week */}
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

        {/* average gas level per hour */}
        <div className="flex justify-center w-[1850px]">
          <div
            className="bg-white p-6 rounded-lg shadow-lg h-[500px] w-[1850px] overflow-hidden mx-auto cursor-pointer"
            onClick={() =>
              openModal("https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0280a12e-f457-482b-886f-0b9a538435fa&maxDataAge=60&theme=light&autoRefresh=true")
            }
          >
            <iframe
              src="https://charts.mongodb.com/charts-trashtalk-friltrw/embed/charts?id=0280a12e-f457-482b-886f-0b9a538435fa&maxDataAge=60&theme=light&autoRefresh=true"
              className="w-[1800px] h-full rounded-lg pointer-events-none"
              loading="lazy"
              title="Table Chart"
            ></iframe>
          </div>
        </div>
      </div>

      {/*Profile Nav Icon*/}
      {isProfileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsProfileOpen(false)} 
        >
          <div
            className="bg-white rounded-lg p-6 w-80 shadow-lg border border-gray-300 relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsProfileOpen(false)}
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <img src="/profile-pic.png" alt="Profile" className="h-16 w-16 rounded-full mx-auto border" />
              <h2 className="text-lg font-semibold mt-2">Kaizuko Nami</h2>
              <p className="text-gray-500 text-sm">Admin@ncf.edu.ph</p>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs mt-1 inline-block">
                Navigator Midlane
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <button
                className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/dashboard/accountsettings");
                  setIsProfileOpen(false);
                }}
              >
                ⚙ Account Settings
              </button>
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">❓ Help</button>
              <button className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100">⚠ Report a Problem</button>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/");
              }}
              className="w-full bg-red-500 text-white py-2 mt-4 rounded-lg hover:bg-red-600"
            >
              LOGOUT
            </button>
          </div>
        </div>
      )}

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
