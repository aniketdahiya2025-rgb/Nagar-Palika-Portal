import { useState, useRef, useEffect } from "react";
import "../App.css";
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full px-4 py-2 text-lg font-medium text-white hover:text-emerald-600 hover:text-xl duration-300"
      >
        Services
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="#"
              className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Billing
            </a>
          </div>
          <div className="py-1">
            <a
              href="#"
              className="text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Help
            </a>
            <a
              href="#"
              className="text-red-600 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
