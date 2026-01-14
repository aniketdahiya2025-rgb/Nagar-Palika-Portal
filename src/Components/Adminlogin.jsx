import "../App.css";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

const Adminlogin = () => {
  return (
    <div className="w-full  flex items-center justify-center bg-gradient-to-b from-emerald-50 to-white p-4">
      <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-md p-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-emerald-100 p-3 rounded-full">
            <FaUserShield className="w-6 h-6 text-emerald-700" />
          </div>
          <button className="text-3xl font-bold text-emerald-900 hover:text-emerald-600 transition-colors duration-300">
            Admin
          </button>
        </div>

        <hr className="border-t border-gray-300 w-full mb-6" />

        <form className="w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
            Admin Login
          </h1>

          <div className="mb-5">
            <label
              className="block text-gray-600 font-medium mb-2 capitalize"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-600 font-medium mb-2 capitalize"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdLock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <Link to="/Admin">
            <button
              type="submit"
              className="w-full bg-emerald-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
