import { Link } from "react-router-dom";
import { FaUser, FaUserShield } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" flex flex-col lg:flex-row bg-emerald-100 w-full overflow-hidden">
      {/* User Login */}
      <Link
        to="/user-login"
        className="flex-1 lg:w-1/2 group"
        aria-label="Login as a user"
      >
        <div className="bg-gradient-to-l from-emerald-100 to-emerald-900 flex flex-col gap-6 items-center justify-center h-full overflow-hidden p-12 lg:p-32 text-white group-hover:bg-white group-hover:text-emerald-900 transition-all duration-500 ease-in-out">
          <FaUser className="w-16 h-16 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-300" />
          <h1 className="text-2xl lg:text-4xl font-bold text-center group-hover:text-5xl transition-all duration-300">
            Login as a User
          </h1>
          <p className="text-sm lg:text-base text-emerald-100 group-hover:text-emerald-700 transition-colors duration-300 text-center max-w-md">
            Access your account to manage municipal services, track
            applications, and make payments
          </p>
        </div>
      </Link>

      {/* Admin Login */}
      <Link
        to="/admin-login"
        className="flex-1 lg:w-1/2 group"
        aria-label="Login as an admin"
      >
        <div className="bg-gradient-to-r from-emerald-100  to-emerald-900 flex flex-col gap-6 items-center justify-center h-full overflow-hidden p-12 lg:p-32 text-white group-hover:bg-white group-hover:text-emerald-900 transition-all duration-500 ease-in-out">
          <FaUserShield className="w-16 h-16 lg:w-24 lg:h-24 group-hover:scale-110 transition-transform duration-300" />
          <h1 className="text-2xl lg:text-4xl font-bold text-center group-hover:text-5xl transition-all duration-300">
            Login as an Admin
          </h1>
          <p className="text-sm lg:text-base text-emerald-100 group-hover:text-emerald-700 transition-colors duration-300 text-center max-w-md">
            Access administrative dashboard to manage services, applications,
            and user accounts
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Login;
