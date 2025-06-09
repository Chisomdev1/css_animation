import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-item")) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <div className="flex h-screen bg-gray-100 poppins">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-md transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">My Dashboard</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4 space-y-2 px-4">
          <div className="menu-item relative">
            <a
              href="#"
              className={`block py-2 px-4 rounded hover:bg-gray-200 ${
                activeMenu === "Dashboard" ? "hidden" : ""
              }`}
              onClick={() => toggleMenu("Dashboard")}
            >
              Dashboard
            </a>
            {activeMenu === "Dashboard" && (
              <div className="absolute left-full top-0 mt-2 p-2 bg-gray-100 rounded shadow w-48">
                Dashboard Menu
              </div>
            )}
          </div>
          <div className="menu-item relative">
            <a
              href="#"
              className={`block py-2 px-4 rounded hover:bg-gray-200 ${
                activeMenu === "Profile" ? "hidden" : ""
              }`}
              onClick={() => toggleMenu("Profile")}
            >
              Profile
            </a>
            {activeMenu === "Profile" && (
              <div className="absolute left-full top-0 mt-2 p-2 bg-gray-100 rounded shadow w-48">
                Profile Menu
              </div>
            )}
          </div>
          <div className="menu-item relative">
            <a
              href="#"
              className={`block py-2 px-4 rounded hover:bg-gray-200 ${
                activeMenu === "Settings" ? "hidden" : ""
              }`}
              onClick={() => toggleMenu("Settings")}
            >
              Settings
            </a>
            {activeMenu === "Settings" && (
              <div className="absolute left-full top-0 mt-2 p-2 bg-gray-100 rounded shadow w-48">
                Settings Menu
              </div>
            )}
          </div>
          <a
            href="#"
            className="block py-2 px-4 rounded hover:bg-red-100 text-red-500 hover:text-red-700"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
}