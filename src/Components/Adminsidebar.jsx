import {
  FiUser,
  FiLogOut,
  FiHome,
  FiFileText,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { useState } from "react";

function AdminSidebar({ selectedMenu, setSelectedMenu }) {
  return (
    <div className="w-64 bg-emerald-900 h-full overflow-auto flex flex-col text-white shadow-lg">
      {/* Admin Profile Section */}
      <div className="p-6 border-b border-emerald-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
            <FiUser className="text-2xl" />
          </div>
          <div>
            <p className="text-sm text-emerald-300">Admin ID</p>
            <p className="font-semibold">ADM-2024-001</p>
          </div>
        </div>
        <div className="mt-2 px-2 py-1 bg-emerald-700 rounded text-xs text-center">
          Municipal Officer
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <li
            onClick={() => {
              setSelectedMenu("Admin Dashboard");
            }}
          >
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <MdSpaceDashboard className="text-xl" />
              <span>Dashboard</span>
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedMenu("applications");
            }}
          >
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <FiFileText className="text-xl" />
              <span>All Applications</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <FiCheckCircle className="text-xl" />
              <span>Approve/Reject</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <FiUsers className="text-xl" />
              <span>Citizen Management</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3 hover:bg-emerald-800 transition-colors"
            >
              <HiDocumentText className="text-xl" />
              <span>Reports</span>
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

export default AdminSidebar;
