import { useState } from "react";
import { FaBars, FaUser, FaProjectDiagram, FaEnvelope, FaUsers } from "react-icons/fa";
import Clients from "./Clients";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Subscribers from "./Subscribers";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (activeTab) {
      case "clients":
        return <Clients />;
      case "projects":
        return <Projects />;
      case "contacts":
        return <Contacts />;
      case "subscribers":
        return <Subscribers />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold">Welcome to Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">
              Use the sidebar to navigate through different sections.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white p-4 flex flex-col transition-all ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-6 text-white text-xl focus:outline-none"
        >
          <FaBars />
        </button>

        <div
          className={`flex flex-col gap-4 ${
            sidebarOpen ? "items-start" : "items-center"
          }`}
        >
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded w-full"
          >
            <FaUser />
            {sidebarOpen && "Dashboard"}
          </button>

          <button
            onClick={() => setActiveTab("clients")}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded w-full"
          >
            <FaUsers />
            {sidebarOpen && "Clients"}
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded w-full"
          >
            <FaProjectDiagram />
            {sidebarOpen && "Projects"}
          </button>

          <button
            onClick={() => setActiveTab("contacts")}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded w-full"
          >
            <FaEnvelope />
            {sidebarOpen && "Contacts"}
          </button>

          <button
            onClick={() => setActiveTab("subscribers")}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded w-full"
          >
            <FaUsers />
            {sidebarOpen && "Subscribers"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold capitalize">{activeTab}</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
