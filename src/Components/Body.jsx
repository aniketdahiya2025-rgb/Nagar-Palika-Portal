import "../App.css";
import logo2img from "../assets/logo2.png";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div className="w-full overflow-y-auto bg-gradient-to-r  from-emerald-900 to-emerald-100 ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r  from-emerald-900 to-emerald-100 text-white py-12 px-8 flex gap-8 justify-center items-center flex-col md:flex-row md:justify-around">
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Welcome to Nagar Palika Portal
          </h1>
          <p className="text-lg text-emerald-100">
            Your digital gateway to municipal services and civic engagement
          </p>
        </div>
        <div className="align-middle">
          <img
            src={logo2img}
            alt="Nagar Palika Logo"
            className="w-32 h-32 object-contain mx-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-10">
        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            About the Portal
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            The Nagar Palika Portal is a comprehensive digital platform designed
            to bring municipal services closer to citizens. Our mission is to
            provide transparent, efficient, and accessible government services
            that enhance the quality of urban life for all residents.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through this portal, you can access various municipal services from
            the comfort of your home, track your applications in real-time, and
            stay informed about civic developments in your area.
          </p>
        </section>

        {/* Services Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            Available Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Link to="/login">
                <h3 className="font-medium text-emerald-800 mb-2">
                  Online Payments
                </h3>
                <p className="text-gray-700 text-sm">
                  Pay property tax, water bills, and other municipal dues
                  securely through multiple payment gateways.
                </p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Link to="/login">
                <h3 className="font-medium text-emerald-800 mb-2">
                  Certificate Services
                </h3>
                <p className="text-gray-700 text-sm">
                  Apply for and download birth certificates, death certificates,
                  and residential certificates with digital verification.
                </p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Link to="/login">
                <h3 className="font-medium text-emerald-800 mb-2">
                  Utility Connections
                </h3>
                <p className="text-gray-700 text-sm">
                  Request new water connections, electricity connections, and
                  sewage services with online application tracking.
                </p>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Link to="/login">
                <h3 className="font-medium text-emerald-800 mb-2">
                  Grievance Redressal
                </h3>
                <p className="text-gray-700 text-sm">
                  File complaints regarding civic issues, sanitation, roads,
                  street lights, and monitor resolution status.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-900 mb-2">
                24/7 Accessibility
              </h3>
              <p className="text-gray-700 text-sm">
                Access services anytime, anywhere without visiting municipal
                offices.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-900 mb-2">
                Real-time Tracking
              </h3>
              <p className="text-gray-700 text-sm">
                Monitor your application status and receive updates via SMS and
                email.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-900 mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-700 text-sm">
                All payments and data transfers are encrypted and secure.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-900 mb-2">
                Digital Documentation
              </h3>
              <p className="text-gray-700 text-sm">
                Download certificates and receipts instantly in digital format.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            Getting Started
          </h2>
          <ol className="space-y-2 text-gray-700">
            <li>
              <span className="font-medium text-emerald-800">1.</span> Create an
              account or log in using your credentials
            </li>
            <li>
              <span className="font-medium text-emerald-800">2.</span> Navigate
              to the service you need from the main menu
            </li>
            <li>
              <span className="font-medium text-emerald-800">3.</span> Fill out
              the required forms and upload necessary documents
            </li>
            <li>
              <span className="font-medium text-emerald-800">4.</span> Make
              payments online if applicable
            </li>
            <li>
              <span className="font-medium text-emerald-800">5.</span> Track
              your application status through the dashboard
            </li>
          </ol>
        </section>

        {/* Contact Info */}
        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
            Need Assistance?
          </h2>
          <p className="text-gray-700 mb-3">
            Our support team is available to help you navigate the portal and
            resolve any issues you may encounter.
          </p>
          <div className="text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Helpline:</span> 1800-XXX-XXXX
              (Toll-free)
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              support@nagarpalika.gov.in
            </p>
            <p>
              <span className="font-medium">Office Hours:</span> Monday to
              Friday, 9:00 AM to 6:00 PM
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Body;
