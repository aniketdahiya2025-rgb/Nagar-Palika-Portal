import { MdPendingActions, MdDoneAll } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { useContext } from "react";
import { Applications } from "../Store/Application-store.jsx";
import Application from "./Application.jsx";

function ApplicationsDashboard() {
  const { applications } = useContext(Applications);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">
            Applications Dashboard
          </h1>
          <p className="text-gray-600">View and Manage All Applications</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex gap-2 flex-wrap">
          <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-emerald-900 text-white">
            All
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
            Pending
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
            In Progress
          </button>
          <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
            Completed
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-emerald-900">
            Applications List ({applications.length})
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {applications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No applications found.
            </div>
          ) : (
            applications.map((application) => (
              <Application key={application.id} application={application} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ApplicationsDashboard;
