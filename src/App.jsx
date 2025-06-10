import { useState, useEffect } from "react";
import { MessageSquare, Play, RotateCcw, Search, X, Menu } from "lucide-react";

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
      {/* Mobile Navbar Toggle */}
      <button
        className="fixed top-4 left-4 z-40 p-2 bg-gray-200 rounded md:hidden"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transform bg-gray-150 shadow-md transition-transform duration-300 ease-in-out w-48 md:w-64 md:static md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-2">
          <div className="text-gray-800 py-2 w-[25%] rounded-[10px] justify-center flex bg-gray-200">
            <Play />
          </div>
          {/* Remove the X button inside the sidebar for mobile view */}
          <button
            className="hidden md:block"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4 space-y-4 px-4">
          <div className="menu-item relative cursor">
            <div className="relative">
              <span
                className={`absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transition-opacity duration-300 ${activeMenu === "Dashboard" ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <div
                className={`block py-2 px-2 w-[55%] rounded-[15px] text-center bg-gray-200 transition-opacity duration-300 ${activeMenu === "Dashboard" ? "opacity-0" : "opacity-100"
                  }`}
                onClick={() => toggleMenu("Dashboard")}
              >
                Range
              </div>
            </div>
            {activeMenu === "Dashboard" && (
              <div className="relative">
                <div className="absolute left-full top-0 mt-2 p-1 bg-white rounded-[10px] shadow-lg shadow-gray-500/50 w-48 transition-transform duration-300 md:w-64">
                  <span
                    className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transition-opacity duration-300"
                  ></span>
                  <div className="justify-between bg-gray-300 w-full inline-flex p-1 rounded-b rounded-[10px] mb-2">
                    <div>Range</div>
                    <div className="inline-flex items-center">
                      Reset
                      <RotateCcw className="text-[10px] ml-2" />
                    </div>
                  </div>
                  <div className="justify-between w-full inline-flex p-1 mb-2">
                    <div className="text-black font-bold">
                      Campaign <br />
                      <p className="text-[14px] font-thin text-gray-400">Spring 25 Product Launch</p>
                    </div>
                    <div className="inline-flex items-center">
                      <MessageSquare />
                    </div>
                  </div>
                  <div className="justify-center w-[90%] mb-2 flex items-center m-auto bg-gray-300 rounded-[15px] p-1">
                    Choose Resource
                    <Search className="ml-2" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="menu-item relative">
            <div className="relative">
              <span
                className={`absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transition-opacity duration-300 ${activeMenu === "Category" ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <div
                className={`block py-2 px-2 w-[55%] rounded-[15px] text-center bg-gray-200 transition-opacity duration-300 ${activeMenu === "Category" ? "opacity-0" : "opacity-100"
                  }`}
                onClick={() => toggleMenu("Category")}
              >
                Category
              </div>
            </div>
            {activeMenu === "Category" && (
              <div className="relative">
              <div className="absolute left-full top-0 mt-2 p-1 bg-white rounded-[10px] shadow-lg shadow-gray-500/50 w-48 transition-transform duration-300 md:w-64">
                <span
                  className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transition-opacity duration-300"
                ></span>
                <div className="justify-between bg-gray-300 w-full inline-flex p-1 rounded-b rounded-[10px] mb-2">
                  <div>Category</div>
                  <div className="inline-flex items-center">
                    Reset
                    <RotateCcw className="text-[10px] ml-2" />
                  </div>
                </div>
                <div className="justify-between w-full inline-flex p-1 mb-2">
                  <div className="text-black font-bold">
                    Campaign <br />
                    <p className="text-[14px] font-thin text-gray-400">Spring 25 Product Launch</p>
                  </div>
                  <div className="inline-flex items-center">
                    <MessageSquare />
                  </div>
                </div>
                <div className="justify-center w-[90%] mb-2 flex items-center m-auto bg-gray-300 rounded-[15px] p-1">
                  Choose Resource
                  <Search className="ml-2" />
                </div>
              </div>
            </div>
            )}
          </div>

          <div className="menu-item relative">
            <div className="relative">
              <div
                className={`block py-2 px-2 w-[55%] rounded-[15px] text-center bg-gray-200 transition-opacity duration-300 ${activeMenu === "Origin" ? "opacity-0" : "opacity-100"
                  }`}
                onClick={() => toggleMenu("Origin")}
              >
                Origin
              </div>
            </div>
            {activeMenu === "Origin" && (
             <div className="relative">
             <div className="absolute left-full top-0 mt-2 p-1 bg-white rounded-[10px] shadow-lg shadow-gray-500/50 w-48 transition-transform duration-300 md:w-64">
               <span
                 className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full transition-opacity duration-300"
               ></span>
               <div className="justify-between bg-gray-300 w-full inline-flex p-1 rounded-b rounded-[10px] mb-2">
                 <div>Origin</div>
                 <div className="inline-flex items-center">
                   Reset
                   <RotateCcw className="text-[10px] ml-2" />
                 </div>
               </div>
               <div className="justify-between w-full inline-flex p-1 mb-2">
                 <div className="text-black font-bold">
                   Campaign <br />
                   <p className="text-[14px] font-thin text-gray-400">Spring 25 Product Launch</p>
                 </div>
                 <div className="inline-flex items-center">
                   <MessageSquare />
                 </div>
               </div>
               <div className="justify-center w-[90%] mb-2 flex items-center m-auto bg-gray-300 rounded-[15px] p-1">
                 Choose Resource
                 <Search className="ml-2" />
               </div>
             </div>
           </div>
            )}
          </div>






          <div className="text-gray-800 py-2 w-[25%] rounded-[10px] justify-center flex bg-gray-200">
            <RotateCcw />
          </div>
        </nav>
      </div>
    </div>
  );
}