import "../App.css";
import logo2img from "../assets/logo2.png";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="w-full overflow-y-auto bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-600 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20 px-8 flex gap-12 justify-center items-center flex-col lg:flex-row lg:justify-between">
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-200 to-emerald-100 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to Nagar Palika Portal
          </h1>
          <p className="text-xl text-emerald-100 opacity-90 leading-relaxed">
            Your digital gateway to municipal services and civic engagement
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={logo2img}
            alt="Nagar Palika Logo"
            className="w-40 h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
            About the Portal
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <p className="text-lg text-emerald-100 leading-relaxed mb-6 opacity-95">
              The Nagar Palika Portal is a comprehensive digital platform
              designed to bring municipal services closer to citizens. Our
              mission is to provide transparent, efficient, and accessible
              government services that enhance the quality of urban life for all
              residents.
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed opacity-90">
              Through this portal, you can access various municipal services
              from the comfort of your home, track your applications in
              real-time, and stay informed about civic developments in your
              area.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-12">
            Available Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            <Link to="/login" className="group">
              <div className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-800">
                  Online Payments
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Pay property tax, water bills, and other municipal dues
                  securely through multiple payment gateways.
                </p>
              </div>
            </Link>

            <Link to="/login" className="group">
              <div className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-800">
                  Certificate Services
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Apply for and download birth certificates, death certificates,
                  and residential certificates with digital verification.
                </p>
              </div>
            </Link>

            <Link to="/login" className="group">
              <div className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-800">
                  Utility Connections
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Request new water connections ,sewage connection and services
                  with online application tracking.
                </p>
              </div>
            </Link>

            <Link to="/login" className="group">
              <div className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 group-hover:text-emerald-800">
                  Grievance Redressal
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  File complaints regarding civic issues, sanitation, roads,
                  street lights, and monitor resolution status.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                24/7 Accessibility
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Access services anytime, anywhere without visiting municipal
                offices.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                Real-time Tracking
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Monitor your application status and receive updates via SMS and
                email.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                Secure Transactions
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                All payments and data transfers are encrypted and secure.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-200/50 hover:border-emerald-300/70 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                Digital Documentation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Download certificates and receipts instantly in digital format.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-12">
            Getting Started
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 lg:p-16 border border-emerald-200/50 shadow-2xl max-w-4xl mx-auto">
            <ol className="space-y-6 text-lg">
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  1
                </span>
                <span className="text-gray-800 leading-relaxed">
                  Create an account or log in using your credentials
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  2
                </span>
                <span className="text-gray-800 leading-relaxed">
                  Navigate to the service you need from the main menu
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  3
                </span>
                <span className="text-gray-800 leading-relaxed">
                  Fill out the required forms and upload necessary documents
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  4
                </span>
                <span className="text-gray-800 leading-relaxed">
                  Make payments online if applicable
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mt-1">
                  5
                </span>
                <span className="text-gray-800 leading-relaxed">
                  Track your application status through the dashboard
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 lg:p-16 shadow-2xl border border-emerald-200/50 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
            Need Assistance?
          </h2>
          <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
            Our support team is available to help you navigate the portal and
            resolve any issues you may encounter.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center justify-center">
              <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-4 font-bold flex-shrink-0">
                📞
              </span>
              <span>
                <span className="font-bold text-emerald-900">Helpline:</span>{" "}
                1800-XXX-XXXX (Toll-free)
              </span>
            </p>
            <p className="flex items-center justify-center">
              <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-4 font-bold flex-shrink-0">
                ✉️
              </span>
              <span>support@nagarpalika.gov.in</span>
            </p>
            <p className="flex items-center justify-center">
              <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-4 font-bold flex-shrink-0">
                🕒
              </span>
              <span>
                <span className="font-bold text-emerald-900">
                  Office Hours:
                </span>{" "}
                Monday to Friday, 9:00 AM to 6:00 PM
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Body;
