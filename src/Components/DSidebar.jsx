import {
  FiUser,
  FiLogOut,
  FiHome,
  FiFileText,
  FiCreditCard,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";
function DSidebar({ selectedMenu, setSelectedMenu }) {
  return (
    <div className="w-64 bg-emerald-900 h-full overflow-auto flex flex-col text-white shadow-lg">
      {/* User Profile Section */}
      <div className="p-6 border-b border-emerald-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
            <FiUser className="text-2xl" />
          </div>
          <div>
            <p className="text-sm text-emerald-300">User ID</p>
            <p className="font-semibold">CIT-2024-001</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <li
            onClick={() => {
              setSelectedMenu("dashboard");
            }}
          >
            <Link className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors">
              <FiHome className="text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            onClick={() => {
              setSelectedMenu("issued - applications");
            }}
          >
            <Link className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors">
              <FiFileText className="text-xl" />
              <span>Issue Application</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <FiCreditCard className="text-xl" />
              <span>Payment History</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <FiSettings className="text-xl" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <FiHelpCircle className="text-xl" />
              <span>Help & Support</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Logout Section */}
      <Link to="/login">
        <div className="p-4 border-t border-emerald-800">
          <button className="flex items-center gap-3 w-full px-6 py-3 hover:bg-emerald-800 rounded-lg transition-colors text-left cursor-pointer">
            <FiLogOut className="text-xl" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default DSidebar;
