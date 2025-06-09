import { useState, useEffect } from "react";
import {  MessageSquare, RotateCcw, Search, X } from "lucide-react";

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
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-md transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
            <div
              className={`block py-2 px-4 rounded hover:bg-gray-200 transition-opacity duration-300 ${activeMenu === "Dashboard" ? "opacity-0" : "opacity-100"
                }`}
              onClick={() => toggleMenu("Dashboard")}
            >
              Dashboard
            </div>
            {activeMenu === "Dashboard" && (
              <div className="absolute left-full top-0 mt-2 p-1 bg-gray-100 rounded shadow w-48 transition-transform duration-300">
                <div className="justify-between bg-gray-400 w-full inline-flex p-1 rounded-t mb-2">
                  <div> Dashboard</div>
                 

                  <div className="inline-flex items-center">Reset
                  <RotateCcw />
                  </div>
                </div>

                <div className="justify-between w-full inline-flex p-1 mb-2">
                  <div> Campaign <br />
                  <p className="text-[14px]">Spring 25 Product Launch</p>
                   </div>
                 

                  <div className="inline-flex items-center">
                  <MessageSquare />
                  </div>
                </div>

                <div className="flex justify-center mb-2">
                <button className="flex items-center bg-gray-300 rounded p-1">Choose Resource
                  <Search />
                </button>
              </div>
              </div>
            )}
          </div>
          <div className="menu-item relative">
            <div
              className={`block py-2 px-4 rounded hover:bg-gray-200 transition-opacity duration-300 ${activeMenu === "Profile" ? "opacity-0" : "opacity-100"
                }`}
              onClick={() => toggleMenu("Profile")}
            >
              Profile
            </div>
            {activeMenu === "Profile" && (
               <div className="absolute left-full top-0 mt-2 p-1 bg-gray-100 rounded shadow w-48 transition-transform duration-300">
               <div className="justify-between bg-gray-400 w-full inline-flex p-1 rounded-t mb-2">
                 <div>  Profile</div>
                

                 <div className="inline-flex items-center">Reset
                 <RotateCcw />
                 </div>
               </div>

               <div className="justify-between w-full inline-flex p-1 mb-2">
                 <div> Campaign <br />
                 <p className="text-[14px]">Spring 25 Product Launch</p>
                  </div>
                

                 <div className="inline-flex items-center">
                 <MessageSquare />
                 </div>
               </div>

               <div className="flex justify-center mb-2">
               <button className="flex items-center bg-gray-300 rounded p-1">Choose Resource
                 <Search />
               </button>
             </div>
             </div>
            )}
          </div>
          <div className="menu-item relative">
            <div
              className={`block py-2 px-4 rounded hover:bg-gray-200 transition-opacity duration-300 ${activeMenu === "Settings" ? "opacity-0" : "opacity-100"
                }`}
              onClick={() => toggleMenu("Settings")}
            >
              Settings
            </div>
            {activeMenu === "Settings" && (
                 <div className="absolute left-full top-0 mt-2 p-1 bg-gray-100 rounded shadow w-48 transition-transform duration-300">
                 <div className="justify-between bg-gray-400 w-full inline-flex p-1 rounded-t mb-2">
                   <div> </div>
                   Settings
 
                   <div className="inline-flex items-center">Reset
                   <RotateCcw />
                   </div>
                 </div>
 
                 <div className="justify-between w-full inline-flex p-1 mb-2">
                   <div> Campaign <br />
                   <p className="text-[14px]">Spring 25 Product Launch</p>
                    </div>
                  
 
                   <div className="inline-flex items-center">
                   <MessageSquare />
                   </div>
                 </div>
 
                 <div className="flex justify-center mb-2">
                 <button className="flex items-center bg-gray-300 rounded p-1">Choose Resource
                   <Search />
                 </button>
               </div>
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