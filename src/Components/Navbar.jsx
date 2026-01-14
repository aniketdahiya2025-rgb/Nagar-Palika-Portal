import "../App.css";
import { FaHome } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import DropdownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-center px-4 py-4 backdrop-blur-md bg-emerald-900 shadow-lg border-b border-white/20">
      <nav className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 max-w-6xl w-full">
        <div className="text-sm lg:text-base text-white font-semibold flex items-center gap-2 hover:text-emerald-300 hover:scale-105 transition-all duration-200 cursor-pointer tracking-wide group">
          <Link
            to="/"
            className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
          >
            <FaHome className="text-lg lg:text-xl group-hover:rotate-12 transition-transform" />
            <span>Home</span>
          </Link>
        </div>

        <div className="text-sm lg:text-base text-white font-semibold flex items-center gap-2 hover:text-emerald-300 hover:scale-105 transition-all duration-200 cursor-pointer tracking-wide group">
          <IoIosInformationCircleOutline className="text-lg lg:text-xl group-hover:rotate-12 transition-transform" />
          <span>About Apni Sarkar</span>
        </div>

        <div className="text-sm lg:text-base text-white font-semibold flex items-center gap-2 hover:text-emerald-300 hover:scale-105 transition-all duration-200 cursor-pointer tracking-wide group">
          <FaThList className="text-lg lg:text-xl group-hover:rotate-12 transition-transform" />
          <span>Services</span>
        </div>

        <div className="text-sm lg:text-base text-white font-semibold flex items-center gap-2 hover:text-emerald-300 hover:scale-105 transition-all duration-200 cursor-pointer tracking-wide group">
          <Link to="/login" className="flex items-center gap-2">
            <MdSpaceDashboard className="text-lg lg:text-xl group-hover:rotate-12 transition-transform" />
            <span>Dashboard</span>
          </Link>
        </div>
        <Link
          to="/login"
          clasName=" hover:scale-105 transition-all duration-300"
        >
          <div className="text-emerald-900 text-sm lg:text-base bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer tracking-wide">
            Log in
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
