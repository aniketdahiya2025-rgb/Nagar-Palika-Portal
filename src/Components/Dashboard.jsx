import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { TbFileSpreadsheet } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import "../App.css";

function Dashboard() {
  return (
    <div className="w-full h-full bg-gray-50 p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">
            Citizen Dashboard
          </h1>
          <p className="text-gray-600">Welcome</p>
        </div>

        {/* Search and Profile Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search for services, bills, info..."
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

      {/* Main Content Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-emerald-900 mb-4">
          Pay & Track
        </h1>

        <div className="flex flex-col sm:flex-row justify-around gap-4 mb-6">
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex-1">
            <HiOutlineCurrencyRupee className="text-3xl text-emerald-600" />
            <span className="font-medium text-gray-700">Quick Payment</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex-1">
            <TbFileSpreadsheet className="text-3xl text-emerald-600" />
            <span className="font-medium text-gray-700">
              Track or Issue an Application
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-300 w-full mb-6" />

        <h1 className="text-2xl font-bold text-emerald-900 mb-4">
          Quick Services
        </h1>

        <div className="flex flex-col sm:flex-row justify-around gap-4">
          <div className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex-1">
            <GoHome className="text-4xl text-emerald-600" />
            <span className="font-medium text-gray-700 text-center">
              Property Tax
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex-1">
            <IoWaterOutline className="text-4xl text-emerald-600" />
            <span className="font-medium text-gray-700 text-center">
              Water Charges
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex-1">
            <PiBuildingApartment className="text-4xl text-emerald-600" />
            <span className="font-medium text-gray-700 text-center">
              Rental
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
