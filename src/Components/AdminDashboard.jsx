import { MdPendingActions, MdDoneAll } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { RiFileListLine } from "react-icons/ri";
import { BsClipboardCheck } from "react-icons/bs";
import "../App.css";

function AdminDashboard() {
  return (
    <div className="w-full h-screen bg-gray-50 p-6 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage Applications & Monitor Services
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search applications, citizens, services..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <button className="px-6 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors font-medium">
              Profile
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-amber-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs mb-1">Pending Applications</p>
              <h3 className="text-xl font-bold text-gray-800">24</h3>
            </div>
            <MdPendingActions className="text-3xl text-amber-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs mb-1">In Progress</p>
              <h3 className="text-xl font-bold text-gray-800">12</h3>
            </div>
            <BiTimeFive className="text-3xl text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs mb-1">Completed Today</p>
              <h3 className="text-xl font-bold text-gray-800">8</h3>
            </div>
            <MdDoneAll className="text-3xl text-emerald-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-xs mb-1">Total This Month</p>
              <h3 className="text-xl font-bold text-gray-800">156</h3>
            </div>
            <IoStatsChart className="text-3xl text-purple-500" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
            <RiFileListLine className="text-3xl text-emerald-600" />
            <span className="font-medium text-gray-700">
              View All Applications
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
            <BsClipboardCheck className="text-3xl text-emerald-600" />
            <span className="font-medium text-gray-700">
              Approve/Reject Applications
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-3">
        <h2 className="text-xl font-bold text-emerald-900 mb-3">
          Application Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Certificates</h3>
              <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded">
                6 pending
              </span>
            </div>
            <p className="text-sm text-gray-600">Birth, Death, Residential</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Property Tax</h3>
              <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded">
                3 pending
              </span>
            </div>
            <p className="text-sm text-gray-600">Assessment, Payment</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Water Connection</h3>
              <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded">
                8 pending
              </span>
            </div>
            <p className="text-sm text-gray-600">New, Transfer, Repairs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
